<template>
	<section>
		<p v-if="!formats">Loading data...</p>
		<div class="columns" v-else>
			<FileFormats heading="File Formats for Import" :formats="formats" :showOutput="false" />
			<FileFormats heading="File Formats for Export" :formats="formats" :showInput="false" />
		</div>
	</section>
</template>

<script>
const axios = require('axios');
import FileFormats from '@openeo/vue-components/components/FileFormats.vue';

export default {
	name: 'FileFormatsSpec',
	components: {
		FileFormats
	},
	data() {
		return {
			formats: null
		};
	},
	async created() {
		let res = await axios('https://openeocloud.vito.be/openeo/1.0.0/file_formats');
		this.formats = res.data;
	}
};
</script>

<style scoped>
@media screen and (min-width: 700px) {
	.columns {
		display: flex;
	}
	.columns > div {
		flex-basis: 50%;
	}
}
</style>