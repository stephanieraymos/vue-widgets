const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      title: "Book title",
      author: "Author",
      age: 30,
      x: 0,
      y: 0
    };
  },
  methods: {
    changeTitle(title) {
      this.title = title;
    },
    toggleShowBooks() {
      this.showBooks = !this.showBooks
    },
    handleEvent(e, data) {
      console.log(e, e.type)
      if(data){
        console.log(data)
      }
    },
    handleMouseMove(e) {
      this.x = e.offsetX
      this.y = e.offsetY
    }
  },
});

app.mount("#app");
