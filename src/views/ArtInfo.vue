<template>
  <div>
       <div
      style="
        margin-left: 100px;
        width: 1300px;
        height: 1700px;
        margin-top: 10px;
        flex: 1;
      "
    >
    <div style="float:left">
        <img src="../assets/images/demo.png" alt="">
    </div>
  
        <div style="float:left;margin-left:80px">
     <el-descriptions   column="1"   direction="vertical">
    <el-descriptions-item label="作品名称"><h2>MY WITCH x MAC</h2></el-descriptions-item>
    <el-descriptions-item label="创作者"><h2>19van x Frank Wong</h2></el-descriptions-item>
    <el-descriptions-item label="参考价格"><h2>9999 USDT</h2></el-descriptions-item>
     
    <el-descriptions-item label="作品信息"><h3>3483 x 3483 px.IMAGE (1178533KB)</h3></el-descriptions-item>
    <el-descriptions-item label="作品描述"><p>MY WITCH 我的魔鬼女，是十九番事务所<br>推出的面向酷盖的“元宇宙IP之一”，魔鬼女在未来将一步步带领大<br>家在虚拟世界里穿梭，通关。每个酷盖内心都有个<br>又邪又叛逆的女魔鬼！该IP由十九番和黄一凡<br>两位潮玩艺术家于2020年联合创作推出。</p></el-descriptions-item>
    <el-descriptions-item label="创作者信息">十九番 ，英文笔名19van，原名魏晨耕，出生于1981年福州，<br>中国潮玩艺术家、漫画作家，“番画廊”主理人，其漫画代<br>表作《兔子帮》2007年连载至今，共出版了37本，总销<br>量超过500万册，是中国大陆第一部由长篇漫画改<br>编成动画片的作品，并被迪斯尼购买播放。2016年后旅居杭州<br>、东京、洛杉矶等城市，成为潮玩艺术家，开始创作<br>Mr.hoshan”“番怪兽”“toree”“my witch”等潮玩艺术作品。<br> 黄一凡，毕业于江苏<br>大学艺术学院，潮玩设计师，3d设计师，产品设计师。<br>从设计公司离开后开始从事潮流艺术设计工作。<br>时尚、潮流爱好者，特别喜欢用潮流元素创作玩具。</el-descriptions-item>

  </el-descriptions>
   <el-button style="margin-left:30px" type="success" round>购买</el-button>
   <el-button type="warning" icon="i-share" circle></el-button>
   <el-button type="warning" icon="i-star" circle></el-button>
   
  </div>
  <div >
      <el-table  :data="tableData" >
    <el-table-column prop="date" label="事件" width="300" />
    <el-table-column prop="name" label="价格" width="300" />
    <el-table-column prop="address" label="拥有者"  width="300" />
    <el-table-column prop="address" label="日期" />
  </el-table>
  </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
img{
    width: 800px;
    height: 800px;
}
.el-descriptions__body {
    color: var(--el-text-color-regular);
    background-color: #fff;
    margin-left: 30px;
}
.el-table {
    text-align: center;
}
</style>