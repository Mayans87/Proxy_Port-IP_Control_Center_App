<script>
import Nav from "./components/Nav.vue";
import Tabulator from "./components/Tabulator.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Nav,
    Tabulator,
    Footer,
  },
};
</script>

<template>
  <div id="app">
    <main>
      <Nav />
      <Tabulator />
    </main>
    <footer class="footer">
      <Footer />
    </footer>
  </div>
</template>
<style scoped>
#app {
  min-height: 130vh;
  display: flex;
  flex-direction: column;
}

.footer {
  margin-top: auto;
}
</style>
