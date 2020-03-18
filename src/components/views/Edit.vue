<template>
  <div class="edit-max">
    <div class="edit-container">
      <div class="edit-container-left">
        <input type="text" placeholder="XXXXXXXXXX">
        <Uedit/>
      </div>
      <div class="edit-container-right">
        <el-form label-width="auto">
          <el-form-item label="活动名称" >
              <!-- <el-upload
                action="https://jsonplaceholder.typicode.com/posts/"
                list-type="picture-card"
                :on-preview="handlePictureCardPreview"
                :on-remove="handleRemove" style="width:30px;height:30px">
                <i class="el-icon-plus"></i>
              </el-upload>
              <el-dialog :visible.sync="dialogVisible">
                <img width="30%" :src="dialogImageUrl" alt="">
              </el-dialog> -->
              <div style="width:30px;height:30px;line-height:30px;text-align:center;border: 1px dashed black;margin-top:5px">
                +
              </div>
          </el-form-item>
          <el-form-item label="摘要">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="作者">
            <el-input placeholder="张三"></el-input>
          </el-form-item>
          <el-form-item label="所属单位">
            <el-input placeholder="中国石油勘探开发研究院"></el-input>
          </el-form-item>
          <el-form-item label="联系电话">
            <el-input placeholder="67891234"></el-input>
          </el-form-item>
          <el-form-item label="关键字">
            <el-input placeholder="座谈会 经济 召开"></el-input>
          </el-form-item>
          <el-form-item style="margin-left:2  20px">
            <el-button type="primary">抽取关键字</el-button>
          </el-form-item>
          <el-form-item label="站点/频道">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="勘探研究院" value="shanghai"></el-option>
              <el-option label="华北销售公司" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <div class="about-news">
            <h3>相关新闻</h3>
            <el-input type="textarea"></el-input>
          </div>
        </el-form>
      </div>  
      <div class="btns">
        <el-button type="primary" @click="goto('/home/duplicateremoval')">排重搜索</el-button>
        <el-button>校验</el-button>
        <el-button @click="goto('/home/newspreview')">预览</el-button>
        <el-button>保存</el-button>
      </div>
      <div class="check-box">
        <el-form label-width="auto">
          <el-form-item label="审核流程">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="勘探研究院" value="shanghai"></el-option>
              <el-option label="华北销售公司" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <el-steps :active="1" class="steps">
          <el-step title="初稿提交" icon="el-icon-info"></el-step>
          <el-step title="初审" icon="el-icon-info"></el-step>
          <el-step title="复审" icon="el-icon-info"></el-step>
          <el-step title="发布" icon="el-icon-info"></el-step>
        </el-steps>
        <el-button type="primary">提交审核</el-button>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Uedit from '../pages/VueUEDitor.vue'
 export default {
   components: {
     Uedit,
   },
    data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      goto (path) {
       this.$router.push(path)
     }
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .edit-max
    width 100%
    height 100%
    .edit-container
      width 100%
      height 95%
      display flex
      flex-wrap wrap
      justify-content center
      .edit-container-left
        width 60%
        height 100%
        box-sizing border-box
        padding 20px 20px
        border 1px solid rgba(0,0,0,0.4)
        input 
          width 90%
          font-size 20px
          height 40px
          border 1px solid gray
          margin-bottom 20px
      .edit-container-right
        width 25%
        height 100%
        box-sizing border-box
        padding 20px 10px
        background rgba(88,88,99,0.1)
        .el-form
          .about-news
            width 100%
            height 320px
            // border 1px solid rgba(0,0,0,0.2)
            h3 
              line-height 2em
              text-indent 20px
              border 1px solid rgba(0,0,0,0.4) 
            .el-textarea
              width 100%
              height 300px
              margin-top 20px
              .el-textarea__inner
                min-height 100%   
      .btns
        width 100% 
        box-sizing border-box
        margin 40px 0px
        padding-left 900px 
      .check-box
        width 100%
        box-sizing border-box
        margin 20px 0px
        .el-form
          margin-left 120px
        .el-steps
          width 80%
          box-sizing border-box
          padding 20px
          margin 0px auto
        .el-button
          margin 30px 0px 40px 1380px
          
</style>
