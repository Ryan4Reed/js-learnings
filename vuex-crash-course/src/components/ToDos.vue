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

<script>
import { mapGetters } from "vuex";

export default {
  name: "ToDos",
  computed: mapGetters(["allToDos"]),
};
</script>
