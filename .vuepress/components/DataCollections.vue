<template>
	<section>
		<p v-if="!collections">Loading data...</p>
		<Collections v-else :collections="collections" :showKeywords="true" :searchTerm="searchTerm" :loadAdditionalData="loadCollection">

		</Collections>
	</section>
</template>

<script>
const axios = require('axios');
import Collections from '@openeo/vue-components/components/Collections.vue';

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
	async created() {
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
		}
	}
};
</script>