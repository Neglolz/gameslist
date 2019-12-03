import Vue from "vue"
import Router from "vue-router"
Vue.prototype.$redirect = (route, id) => {
  Router.push("/" + route + "/" + id)
}
Vue.prototype.$myInjectedFunction = string =>
  console.log("This is an example", string)
