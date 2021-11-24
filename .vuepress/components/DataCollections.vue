<template>
	<section>
		<p v-if="!collections">Loading data...</p>
		<Collections v-else :collections="collections" :showKeywords="true" :searchTerm="searchTerm" :loadAdditionalData="loadCollection">
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
			searchTerm: null
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