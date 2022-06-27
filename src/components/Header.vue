<template>
  <div style="height: 70px; line-height: 70px; display: flex">
    <div style="width: 200px; padding-left: 50px; font-weight: bolder">
      <el-link style=" font-weight: bolder" :underline="false" @click="$router.push('/market')"
        >交易市场</el-link
      >
    </div>
    <div style="width: 120px">
      <el-dropdown trigger="click">
        <el-link style=" font-weight: bolder" :underline="false" class="el-dropdown-link">福利</el-link>
        <template #dropdown>
          <el-dropdown-menu>
            <!-- 功能有待开发 -->
            <el-dropdown-item
              @click="$router.push('/person')"
            ></el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
    <div style="flex: 1"></div>
    <div style="width: 120px; padding-left: 50px;">
      <el-link style=" font-weight: bolder" :underline="false" @click="$router.push('/upload')"
        >作品上传</el-link
      >
    </div>
    <div style="width: 100px; padding-left: 10px; font-weight: bolder">
      <el-link  style=" font-weight: bolder" :underline="false" @click="$router.push('/user')"
        >私人博物馆</el-link
      >
    </div>
    <div style="color:#e0e0d1">&nbsp;|</div>

    <div style="width: 100px; padding-left: 10px; font-size: 14px">中文</div>
    <div style="width: 100px; padding-left: 10px; font-weight: bolder">
      <el-link  style=" font-weight: bolder" :underline="false" @click="$router.push('/Login')"
        >登录/注册</el-link
      >
    </div>
  </div>
</template>
<script>
export default {
  name: "Header.vue",
};
</script>

<style scoped>
</style>