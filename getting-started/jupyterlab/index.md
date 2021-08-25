# JupyterLab (Python)

::: tip Note
You need to [become part of the openEO Platform "early adopter" program](https://openeo.cloud/#adopters) to access the processing infrastructure.
:::

A hosted JupyterLab environment for openEO Platform is available at **[lab.openeo.cloud](https://lab.openeo.cloud/)**.

It has the openEO Python client pre-installed, but it does not support running the R or JavaScript clients.

You need to authenticate before you can use it:

1. Click the "Sign in with EODC Identity Providers" button
2. Now you need to select the "EGI" button on the right (instead of directly typing in your credentials on the left). It will start the [EGI Authentication workflow for openEO Platform](../../authentication/index.md).

Afterwards, you are logged in and the JupyterLab should be usable like a normal JupyterLab instance that has the openEO Python client and some other tools pre-installed.

Please refer to the the following pages for more details:
- **openEO Python client:**
  - [Getting Started Guide](../python/index.md)
    ::: tip Note
    You can skip the "Installation" section, but unfortunately you need to authenticate with the Python client again! We'll try to remove this annoyance in the future.
    :::
  - [Official documentation](https://open-eo.github.io/openeo-python-client/)
- **JupyterLab:**
  - [Official User Guide](https://jupyterlab.readthedocs.io/en/stable/getting_started/overview.html)