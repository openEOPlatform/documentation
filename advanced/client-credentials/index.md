# Client credentials

## Quick OIDC overview

User authentication in openEO is handled with the OpenID Connect (OIDC) protocol.
In most cases and contexts, users will authenticate with OIDC authentication flows
like the Authorization Code Flow (e.g. when using the openEO Web Editor)
or the Device Code Flow (e.g. when using the openEO Python client).
These flows typically involve some form of user interaction in a web browser at some point
to complete the authentication.

### Client credentials flow

Some use cases require a non-interactive or "machine-to-machine" way of authentication,
e.g. to allow running processing workflows in unattended environments.
In OIDC this is typically achieved with the "Client Credentials" flow.
This is a non-interactive flow based on a static client ID and client secret.
Often, it is also referred to as "service account" authentication.


The openEO Python client library has built-in support for service accounts and the client credentials flow,
with the [`authenticate_oidc_client_credentials()` method](https://open-eo.github.io/openeo-python-client/auth.html#oidc-authentication-client-credentials-flow)
as follows:

```python
connection.authenticate_oidc_client_credentials(
    client_id=...,
    client_secret=...,  # Note: Do not hardcode the secret here!
)
```


## Registering a new OIDC client for openEO Platform with EGI Check-in

As illustrated above, using client credentials for authentication involves a *client ID* and *client secret*.
This practically means that one has to register a new OIDC client with the OIDC provider.

openEO Platform uses [EGI Check-in](https://www.egi.eu/service/check-in/) as the OIDC identity provider (IdP).
While EGI Check-in itself provides extensive documentation on [how to register as OIDC Service Provider in general](https://docs.egi.eu/providers/check-in/sp/#openid-connect-service-provider),
here we provide a more focused guide on how to register a new OIDC client specifically for client credentials in openEO Platform.


<a id="egi-enviroments"></a>
### Some notes on EGI environments and openEO Platform support

EGI Check-in provides three environments: "production", "demo" and "development"
(each of which corresponds to [different OIDC endpoints](https://docs.egi.eu/providers/check-in/sp/#endpoints)).

After you initiate the procedure to create a new OIDC client in the production and demo environments,
you have to wait for *approval by an EGI administrator*.
Clients created in the development environment can be self-reviewed without the need to wait for official approval,
which is handy if you just want to test out the client credentials flow for your use case,
but don't want to spend too much time upfront on fine-tuning all the registration details.

Note however that the EGI environments are also linked to the openEO Platform environments:

- The production instance of openEO Platform
  (at [openeo.cloud](https://openeo.cloud/))
  only works with the production environment of EGI Check-in.
- The development instance of openEO Platform
  at ([openeocloud-dev.vito.be](https://openeocloud-dev.vito.be/))
  supports both the production environment of EGI Check-in (the default)
  as well as the development environment of EGI Check-in,
  but that has to be specified explicitly,
  e.g. by providing and additional `provider_id="egi-dev"` when calling `authenticate_oidc_client_credentials()`.



### Step-by-step guide to register a new OIDC client for client credentials

1. Go to the [EGI Federation Registry](https://aai.egi.eu/federation) and log in
2. Click on "Manage services" on the left menu bar
3. Click "+ New service" button to start creating a new service

::: warning
That the form you are facing now has two tabs: "General" and "Protocol Specific".
You have to fill in both tabs fully before you can submit this form.
Also note that if there is something wrong or missing in the form,
the error messages might not always be very clear about which tab they refer to.
:::

4. Fill in the first tab with general information.
   Also see the [EGI Check-in documentation on general client information](https://docs.egi.eu/providers/check-in/sp/#general-information).
   Some additional notes:

   - Pick the desired "Integration Environment": "Production" or "Development" as discussed [above](#egi-enviroments)
   - Contacts: you have to enter at least one email address for each of the types (admin, technical, support, security).

5. Switch to the second tab "Protocol Specific" and select "OIDC Service"
6. Fill in the OIDC specific sub form, with most importantly:

    - **Client ID**: This is the ID that you will use in your client code to identify your client.
      It should be unique within the OIDC provider, so make sure to pick a descriptive and meaningful name.
      You can also choose to leave it empty to let the OIDC provider generate one for you.
    - **Application Type**: leave it at "Web"
    - **Grant Types**: only enable "client credentials" (disable other options that might be enabled by default).
    - **Token Endpoint Authorization Method**: leave it at "Client Secret over HTTP Basic"
    - **Client Secret**: leave the checkbox enabled
    - You can leave all other fields as they are

7. Click "Submit" to create the new OIDC client.
   If there are any errors or missing information, you will be notified about them.
   As mentioned, make sure to verify both tabs for any missing or incorrect information.
8. If submission was successful and you go to the "Manage Services" overview,
   you should see your new service listed there, with "Registration Pending" status.
9. If you picked the production environment, you have to wait now for approval by an EGI administrator.
   You should get approval related emails on the "admin" email address provided earlier.

   If you picked the development environment, you can self-approve the client as follows.
   Click the corresponding "Review" button on service overview to go to a review view of the client information.
   Click the "Review" button at the top to fold out a more detailed review form.
   Select the "Approve" option and click the "Submit Review" button.
   Your client should now be approved and ready to use:
   the status on service overview should now state "Deployed".


## Caveats and security considerations


-   Treat the client secret securely, like a password.
    Take extra care to not leak it accidentally.
    For example, given the simplicity of the `authenticate_oidc_client_credentials()` example snippet above,
    it might be tempting to hard-code the client secret in scripts or notebooks,
    potentially leading to its permanent storage in version control repositories.

    Instead, read the client secret from a secure location
    (e.g. a private file outside the reach of the version control repositories),
    or leverage environment variables (e.g as directly [supported by the openEO Python client library](https://open-eo.github.io/openeo-python-client/auth.html#oidc-client-credentials-using-environment-variables)).

-   The client credentials only identify an OAuth *client* or *service account*,
    not a personal *user* account.
    This means that openEO resources such as openEO batch jobs, their results, UDP's, etc
    from one identity are not available to the other.
    For example, batch jobs originally created with a service account
    cannot be listed when using a personal account.

-   The client credentials flow is not supported in the openEO Web Editor.
    As mentioned above,
    this practically means that it can not be used to track the progress and
    status of batch jobs created with a service account.
    However, it is still possible to approximate the batch job overview of the web editor
    with a Jupyter Notebook using the openEO Python client library.