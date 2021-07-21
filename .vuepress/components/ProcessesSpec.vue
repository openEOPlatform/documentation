<template>
	<DocGen :document="documentUrl" apiVersion="1.1.0" />
</template>

<script>
export default {
	name: 'ProcessesSpec',
	components: {
		DocGen: () => import('@openeo/processes-docgen/src/DocGen.vue') 
	},
	computed: {
		documentUrl() {
			return '/assets/processes.json';
		}
	}
};
</script>