# Authentication

To log in to the platform, you do not need to create a new username and password, but instead we rely on a 
service provided by the [European Open Science Cloud 'EOSC'](https://aai.eosc-portal.eu), that allows you to login with
a username and password from either your institution, or a social media account.

Therefore, the first step is to check if you can log in to the EOSC portal. Upon your first login,
you will have to complete a registration procedure. If problems occur during this process, you will want to 
ask for help using the [EOSC support](https://eosc-portal.eu/helpdesk) channel.

Note that if you are the first member of your institution to log in to EOSC, such problems may occur and sometimes
require your institution's IT team to properly support EOSC login through EduGain.

#### Security & Privacy

This procedure has important advantages for our users:

- openEO platform does not need to retain or exchange you account password. That information is only exchanged with your 
institution or social media platform, to avoid the possibility of leaking your login details.
- openEO platform only retains minimal information about its users, like an email address to contact you in case of issues, and 
a few more general attributes, like an institution name or country to report on the uptake of EO data and processing services.
- Processes and data that you send to the platform may be retained for a limited time, to allow platform operators to
help you in case of issues.  

## Virtual organization
 
*Experimental* 
 
The next step will be to join the openEO virtual organization, this registers yourself as a user for the platform.
 
## Terrascope login

 
 
Finally, to optimally use the Terrascope backend, you need to provide your account information, so that it can give you access to the processing
resources. The recommended approach is to make sure that your Terrascope account is linked to EGI credentials, which are 
also used by the [European Open Science Cloud](https://eosc-portal.eu/) .
 
You can do this by choosing 'EduGAIN and social logins' when you log in to the [Terrascope portal](https://terrascope.be). This will start a one 
time process, that should enable login to all Terrascope services using your institution or social media credentials.

## Logging in

After this is done, you should be able to connect like this when working in Python:

```python
import openeo
connection = openeo.connect("openeo.cloud").authenticate_oidc()
```
 This will show a link to a website, and a code that needs to be entered there. After doing this once, you should be able
 to set up connections in the same way for some time, without requiring you to follow this again.
 
 More detailed information on authentication, can be found
 [here](https://open-eo.github.io/openeo-python-client/auth.html#openid-connect-based-authentication).
 
 
 