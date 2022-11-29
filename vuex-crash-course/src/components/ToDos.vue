<template>
  <div>
    <h3>ToDos</h3>
    <div class="todos">
      <div v-for="todo in allToDos" :key="todo.id" class="todo">
        {{ todo.title }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();
const allToDos = computed(() => store.getters.allToDos);

onMounted(async () => {
  await store.dispatch("fetchToDos"); //if you make your store namespace, you'll have to specify the module in the path also like: "todos/fetchToDos"
});
</script>

<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.todo {
  border: 1px sollid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
</style>
