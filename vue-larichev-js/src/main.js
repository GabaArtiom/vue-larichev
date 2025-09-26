import { createApp } from "vue";
import "./style.css";
import "primeicons/primeicons.css";
import App from "./App.vue";

const app = createApp(App);

app.mount("#app");
app.directive("focus", {
  mounted: (el) => el.focus(),
});
