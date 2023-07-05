# Federation Aspects and Known Issues

openEO Platform is a federated platform. This means that multiple independent 'back-ends', 
which all support the openEO interface, are combined into a single instance. From the outside, 
it appears to be a single platform, but you get access to data collections and processing resources from 
multiple instances.

This image gives you a look at platforms that make up the federation:

![openeo.cloud federation](./federation.png)

At this time, the federation can not yet entirely hide the fact that it is built out of 
separate components:

- Within the same processing request, you can only use collections from the same back-end
- Some processes are not (fully) supported by all back-ends.
- If a back-end requires data from an external source, bandwidth limitations may result in slower processing.

## Data Collections

The federation exposes the _union_ of the data collections of each of the underlying back-ends.
When a processing request is submitted to the federated platform, the input collections are used to determine to which back-end the actual processing work should be delegated to.

::: tip Note
For the technical discussion on collection federation, see [Open-EO/openeo-aggregator#5](https://github.com/Open-EO/openeo-aggregator/issues/5)
:::

### Terrascope

Terrascope hosts a number of collections itself.
For coarse resolution data (e.g. 100 m resolution) this is often the full archive, 
while for medium resolution (Sentinel 1, 2) data is only offered for selected areas.

Additional data can be processed upon request, if it is not available from another provider. 
This may result in an additional cost for processing and storage.

### Sentinel Hub

The Terrascope back-end also integrates with Sentinel Hub (part of Euro Data Cube) to give you
access to additional collections. 
This practically means that data needs to be transferred from Sentinel Hub to the Terrascope data center before it can be processed.
This works very well for small areas, or a 100x100km MGRS tile in batch mode, 
but is not yet recommended for processing medium size to large countries or continents. 

The collection metadata of the Terrascope back-end tries to clearly identify which collections are served by Sentinel Hub.

#### Commercial Data

openEO Platform provides direct access to commercial data. Currently, data must be purchased directly through Sentinel Hub (see Sentinel Hub documentation on purchasing commercial data [here](https://docs.sentinel-hub.com/api/latest/api/data-import/)), but we are working to support ordering commercial data directly from the platform in the future. 

::: tip Experimental usage
The below described way of how to connect to commercial data is currently only supported by the pyhton client and experimental. As such the behavior might still change in the future.
:::

Data is accessed as part of the load_collection process and via a `featureflags` argument. To access the data, you must:
- select the commercial data provider in `collection_id` (e.g. `collection_id="PLANETSCOPE"`)
- set the Sentinel Hub BYOC collection ID (`byoc-{id}`) as `featureflags` argument 
  (e.g. with openEO Python client version 0.10.1 or higher: 
  `datacube.result_node().update_arguments(featureflags={"byoc_collection_id": byoc_collection_id})`)

Full example of loading a commercial data collection:

```python
toc = connection.load_collection(
    collection_id="PLANETSCOPE",
    spatial_extent={"west": 104.86, "south": 8.85, "east": 106.11, "north": 10.37},
    temporal_extent=["2019-03-01", "2020-12-31"],
    bands=["B3"]
)

toc.result_node().update_arguments(featureflags={"byoc_collection_id": byoc_collection_id})
```

List of currently supported commercial data providers:
- Airbus Pleiades (ID: [PLEIADES](https://openeo.cloud/data-collections/view/?id=PLEIADES))
- Airbus Spot (ID: [SPOT](https://openeo.cloud/data-collections/view/?id=SPOT))
- PlanetScope (ID: [PLANETSCOPE](https://openeo.cloud/data-collections/view/?id=PLANETSCOPE))
- WorldView (ID: [WORLDVIEW](https://openeo.cloud/data-collections/view/?id=WORLDVIEW))

### EODC

EODC provides Sentinel-1 (GRH), Sentinel-2 and Sentinel-3 Level-1 globally. On top, pre-processed Level-2 data is
available on request (this may result in additional costs). In detail Gamma0 data processed with SNAP and optical ARD
products processed with FORCE are provided.

If the available pre-processed collections are not sufficient, there is on option to perform ARD processing on demand
with SNAP respectively FORCE. This may again result in additional costs for processing and storage.

Currently most processes are only available for Level-2 data. Only the ARD processes can be executed on Level-1 data. Also
only either ARD processes **or** "standard" processes can be used in one process graph. Combining both types of processes
is not yet supported. One option to nevertheless achieve a combination of process types is to run ARD on Level-1 data,
save the results of the job, and then in a second job load results and perform additional computations.

### Enforce back-end selection for common collections

Some collections are provided by multiple underlying back-ends,
possibly with differences in spatial or temporal coverage.
This is exposed in the collection metadata with `federation:backends` summary, e.g.:

```json
{
    "id": "WATER_BODIES",
    "type": "Collection",
    ...
    "summaries": {
        "federation:backends": ["vito", "sentinelhub"],
        ...
    }
}
```

When a user submits a processing request,
the federated platform will try, by default, to automatically determine
which underlying back-end is best choice for the actual processing,
based for example on the requested spatial extent.

You can however also enforce the selection of a certain back-end
by using the metadata property filtering feature
of the `load_collection` process.
For example, with the Python client, to enforce the selection of
the "sentinelhub" back-end:

<CodeSwitcher :languages="{py: 'Python', r: 'R'}">
<template v-slot:py>

```python
cube = connection.load_collection(
    "WATER_BODIES",
    ...
    properties: {
        "federation:backends": lambda v: v == "sentinelhub"
    }
)
```

</template>
<template v-slot:r>

```r
cube = p$load_collection(
    id = "WATER_BODIES",
    ...
    properties = list("federation:backends" = function(x) x == "sentinelhub")
)
```

</template>
</CodeSwitcher>

## Processes

Each of the underlying back-ends of the federation can define its own set of available processes,
but there is in practice a very large common ground across these back-ends.
As such, the federation's listing of available processes is the _intersection_
of the process sets of each of the underlying back-ends.
This is the most straightforward combination with the least surprise.

::: tip Advanced/experimental usage
A savvy user that knows which underlying back-end will execute their job
can however still submit process graphs with processes that are available
on that back-end but fall outside the intersection,
as the federation will just forward the process graph as-is to that back-end.
:::

::: tip Note
For the technical discussion on process federation, see [Open-EO/openeo-aggregator#4](https://github.com/Open-EO/openeo-aggregator/issues/4)
:::

## File formats

The federation currently lists the _union_ of import/export file formats available
at each of the underlying back-ends.

::: tip Note
For the technical discussion on file format federation, see [Open-EO/openeo-aggregator#1](https://github.com/Open-EO/openeo-aggregator/issues/1)
:::


## On-demand-preview

Sometimes there is a need to quickly inspect results of a process graph on the map without first running the entire graph first and waiting for the results to be computed and returned. This `on-demand-preview` is available in the [openEO Platform Editor](https://editor.openeo.cloud/) and the [openEO Python Client*](https://open-eo.github.io/openeo-python-client/index.html).

In the Editor you can find the functionality in the `Web Services` tab. Use the button`Show on Map`. 

In the Python Client, you can use the [.preview() method](https://open-eo.github.io/openeo-python-client/api.html#openeo.rest.datacube.DataCube.preview) to create a service with your process graph and display the results in an ipyleaflet Map object. You can find an example implementation in [this Jupyter notebook](https://github.com/openEOPlatform/sample-notebooks/blob/main/on-demand_preview.ipynb).

::: tip Note
This functionallity currently only works with collections that are also on the Sentinel Hub backend (Provider > Backend > sentinelhub). In order for the map to display meaningful results, your process graph should:
- return one or three bands, 
- a single temporal extent,
- and scale the data to a range so that the output format can adequately save it.
:::

*You need to have at least version 0.19.0 installed to use this functionality.

## Batch jobs

As discussed above, when the federated platform receives a processing request, such as a batch job, 
it will automatically determine to which back-end this request should be delegated for actual processing.

### Managed job splitting

In addition to this basic delegation feature, the federation also provides more advanced (pre)processing capabilities.
For instance, the federation platform can be instructed to split up a single batch job in multiple sub-jobs
and distribute these across one or more processing back-ends.
The federation platform will automatically create, start and keep track of these sub-jobs
while the user just have to interact with a single job: e.g. check the overall processing status,
download the combined result assets, ...

Currently, spatial tile-based splitting is supported as splitting strategy
and it can be enabled by providing a specific job option when submitting the batch job.
For example, using the openEO Python Client, instruct the federation platform to
split up datacube processing in UTM based tiles of 20km by 20km:


```python
job = datacube.create_job(
    job_options={"tile_grid": "utm-20km"}
)
```

This creates a virtual master job on the level of the federation platform and real batch jobs
on the appropriate processing back-ends.
Subsequent interaction (starting the jobs, polling their status, requesting the result assets, ...)
can be done through the "master" `job` object created above, in the same way as with normal batch jobs.

### Validity of signed URLs in batch job results

Batch job results are accessible to the user via signed URLs stored in the result assets. Within the platform, 
these URLs have a validity (expiry time) of 7 days. Within these 7 days, the results of a batch job can be accessed 
by any person with the URL. Each time a user requests the results from the job endpoint (`GET /jobs/{job_id}/results`), 
a freshly signed URL (valid for 7 days) is created for the result assets.

### Customizing batch job resources on Terrascope

Jobs running on the (Terrascope) cluster get assigned a default amount of CPU and memory resources. This
may not always be enough for your job, for instance when using UDF's. Also for very large jobs, you may want
to tune your resource settings to optimize for cost.

The example below shows how to start a job with all options set to their default values. It is important to highlight
that default settings are subject to change by the backend whenever needed.

```python
job_options = {        
        "executor-memory": "2G",
        "executor-memoryOverhead": "3G",
        "executor-cores": 2,
        "task-cpus": 1,
        "executor-request-cores": "400m",
        "max-executors": "100",
        "driver-memory": "8G",
        "driver-memoryOverhead": "2G",
        "driver-cores": 5,
        "udf-dependency-archives":[],
        "logging-threshold": "info"
    }
cube.execute_batch(job_options=job_options)
```

This is a short overview of the various options:

- executor-memory: memory assigned to your workers, for the JVM that executes most predefined processes 
- executor-memoryOverhead: memory assigned on top of the JVM, for instance to run UDF's
- executor-cores: number of CPUs per worker (executor). The number of parallel tasks is executor-cores/task-cpus
- task-cpus: CPUs assigned to a single task. UDF's using libraries like Tensorflow can benefit from further parallellization on the level of individual tasks.
- executor-request-cores: this settings is only relevant for Kubernetes based backends, allows to overcommit CPU
- max-executors: the maximum number of workers assigned to your job. Maximum number of parallel tasks is `max-executors*executor-cores/task-cpus`. Increasing this can inflate your costs, while not necessarily improving performance!
- driver-memory: memory assigned to the spark 'driver' JVM that controls execution of your batch job
- driver-memoryOverhead: memory assigned to the spark 'driver' on top of JVM memory, for Python processes.
- logging-threshold: the threshold for logging, set to 'info' by default, can be set to 'debug' to generate much more logging
- udf-dependency-archives: an array of urls pointing to zip files with extra dependencies, see below

#### Custom UDF dependencies

User defined functions often depend on (specific versions of) libraries or require small auxiliary data files. The UDF specifications do not yet
define a standardized manner to provide this other than having the ability of selecting from a predefined set of 'runtimes' that than again have a predefined configuration.

The Terrascope/Geotrellis backends solve this via the udf-dependency-archives job option, that allows to specify a list of zip files that should be included in the working directory of the UDF.

This enables the following example workflow for Python UDF's:

1. Create a Python 'virtualenv' with your dependencies
2. Based on the 'site-packages' directory of the virtualenv, create a zip file with all dependencies
3. Upload the zip to a url that can be reached by the backend. 
4. In job options, add  `"udf-dependency-archives": ['https://yourhost.com/myEnv.zip#tmp/mydir'] ` The `#tmp/mydir` suffix indicates where you want to unzip your files, relative to the working directory.
5. In your UDF, before trying to import libraries, add your directory to the Python path: `sys.path.insert(0, 'tmp/mydir')`
6. Now your libraries should be loaded before anything else!

Known limitations:

- Your dependencies need to be compatible with the Python version of the backend, currently 3.8.
- Your dependencies need to be compatible with the OS of the backend, currently AlmaLinux 8.
- The backend has a limited set of Python dependences that are preloaded, and cannot be changed, such as numpy.


#### Learning more

The topic of resource optimization is a complex one, and here we just give a short summary. The goal of openEO is to hide most of these
details from the user, but we realize that advanced users sometimes want to have a bit more insight, so in the spirit of being open, we give some hints. 

To learn more about these options, we point to the piece of code that handles this:

https://github.com/Open-EO/openeo-geopyspark-driver/blob/faf5d5364a82e870e42efd2a8aee9742f305da9f/openeogeotrellis/backend.py#L1213

Most memory related options are translated to Apache Spark configuration settings, which are documented here:

https://spark.apache.org/docs/3.3.1/configuration.html#application-properties

### Batch job results on Sentinel Hub

If you are processing data and the underlying back-end is Sentinel Hub, the output extent of your batch job results is currently larger than your input extent because Sentinel Hub processes whole tiles (this may change in the future and the data will be cropped to your input extent).
