<template>
  <div style="margin-left: 60px; margin-top: 70px">
    <strong>我的钱包</strong>
    <div style="margin-top: 70px">
      <el-table :data="tableData" stripe style="width: 70%">
        <el-table-column prop="date" label="币种" width="180" />
        <el-table-column prop="name" label="总额" width="180" />
        <el-table-column prop="address" label="可用余额" />
        <el-table-column prop="address" label="冻结" />
        <el-table-column prop="address" label="操作" />
      </el-table>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>