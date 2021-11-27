require('./mystyles.scss');

import App from './App.svelte';
import Projects from './Projects.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});


export default app;
