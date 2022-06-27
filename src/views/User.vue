<template>
  <div>
   <!-- 私人博物馆 （个人中心） -->
   <!-- 功能有待开发 -->
    <div style="display: flex">
   <Aside/>
  <router-view style="flex: 1"/>
  </div>
   </div>
      
  
</template>
<script>

import Aside from "@/components/Aside";
export default {
  name: "User.vue", 
   components: {
    Aside
    
 },
  data(){
    return{
        form:{}
        } 
  },

}
</script>

<style scoped>

</style>