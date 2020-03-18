<template>
  <div class="PublicPreview-container">
    <div class="word-example">
      <h1 class="example">2020年春节主题</h1>
      <el-divider class="split"></el-divider>
      <div class="introduce">
        <h2>1：效果图</h2>
        <el-image style="width:500px;height:300px"></el-image>
      </div>
      <div class="introduce">
        <h2>2：适用范围</h2>
        <p>本文用于示范，展示一些不同类型的内容，在文章中应该如何展示。包括：标题，段落，链接，附件，代码块，图片，表格内容。下载 <el-link type="primary">Axure文件</el-link></p>
      </div>
      <div class="code">
        <div class="code-head">
          <h1>代码示例</h1>
          <el-button type="primary">复制代码</el-button>
        </div>
        <textarea class="textarea">复制代码</textarea>
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
  .PublicPreview-container
    width 100%
    height 100%
    box-sizing border-box
    .word-example
      width 100%
      box-sizing border-box
      padding 10px 40px
      .example
        margin-bottom 50px
        font-size 40px
      .split
        width 95%
        color rgba(0,0,0,0.1)
      .introduce
        width 100%
        box-sizing border-box
        padding 40px 0px
        h2
          line-height 2em
          color rgba(0,0,0,0.8)
          font-size 26px
          margin-bottom 30px
        p
          width 38%
          line-height 3em
      .code
        width 60%
        .code-head
          width 100%
          margin-bottom 20px
          display flex
          justify-content space-between
          .el-button
            width auto
        .textarea
          width 100%
          height 400px
          box-sizing border-box
          padding 20px 20px
          border 1px solid rgba(0,0,0,0.2)
</style>
