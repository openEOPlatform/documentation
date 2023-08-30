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