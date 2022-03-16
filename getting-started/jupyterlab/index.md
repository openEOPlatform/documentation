# JupyterLab (Python)

::: tip Note
You need to [become part of the openEO Platform "early adopter" program](https://openeo.cloud/#adopters) to access the processing infrastructure.
:::

A hosted JupyterLab environment for openEO Platform is available at **[lab.openeo.cloud](https://lab.openeo.cloud/)**.

It has the openEO Python client pre-installed, but it does not support running the R or JavaScript clients.

You need to authenticate before you can use it:

1. Click the "Sign in with EODC Identity Providers" button
2. Now you need to select the "EGI" button on the right (instead of directly typing in your credentials on the left). It will start the EGI Authentication workflow for openEO Platform. For details check the documentation to join the [Free Tier](../../join/free_tier.md) or the [Early Adopter program](../../join/early_adopter.md).
3. After you have logged in via EGI, the "Server Options" appear and you are requested to "Select your desired stack". Please choose "openEO Platform Lab" and click "Start".
4. You are logged in, now. The JupyterLab should be usable like a normal JupyterLab instance that has the openEO Python client and some other tools pre-installed.
5. You can now open a new Python 3 Notebook and, for example, start to follow the general [Python Getting Started Guide](../python/index.md).
    ::: tip Note
    You can skip the "Installation" section in the Getting Started Guide, but unfortunately you need to authenticate with the Python client again! We'll try to remove this annoyance in the future.
    :::


::: tip Note
If you require any additional packages to installed into your jupyterlab environment please refrain installing them via pip and install them via conda.
[Anaconda documentation](https://docs.anaconda.com/anaconda/user-guide/tasks/install-packages/)
:::

Please also refer to the the official documentation for the [openEO Python Client](https://open-eo.github.io/openeo-python-client/) and [JupyterLab](https://jupyterlab.readthedocs.io/en/stable/getting_started/overview.html) for more details.
