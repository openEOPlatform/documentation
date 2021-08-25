# Analysis-Ready Data (ARD)

For certain use cases, the readily available preprocessed data collections in the openEO back-ends 
are not sufficient or inappropriately preprocessed.
openEO supports some processes to address very common preprocessing scenarios:

- Atmospheric correction of optical data
- SAR backscatter computation

These processes also offer a number of parameters to customize the processing. 
There are also variants with a default
parametrization that results in data that is compliant with [CEOS CARD4L specifications](https://ceos.org/ard/).

We should note that these operations can be computationally expensive, so certainly affect overall processing time and
cost of your final algorithm. Hence, make sure to make an informed decision when you decide to use these methods.

**Examples:**

* [SAR](./sar/index.md)
* [Multi-Spectral Imagery](./msi/index.md)