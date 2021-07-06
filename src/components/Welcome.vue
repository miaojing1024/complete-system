<template>
  <div class="welcome">
    <h1>欢迎来到住界面--{{ msg }}</h1>
    <!-- <el-button>去登陆 </el-button> -->
    <router-link to="/login">去登陆</router-link>
  </div>
</template>

<script>
export default {
  name: "Welcome",
  props: ["msg"],
};
</script>


<style scoped>
a {
  color: #42b983;
}
.welcome {
  height: 100%;
  background: #ffffff;
}
</style>
