<script setup>
import { useTodoStore } from '@/stores/useTodoStore.js'
const store = useTodoStore()

function onSubmit() {
  //func to handle form submission

  const todo = document.getElementById('todo').value

  store.addToDo(todo)

  document.getElementById('formTodo').reset()
}
</script>

<template>
  <div class="form-wrap">
    <h2>Add a new todo</h2>
    <form @submit.prevent="onSubmit" id="formTodo">
      <input type="text" id="todo" name="todo" />
      <button type="submit">Add</button>
    </form>
  </div>
</template>

<!-- Css styling for component -->
<style scoped>
.form-wrap {
  display: flex;
  justify-content: space-evenly;
  gap: 10px;
  align-items: center;
}

@media only screen and (max-width: 1024px) {
  .form-wrap {
    flex-direction: column;
  }
}
form {
  display: flex;
  justify-content: left;
  gap: 10px;
  align-items: center;
}
input[type='text'] {
  font-size: 18px;
  padding: 5px;
  margin: 10px 10px 10px 0px;
  color: #b0b0b0;
  box-shadow: none;
  outline: 2px solid #b8b8b8;
  border: none;
  border-radius: 2px;

  background-color: transparent;
}
button {
  font-size: 18px;
  padding: 5px;
  margin: 10px 0px 10px 0px;
  color: #b0b0b0;
  box-shadow: none;
  outline: 2px solid #b8b8b8;
  border: none;
  border-radius: 2px;
  background-color: transparent;
  transition: all 0.5s ease;
}
button:hover {
  background-color: #646464;
  color: #fff;
}
</style>
