import Vue from "vue";
import VueApollo from "vue-apollo";
import App from "./App.vue";
import apolloClient from "./apolloClient";

Vue.config.productionTip = false;

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

new Vue({
  render: (h) => h(App),
  apolloProvider
}).$mount("#app");
