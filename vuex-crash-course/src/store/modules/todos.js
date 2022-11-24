// import axios from "axios";

const state = {
  todos: [
    {
      id: 1,
      title: "To do 1",
    },
    {
      id: 2,
      title: "To do 2",
    },
  ],
};

const getters = {
  allToDos: (state) => state.todos,
};

const actions = {};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations,
};
