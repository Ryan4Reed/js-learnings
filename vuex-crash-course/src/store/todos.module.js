import axios from "axios";

const state = {
  todos: [{ id: 1, title: "to do 1" }],
};

const getters = {
  allToDos: (state) => state.todos,
};

const actions = {
  async fetchToDos({ commit }) {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    commit("setToDos", res.data);
  },
};

const mutations = {
  setToDos: (state, todos) => (state.todos = todos),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
