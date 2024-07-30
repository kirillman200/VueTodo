import { defineStore } from 'pinia'

var id = 1
export const useTodoStore = defineStore('todoList', {
  state: () => ({ todos: [] }), // define the state of the store

  getters: {
    modifyToDo: (state) => (id) => {
      // Getter to get the todo to be modified
      state.todos?.find((todo) => todo.id === id)
    }
  },
  actions: {
    addToDo(todo) {
      // Add todo action to add a new todo to store
      if (this.todos?.some((value) => value.title === todo)) {
        alert('This todo already exists')
        return
      } else if (todo === '') {
        alert('Please enter a todo')
        return
      } else if (todo.length > 50) {
        alert('Todo should be less than 50 characters')
        return
      } else {
        this.todos.push({
          id: id++,
          title: todo,
          completed: false,
          editing: false
        })
      }
    },
    removeToDo(id) {
      // Remove todo action to remove a todo from store
      const index = this.todos?.findIndex((todo) => todo.id === id)
      this.todos.splice(index, 1)
    },
    isCompleted(id) {
      // isCompleted action to toggle the completed status of a todo
      const todo = this.todos?.find((todo) => todo.id === id)
      todo.completed = !todo.completed
    }
  }
})
