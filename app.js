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
      console.log("clicked")
    },
  },
});

app.mount("#app");
