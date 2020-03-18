<template>
  <div class="Publicitydetails-container">
    <div class="word-example">
      <h1 class="example">2020年春节主题</h1>
      <el-divider class="split"></el-divider>
      <el-form label-width="auto" class="form-container">
        <el-form-item label="适用站点：" class="form-item1">
          <el-cascader :options="options"></el-cascader>
        </el-form-item>
        <el-form-item label="站点地址：">
          <el-link href="" target="_blank">http://eip.cnpc.com/index.html</el-link>
        </el-form-item>
        <el-form-item label="生效时间：">
          <el-date-picker
            v-model="value1"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
        </el-form-item>
      </el-form>
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
      isPublic: false,
      options: [
        {
          value: 'site1',
          label: '站点',
          children: [
            {
              value: 'site1-1',
              label: '站点1'
            },
            {
              value: 'site1-2',
              label: '站点2',
              children: [
                {
                  value: 'site1-2-1',
                  label: '站点2-1',
                }
              ]
            },{
              value: 'site1-3',
              label: '站点3'
            }
          ]
        }
      ],
      value1: [new Date(2020, 3, 3, 10, 10), new Date(2020, 3, 20, 10, 10)]
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
      .split
        width 90%
      .form-container
        .el-form-item
          font-size 30px
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
