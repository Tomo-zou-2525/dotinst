let app = new Vue({
  el: "#app",
  data: {
    newItem: "",
    todos: [
      { title: "task 1", isDone: false },
      { title: "task 2", isDone: false },
      { title: "task 3", isDone: true }
    ]
  },
  methods: {
    addItem: function() {
      let item = {
        title: this.newItem,
        isDone: false
      };
      this.todos.push(item);
    },
    deleteItem: function(index) {
      if (confirm("消す？ 消しちゃう？")) {
        this.todos.splice(index, 1);
      }
    }
  },
  computed: {
    r: function() {
      let items = this.todos.filter(function(todo) {
        return !todo.isDone;
      });
      return items.length;
    }
  }
});
