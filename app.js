const app = Vue.createApp({
  data() {
    return {
      title: "Book title",
      author: "Author",
      age: 30,
    };
  },
  methods: {
    changeTitle(title) {
      this.title = title;
    },
  },
});

app.mount("#app");
