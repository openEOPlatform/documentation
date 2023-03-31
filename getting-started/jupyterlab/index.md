# Get started with openEO Platform in JupyterLab (Python)

::: danger Important
You need to [get an openEO Platform account](https://openeo.cloud/#plans) to access the processing infrastructure.
:::

A hosted JupyterLab environment for openEO Platform is available at **[lab.openeo.cloud](https://lab.openeo.cloud/)**.

It has the openEO Python client pre-installed, but it does not support running the R or JavaScript clients.

You need to authenticate before you can use it:

1. Select from the "Sign in " dropdown menu the "openEO Platform" option
2. It will start the EGI Authentication workflow for openEO Platform. If you haven't you need to [get an openEO Platform account](https://openeo.cloud/#plans) before you proceed. 
3. After you have logged in via EGI, the "Server Options" appear and you are requested to "Select your desired stack". Please choose "openEO Platform Lab" and click "Start".
4. You are logged in, now. The JupyterLab should be usable like a normal JupyterLab instance that has the openEO Python client and some other tools pre-installed.
5. You can now open a new Python 3 Notebook and, for example, start to follow the general [Python Getting Started Guide](../python/index.md).
    ::: tip Note
    You can skip the "Installation" section in the Getting Started Guide, but unfortunately you need to authenticate with the Python client again! We'll try to remove this annoyance in the future.
    :::


::: tip Note

You may shut down your device or log out during the job runs on the backend. You can retrieve the status and results later and from any client.


If you require any additional packages to be installed into your JupyterLab environment please refrain from installing them via pip and install them via conda.
[Anaconda documentation](https://docs.anaconda.com/anaconda/user-guide/tasks/install-packages/)
:::

Please also refer to the the official documentation for the [openEO Python Client](https://open-eo.github.io/openeo-python-client/) and [JupyterLab](https://jupyterlab.readthedocs.io/en/stable/getting_started/overview.html) for more details.
