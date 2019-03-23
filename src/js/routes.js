
import HomePage from '../pages/home.vue'
import AboutPage from '../pages/about.vue'
import FormPage from '../pages/form.vue'

import LeftPage1 from '../pages/left-page-1.vue'
import LeftPage2 from '../pages/left-page-2.vue'
import DynamicRoutePage from '../pages/dynamic-route.vue'
import RequestAndLoad from '../pages/request-and-load.vue'
import NotFoundPage from '../pages/404.vue'

const routes = [
	{
		path: '/',
		component: HomePage
	},
	{
		path: '/about/',
		component: AboutPage
	},
	{
		path: '/form/',
		component: FormPage
	},

	{
		path: '/left-page-1/',
		component: LeftPage1
	},
	{
		path: '/left-page-2/',
		component: LeftPage2
	},
	{
		path: '/dynamic-route/blog/:blogId/post/:postId/',
		component: DynamicRoutePage
	},
	{
		path: '/request-and-load/user/:userId/',
		// eslint-disable-next-line no-unused-vars
		async(routeTo, routeFrom, resolve, reject) {
			// Router instance
			const router = this

			// App instance
			const {app} = router

			// Show Preloader
			app.preloader.show()

			// User ID from request
			// eslint-disable-next-line no-unused-vars
			const {userId} = routeTo.params

			// Simulate Ajax Request
			setTimeout(() => {
				// We got user data from request
				const user = {
					firstName: 'Vladimir',
					lastName: 'Kharlampidi',
					about: 'Hello, i am creator of Framework7! Hope you like it!',
					links: [
						{
							title: 'Framework7 Website',
							url: 'http://framework7.io'
						},
						{
							title: 'Framework7 Forum',
							url: 'http://forum.framework7.io'
						}
					]
				}
				// Hide Preloader
				app.preloader.hide()

				// Resolve route to load page
				resolve(
					{
						component: RequestAndLoad
					},
					{
						context: {
							user
						}
					}
				)
			}, 1000)
		}
	},
	{
		path: '(.*)',
		component: NotFoundPage
	}
]

export default routes
