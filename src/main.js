import App from "./App.svelte";
import Sugar from "Sugar";
Sugar.extend();

const app = new App({
	target: document.body,
	props: {
		application_name: "Carbon Template"
	}
});

export default app;
