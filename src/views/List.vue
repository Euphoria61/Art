<template>
  <div style="margin-left:30px;margin-top:50px">
       <el-tabs v-model="activeName" >
    <el-tab-pane label="全部" name="first">全部</el-tab-pane>
    <el-tab-pane label="出售中" name="second">出售中</el-tab-pane>
    <el-tab-pane label="未出售" name="third">未出售</el-tab-pane>
    <el-tab-pane label="|" disabled>未出售</el-tab-pane>
    <el-tab-pane label="历史出售" name="fourth">历史出售</el-tab-pane>
  </el-tabs>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>