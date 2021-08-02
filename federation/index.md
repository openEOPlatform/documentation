# Federation Aspects

openEO Platform is a federated platform. This means that multiple independent 'backend', 
which all support the openEO interface, are combined into a single instance. From the outside, 
it appears to be a single platform, but you get access to data and processing resources from 
multiple instances.

This image gives you a look at platforms that make up the federation:

![openeo.cloud federation](./federation.png)

At this time, the federation can not yet entirely hide the fact that it is built out of 
separate components:

- You can only combine collections (data) which are available on the same backend.
- Some processes are not (fully) supported on all backends.
- When a backend requires data from an external source, bandwidth limitations may result in slower processing.


## Collections

### SentinelHub

The Terrascope backend connects to Sentinelhub, which is part of Euro Data Cube, to give you
access to additional collections. This means that data needs to be transferred before it can be processed.
This works very well for smaller areas, or a 100x100km MGRS tile in batch mode, but is not yet recommended for processing 
medium sized to large countries or continents. 

The collection metadata tries to clearly identify which collections are served by SentinelHub.   

### Terrascope

Terrascope also has a number of collections locally available. For coarse resolution data (e.g. 100m resolution), this is often the full
archive, while for medium resolution (Sentinel 1, 2) data is only offerred for selected areas.

Additional data can be processed upon request, if it is not available from another provider. This may result in an
additional cost for processing and storage.

### EODC

ToDo: EODC

## Processes

### ARD

...