<template>
	<div class="apiSpec">
		<redoc :spec-url="specUrl"
			path-in-middle-panel="true" 
			expand-responses="200,201,202,203,204"
			:scroll-y-offset="yOffset">
		</redoc>
	</div>
</template>

<script>

export default {
	name: 'ApiSpec',
	computed: {
		specUrl() {
			return '/assets/openapi.yaml';
		}
	},
	data() {
		return {
			yOffset: 0
		};
	},
	mounted() {
		// This is a workaround for issue https://github.com/Redocly/redoc/issues/1129
		// Remove yOffset code after issue has been fixed and replace 
		// :scroll-y-offset="yOffset" with scroll-y-offset="header"
		this.yOffset = Math.round(document.querySelector('header').getBoundingClientRect().bottom);

		var scriptTag = document.createElement('script');
		scriptTag.src = "https://cdn.jsdelivr.net/npm/redoc/bundles/redoc.standalone.js";
    	document.getElementsByTagName('head')[0].appendChild(scriptTag);
	}
};
</script>