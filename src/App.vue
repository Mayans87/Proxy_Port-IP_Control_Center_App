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
      <div class="table">
        <Tabulator />
      </div>
    </main>
    <footer class="footer">
      <Footer />
    </footer>
  </div>
</template>
<style>
main {
  flex: 1 0 auto;
}
#app {
  max-height: 100vh;
  display: flex;
  flex-direction: column;
}

.footer {
  margin-top: auto;
}
.table{
  height: 63.3vh;
  padding-bottom: 10px;

}
.el-table {
  max-height: 54vh;
  overflow-y: auto;
}
.el-pagination{
  text-align: center;
  margin-top: 2px;
}
</style>
