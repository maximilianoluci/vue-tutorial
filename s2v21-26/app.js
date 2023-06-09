const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    confirmInput() {
      this.confirmedName = this.name;
    },
    submitForm(event) {
      alert("Submitted!");
    },
    setName(event) {
      this.name = event.target.value;
    },
    addCounter(num) {
      this.counter = this.counter + num;
    },
    substractCounter(num) {
      this.counter = this.counter - num;
    },
  },
});

app.mount("#events");
