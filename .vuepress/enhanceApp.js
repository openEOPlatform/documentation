// for openeo-processes-docgen
// see https://github.com/vuejs/vuepress/issues/1434
if (typeof window !== "undefined") {
	window.global = window;
}

export default ({ router, Vue }) => {
	Vue.config.ignoredElements = [
		'redoc'
	];
	router.beforeEach((to, from, next) => {
	  const redirectList = {
		'/authentication': '/join/free_trial.html',
		'/join/early_adopter.html': '/join/free_trial.html',
	  }
	  const redirect = redirectList[to.path]
  
	  if (redirect) {
		next({ path: redirect })
	  } else next()
	})
}