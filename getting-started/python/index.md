# Python Client

This Getting Started guide will give you just a simple overview of the capabilities of the Python client.
For a more detailed introduction or if you are pretty confident in Python we recommend to visit the [official documentation](https://open-eo.github.io/openeo-python-client/).

## Installation

Before you install the Python client module into your Python environment, please make sure that you have at least Python version 3.5.

The [latest stable release](https://pypi.org/project/openeo/) can be installed via [PyPi](https://pypi.org/) by using the following command:

```shell script
pip install openeo
```

If you want to install the development version, please have a look at the [official documentation](https://open-eo.github.io/openeo-python-client/).
It may contain more features, but may also be unstable.

You can check the installation by trying to import the openeo module in the Python console:

```python
import openeo
```

If this gives you the output below, something went wrong with the installation. In that case, please check the requirements again. If you still have troubles installing the Python module, feel free to leave an issue at the [GitHub project](https://github.com/Open-EO/openeo-python-client/issues).

```shell script
>>> import openeo
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ModuleNotFoundError: No module named 'openeo'
```

Now that the installation was successfully finished, we can connect to openEO compliant back-ends. 
In the following chapters we quickly walk through the main features of the Python client.

## Connecting to openEO Platform

First we need to establish a connection to the openEO Platform back-end, which is available at `https://openeo.cloud`.

```python
import openeo
connection = openeo.connect("openeo.cloud")
```

The [`connection` object](https://open-eo.github.io/openeo-python-client/api.html#module-openeo.rest.connection)
is your central gateway to
- list data collections, available processes, file formats and other capabilities of the back-end
- start building your openEO algorithm
- execute and monitor (batch) jobs
- etc.


### Collections

The EO data available at a back-end is organised in so called collections.
For example, a back-end might provide fundamental satellite collections like "Sentinel 1" or "Sentinel 2",
or preprocessed collections like "NDVI".
Collections are used as input data for job executions.

::: tip Note
More information on how openEO "collections" relate to terminology used in other systems can be found in
([the openEO glossary](https://openeo.org/documentation/1.0/glossary.html#eo-data-collections)).
:::


With the following code snippet you can get all available collection names and their description.

```python
# List of available data collections and some basic metadata (dict)
print("Available Collections")
print(connection.list_collections())

# Dictionary of the full metadata of the "SENTINEL1_GRD" collection (dict)
print("Describe SENTINEL1_GRD")
print(connection.describe_collection("SENTINEL1_GRD"))
```
The execution of the code above results in something like:
```shell script
Available Collections
[{'id': 'AGERA5', 'title': 'ECMWF AGERA5 meteo dataset - experimental', ...}, { 'id': 'SENTINEL1_GRD', ...}]
Describe SENTINEL1_GRD
{'id': 'SENTINEL1_GRD', 'title': ..., 'description': ..., 'summaries': ..., ...}
```

By calling [`list_collections`](https://open-eo.github.io/openeo-python-client/api.html#openeo.rest.connection.Connection.list_collections), a list of collection dictionaries is returned. 
The collections in the list have a general description, but to get the full collection metadata
you need to call [`describe_collection`](https://open-eo.github.io/openeo-python-client/api.html#openeo.rest.connection.Connection.describe_collection).


### Processes

Processes in openEO are tasks that can be applied on (EO) data.
The input of a process might be the output of another process, so that several connected processes themselves form a new (user-defined) process.
Therefore, a process resembles the smallest unit of task descriptions in openEO ([more details on processes](https://openeo.org/documentation/1.0/glossary.html#processes)).
The following code snippet shows how to get the available processes.

```python
print("Available Processes")

# List of available openEO processes with full metadata (dict)
print(connection.list_processes())

# List of available openEO processes by identifiers (string)
print([process["id"] for process in connection.list_processes()])
```
Resulting in:
```shell script
Available Processes
[{'id': 'absolute', 'summary': 'Absolute value', 'description': 'Computes the absolute value of a real number `x`, which is the "unsigned" portion of x and often denoted as *|x|*.\n\nThe no-data value `null` is passed through and therefore gets propagated.', ... ]
['absolute', 'add', 'add_dimension', 'aggregate_temporal_frequency', 'anomaly', 'apply', 'arccos',... ]
```

The [`list_processes`](https://open-eo.github.io/openeo-python-client/api.html#openeo.rest.connection.Connection.list_processes) method returns a list of dictionaries with all openEO processes that the back-end provides.
Each dictionary in the list contains the process identifier and metadata about the process, such as expected arguments and return types. 
In the third print statement of the code block, just the identifiers of the supported processes are listed.
For a graphical overview of the openEO processes, there is an [online documentation](../processes.md) for general process descriptions and the [openEO Hub](https://hub.openeo.org/) for back-end specific process descriptions. 

## Authentication

TODO (VITO)

In the code snippets above, authentication is usually not necessary, since we only fetch general information about the back-end.
To run your own jobs at the back-end or to access job results, you need to authenticate at the back-end.

[OpenID Connect (OIDC)](https://openid.net/connect/) authentication can be used to authenticate with openEO Platform.

The following code snippet shows how to log in via OIDC authentication:

```python
print("Authenticate with OIDC authentication")
connection.authenticate_OIDC()
```

Calling this method shows a link that you can open in your system web browser, with which you can authenticate yourself on the back-end authentication system. 
After that the website will give you the instructions to go back to the python client, where your connection has logged your account in. 
This means that every call that comes after that via the connection variable is executed by your user account.

As OpenID Connect authentication is a bit more complex and depends on the environment your are using it in, please refer to the general [Authentication documentation for openEO Platform](../../authentication/index.md) for more information.

## Creating a Datacube

Now that we know how to discover the back-end and how to authenticate, lets continue by creating a new batch job to process some data.
First you need to initialize a datacube by selecting a collection from the back-end via calling [`load_collection`](https://open-eo.github.io/openeo-python-client/api.html#openeo.rest.datacube.DataCube.load_collection):

```python
datacube = connection.load_collection(
  "SENTINEL1_GRD",
  spatial_extent={"west": 16.06, "south": 48.06, "east": 16.65, "north": 48.35},
  temporal_extent=["2017-03-01", "2017-04-01"],
  bands=["VV", "VH"]
)
```

This results in a [`datacube` object](https://open-eo.github.io/openeo-python-client/api.html#module-openeo.rest.datacube) containing the "SENTINEL1_GRD" data restricted to the given spatial extent, the given temporal extend and the given bands .

::: tip
You can also filter the datacube at a later stage by using the following filter methods:

```python
datacube = datacube.filter_bbox(west=16.06, south=48.06, east=16.65, north=48.35)
datacube = datacube.filter_temporal(start_date="2017-03-01", end_date="2017-04-01")
datacube = datacube.filter_bands(["VV", "VH"])
```

Still, it is recommended to always use the filters in [load_collection](https://open-eo.github.io/openeo-python-client/api.html#openeo.rest.datacube.DataCube.load_collection) to avoid loading too much data upfront.
:::

Having the input data ready, we want to apply a process on the datacube.
Therefore, we can call the process directly on the datacube object, which then returns a datacube with the process applied. 

```python
datacube = datacube.min_time()
```
The datacube is now reduced by the time dimension, by taking the minimum value of the timeseries values.
Now the datacube has no time dimension left.
Other so called "reducer" processes exist, e.g. for computing maximum and mean values.
A list of supported processes using the Python client datacube can be found on the [official documentation](https://open-eo.github.io/openeo-python-client/).

:::tip Manually Adding Processes
Applying a process not supported by the Python client can be added to the datacube manually:

```python
datacube = datacube.process(
    process_id="ndvi", 
    arguments={
        "data": datacube, 
        "nir": "B8", 
        "red": "B4"}
)
```

This applies the [`ndvi` process](https://docs.openeo.cloud/processes/#ndvi) to the datacube with the arguments of "data", "nir" and "red". This example requires a datacube that includes bands `B8` and `B4`.
:::

::: tip Note
Still unsure on how to make use of processes with the Python client? Visit the [official documentation](https://open-eo.github.io/openeo-python-client/processes.html#working-with-processes).
:::

After applying all processes you want to execute, we need to tell the back-end to export the datacube, for example as GeoTiff:

```python
result = datacube.save_result("GTiff")
```

::: tip Note
Everything applied to the datacube at this point is neither executed locally on your machine nor executed on the back-end.
It just defines the input data and process chain the back-end needs to apply when it sends the datacube to the back-end and executes it there.
How this can be done is the topic of the next chapter. 
:::

## Batch Job Management

Assuming that the definition of the datacube object and all related processes is finished, we can now send it to the back-end and start the execution. 
In openEO, an execution of a (user-defined) process (here defined in the datacube object) is called a [(batch) job](https://openeo.org/documentation/1.0/glossary.html#data-processing-modes).
Therefore, we need to create a job at the back-end using our datacube, giving it the title `Example Title`.

```python
# Creating a new job at the back-end by sending the datacube information.
job = result.send_job(title = "Example Title")
```

The [`send_job`](https://open-eo.github.io/openeo-python-client/api.html#openeo.rest.datacube.DataCube.send_job) method sends all necessary information to the back-end and creates a new job, which gets returned.

After this, the job is just created, but has not started the execution at the back-end yet.
To start the job and let your Python script wait until the job has finished then 
download it automatically, you can use the `start_and_wait` method. 

```python
# Starts the job and waits until it finished to download the result.
job.start_and_wait().download_results()
```

More information on job management with the Python client can be 
found on the [official documentation](https://open-eo.github.io/openeo-python-client/basics.html#managing-jobs-in-openeo) 

## Additional Information

* [Examples](https://github.com/Open-EO/openeo-python-client/tree/master/examples)
* [Jupyter Notebooks](https://github.com/Open-EO/openeo-python-client/tree/master/examples/notebooks)
* [Official Documentation](https://open-eo.github.io/openeo-python-client/)
* [Repository](https://github.com/Open-EO/openeo-python-client)
