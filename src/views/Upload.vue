<template>
  <div>
   <!-- 作品上传 -->
   <!-- 功能有待开发 -->
   <!-- 表单 -->
  <div style="margin:auto 400px;margin-top:100px">
       <el-form ref="form" :model="form" label-width="120px" style="padding-top:40px">
    <el-form-item label="创作者">
      <el-input v-model="form.name" placeholder="请输入姓名或昵称"></el-input>
    </el-form-item>
    <el-form-item label="联系方式">
      <el-input v-model="form.name" placeholder="请填写具体联系方式"></el-input>
    </el-form-item>
    <el-form-item label="社交账号">
    <el-input v-model="form.name" placeholder= "请填写社交账号链接"></el-input>
    </el-form-item>
    <el-form-item style="margin:auto 150px">
      <el-button round type="success" @click="onSubmit">提交</el-button>
      <el-button  round type="info">取消</el-button>
    </el-form-item>
  </el-form>
   </div>
  </div>
      
  
</template>
<script>


export default {
  name: "Upload.vue", 
  
  data(){
    return{
        form:{}
       
    } 
  },

}
</script>

<style scoped>

</style>