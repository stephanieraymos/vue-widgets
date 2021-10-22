const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      books: [
        {
          title: "Cool Book",
          author: "Cool Author",
        },
        {
          title: "AnotherCool Book",
          author: "Another Cool Author",
        },
        {
          title: "The Coolest Book",
          author: "The Coolest Author",
        },
      ],
    };
  },
  methods: {
    changeTitle(title) {
      this.title = title;
    },
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    handleEvent(e, data) {
      console.log(e, e.type);
      if (data) {
        console.log(data);
      }
    },
    handleMouseMove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
  },
});

app.mount("#app");
