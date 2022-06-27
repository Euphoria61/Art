<template>
 <div ><el-menu
        class="el-menu-vertical-demo"
        :default-active="path"
        router
        style="width: 200px;min-height: calc(100vh - 50px)">
     
        <el-menu-item index="/info">个人信息</el-menu-item>
        <el-menu-item index="/like">我的喜欢</el-menu-item>
      <el-menu-item index="/invite">我的邀请</el-menu-item>
      <el-menu-item index="/list">私人博物馆</el-menu-item>
      <el-menu-item index="/wallet">我的钱包</el-menu-item>
    </el-menu>
    </div>
</template>

<script>
export default {
  data() {
    return {
         path: this.$route.path
    };
  },
  created() {},
  mounted() {},
};
</script>
<style scoped>
.el-menu {
  margin-top: 50px;
  border-right:none;
}
</style>