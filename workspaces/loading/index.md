# Loading data from a workspace

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
