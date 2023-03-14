
# 30 Day free trial of openEO Platform 

Registration to the platform and management of your user account happens via the [EOPlaza](https://portal.terrascope.be) portal. 
You will receive a free trial upon first registration which can be started via [this link](https://sso.terrascope.be/auth/realms/terrascope/protocol/openid-connect/auth?client_id=openeoplatform&redirect_uri=https://portal.terrascope.be/&state=0%2F95954a95-1968-4a64-8b88-fef0f47936fb&response_type=code&scope=openid) 

EOPlaza manages your account balance on the platform, free trial users receive 1000 free credits upon registration. Whenever you consume processing resources on openEO platform, credits will be deducted. You can increase the number of credits by a Network of Resources request, or acquiring them directly on EOPlaza.

The registration link takes you through 2 steps that are described in detail below.

## Preamble: Registration and Login (Authentication)

To register for openEO platform,
you usually do not need to pick a username and invent a new password. 
Instead, we rely on the authentication and authorization service
[EGI check-in](https://www.egi.eu/services/check-in/),
provided by the [EGI Foundation](https://egi.eu). 
It allows you to log in through an **existing account** from either your institution,
or other commonly used (social) platforms such as Google, GitHub, Facebook or LinkedIn.

::: tip Some background on Security & Privacy
This procedure has important advantages for our users:

- Neither openEO platform nor the EGI Foundation see, handle or store your password.
  That information is only exchanged directly with your institution or the selected (social) platforms, 
  to minimize the risk of leaking sensitive credentials.
- openEO platform and EOPlaza only retain minimal information about its users,
  such as an email address and a few more general attributes. 
- No need to set up and remember yet another username and password.

For further details, you can check the privacy policy of [openEO platform](https://openeo.cloud/privacy-policy) and [EOPlaza](https://vito.be/en/privacy-policy).
:::

## Step 1: Connect an existing account

The first step is to connect your existing account with EGI check-in
and become a member of the *EGI User community*.

To get an idea of ​​what this step will require from you,
you can consult the [EGI Documentation](https://docs.egi.eu/documentation/333/users/check-in/signup/)
(a step-by-step guide with pictures).
If problems occur during this process, feel free to send a support request to `check-in <at> egi.eu`.

::: tip You have already connected your account in the past?
If you have already connected your existing account with EGI check-in in the past,
you do not need to do so again and can continue with [joining openEO Platform](#join-openeo-platform).
If you do not remember if you have already connected your account, you can simply try to follow the steps below.
If it is already connected you will get a warning at the end of the process: "The identifier is already in use".
:::

::: warning Recommendation
We recommend using your institutional account whenever possible.
Nevertheless, if you are the first member of your institution to work with EGI check-in, 
problems may occur and sometimes require your institution's IT team to properly
support EGI check-in through EduGain. For any question regarding this procedure,
please contact `check-in <at> egi.eu`.
:::

If you didn't see the list of institutions and (social) platforms, you are likely already logged in.
In this case you can simply select *'SIGN UP'*.

Afterward, you will have to complete a small registration procedure to connect your account.
You may have to fill any missing personal information: *Name*, *Email*, *Affiliation* and/or *Organisation*.

::: danger Patience required!
Please Wait until your registration is processed and you see the following Banner on top of your screen:
<figure>
    <img src="./join0.png" alt="Join EGI user community - process end">
    <figcaption>Join EGI user community - Screen when the process is finished</figcaption>
</figure>
:::


After submitting the registration form, you will receive a verification e-mail.
The e-mail verification needs to be completed before you can contine with the next steps.

::: tip Note
Within the process, EGI will mention that you got a personal EGI Check-in ID assigned.
You don't need to remember this ID as it's not needed in the following steps.
:::

## Step 2: Join openEO Platform virtual organization

Once you have connected your existing account with EGI check-in, the EOPlaza [registration link](https://sso.terrascope.be/auth/realms/terrascope/protocol/openid-connect/auth?client_id=openeoplatform&redirect_uri=https://portal.terrascope.be/&state=0%2F95954a95-1968-4a64-8b88-fef0f47936fb&response_type=code&scope=openid) allows you to easily configure your openEO platform account on EOPlaza, and get started.

If you have any questions about the enrollment to openEO Platform or the free trial period,
please [contact us](https://openeo.cloud/contact/).


## Working with openEO platform

After you've been registered on openEO Platform, you can start working with
the platform through any of the clients. With all clients you will need to connect to
`https://openeo.cloud` and then authenticate through EGI check-in with the 
account used above.

::: tip Tip
For your own convenience, we advise you to always log in with the same identity provider you originally registered with. Otherwise, you run the risk of creating a separate new EGI account, which in turn will have to go through the openEO Platform virtual organization acceptance process again.
It is possible to link multiple accounts from multiple identity providers to the same EGI account. However, this must be done before you use these accounts to log in, as explained in the [EGI documentation](https://docs.egi.eu/users/aai/check-in/linking/).
:::

See the getting started guides to find out more about how to use the clients for this:

* [Editor](../getting-started/editor/index.md)
* [JavaScript](../getting-started/javascript/index.md#authentication)
* [JupyterLab](../getting-started/jupyterlab/index.md)
* [Python](../getting-started/python/index.md#authentication)
* [R](../getting-started/r/index.md#authentication)

 
