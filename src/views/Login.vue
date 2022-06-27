<template>
  <div>
     <div style="margin:auto 400px;margin-top:100px">
       <el-form ref="form"  label-width="120px" style="padding-top:40px">
    <el-form-item label="账号">
      <el-input  placeholder="请输入用户名"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input  placeholder="请填写密码"></el-input>
    </el-form-item>
    <el-form-item style="margin:auto 150px">
      <el-button round type="success" @click="$router.push('/market')">提交</el-button>
      <el-button  round type="info">取消</el-button>
      <el-button round type="success" @click="$router.push('/register')">注册</el-button>
    </el-form-item>
  </el-form>
   </div></div>
</template>

<script>
export default {};
</script>

<style>
</style>