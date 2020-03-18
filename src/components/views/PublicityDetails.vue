<template>
  <div class="Publicitydetails-container">
    <div class="word-example">
      <h1 class="example">2020年春节主题</h1>
      <div class="ctrols">
        <!-- 信息 -->
        <div class="icon-list">
          <i class="el-icon-time">2017-1-12 12:12</i>
          <i class="el-icon-user">海纳</i>
          <a href="javascript:;">
            <i class="el-icon-edit" @click="goto('/home/edit')">编辑</i>
          </a>
        </div>
      </div>
      <el-divider class="split"></el-divider>
      <div class="introduce">
        <h2>适用站点：主站首页  http://eip.cnpc.com/index.html</h2>
        <h3>生效时间：2020年1月24日 00:00:00 ~ 2020年2月9日 23:59:59</h3>
      </div>
      <div class="code">
        <div class="code-head">
          <h1>代码脚本</h1>
          <el-button type="primary">预览</el-button>
        </div>
        <textarea class="textarea">代码片段</textarea>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
 export default {
   data () {
     return {
       isPublic: false
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
  .Publicitydetails-container
    width 100%
    height 100%
    .word-example
      width 100%
      box-sizing border-box
      padding 10px 40px
      .example
        margin-bottom 20px
        font-size 40px
      .ctrols
        display flex
        justify-content space-between
        width 80%
        .icon-list
          box-szing border-box
          padding-top 12px
          width 20%
          display flex
          justify-content space-around
          align-items baseline
          color gray 
          font-size 12px
        .btns
          width 45%
          .el-button
            margin-left 0px !important
        .public
          .el-button
            margin-left 0px !important
      .split
        width 90%
      .introduce
        width 100%
        box-sizing border-box
        padding 40px 0px
        h2,h3
          line-height 2em
          color rgba(0,0,0,0.8)
          font-size 26px
      .code
        width 100%
        .code-head
          width 100%
          margin-bottom 40px
          display flex
          justify-content space-between
          .el-button
            width 180px
        .textarea
          width 100%
          height 400px
          box-sizing border-box
          padding 20px 20px
          border 1px solid rgba(0,0,0,0.2)
</style>
