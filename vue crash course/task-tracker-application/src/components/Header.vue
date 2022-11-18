<template>
  <header>
    <h1>{{ title }}</h1>
    <Button
      @btn-click="this.$emit('toggle-form')"
      :text="showFormIndicator ? 'Close' : 'Add Task'"
      :color="showFormIndicator ? 'red' : 'green'"
    />
  </header>
</template>

<script>
import Button from "./Button";

export default {
  name: "Header",
  props: {
    title: String,
    showFormIndicator: Boolean,
  },
  components: {
    Button,
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>
