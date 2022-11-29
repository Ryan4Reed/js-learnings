<template>
  <div class="app">
    <div class="container">
      <add-to-do />
      <to-dos />
    </div>
  </div>
</template>

<script>
import ToDos from "./components/ToDos.vue";
import AddToDo from "./components/AddToDo.vue";
export default {
  name: "App",
  components: {
    ToDos,
    AddToDo,
  },
};
</script>

<style>
body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  background: #e8f7f0;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
