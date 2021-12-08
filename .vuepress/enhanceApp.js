export default ({ router, Vue }) => {
	Vue.config.ignoredElements = [
		'redoc'
	];
	router.beforeEach((to, from, next) => {
	  const redirectList = {
		'/authentication': '/join/early_adopter.html',
	  }
	  const redirect = redirectList[to.path]
  
	  if (redirect) {
		next({ path: redirect })
	  } else next()
	})
}