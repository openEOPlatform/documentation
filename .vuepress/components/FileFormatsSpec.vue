<template>
	<section>
		<p v-if="!collections">Loading data...</p>
		<FileFormats v-else heading="File Formats for Import and Export" :formats="formats" />
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