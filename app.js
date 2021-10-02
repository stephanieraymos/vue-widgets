const app = Vue.createApp({
  data() {
    return {
      title: "Book title",
      author: "Author",
      age: 30,
    };
  },
  methods: {
    changeTitle() {
      this.title = "New title";
    },
  },
});

app.mount("#app");
