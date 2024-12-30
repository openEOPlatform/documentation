# Workspaces

## Workspaces Overview

Workspaces are an abstraction of object-storage for the openEO Platform. They allow you to have more control over their data, from where it is saved, to where it is loaded from.

There are multiple options available for the creation of a workspace, you can either provision one at a given backend, or register your own, so you can, for instance,
save openEO results directly to a s3 bucket of your own choosing.

All the code-snippets found below (and some additional ones) can be found on [GitHub](https://github.com/eodcgmbh/eodc-examples/blob/main/demos/workspaces/) and a [Video Tutorial](https://youtu.be/Jj-2i3n0Eng) is also available.

## Workspace Providers

Workspace Providers are the name of the different underlying object-storage types that are supported by any given backend.

To access a list of supported workspace providers, just call the /workspace_providers endpoint. The information in this
list also contains the formatting of parameters used when registering a workspace of the given type.


You can use the following code-snippet to get a formatted output of available providers.


```python
import json
import requests

response = requests.get(
    url="https://openeo.example.eu/openeo/1.2.0/workspace_providers",
)

print(json.dumps(json.loads(response.content.decode()), indent=4, sort_keys=True))
```

## Provisioning a Workspace

It's a very simple task to provision a workspace, provided that you are already an openEO user.

All you need to do in order to create a workspace from scratch is post to the /workspaces endpoint
in the openEO API with a body consisting of a create intent and the preferred title of your workspace.

like so: 
```python
{   
    'intent' : 'create',   
    'title' : 'EXAMPLE_WORKSPACE_NAME'
}
```

Your code should then look like this, with the relevant values replaced.


```python
import requests

request_body = {
    'intent' : 'create',
    'title' : 'EXAMPLE_WORKSPACE_NAME'
}

response = requests.post(
    url = 'https://example.openeo.eu/openeo/1.2.0/workspaces',
    headers = {
        'authorization': 'Bearer EXAMPLE_BEARER_TOKEN'
    },
    json=request_body
)
```

The responses content will contain your s3 credentials which you can then use to interact with your newly created workspace.

Depending on the workspace provider your backend offers the credentials will be differently formatted.
Check the workspace providers endpoint for more information.


## Registering a Workspace

Instead of creating an internal workspace, you can register your own workspace and use it in much the same way.

All you need to do is post to the "/workspaces" endpoint with a registering intent and submit your credentials.

You can find the correct formatting for the request body by consulting the workspace providers endpoint.

After filling out these request bodies, you can send a request to the given endpoint and your workspace will be registered in the backend.

See the code-snipped below for how this might look.

::: warning Note:
Make sure your title matches the name of your underlying object-storage container (e.g: bucket name, blob container name, etc.)
:::


```python
import requests

request_body = {
    "intent": "register",
    "title": "WORKSPACE_NAME"
    "storage_type": "s3",
    "credentials": {
        "url": "S3_ENDPOINT",
        "access_key": "S3_ACCESS_KEY",
        "secret_key": "S3_SECRET_KEY", 
    },

}

response = requests.post(
    url="https://openeo.example.eu/openeo/1.2.0/workspaces",
    json=request_body,
    headers={
        "authorization": "Bearer BEARER_TOKEN"
    },
)

response.content
```

If the response is positive, we have successfully registered our workspace under our user and can now use it as we would any other workspace, by passing the workspace name in our process graphs.


## Export openEO result to Workspace

In order to save results from openEO jobs to workspaces, make sure that either your external workspace is registered with the openEO backend or you have provisioned a local workspace.

To then export your data, add the export_workspace process after your save_result process in the process graph.

Make sure to pass your workspaces name as a workspace argument

#### Using the openeo python library

To export data to a workspace using the openeo library, you can simply use the following code-snippets.


```python
import openeo

connection = openeo.connect("https://example.openeo.eu/openeo/1.2.0")
connection = connection.authenticate_oidc(provider_id="egi")
```


```python
from openeo.rest.datacube import THIS

collection = connection.load_collection(
    collection_id="boa_sentinel_2",
    spatial_extent={
        "west": 16.156771491786476,
        "east": 16.59018048465475,
        "south": 48.08419286799747,
        "north": 48.34670064966687,
    },
    temporal_extent=["2019-01-01T00:00:00Z", "2019-01-31T00:00:00Z"],
    bands=["B02"],
)

result = collection.save_result().process(
    "export_workspace", arguments={"workspace": WORKSPACE_NAME, "merge": None}, data=THIS
)

```

## Listing Files

There is a variety of ways to list your workspace files.

- Through the openEO API 
- Using the WorkspaceAdapter
- With a 3rd-Party object-storage file explorer

### 1) openEO API

There is only a single step involved, assuming you already have a workspace with some data in it, you can simply make a request to the /workspaces/{WORKSPACE_NAME}/files endpoint and get a list of files returned.


```python
import requests

response = requests.get(
    url=f"https://openeo.example.eu/openeo/1.2.0/workspaces/WORKSPACE_NAME/files",
    headers={
        "authorization": f"Bearer BEARER_TOKEN"
    },
)

print(response.content.decode())
```

### 2) Third Party Applications

This method is less relevant to this tutorial, but you can always use a third-party object-storage browser to view your files or interact with your workspace in general.

Some tools:

- S3 Browser (for S3 systems like Ceph)
- Microsoft Azure Storage Explorer (for Azure Blob Storage)
- ...


## Loading data from a workspace

Loading data from a workspace is done through the load_stac process.

The stac hrefs need to include some reference to the workspace they are located in, for instance:

"s3://BUCKET_NAME/path/to/resource"

or

"/vsis3/BUCKET_NAME/path/to/resource"

You can export some data to your workspace and check the provided STAC items hrefs to make sure your hrefs are correct. 

Using the load_stac process with the correct href will then load the given item/collection and filter using the given parameters like bands, temporal_extent or spatial_extent.

```python
connection = openeo.connect("https://example.openeo.eu/openeo/1.2.0")
connection = connection.authenticate_oidc(provider_id="egi")

collection = connection.load_stac(
    url="/vsis3/BUCKET_NAME/path/to/resource",
    spatial_extent={
        "west": 16.156771491786476,
        "east": 16.59018048465475,
        "south": 48.08419286799747,
        "north": 48.34670064966687,
    },
    temporal_extent=["2019-01-01T00:00:00Z", "2019-01-31T00:00:00Z"]
)

result = collection.save_result(format="netCDF")

```

## User Collections

User collections can be created by using the export_collection process after the save_result process, they will then be available to load by using the load_collection process.