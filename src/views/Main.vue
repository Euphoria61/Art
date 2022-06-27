<template>
  <div>
      <!-- 导航栏 -->
      <div><Header/></div>
      <!-- 内容 -->
    <router-view style="flex: 1"/>
       </div>
  
</template>
<script>
import Header from "@/components/Header";
export default {
  name: "Main.vue",   
  components: {
    Header,
    
 }
}
</script>

<style scoped>

</style>