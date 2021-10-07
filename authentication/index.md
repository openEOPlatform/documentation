# Authentication

To log in to the openEO platform or related services,
you do not need to pick a username and invent a new password.
Instead, we rely on an authentication service provided by the [European Open Science Cloud 'EOSC'](https://aai.eosc-portal.eu), 
that allows you to login through an existing account from either your institution, or a social media platform.

## Connect an existing account

The first step is to check if you can log in to the [EOSC portal](https://eosc-portal.eu). 
Upon your first login, you will have to complete a small registration procedure
to properly connect your account.
If problems occur during this process, you will want to 
ask for help using the [EOSC support](https://eosc-portal.eu/helpdesk) channel.

::: tip Note
If you are the first member of your institution to log in to EOSC, 
such problems may occur and sometimes  require your institution's IT team 
to properly support EOSC login through EduGain.
:::

### Security & Privacy

This procedure has important advantages for our users:

- Neither openEO platform nor EOSC see, handle or store your password.
  That information is only exchanged directly with your institution or social media platform, 
  to minimize the risk of leaking sensitive credentials.
- openEO platform only retains minimal information about its users,
  such as an email address to be able to contact you, 
  and a few more general attributes, 
  like an institution name or country to report on the uptake of EO data and processing services.
- Processes and data that you send to the platform may be retained for a limited time, 
  to allow platform operators to help you in case of issues.  

## Virtual organization
 
The next step will be to join the openEO virtual organization, this registers yourself as a user for the platform.

::: warning
This feature is still experimental 
:::
 
## Terrascope registration

To get optimal access to the processing resources of the Terrascope back-end,
you have to setup a *Terrascope account*.
Luckily, Terrascope also uses the same authentication service as EOSC,
so you can quickly use your existing account to bootstrap a new Terrascope account.

::: tip Note
If you already have an existing Terrascope account, you can also link your account to it,
which should happen automatically (based on common email address) 
if you follow the procedure below.
:::

To set up the Terrascope account: go to the [Terrascope portal](https://terrascope.be),
click the "sign in" menu item at the top, and pick the 'EduGAIN and social logins' 
to log in.
After a one time registration process you should have access to all Terrascope services
using your institution or social media credentials.

## Connect to the openEO platform

After one time account setup describe above, 
you should be able to create an authenticated connection.

See the getting started guides to find out more about the authentication procedures:

* [Editor](../getting-started/editor/index.md)
* [JavaScript](../getting-started/javascript/index.md#authentication)
* [JupyterLab](../getting-started/jupyterlab/index.md)
* [Python](../getting-started/python/index.md#authentication)
* [R](../getting-started/r/index.md#authentication)
 
 