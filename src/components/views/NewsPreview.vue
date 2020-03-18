<template>
  <div class="newpreview-container">
    <el-form label-width="auto" class="form-container">
      <el-form-item class="form-item1">
        <h1>xxx主持召开中央企业经济运行座谈会</h1>
      </el-form-item>
      <el-form-item class="form-item2">
        <div class="icon-list">
          <i class="el-icon-time">2017-1-12 12:12</i>
          <i class="el-icon-user">海纳</i>
          <a href="javascript:;">
            <i class="el-icon-edit" @click="goto('/home/edit')">编辑</i>
          </a>
        </div>
      </el-form-item>
      <el-form-item class="form-item3">
        <el-divider></el-divider>
      </el-form-item>
      <el-form-item class="form-item4">
        <h3>这是一段新闻摘要。。。。。</h3>
        <pre class="pref">
  这是新闻的详细内容,这是新闻的详细内容，这是新闻的详细内容，这是新闻的详细内容，这是新闻
  的详细内容
  。。。
        </pre>
        <el-image :src="src"></el-image>
        <p class="site-fit">适用站点：主站首页  http://eip.cnpc.com/index.html</p>
      </el-form-item>
    </el-form>
  </div>
</template>

<script type="text/ecmascript-6">
 export default {
   data () {
     return {
      isShow: false,
      src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
     }
   },
   methods: {
     goto (path) {
       this.$router.push(path)
     }
   }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .newpreview-container
    width 100%
    height 100%
    box-sizing border-box
    padding 20px 60px
    .form-container
      width 100%
      .form-item1
        width 100%
        .el-form-item__content
          h1
            font-size 40px
      .form-item2
        width 100%
        margin-bottom 0px
        .el-form-item__content
          .icon-list
            box-szing border-box
            width 18%
            display flex
            justify-content space-around
            align-items baseline
            color gray 
            font-size 12px
      .form-item3
        width 100%
        margin-bottom 0px
        .el-form-item__content
          .el-divider
            width 80%
      .form-item4
        width 100%
        margin -20px 0px 0px 0px
        box-sizing border-box
        padding 20px 40px
        font-size 20px
        color rgba(0,0,0,0.7)
        .el-form-item__content
          width 80%
          h3
            font-size 20px
            color rgba(0,0,0,0.7)
          .pref
            font-size 20px
            color rgb(64,64,64)
          .el-image
            width 600px
            height 400px
          .site-fit
            font-size 20px
</style>
