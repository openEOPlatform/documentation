# Registering a Workspace

## User Story: Registering a Workspace

Instead of creating a internal workspace, you can register your own workspace and use it in much the same way.

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
