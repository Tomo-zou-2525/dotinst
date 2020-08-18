let app = new Vue({
  el: "#app",
  data: {
    newItem: "",
    todos: ["todo 1", "todo 2", "todo 3"]
  },
  methods: {
    addItem: function() {
      this.todos.push(this.newItem);
      this.newItem = "";
    },
    deleteItem: function(index) {
      if (confirm("消す？ 消しちゃう？")) {
        this.todos.splice(index, 1);
      }
    }
  }
});
