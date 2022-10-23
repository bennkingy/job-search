import App from "@/App.vue";
import "@/assets/tailwind.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faAngleDown,
  faAngleUp,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { createApp } from "vue";
library.add(faAngleDown);
library.add(faAngleUp);
library.add(faSearch);
library.add(faHome);
createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
