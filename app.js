const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      title: "Book title",
      author: "Author",
      age: 30,
    };
  },
  methods: {
    changeTitle(title) {
      this.title = title;
    },
    toggleShowBooks() {
      this.showBooks = !this.showBooks
    }
  },
});

app.mount("#app");
