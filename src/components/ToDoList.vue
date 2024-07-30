<script setup>
import editIcon from '@/components/icons/editIcon.vue'
import removeIcon from '@/components/icons/removeIcon.vue'
import completedIcon from '@/components/icons/completedIcon.vue'

import { useTodoStore } from '@/stores/useTodoStore.js'
const store = useTodoStore() //creation of store

function editOnSubmit(todo) {
  store.modifyToDo(todo.id)
}
function handleEditing(todo) {
  todo.editing = !todo.editing
}
</script>

<template>
  <div>
    <TransitionGroup name="list" tag="ul">
      <!-- for loop to loop through todos -->
      <li :class="todo.completed ? 'isCompleted' : ''" v-for="todo in store.todos" :key="todo.id">
        <span name="addCheck" class="iconWrap" @click="store.isCompleted(todo.id)">
          <Transition name="addCheck">
            <completedIcon v-if="todo.completed" class="icon checkmark" />
          </Transition>
        </span>
        <span v-if="todo.editing" class="todo-title">
          <input
            type="text"
            v-model="todo.title"
            @keyup.enter="editOnSubmit(todo), handleEditing(todo)"
          />
        </span>
        <span class="todo-title" @dblclick="handleEditing(todo)" v-if="!todo.editing"
          >{{ todo.title }}
        </span>
        <div class="icons">
          <editIcon class="icon" @click="handleEditing(todo)" />
          <removeIcon class="icon remove" @click="store.removeToDo(todo.id)" />
        </div>
      </li>
    </TransitionGroup>
  </div>
</template>

<!-- Css styling for component -->
<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.addCheck-enter-active,
.addCheck-leave-active {
  transition: all 0.5s ease;
}
.addCheck-enter-from,
.addCheck-leave-to {
  opacity: 0;
}
.addCheck-enter-from.checkmark {
  fill: #27a409;
}

.icon {
  cursor: pointer;
  fill: #fff;
  width: 20px;
  height: 20px;
  margin-right: 5px;
  transition: all 0.5s ease;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  display: grid;
  grid-template-columns: 5% 85% 10%;
  padding: 10px;
  align-items: center;
  text-align: left;
  border-bottom: 1px solid #ccc;
  word-wrap: break-word;
}
li .todo-title {
  padding-left: 10px;
  border-left: 1px solid #ccc;
}
input[type='text'] {
  font-size: 18px;
  padding: 5px 0px;
  margin: 0;
  padding-left: 5px;
  color: #b0b0b0;
  box-shadow: none;
  outline: 0.5px dashed #4b4b4b;
  border: none;
  border-radius: 3px;
  background-color: transparent;
}
.todo-title {
  font-size: 18px;
  color: #b0b0b0;
  cursor: pointer;
}
.iconWrap {
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.isCompleted {
  transition: all 0.5s ease-in-out;
  text-decoration: line-through;
  text-decoration-color: #27a409;
}
.isCompleted .checkmark {
  fill: #27a409;
}
li.isCompleted {
  border-color: #27a409;
}
.icon.remove:hover {
  fill: #ff0000;
}
</style>
