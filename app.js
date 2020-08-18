let app = new Vue({
  el: "#app",
  data: {
    new_item: " ",
    todos: ["todo 1", "todo 2", "todo 3"]
  },
  methods: {
    addItem: function() {
      this.todos.push(this.newItem);
    }
  }
});
