<template>
  <div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="black"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1" class="logo">
        <img src="../assets/logo.png" alt="logo" class="logo-img" />
      </el-menu-item>
      <el-menu-item index="2">Home</el-menu-item>
      <el-submenu index="3">
        <template slot="title">Industries</template>
        <el-menu-item index="3-1">Railway</el-menu-item>
        <el-menu-item index="3-2">Oil</el-menu-item>
        <el-menu-item index="3-3">Gas</el-menu-item>
        <el-submenu index="3-4">
          <template slot="title">Power</template>
          <el-menu-item index="3-4-1">Generation</el-menu-item>
          <el-menu-item index="3-4-2">Transmission</el-menu-item>
          <el-menu-item index="3-4-3">Distribution</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "2",
      activeIndex2: "2",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style scoped>
.el-menu-demo {
  font-weight: bold;
}

.logo-img {
  width: 60px; /* Adjust the size as needed */
  height: auto;
}
</style>
