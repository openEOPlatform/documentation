# Analysis-Ready Data (ARD)

For certain use cases, the preprocessed data collections available in the openEO backends are not sufficient or simply not
available. For that case, openEO supports a few very common preprocessing scenario:

- Atmospheric correction of optical data
- SAR backscatter computation

These processes also offer a number of parameters to customize the processing. There's also variants with a default
parametrization that results in data that is compliant with [CEOS CARD4L specifications](https://ceos.org/ard/).

We should note that these operations can be computationally expensive, so certainly affect overall processing time and
cost of your final algorithm. Hence, make sure to make an informed decision when you decide to use these methods.

**Examples:**

* [SAR](./sar/index.md)
* [Multi-Spectral Imagery](./msi/index.md)