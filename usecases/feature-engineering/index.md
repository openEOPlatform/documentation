# Feature engineering

Feature engineering refers to extracting a number of discriminative features from a single pixel timeseries or even
a time series of EO data tiles. These features then allow an expert rule-based decision approach to classify pixels, or 
to train a model using techniques such as random forest or neural networks for classification.

Concrete examples of such features include simple things such as the percentiles or standard deviation of a vegetation index or band value,
the mean value for given month, or more advanced cases such as phenological or texture information.

In general, data scientists like to explore the usefullness of a given feature set for a use case, or may even 
define new features. In some cases, the openEO processes will allow computing them, and in others, a 'user defined 
function' may be used to compute features that are not directly supported in openEO.

In this section, we will show how to combine openEO functionality into a basic feature engineering pipeline. 
 
 
 ## TODO!