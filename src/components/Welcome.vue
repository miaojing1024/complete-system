<template>
  <h1>欢迎来到住界面--{{ msg }}</h1>
  <!-- <el-button>去登陆 </el-button> -->
  <router-link to="/login">去登陆</router-link>
</template>

<script>
export default {
  name: "welcome",
  props: ["msg"],
};
</script>


<style scoped>
a {
  color: #42b983;
}
</style>
