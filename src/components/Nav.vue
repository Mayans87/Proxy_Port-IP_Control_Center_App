<template lang="">
  <div class="nav">
    <nav class="nav-items">
      <img src="../assets/logo.png" alt="logo" class="logo-img" />
      <button class="btn" @click="closeWindow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="3em"
          height="5em"
          viewBox="0 0 24 24"
        >
          <path
            fill="#ffffff"
            d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"
          ></path>
        </svg>
      </button>
    </nav>
  </div>
</template>
<script>
export default {
  name: "MaterialSymbolsClose",
  methods:{
    closeWindow(){
      window.close();
    }
  }
};
</script>
<style scoped>
.nav {
  background-color: black;
}
img {
  height: 86px;
}
.nav-items{
  display: flex;
  justify-content: space-between;
  padding: 2px;
}
.btn{
  background-color: red;
  padding: 5px;
  cursor: pointer;
  border-radius:1px;
  border: none;
}
.btn:hover{
  background-color: rgb(247, 10, 10);
}
</style>
