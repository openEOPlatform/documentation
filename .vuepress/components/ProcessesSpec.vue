<template>
	<DocGen :document="documentUrl" apiVersion="1.1.0" showExperimentalByDefault />
</template>

<script>
import DocGen from '@openeo/processes-docgen/src/DocGen.vue';

export default {
	name: 'ProcessesSpec',
	components: {
		DocGen
	},
	computed: {
		documentUrl() {
			return '/assets/processes.json';
		}
	}
};
</script>

<style>
.docgen section.action-bar {
	display: none !important;
}
</style>