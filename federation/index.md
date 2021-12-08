# Federation Aspects and Known Issues

openEO Platform is a federated platform. This means that multiple independent 'back-ends', 
which all support the openEO interface, are combined into a single instance. From the outside, 
it appears to be a single platform, but you get access to data collections and processing resources from 
multiple instances.

This image gives you a look at platforms that make up the federation:

![openeo.cloud federation](./federation.png)

At this time, the federation can not yet entirely hide the fact that it is built out of 
separate components:

- Within the same processing request, you can only use collections from the same back-end
- Some processes are not (fully) supported by all back-ends.
- If a back-end requires data from an external source, bandwidth limitations may result in slower processing.

## Data Collections

The federation exposes the _union_ of the data collections of each of the underlying back-ends.
When a processing request is submitted to the federated platform, the input collections are used to determine to which back-end the actual processing work should be delegated to.

::: tip Note
For the technical discussion on collection federation, see [Open-EO/openeo-aggregator#5](https://github.com/Open-EO/openeo-aggregator/issues/5)
:::

### Terrascope

Terrascope hosts a number of collections itself.
For coarse resolution data (e.g. 100 m resolution) this is often the full archive, 
while for medium resolution (Sentinel 1, 2) data is only offered for selected areas.

Additional data can be processed upon request, if it is not available from another provider. 
This may result in an additional cost for processing and storage.

### SentinelHub

The Terrascope back-end also integrates with SentinelHub (part of Euro Data Cube) to give you
access to additional collections. 
This practically means that data needs to be transferred from SentinelHub to the Terrascope data center before it can be processed.
This works very well for small areas, or a 100x100km MGRS tile in batch mode, 
but is not yet recommended for processing medium size to large countries or continents. 

The collection metadata of the Terrascope back-end tries to clearly identify which collections are served by SentinelHub.

### EODC

EODC provides Sentinel-1 (GRH), Sentinel-2 and Sentinel-3 Level-1 globally. On top, pre-processed Level-2 data is
available on request (this may result in additional costs). In detail Gamma0 data processed with SNAP and optical ARD
products processed with FORCE are provided.

If the available pre-processed collections are not sufficient, there is on option to perform ARD processing on demand
with SNAP respectively FORCE. This may again result in additional costs for processing and storage.

Currently most processes are only available for Level-2 data. Only the ARD processes can be executed on Level-1 data. Also
only either ARD processes **or** "standard" processes can be used in one process graph. Combining both types of processes
is not yet supported. One option to nevertheless achieve a combination of process types is to run ARD on Level-1 data,
save the results of the job, and then in a second job load results and perform additional computations.

## Processes

Each of the underlying back-ends of the federation can define its own set of available processes,
but there is in practice a very large common ground across these back-ends.
As such, the federation's listing of available processes is the _intersection_
of the process sets of each of the underlying back-ends.
This is the most straightforward combination with the least surprise.

::: tip Advanced/experimental usage
A savvy user that knows which underlying back-end will execute their job
can however still submit process graphs with processes that are available
on that back-end but fall outside the intersection,
as the federation will just forward the process graph as-is to that back-end.
:::

::: tip Note
For the technical discussion on process federation, see [Open-EO/openeo-aggregator#4](https://github.com/Open-EO/openeo-aggregator/issues/4)
:::

## File formats

The federation currently lists the _union_ of import/export file formats available
at each of the underlying back-ends.

::: tip Note
For the technical discussion on file format federation, see [Open-EO/openeo-aggregator#1](https://github.com/Open-EO/openeo-aggregator/issues/1)
:::

## Registration

Due to the federated nature of openEO Platform, 
you may still want to register with an individual service provider,
for example to get direct support or better resource prioritization.
This depends on which [data sets](../data-collections/index.md) and [processes](../processes/index.md) you need to use.

### Terrascope Registration

If you plan to use any [data set](../data-collections/index.md) that is *'provided by Terrascope'* or *'provided by SentinelHub'*,
you can follow the steps below to set up a *Terrascope account*,
which helps to prioritize and speed up the processing requests.

Luckily, Terrascope also uses the EGI check-in as authentication service,
so you can quickly use your existing EGI account from the 
[Free Tier](../../join/free_tier.md) or the [Early Adopter program](../../join/early_adopter.md)
to bootstrap a new Terrascope account.

::: tip Note
If you already have an existing Terrascope account, you can also link your EGI account to it,
which should happen automatically (based on a common email address) if you follow the procedure below.
:::

Go to the [Terrascope portal](https://terrascope.be) to set up the Terrascope account,
click the '*sign in*' menu item at the top, and pick the *'EduGAIN and social logins'* to log in.
After a one-time registration process, you should have access to all Terrascope services
using your institution or (social) platform credentials.
