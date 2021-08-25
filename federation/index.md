# Federation Aspects

openEO Platform is a federated platform. This means that multiple independent 'back-ends', 
which all support the openEO interface, are combined into a single instance. From the outside, 
it appears to be a single platform, but you get access to data collections and processing resources from 
multiple instances.

This image gives you a look at platforms that make up the federation:

![openeo.cloud federation](./federation.png)

At this time, the federation can not yet entirely hide the fact that it is built out of 
separate components:

- Within the same processing request, you can only use collections from the same back-end
- Some processes are not (fully) supported on all back-ends.
- When a back-end requires data from an external source, bandwidth limitations may result in slower processing.


## Data Collections

### Terrascope

Terrascope hosts a number of collections itself.
For coarse resolution data (e.g. 100m resolution), this is often the full archive, 
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

If available pre-processed collections are not sufficient, there is the possibility to perform ARD processing on demand
with SNAP respectively FORCE. This may again result in additional costs for processing and storage.

## Processes

ToDo: How can users figure out which process is available on which back-end?
