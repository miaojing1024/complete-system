<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: "app",
  mounted() {
    // this.$storage.setItem("name", "tom");
    // this.$storage.setItem("userInfo", {name:"jack",age:11});
    // console.log(this.$storage.getItem("name"))
    // this.$storage.clearItem("name")
    // this.$storage.clearAll()
  },
};
</script>

<style>
@import "./assets/style/reset.css";
@import "./assets/style/index.scss"
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
