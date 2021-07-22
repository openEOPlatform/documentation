<template>
	<section>
		<p v-if="!collections">Loading data...</p>
		<Collections v-else :collections="collections" :loadAdditionalData="loadCollection" />
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
			collections: null
		};
	},
	async created() {
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