# Platform credit usage

As a user of openEO platform, you require a subscription to get access. Various packages are [available](https://openeo.cloud/#plans), 
but they all come with a number of 'platform credits' that you can consume in various ways.

Currently, credits can be deducted based on:

- CPU usage (cores/second)
- Memory usage (GB/second)
- Storage (GB/day)
- Data access to specific layers (e.g. Sentinel Hub or commercial)
- Usage of services contributed by third parties, through an 'added value' cost (e.g. per hectare)

For example, let's say we compute a Sentinel-2 based NDWI for an area of 10 hectares to a series of GeoTiffs (one per observation). 

When running this example, the batch job reports the usage, which can be seen in the
[Platform Editor](https://editor.openeo.cloud) by clicking the "i" button for an individual batch job:

<figure>
    <img src="https://user-images.githubusercontent.com/5937096/159861044-d758443f-9056-4474-909f-ebd8400de9dd.png" alt="Usage Metrics shown in the Platform Editor">
    <figcaption>Usage Metrics shown in the Platform Editor for an example batch job.</figcaption>
</figure>

13,400,773 mb-seconds corresponds to 3.64 GB hours or 3.64 credits
5099 CPU seconds corresponds to 1.4 CPU hour which translates to 2.12 credits

Summing this up, we arrive at 5.76 credits. In the current free tier, you receive 1000 credits, which amounts to quite a few of jobs like this!
It is important to note however that resource consumption (CPU and memory in this case) is not fixed over time because the
performance characteristics of a particular cloud tends to fluctuate depending on overall load. 
Cloud providers do try to avoid this, but in general only manage to do so within the limits of a given SLA.

## Platform credit rates

The example above also shows that conversion rates need to be applied to convert resource usage into credits. 
As openEO platform consists of different software components that are operated on different clouds, these conversion rates are not set to a fixed value 
for the platform as a whole. For instance, a backend running on more expensive but faster CPU's, might charge more for a CPU hour compared to a provider
running on slower but cheaper CPU's.

While this might seem to make the costs unpredictable, we recommend users to also evaluate their own resource usage. 
If the cost for a particular job appears relatively high, it might be worthwhile to try running it against a different backend if possible.

The platform will also notify users of changes to the conversion rate, especially if a resource would become more expensive. 
If you do notice an unexpected increase in credit usage, we recommend contacting the platform through the helpdesk, to ensure that this is expected.

## Estimating resource usage

Often you want to know up front what kind of costs you will incur by using the platform, especially when generating larger results 
or running the same job at fixed times. For the platform however, this is not trivial to do without actually running your job, because the resource 
consumption heavily depends on the exact combination of processes that you are using. 

Hence, the way to estimate job usage is to start small. For instance, for a query on 10m resolution, you may want to start with a 10ha area,
and simply run that job. As shown above, this will usually incur a cost of only a few cents. In the worst case, you might discover that this already 
costs a few euros, but then you would also notice that your job is taking multiple hours to run.

In any case, once you've established an initial cost for a small area, you can extrapolate to a larger area. If simple linear extrapolation shows that 
a larger job is affordable, then run the job on larger areas, like 50ha or up to 100x100km. This will show you how your job scales, 
and what kind of costs you will be incurring! If at any point the cost appears unreasonable, please contact the platform!
