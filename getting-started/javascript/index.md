# JavaScript Client

::: tip Note
You need to [become part of the openEO Platform "early adopter" program](https://openeo.cloud/#adopters) to access the processing infrastructure.
:::

## Installation

The openEO JavaScript Client can be used in all modern browsers (excludes Internet Explorer) and all maintained Node.js versions (>= 10.x).
It can also been used for mobile app development with the [Ionic Framework](https://ionicframework.com/), for example.

The easiest way to try out the client is using one of the [examples](https://github.com/Open-EO/openeo-js-client/tree/v2.0.0/examples).
Alternatively, you can create an HTML file and include the client with the following HTML `script` tags:

```html
<script src="https://cdn.jsdelivr.net/npm/axios@0.21/dist/axios.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@openeo/js-client@2/openeo.min.js"></script>
```

This gives you a minified version for production environments. If you'd like a better development experience, use the following code:

```html
<script src="https://cdn.jsdelivr.net/npm/axios@0.21/dist/axios.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@openeo/js-client@2/openeo.js"></script>
```

If you are working on a Node.js application or you are using a Node.js-based build tool for web development (e.g. Webpack), you can install the client via [npm](https://npmjs.org/) by using the following command:

```shell script
npm install @openeo/js-client
```

Afterwards you can load the library. Depending on whether you are directly working in Node.js or are just using a Node.js build tool, the import can be different. Please inform yourself which import is suited for your project.

This is usually used directly in Node.js:
```js
const { OpenEO } = require('@openeo/js-client');
```

This may be used in build tools such as Webpack:
```js
import { OpenEO } from '@openeo/js-client';
```

Now that the installation was successfully finished, we can now connect to openEO compliant back-ends. 
In the following chapters we quickly walk through the main features of the JavaScript client. 

If you have trouble installing the client, feel ecouraged to leave an issue at the [GitHub project](https://github.com/Open-EO/openeo-js-client/issues).

## Connecting to openEO Platform

First we need to establish a connection to the openEO Platform back-end, which is available at `https://openeo.cloud`.

```js
var con = await OpenEO.connect("https://openeo.cloud");
```

::: tip Note
The JavaScript client uses [Promises (async/await)](https://medium.com/jspoint/javascript-promises-and-async-await-as-fast-as-possible-d7c8c8ff0abc). So there are two ways to express the code above:

Promises:
```js
OpenEO.connect("https://openeo.cloud").then(function(con) {
  // Success
}).catch(function(error) {
  // Error
});
```

async/await:
```js
try {
  var con = await OpenEO.connect("https://openeo.cloud");
  // Success
} catch (error) {
  // Error
}
```

To simplify the code here, we use async/await in all examples and don't catch errors. So we assume you run the code in an async function and also in a try/catch block.
:::

After establishing the connection to the back-end, it can be explored using the [Connection object](https://open-eo.github.io/openeo-js-client/latest/Connection.html) returned. The basic service's metadata (capabilities) can be accessed via 
```js
var info = con.capabilities();
```

This allows to request a couple of [different information](https://open-eo.github.io/openeo-js-client/latest/Capabilities.html), like API version, description, related links or the billing plans. You can print some of these information to the console as follows:

```js
console.log("API Version: ", info.apiVersion());
console.log("Description: ", info.description());

console.log("Billing plans:");
info.listPlans().forEach(plan => {
  console.log(`${plan.name}: ${plan.url}`);
});

console.log("Related links:");
info.links().forEach(link => {
  console.log(`${link.title}: ${link.href}`);
});
```

### Collections

Collections represent the basic data the back-end provides (e.g. Sentinel 2 collection).
Collections are used as input data for job executions ([more info on collections](https://openeo.org/documentation/1.0/glossary.html#eo-data-collections)).
With the following code snippet you can print all 400+ available collection names and their summary.

```js
console.log("Available Collections:");
var response = await con.listCollections();
response.collections.forEach(collection => {
  console.log(`${collection.id}: ${collection.summary}`);
});
```

To get detailed information about a single collection, you can pass any of the collection IDs requested earlier to `describeCollection` and get a full object of [STAC compliant Collection metadata](https://github.com/radiantearth/stac-spec/tree/v1.0.0/collection-spec/collection-spec.md) back.
In this example we request information about the Sentinel-1 GRD data from Terrascope:

```js
console.log(await con.describeCollection("SENTINEL1_GRD"));
```

The collections descriptions returned by `listCollections` are usually not complete. To get the full set of metadata you should always use `describeCollection`.

### Processes

Processes in openEO are small tasks that can be applied on (EO) data.
The input of a process might be the output of another process, so that several connected processes form a new (user-defined) process itself.
Therefore, a process resembles the smallest unit of task descriptions in openEO ([more details on processes](https://openeo.org/documentation/1.0/glossary.html#processes)).
With the following code snippet you can print all available process IDs and their summaries.

```js
console.log("Available Collections:");
var response = await con.listProcesses();
response.processes.forEach(process => {
  console.log(`${process.id}: ${process.summary}`);
});
```

In contrast to the collections, the process descriptions returned by `listProcesses` are complete.
There's no need to call `describeProcess` to get the full set of metadata.
`describeProcess` is just a convenience function to get a single process from `listProcesses`.
In this example we request the process specification for the `apply` process:

```js
console.log(await con.describeProcess("apply"));
```

For a graphical overview of the openEO processes, please see our [online documentation](../../processes/index.md)

## Authentication

In the code snippets above, authentication is usually not necessary, since we only fetch general information about the back-end.
To run your own jobs at the back-end or to access job results, you need to authenticate at the back-end.

[OpenID Connect (OIDC)](https://openid.net/connect/) authentication can be used to authenticate with openEO Platform.

::: tip Action required
**Unfortunately, you need to request a *Client ID* for this from the openEO Platform support due to technical reasons!**
Once you have received the *Client ID*, you can can continue with the instructions below.
:::

::: warning Important
If you have included the library using HTML `script` tags, then you need to include the following OIDC client before the openEO client:

```html
<script src="https://cdn.jsdelivr.net/npm/oidc-client@1/lib/oidc-client.min.js"></script>
```

No further action is required, if you have installed the client via npm.
::: 

As OpenID Connect authentication is a bit more complex and depends on the environment your are using it in (e.g. Browser or Node), please refer to the  [JavaScript client documentation](https://open-eo.github.io/openeo-js-client/latest/OidcProvider.html) and the [Authentication documentation for openEO Platform](../../authentication/index.md) for more information.

## Creating a (user-defined) process

Now that we know how to discover the back-end and how to authenticate, lets continue by creating a new batch job to process some data.
First we need to create a user-defined process and for that a process builder is the easiest method.

```js
var builder = await con.buildProcess();
```

With the builder, a [datacube](https://openeo.org/documentation/1.0/glossary.html#spatial-datacubes) can be initialized by selecting a collection from the back-end with the process `load_collection`:

```js
var datacube = builder.load_collection(
  "SENTINEL1_GRD",
  {west: 16.06, south: 48.06, east: 16.65, north: 48.35},
  ["2017-03-01", "2017-04-01"],
  ["VV", "VH"]
);
```

This results in a datacube containing the "SENTINEL1_GRD" data restricted to the given spatial extent, the given temporal extend and the given bands .

::: tip
You can also filter the datacube at a later stage by using the following filter methods:

```js
datacube = builder.filter_bbox(datacube, {west: 16.06, south: 48.06, east: 16.65, north: 48.35});
datacube = builder.filter_temporal(datacube, ["2017-03-01", "2017-04-01"]);
datacube = builder.filter_bands(datacube, ["VV", "VH"]);
```

Still, it is recommended to always use the filters in `load_collection` to avoid loading too much data upfront.
:::

Having the input data ready, we want to apply a process on the datacube, which returns a datacube with the process applied:

```js
var min = function(data) { return this.min(data); };
datacube = builder.reduce_dimension(datacube, min, "t");
```

The datacube is now reduced by the time dimension named `t`, by taking the minimum value of the timeseries values.
Now the datacube has no time dimension left.
Other so called "reducer" processes exist, e.g. for computing maximum and mean values.

::: tip Note
Everything applied to the datacube at this point is neither executed locally on your machine nor executed on the back-end.
It just defines the input data and process chain the back-end needs to apply when it sends the datacube to the back-end and executes it there.
How this can be done is the topic of the next chapter. 
:::

After applying all processes you want to execute, we need to tell the back-end to export the datacube, for example as GeoTiff:

```js
var result = builder.save_result(datacube, "GTiff");
```

## Batch Job Management

After you finished working on your (user-defined) process, we can now send it to the back-end and start the execution. 
In openEO, an execution of a (user-defined) process (here defined using the process builder) is called a [(batch) job](https://openeo.org/documentation/1.0/glossary.html#data-processing-modes).
Therefore, we need to create a job at the back-end using our datacube, giving it the title `Example Title`.

```js
var job = await con.createJob(result, "Example Title");
```

::: tip
It can be annoying to manage and monitor batch jobs via code.
If you want to use an interface for your batch jobs (or other resources) that is easier to use, you can also open the [openEO Platform Editor](https://editor.openeo.cloud).
After login, you'll be able to manage and monitor your batch jobs in a near-realtime interactive environment; Look out for the "Data Processing" tab. 
:::

The `createJob` method sends all necessary information to the back-end and creates a new job, which gets returned.
After this, the job is just created, but has not started the execution at the back-end yet.
It needs to be queued for processing explicitly:

```js
await job.startJob();
```

Now the execution of the job can be monitored by requesting the job status and the log files every once in a while (30 seconds in this example):

```js
let stopFn = job.monitorJob((job, logs) => {
  console.log(job.status);
  logs.forEach(log => console.log(`${log.level}: ${log.message}`));
}, 30);
```

The monitoring stops automatically once the job has finished, was canceled or errored out.
But with the return value of the `monitorJob` function, you can also stop monitoring the job manually:
```js
stopFn();
```

When the job is finished, calling `listResults` gets you the URLs to the results.

```js
var urls = await job.listResults();
```

::: tip
This only works if the job execution has finished.
We recommend to use `listResults` in combination with `monitorJob`, for example as follows:

```js
let stopFn = job.monitorJob(async (job, logs) => {
  if (job.status === "finished") {
    var urls = await job.listResults();
    urls.forEach(url => console.log(`Download from: ${url.href}`));
  }
});
```
:::

There's also the method `downloadResults` to download the results directly.
Unfortunately, you can only download files from a Node.js environment where file access to your local drive is possible. 
In a Browser environment, it is also an option to download the STAC Item or Collection for the results using the `getResultsAsStac` method and point a [STAC client](https://stacindex.org/ecosystem?category=Client) to it for downloading.

## Additional Information

* [Examples](https://github.com/Open-EO/openeo-js-client/tree/master/examples)
* [Documentation](https://open-eo.github.io/openeo-js-client/latest/)
* [Repository](https://github.com/Open-EO/openeo-js-client)