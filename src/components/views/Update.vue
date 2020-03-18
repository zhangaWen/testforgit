<template>
  <div class="update-container">
    <div class="head">
      <el-button type="text" @click="open" class="send btn">报送</el-button>
      <el-button type="text" @click="open" class="push btn">推送</el-button>
    </div>
    <div class="update-content">
      <input type="text" placeholder="xxx主持召开中央企业经济运行座谈会">
      <div class="iconlist">
        <i class="el-icon-time"></i><span>时间</span>
        <i class="el-icon-user"></i><button>海纳</button>
        <el-button type="primary" icon="el-icon-edit" class="upbtn"></el-button>
      </div>
      <div class="artic">
        <p>这是一段新闻摘要。。。。。</p>
        <p>这是新闻的详细内容,这是新闻的详细内容，这是新闻的详细内容，这是新闻的详细内容，这是新闻<br/>
        的详细内容<br/>
        。。。<br/>
        </p><br/>
        <!-- tupian -->
        <div class="block">
          <el-image :src="src" style="width:800px;height:400px;">
            <div slot="placeholder" class="image-slot">
              加载中<span class="dot"></span>
            </div>
          </el-image>
        </div>
        <!--  -->
        <p>这是新闻的详细内容,这是新闻的详细内容，这是新闻的详细内容，这是新闻的详细内容，这是新闻<br/>
        的详细内容<br/>
        。。。<br/>
        </p>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
 export default {
   data() {
      return {
        src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
      }
    },
   methods: {
      open() {
        this.$prompt('请输入邮箱', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
          inputErrorMessage: '邮箱格式不正确'
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: '你的邮箱是: ' + value
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        });
      }
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .update-container
    width 100%
    height 100%
    .head
      box-sizing border-box
      width 100%
      height 60px
      padding-left 20px
      line-height 60px
      background rgba(0,0,0,0.1) 
      .btn
        width 8em
        border 1px solid blue
      .send
        background blue
        color white
        border-right  none
        margin-right -10px
      .push
        background white
        color black
        border-left none 
    .update-content
      box-sizing border-box
      width 100%
      height 95%
      padding 20px
      input 
        width 60%
        height 40px
        font-size 30px
        border 1px solid rgba(0,0,0,0.3) 
        margin-bottom 10px
      .iconlist
        color rgba(0,0,0,0.2)
        i 
          margin-right 10px
        span 
          margin-right 10px
        button 
          background rgba(0,0,0,0.2)
          color rgba(0,0,0,0.2) 
          border none 
        .upbtn
          width 3px
          height 3px
          line-height 3px
          background white
      .artic
        font-size 30px 
        line-height 1.5em

</style>
