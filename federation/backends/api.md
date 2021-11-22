# Federation API

The general contract is the [openEO API](https://api.openeo.org) in the latest stable version of the 1.x branch.

The aggregator that proxies the back-ends in the federation also implements the same API, but it also implements the "Federation Extension" (currently in draft state).

## Authentication and authorization

This important aspect of the federation is standardized by the [AARC Blueprint Architecture](https://aarc-project.eu/architecture/). EGI checkin is the concrete implementation that is currently in use.

### Authentication

The openEO platform federation standardizes on the use of [EGI checkin](https://aai.egi.eu) as identity provider. Backends have to support the use of openID connect + PKCE, to enable this and register a client with EGI checkin. 

## Authorization

Users of the federation are organized under the 'vo.openeo.cloud' virtual organization in EGI checkin. Inside the virtual organization, different roles can be assigned to a user, to indicate that they have a certain subscription, or even on a more fine-grained level are entitled to specific actions or resources.
The mechanism to check this, is again supported by EGI checkin, under the 'eduperson_entitlement' claim: https://docs.egi.eu/providers/check-in/sp/#claims



