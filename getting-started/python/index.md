# Python Client

::: tip Note
You need to [become part of the openEO Platform "early adopter" program](https://openeo.cloud/#adopters) to access the processing infrastructure.
:::

This Getting Started guide will give you just a simple overview of the capabilities of the openEO Python client library.
More in-depth information can be found in its [official documentation](https://open-eo.github.io/openeo-python-client/).

## Installation

The openEO Python client library is available on [PyPI](https://pypi.org/project/openeo/)
and can easily be installed with a tool like `pip`, for example:

```shell script
pip install openeo
```

It's recommended to work in a virtual environment of some kind (`venv`, `conda`, ...),
containing Python 3.6 or higher.

::: tip
For more details, alternative installation procedures or troubleshooting tips:
see the [official ``openeo`` package installation documentation](https://open-eo.github.io/openeo-python-client/installation.html).
:::


## Connect to openEO Platform and explore

First we need to establish a connection to the openEO Platform back-end, 
which is available at connection URL `https://openeo.cloud`, or just in short:

```python
import openeo

connection = openeo.connect("openeo.cloud")
```

The [`Connection` object](https://open-eo.github.io/openeo-python-client/api.html#module-openeo.rest.connection)
is your central gateway to
- list data collections, available processes, file formats and other capabilities of the back-end
- start building your openEO algorithm from the desired data on the back-end
- execute and monitor (batch) jobs on the back-end
- etc.


### Collections

The EO data available at a back-end is organised in so-called collections.
For example, a back-end might provide fundamental satellite collections like "Sentinel 1" or "Sentinel 2",
or preprocessed collections like "NDVI".
Collections are used as input data for your openEO jobs.

::: tip Note
More information on how openEO "collections" relate to terminology used in other systems can be found in
[the openEO glossary](https://openeo.org/documentation/1.0/glossary.html#eo-data-collections).
:::


Let's list all available collections on the back-end,
using [`list_collections`](https://open-eo.github.io/openeo-python-client/api.html#openeo.rest.connection.Connection.list_collections):

```python
print(connection.list_collections())
```

which returns list of collection metadata dictionaries, e.g. something like:

```
[{'id': 'AGERA5', 'title': 'ECMWF AGERA5 meteo dataset', 'description': 'Daily surface meteorolociga datal ...', ...},
 {'id': 'SENTINEL2_L2A_SENTINELHUB', 'title': 'Sentinel-2 top of canopy', ...},
 {'id': 'SENTINEL1_GRD', ...},
 ...]
```

This listing includes basic metadata for each collection.
If necessary, a more detailed metadata listing for a given collection can be obtained with
[`describe_collection`](https://open-eo.github.io/openeo-python-client/api.html#openeo.rest.connection.Connection.describe_collection).

::: tip
Programmatically listing collections is just a very simple usage example of the Python client.
In reality, you probably want to look up or inspect available collections on handy webpage. 
Check out the [openEO Platform collections overview](../../data-collections/index.md)
or the [openEO Hub](https://hub.openeo.org/) for collection listings of other back-ends.
:::



### Processes

Processes in openEO are operations that can be applied on (EO) data
(e.g. calculate the mean of an array, or mask out observations outside a given polygon).
The output of one process can be used as the input of another process,
and by doing so, multiple processes can be connected that way in a larger "process graph":
a new (user-defined) processes that implements a certain algorithm.

::: tip Note
Check [the openEO glossary](https://openeo.org/documentation/1.0/glossary.html#processes)
for more details on pre-defined, user-defined processes and process graphs.
:::


Let's list the (pre-defined) processes available on the back-end
with [`list_processes`](https://open-eo.github.io/openeo-python-client/api.html#openeo.rest.connection.Connection.list_processes):

```python
print(connection.list_processes())
```

which returns a list of dictionaries describing the process (including expected arguments and return type), e.g.: 

```
[{'id': 'absolute', 'summary': 'Absolute value', 'description': 'Computes the absolute value of a real number `x`, which is th...', 
 {'id': 'mean', 'summary': 'Arithmetic mean(average)', ...}
 ...]
```

Like with collections, instead of programmatic exploration you'll probably prefer a 
[web-based overview of the available processes on openEO Platform](../../processes/index.md).
You can also use the [openEO Hub](https://hub.openeo.org/) for back-end specific process descriptions
or browse the [reference specifications of openEO processes](https://processes.openeo.org/).

## Authentication

In the code snippets above we did not need to log in
since we just queried publicly available back-end information.
However, to run non-trivial processing queries one has to authenticate
so that permissions, resource usage, etc. can be managed properly.

To handle authentication, openEO leverages [OpenID Connect (OIDC)](https://openid.net/connect/).
It offers some interesting features (e.g. a user can securely reuse an existing account),
but is a fairly complex topic, discussed in more depth in the general 
[authentication documentation for openEO Platform](../../authentication/index.md).

The openEO Python client library tries to make authentication as streamlined as possible.
For example, the following snippet illustrates how you can authenticate
from a Python script or notebook:

```python
connection.authenticate_oidc()
```

This statement will reuse a previously authenticated session, when available, 
and otherwise print a web link and a short user code because user interaction is required.
After successfully visiting the web link in a browser, authenticating there and entering the user code, 
the connection in the script will also be authenticated.
This means that subsequent requests from the `connection` object will 
be properly identified by the back-end as coming from your user.

```python
import openeo
connection = openeo.connect("openeo.cloud").authenticate_oidc()
```

More detailed information on authentication can be found
[here](https://open-eo.github.io/openeo-python-client/auth.html#openid-connect-based-authentication).

## Working with Datacubes

Now that we know how to discover the capabilities of the back-end and how to authenticate, 
let's do some real work and process some EO data in a batch job.
We'll build the desired algorithm by working on so-called "Datacubes", 
which is the central concept in openEO to represent EO data, 
as [discussed in great detail here](https://openeo.org/documentation/1.0/datacubes.html).


### Creating a Datacube

The first step is loading the desired slice of a data collection
with [`Connection.load_collection`](https://open-eo.github.io/openeo-python-client/api.html#openeo.rest.connection.Connection.load_collection):

```python
datacube = connection.load_collection(
  "SENTINEL1_GRD",
  spatial_extent={"west": 16.06, "south": 48.06, "east": 16.65, "north": 48.35},
  temporal_extent=["2017-03-01", "2017-04-01"],
  bands=["VV", "VH"]
)
```

This results in a [`Datacube` object](https://open-eo.github.io/openeo-python-client/api.html#openeo.rest.datacube.DataCube) 
containing the "SENTINEL1_GRD" data restricted to the given spatial extent, 
the given temporal extend and the given bands .

::: tip
You can also filter the datacube step by step or at a later stage by using the following filter methods:

```python
datacube = datacube.filter_bbox(west=16.06, south=48.06, east=16.65, north=48.35)
datacube = datacube.filter_temporal(start_date="2017-03-01", end_date="2017-04-01")
datacube = datacube.filter_bands(["VV", "VH"])
```

Still, it is recommended to always use the filters directly in [load_collection](https://open-eo.github.io/openeo-python-client/api.html#openeo.rest.connection.Connection.load_collection)
to avoid loading too much data upfront.
:::


### Applying processes

By applying an openEO process on a datacube, we create a new datacube object that represents the manipulated data.
The standard way to do this with the Python client is to call the appropriate [`Datacube` object](https://open-eo.github.io/openeo-python-client/api.html#openeo.rest.datacube.DataCube) method.
The most common or popular openEO processes have a dedicated `Datacube` method (e.g. `mask`, `aggregate_spatial`, `filter_bbox`, ...). 
Other processes without a dedicated method can still be applied in a generic way.
An on top of that, there are also some convenience methods that implement
openEO processes is a compact, Pythonic interface.

For example, the [`min_time`](https://open-eo.github.io/openeo-python-client/api.html#openeo.rest.datacube.DataCube.min_time) method
implements a `reduce_dimension` process along the temporal dimension, using the `min` process as reducer function:

```python
datacube = datacube.min_time()
```

This creates a new datacube (we overwrite the existing variable),
where the time dimension is eliminated and for each pixel we just have 
the minimum value of the corresponding timeseries in the original datacube.

See the [Python client `Datacube` API](https://open-eo.github.io/openeo-python-client/api.html#openeo.rest.datacube.DataCube) for a more complete listing of methods that implement openEO processes.


openEO processes that are not supported by a dedicated `Datacube` method
can be applied in a generic way with the [`process` method](https://open-eo.github.io/openeo-python-client/api.html#openeo.rest.datacube.DataCube.process), e.g.:

```python
datacube = datacube.process(
    process_id="ndvi", 
    arguments={
        "data": datacube, 
        "nir": "B8", 
        "red": "B4"}
)
```

This applies the [`ndvi` process](../../processes/index.md#ndvi) to the datacube with the arguments of "data", "nir" and "red" (This example assumes a datacube with bands `B8` and `B4`).


::: tip Note
Still unsure on how to make use of processes with the Python client? 
Visit the [official documentation on working with processes](https://open-eo.github.io/openeo-python-client/processes.html#working-with-processes).
:::

### Defining output format

After applying all processes you want to execute, we need to tell the back-end to export the datacube, for example as GeoTiff:

```python
result = datacube.save_result("GTiff")
```



## Execution

It's important to note that all the datacube processes we applied up to this point
are not actually executed yet, neither locally nor remotely on the back-end.
We just built an abstract representation of the algorithm (input data and processing chain), 
encapsulated in a local `Datacube` object (e.g. the `result` variable above).
To trigger an actual execution (on the back-end) we have to explicitly send this representation 
to the back-end.


openEO defines [several processing modes](https://openeo.org/documentation/1.0/glossary.html#data-processing-modes), 
but for this introduction we'll focus on batch jobs, which is a good default choice.

### Batch job execution

The `result` datacube object we built above describes the desired input collections, processing steps and output format.
We can now just send this description to the back-end to create a batch job with the [`send_job` method](https://open-eo.github.io/openeo-python-client/api.html#openeo.rest.datacube.DataCube.send_job) like this:

```python
# Creating a new job at the back-end by sending the datacube information.
job = result.send_job()
```

The batch job, which is referenced by the returned `job` object, is just created at the back-end, 
it is not started yet.
To start the job and let your Python script wait until the job has finished then 
download it automatically, you can use the `start_and_wait` method. 

```python
# Starts the job and waits until it finished to download the result.
job.start_and_wait()
job.get_results().download_files("output")
```

When everything completes successfully, the processing result will be downloaded as a GeoTIFF file
in a folder "output".

::: tip
The official openEO Python Client documentation has more information
on [batch job basics](https://open-eo.github.io/openeo-python-client/basics.html#managing-jobs-in-openeo) 
or [more detailed batch job (result) management](https://open-eo.github.io/openeo-python-client/batch_jobs.html)
:::

## Additional Information

Additional information and resources about the openEO Python Client Library:

* [Example scripts](https://github.com/Open-EO/openeo-python-client/tree/master/examples)
* [Example Jupyter Notebooks](https://github.com/Open-EO/openeo-python-client/tree/master/examples/notebooks)
* [Official openEO Python Client Library Documentation](https://open-eo.github.io/openeo-python-client/)
* [Repository on GitHub](https://github.com/Open-EO/openeo-python-client)
