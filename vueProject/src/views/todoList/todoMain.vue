<template>
  <div class="wrap">
    <todo-header></todo-header>
    <todo-input v-on:addTodo="addTodo"></todo-input>
    <todo-list
      v-bind:propsdata="todoItems"
      @removeTodo="removeTodo"
    ></todo-list>
    <todo-footer v-on:removeAll="clearAll"></todo-footer>
  </div>
</template>

<script>
import TodoFooter from "../../components/todo/TodoFooter.vue";
import TodoHeader from "../../components/todo/TodoHeader";
import TodoList from "../../components/todo/TodoList";
import TodoInput from "../../components/todo/TodoInput";

export default {
  name: "todoMain",
  data() {
    return {
      todoItems: [],
    };
  },
  created() {
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) != "loglevel:webpack-dev-server") {
          this.todoItems.push(localStorage.key(i));
          console.log(localStorage.key(i));
        }
      }
    }
  },
  methods: {
    addTodo(todoItem) {
      localStorage.setItem(todoItem, todoItem);
      this.todoItems.push(todoItem);
    },
    clearAll() {
      localStorage.clear();
      this.todoItems = [];
    },
    removeTodo(todoItem, index) {
      localStorage.removeItem(todoItem);
      this.todoItems.splice(index, 1);
    },
  },
  components: {
    TodoInput,
    TodoList,
    TodoHeader,
    TodoFooter,
  },
};
</script>

<style></style>
