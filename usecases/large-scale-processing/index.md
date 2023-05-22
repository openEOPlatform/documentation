# Large scale processing

Processing of larger areas up to global scale is one of the more challenging tasks in earth observation, 
but certainly one that this platform wants to address. This page describes some best practices based on the example
of [processing a croptype map for all 27 countries in the European Union](https://github.com/openEOPlatform/openeo-classification). We do encourage you to get in touch with backend providers about your
specific case, as not every workflow is the same, and some advance planning may be needed to ensure that you get sufficient
processing resources.

<figure>
    <img src="https://raw.githubusercontent.com/openEOPlatform/openeo-classification/60aa7a869f9000b1795afe2c9dde0d7977bcdbc6/docs/full_europe.png" alt="Crop type map for EU27">
    <figcaption>EU27 croptype map, processed on openEO platform</figcaption>
</figure>

The approach desribed here is based on local files to track the production. This is a low-cost approach that does not require 
special IT knowledge, but comes with some risks such as loosing your local files. A more robust approach for production-grade projects
would typically rely on some sort of database or STAC catalog service to monitor processing. Such a setup is however quite similar in many aspects.

The basic strategy for processing large areas is to split it up into smaller areas, usually according to a regular tile grid. 
Splitting reduces the size of the area that needs to be processed by one batch job, and avoids running into all kinds of limitations.
For instance, when processing in a specific projection, you anyway have to stay within the bounds of that projection. Also the output
file size of a job often becomes impractical when working over huge areas. Or you will hit bottlenecks in the backend implementation that
do not occur for normally sized jobs. Also, when a smaller job fails or requires reprocessing, the cost will be smaller.

## Relevant openEO features

We want to highlight a few key elements that made us choose openEO for large scale processing:

- [Performance & scalability](https://openeo.org/documentation/1.0/developers/backends/performance.html)
- STAC metadata is generated for you, making your output dissemination ready without becoming a metadata expert yourself.
- Where relevant FAIR principles are taken into account automatically, such as providing provenance information.
- Cloud optimized file formats are generated by default.
- Processing can be distributed over multiple backends.


## Preparation

The idea is that we first create and persist the list of tiles to produce, with all attributes required to produce that 
specific tile. This gives us a very good visual overview of the processing that will be performed.

Having job parameters in a file is also useful for debugging afterwards. Determining parameters at runtime means you don't 
have absolute certainty over the value of a specific argument, as there may be bugs in your code.

## Prepare tiling grid

The choice of tiling grid depends on your preferred projection system, which depends on your area of interest. 
For Europe, the EPSG:3035 projection can be used, while for global processing you may want to work with different projections according
to UTM zones.

The size of tiles in your grid is also important, and often ranges from 20km to 100km. For relatively light workflows, a 100km grid can work well, 
while for more demanding cases, a 20km grid is better. In our example, we choose to work with 20km tiles because the workflow was quite demanding. A smaller 
tile size can also result in less unneeded processing when your target area has an irregular shape, like most countries and continents.

A couple of basic grids can be found here:
<https://artifactory.vgt.vito.be/webapp/#/artifacts/browse/tree/General/auxdata-public/grids>

The images below illustrate the overlap in the UTM grids versus a regular LAEA grid.

UTM 100km             |  LAEA 100km
:-------------------------:|:-------------------------:
<img src="https://user-images.githubusercontent.com/5937096/231963581-1c51a512-c240-4d23-b557-30a3577c9027.png" width="400" height="300" /> |  <img src="https://user-images.githubusercontent.com/5937096/231963750-562b921c-7b5b-4ec1-86ca-cf1fd75e625d.png" width="400" height="300" />


A grid can be masked based on the countries we want to load, the following script shows an example:

```python
import geopandas as gpd
europe = gpd.read_file(gpd.datasets.get_path("naturalearth_lowres"))
europe = europe[europe.continent=="Europe"]
countries = europe[europe.name.isin(EU27)]
df = gpd.read_file("https://artifactory.vgt.vito.be/auxdata-public/grids/LAEA-20km.gpkg",mask=countries)
```

## Prepare job attributes

Next to the tiling grid, we recommend to also determine other properties required by your processing jobs up front. This allows you to properly
review those properties before starting to process. Examples include simple things like a job title or tile specific processing parameters, but also an 
attribute to determine processing order.

In this step, you may also want to make sure to already determine the correct tile extent in the coordinate system of your tile grid. 
Providing exact coordinates in the right projection is necessary to ensure pixel-perfect alignment of your tiles.

## Tuning your processing job

Before kicking off large processing, you want to be very sure that the correct output is generated, and that you have sufficient credits and resources
available to finish your job in time. This can be done by simply running various jobs, and using the statistics reported in the metadata to determine average parameters. (The map production section below shows a way to collect these parameters in a CSV.)

For instance, for the case of processing the EU27 croptype map, consisting of ~11000 20km tiles, we made the following calculations op front:

- Average runtime was 30 minutes, which means that it would take ~15 days of continous processing with 15 parallel jobs.
- Average cost was below 100 credits, so we would be able to process with a budget of 1100000 credits.

To achieve these numbers, we did have to optimize batch job settings and also the overall workflow to reduce resource usage!

A common bottleneck to parallellization is the memory consumption, and it can be useful to know the maximum memory allocation on a single machine in
your backend of choice. For instance, in a cloud environment with 16GB per machine and 4 cpu's, using slightly less than 4GB per worker is efficient as you can fit 4 parallel workers on a single VM, while requiring 6GB would fit only 2 workers and leave about 4GB unused.

In our example, we used the Geotrellis backends, which has [these execution options](../../federation/index.md#customizing-batch-job-resources-on-terrascope).

## Starting map production

The openEO Python client provides a useful tool to run multiple processing jobs in multiple backends:

<https://open-eo.github.io/openeo-python-client/cookbook/job_manager.html>

This class takes a GeoJSON corresponding to your tile grid and job properties per tiles, and triggers a function provided by you whenever a new
job needs to be created. You can configure multiple backends, and set the number of parallel jobs per backend. 

This class also takes care of error handling, and can be considered more resilient compared to writing a simple loop yourself.

A full example of how we use this can be found [here](https://github.com/openEOPlatform/openeo-classification/blob/main/src/openeo_classification/scripts/cropmap_eu27.py).

This script uses a CSV file to track your jobs, and whenever it is interrupted it can simply resume from that CSV file, making it tolerant to failure.

![Tracking jobs by CSV](https://user-images.githubusercontent.com/5937096/231968590-f0f0b415-453c-4ab7-9502-82eab795a84e.png)


## Errors during production

It is expected to see jobs failing during production, which can be considered normal as long as the failure rate is not too high. We advice to quickly inspect error logs, and if no obvious reason for failure is found, a simple retry might be sufficient. In other cases it may be needed to increase memory.
We also see a limited number of cases where for instance issues in the underlying product archive cause failures or artifacts. These are harder to resolve, and may require interaction with the backend to resove!