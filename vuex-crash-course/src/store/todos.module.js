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
  async addToDo({ commit }, title) {
    const res = await axios.post("https://jsonplaceholder.typicode.com/todos", {
      title,
      completed: false,
    });
    commit("newToDo", res.data);
  },
  deleteToDo({ commit }, id) {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    commit("removeToDo", id);
  },
};

const mutations = {
  setToDos: (state, todos) => (state.todos = todos),
  newToDo: (state, todo) => state.todos.unshift(todo),
  removeToDo: (state, id) =>
    (state.todos = state.todos.filter((todo) => todo.id !== id)),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
