import Vuex from "vuex";
import todos from "./modules/todos";



// Create Store
export default new Vuex.Store({
  modules: {
    todos,
  },
});
