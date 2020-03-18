<template>
  <div class="newsdetail-container">
    <div class="word-example">
      <h1 class="example">文档示例</h1>
      <div class="ctrols">
        <!-- 信息 -->
        <div class="icon-list">
          <i class="el-icon-time">2017-1-12 12:12</i>
          <i class="el-icon-user">海纳</i>
          <a href="javascript:;">
            <i class="el-icon-edit" @click="goto('/home/edit')">编辑</i>
          </a>
        </div>
        <!-- 门户按钮选择 -->
        <div class="btns">
          <el-button type="primary">PC端预览</el-button>
          <el-button>微门户预览</el-button>
          <el-button>微信预览</el-button>
          <el-button>微博预览</el-button>
        </div>
        <!-- 发布渠道 -->
        <div class="public">
          <el-button type="primary">发布</el-button>
          <el-button>多渠道发布</el-button>
        </div>
      </div>
      <el-divider class="split"></el-divider>
      <!-- 提示 -->
      <div class="advise">
        文章浏览宽度默认为640px。如需调整，为了保障用户的阅读体验，建议不要超过720px；
      </div>
      <div class="directions">
        <h1 class="basic">1. 基本样式示例</h1>
        <p class="synopsis">
          本文用于示范，展示一些不同类型的内容，在文章中应该如何展示。包括：标题，段落，链接，附件，
          代码块，图片，表格内容。下载<a>Axure文件</a>
        </p>
        <h2>1.1 段落和列表</h2>
        <p class="order">有序列表</p>
        <ol class="order-list">
          <li>1：段落和列表示列</li>
          <li>2：图片示例</li>
          <li>3：表格示例</li>
          <li>4：代码块示例</li>
        </ol>
        <p class="order">无序列表</p>
        <ul class="no-order-list">
          <li>段落和列表示列</li>
          <li>图片示例</li>
            <ul class="no-order-list2">
              <li>小图示例</li>
            </ul>
          <li>表格示例</li>
          <li>代码块示例</li>
        </ul>
        <h2 class="img-examp">1.2：图片实例</h2>
        <el-image :src="src"></el-image>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
 export default {
   data () {
      return {
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
  .newsdetail-container
    width 100%
    height 100%
    .word-example
      width 100%
      box-sizing border-box
      padding 10px 40px
      .example
        margin-bottom 20px
        letter-spacing 20px
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
      .advise
        border-left 4px solid gray
        text-indent 40px 
        color gray
        margin-bottom 20px
      .directions
        width 100%
        .basic
          font-size 30px
          color rgba(0,0,0,0.8)
        .synopsis
          width 50%
          line-height 3em
          padding 0px 36px
          color gray
        .order
          line-height 3em 
          margin 10px 0px
        .order-list
          list-style none
          color gray 
          padding 10px 0px 30px 30px
        .no-order-list
          li
            line-height 2em
            text-indent 40px
            color gray 
          .no-order-list2
            li 
              line-height 2em 
              list-style initial
              text-indent 60px
        .img-examp
          margin 20px 0px
        .el-image
          width 500px
          height 400px
          

         


</style>
