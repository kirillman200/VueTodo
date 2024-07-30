<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
import TodoForm from '../components/ToDoForm.vue'
import ToDoList from '../components/ToDoList.vue'
</script>

<template>
  <main>
    <div class="wrapper">
      <h1>Todo List</h1>

      <TodoForm />
      <ToDoList class="todolist" />
    </div>
  </main>
</template>

<style scoped>
h1 {
  margin-top: 30px;
  text-align: center;
}
main {
  /* max-height: 100vh; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  place-items: center;
}

.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
  width: 50vw;
}
</style>
