<template>
	<section>
		<p v-if="!collections">Loading data...</p>
		<Collections v-else :collections="collections" :showKeywords="true" :searchTerm="searchTerm" :loadAdditionalData="loadCollection" :mapOptions="mapOptions">
			<template #collection-before-description="slot">
				<form class="editor-preview" v-if="hasPreview(slot.data)" target="_blank" action="https://editor.openeo.cloud">
					<input type="hidden" name="preview-collection" :value="slot.data.id" />
					<button type="submit">Show Preview in openEO Platform Editor</button>
				</form>
			</template>
		</Collections>
	</section>
</template>

<script>
const axios = require('axios');
import Collections from '@openeo/vue-components/components/Collections.vue';
import Utils from '@openeo/vue-components/utils';

export default {
	name: 'DataCollections',
	components: {
		Collections
	},
	data() {
		return {
			collections: null,
			searchTerm: null,
			mapOptions: {
				basemap: `https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoib3BlbmVvLXBsYXRmb3JtLXd3dSIsImEiOiJja3g0emUzdHIyZ2hpMnVwOGJ2ZmE1OWpoIn0.7IBhFVs-X2Glb0QHUq8riA`,
				attribution: `© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> <strong><a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a></strong>`
			}
		};
	},
	async mounted() {
		const urlParams = new URLSearchParams(window.location.search);
		const q = urlParams.get('q');
		if (typeof q === 'string' && q.length > 0) {
			this.searchTerm = q;
		}

		let res = await axios('https://openeocloud.vito.be/openeo/1.0.0/collections');
		this.collections = res.data.collections;
	},
	methods: {
		async loadCollection(_, id) {
			let res = await axios('https://openeocloud.vito.be/openeo/1.0.0/collections/' + id);
			return res.data;
		},
		hasPreview(stac) {
			if (Utils.isObject(stac) && Array.isArray(stac.links)) {
				let link = stac.links.find(link => Utils.isObject(link) && typeof link.rel === 'string' && ['xyz','wmts'].includes(link.rel.toLowerCase()));
				return Boolean(link);
			}
			return false;
		}
	}
};
</script>

<style scoped>
.editor-preview {
	margin: 1em 0;
}
</style>