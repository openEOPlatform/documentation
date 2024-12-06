# Provisioning a Workspace

John wants to create a user workspace at EODC, as he does not have a object-storage solution himself.

It's a very simple task to provision a workspace at EODC, provided that you are already an openEO user.

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

