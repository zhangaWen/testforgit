<template>
  <div class="librarydetail-container">
    <div class="heade-title">
      <p><span>分类：员工风采</span></p>
      <p><span>标题：xx活动照片</span></p>
    </div>
    <div class="picture-wall">
      <!-- <img src="XXXX" v-for="(item, index) in 20" :key="index"> -->
      <el-image 
        style="width: 150px; height: 150px"
        :src="url" 
        :preview-src-list="srcList" v-for="(item, index) in 20" :key="index">
      </el-image>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
 export default {
   data() {
      return {
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        srcList: [
          'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
        ]
      }
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .librarydetail-container
    width 100%
    height 100%
    // background gray 
    box-sizing border-box
    padding 40px 60px
    .heade-title
      height 40px
      width 40%
      font-size 26px
      display flex
      justify-content space-between
      margin-bottom 20px
    .picture-wall
      width 80%
      height 100%
      box-sizing border-box
      padding 20px 40px
      display flex
      flex-wrap wrap
      justify-content space-around
      img 
        margin 20px 20px
        width 130px
        height 130px

</style>
