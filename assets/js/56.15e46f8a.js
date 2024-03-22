(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{321:function(e,t,a){e.exports=a.p+"assets/img/score.e247f05c.png"},506:function(e,t,a){"use strict";a.r(t);var r=a(4),o=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"fractional-canopy-cover"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fractional-canopy-cover"}},[e._v("#")]),e._v(" Fractional Canopy Cover")]),e._v(" "),t("p",[e._v("Forests play an essential role in our ecosystem and getting a quantitative measurement on the forest cover is essential for various applications. From understanding ecosystem health, biomass estimation, and monitoring changes over time due to factors like climate change or land use. Higher canopy covers regard for dense forests or other complex ecosystems while lower canopy cover means the presence of grasslands and less sparse vegetation. Getting a percentage of forest cover is also useful in controlling soil erosion to carbon sequestration which serves as an important factor in understanding and mitigating climate change.")]),e._v(" "),t("p",[e._v("Given all these uses, having an accurate percentage of the forest cover is imperial in different studies. The objective of this use case was to derive the fractional canopy cover (FCC) using Sentinel-1 and Sentinel-2 in a random forest regression approach from very high-resolution (VHR) data acquired from the Planet Scope satellite constellation. This was done for an area with different forest types spreading throughout central Europe around the Alps as defined by the Eusropean Strategy for Alpine Regions (EUSALP).")]),e._v(" "),t("h2",{attrs:{id:"data-preparation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#data-preparation"}},[e._v("#")]),e._v(" Data Preparation")]),e._v(" "),t("p",[e._v("As VHR commercial data from Planet was used for the training of the model, a stratification scheme was devised for getting the maximum coverage throughout the study area.  Additional data which included Copernicus Forest High-Resolution Layers (HRL, https://land.copernicus.eu/pan-european/high-resolution-layers/forests) of “Forest Type” and “Forest Cover Density” as well as the CORINE Land Cover were used to find suitable subsets within the study area to derive the target variable from the VHR data. The study area was divided into 40,000 potential test sites, which were sub-sequentially analyzed based on the amount of forest, its density, tree dominance as well as the land cover classes. Therefore, five different score criteria were introduced for each potential test site. These are shown below in Figure 1.")]),e._v(" "),t("figure",[t("img",{attrs:{src:a(321),alt:"Scoring method"}})]),e._v(" "),t("p",[e._v("Based on the maximum scores within each cell Planet data was ordered for the 300 highest scoring areas and then using these tiles, forest masks were created. 3 masks were generated from this VHR dataset including evergreen, deciduous, and mixed forests based on various thresholds of NDVI values. Finally, these masks were summed together and then resampled to 60 meters to be compatible with Sentinel 1 and 2.")]),e._v(" "),t("h2",{attrs:{id:"model-training"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#model-training"}},[e._v("#")]),e._v(" Model training")]),e._v(" "),t("p",[e._v("The Forest masks extracted from the VHR data were vectorized to polygons which were then used as training points for the random forest regression model. The model's predictors are the Sentinel-2 Bands 02, 03, 04 and 08 representing Blue/Green/Red/NIR and the Sigma0 Sentinel-1 VV and VH polarizations.")]),e._v(" "),t("p",[e._v("The trained model can be stored for further jobs in different regions within the interest area. In figure 2 below a process graph is shown where the trained model is applied on the predictors mentioned above.")]),e._v(" "),t("p",[e._v("Figure 2. Process graph showing the prediction of Fractional Canopy Cover with Sentinel-1 and Sentinel-2")]),e._v(" "),t("h2",{attrs:{id:"predicted-fractional-canopy-cover"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#predicted-fractional-canopy-cover"}},[e._v("#")]),e._v(" Predicted Fractional Canopy Cover")]),e._v(" "),t("p",[e._v("In the fit_regr_random_forest process, the actual regression calculation is taking place. Based on the random forest implementation a model is created to predict the target variable. The fitting is done in a standard machine learning approach with 70% of the polygons whereas 30% of the polygons are used for the evaluation of the model.")]),e._v(" "),t("p",[e._v("Figure 3. Predicted Fractional Canopy Cover for part of the study area")])])}),[],!1,null,null,null);t.default=o.exports}}]);