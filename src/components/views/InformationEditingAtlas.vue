<template>
  <div class="InformationEditingAtlas-container">
    <div class="edit-container">
      <div class="edit-container-left">
        <input type="text" placeholder="请输入标题">
        <div class="demo-image__lazy">
          <el-image v-for="url in urls" :key="url" :src="url"></el-image>
        </div>
        <input type="text" placeholder="添加文字">
        <el-checkbox v-model="checked">统一描述</el-checkbox>
        <el-upload
          class="avatar-uploader avatar-contain"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
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
          <el-form-item style="margin-left:160px">
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
            <el-select v-model="form.region">
              <el-option label="默认流程" value="shanghai"></el-option>
              <el-option label="备稿流程" value="beijing"></el-option>
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

 export default {
    data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false,
        form: {
          name: '',
          region: '备稿流程',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        urls: [
        'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
        'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
        'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
        'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
        'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
        'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
        'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
        ],
        checked: false,
        imageUrl: ''
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
     },
      //el-upload方法
       handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .InformationEditingAtlas-container
    width 100%
    height 100%
    .edit-container
      width 100%
      height 95%
      // margin 0px auto
      display flex
      flex-wrap wrap
      justify-content center
      .edit-container-left
        width 50%
        height 100%
        box-sizing border-box
        padding 20px 10px
        border 1px solid rgba(0,0,0,0.4)
        input 
          width 100%
          height 30px
          line-height 30px
          font-size 12px
          border 1px solid gray
          margin 10px 0px
        .demo-image__lazy
          width 100%
          height 400px
          overflow auto
          .el-image
            width 100%
            height 100%
        .avatar-uploader
          width 150px
          height 150px
          border 1px dashed black
          border-radius 6px
          margin 20px 0px 0px 300px
          .el-upload
            // border 1px dashed black !important 
            // border-radius 6px
            width 100%
            height 100%
            background gray
            cursor pointer
            position relative
            overflow hidden
            &:hover
              border-color: #409EFF;
            .avatar-uploader-icon
              font-size 28px
              color #8c939d
              width 150px
              height 150px
              line-height 150px
              text-align center
            .avatar
              width 150px
              height 150px
              display block
      .edit-container-right
        width 25%
        height 100%
        box-sizing border-box
        padding 10px 20px
        border 1px solid rgba(0,0,0,0.4)
        .el-form
          .about-news
            width 100%
            height 310px
            border 1px solid rgba(0,0,0,0.2)
            h3 
              line-height 2em
              text-indent 20px
              border-bottom 1px solid rgba(0,0,0,0.2) 
            .el-textarea
              margin-top 20px
              .el-textarea__inner
                height 90px  
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
          margin 30px 0px 40px 1200px
          
</style>
