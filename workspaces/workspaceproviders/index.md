# Workspace Providers

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
