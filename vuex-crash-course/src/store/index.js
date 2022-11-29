import Vuex from "vuex";
import todos from "./todos.module";



// Create Store
export default new Vuex.Store({
  modules: {
    todos,
  },
});
