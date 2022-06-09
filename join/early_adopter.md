# How to join OpenEO Platform as Early Adopter (2 Steps)

::: danger Testing phase
Currently, openEO Platform is only open for Early Adopters or within a free 30 day trial period.
Read more about the Early Adopters program on the [information page](https://openeo.cloud/early-adopters/).
Read more about the 30 day trial period on the [documentation page](./free_trial.md)

Approval time: We approve accounts traditionally on Monday evenings. Please be a bit patient if your account is not directly approved.

:::


To express your interest in becoming an Early Adopter you need to follow 2 steps:

1. Connect an existing account to EGI check-in
2. Apply to the openEO Platform virtual organization 

The 2 steps are described in detail below.

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
- openEO platform only retains minimal information about its users,
  such as an email address and a few more general attributes.
- No need to set up and remember yet another username and password.
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

To get started, please go to <https://aai.egi.eu/signup>. You will have to select the
institution (recommended) or the (social) platform you want to log in with in the future
and follow the login procedure.

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

Once you have connected your existing account with EGI check-in, you will need to
become part of the openEO Platform virtual organization.

::: danger Testing phase
Read more about the Early Adopters program on the [information page](https://openeo.cloud/early-adopters/).
:::

To get started, please [apply to the openEO Platform virtual organization](https://aai.egi.eu/registry/co_petitions/start/coef:327).
You may be asked to log in again with the account you have previously connected to EGI check-in.

::: tip Note
The instructions below are available in English, but may be localized to your preferred language.
:::

Once you are logged in, a registration form with the title *'Join openEO Platform'* will show up,
which you can start by clicking *'BEGIN'*.

<figure>
    <img src="./join1.png" alt="Join openEO Platform - Step 1">
    <figcaption>Joining openEO Platform: Step 1</figcaption>
</figure>

In the next step, you will only be required to fill in two fields:
- *Justification for this access request*: Please provide your brief motivation in this field (1).
- *Agree to Acceptable Use Policy and Conditions of Use (AUP)*: You will need to read (2) and accept (3) the AUP.

You can finalize the registration form by clicking *'SUBMIT'* (4).

<figure>
    <img src="./join2.png" alt="Join openEO Platform - Step 2">
    <figcaption>Joining openEO Platform: Step 2</figcaption>
</figure>

After enrollment (you will likely have seen a message "Petition confirmed"),
a manual approval will take place and if possible, you will be granted access to the platform.
This process may take a few days, especially if there is high demand.
You will receive an e-mail notification once your account has been approved by us
and is part of the openEO Platform virtual organization. 

If you have any questions about the enrollment to openEO Platform or the Early Adopter program,
please [contact us](https://openeo.cloud/contact/).


Optionally, you may want to [register with individual service providers](../federation/index.md#registration) 
in the federation for better support or performance.


## Working with openEO platform

After you've been approved to join openEO Platform, you can start working with
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

 
