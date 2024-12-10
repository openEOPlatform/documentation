# Export openEO result to Workspace

In order to save results from openEO jobs to workspaces, make sure that either your external workspace is registered with the openEO backend or you have provisioned a local workspace.

To then export your data, add the export_workspace process after your save_result process in the process graph.

Make sure to pass your workspaces name as an the workspace argument

## Using the openeo python library

To export data to a workspace using the openeo library, you can simply use the following code-snippets.


```python
import openeo

connection = openeo.connect("https://example.openeo.eu/openeo/1.3.0")
connection = connection.authenticate_oidc(provider_id="egi")
```


```python
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