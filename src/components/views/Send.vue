<template>
  <div class="send-container">
    <span>分类：</span>
    <el-select v-model="value" placeholder="请选择">
      <el-option
        v-for="item in options1"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <!--  -->
    <span style="margin:0px 40px">主题：</span>
    <el-input style="width:600px;height:40px"></el-input>
    <br/>
    <!-- 上传图片 -->
    <div class="up">
      <span>上传多张图片:</span>
      <el-upload
        action="#"
        list-type="picture-card"
        :auto-upload="false">
          <i slot="default" class="el-icon-plus"></i>
          <div slot="file" slot-scope="{file}">
            <img
              class="el-upload-list__item-thumbnail"
              :src="file.url" alt=""
            >
            <span class="el-upload-list__item-actions">
              <span
                class="el-upload-list__item-preview"
                @click="handlePictureCardPreview(file)"
              >
                <i class="el-icon-zoom-in"></i>
              </span>
              <span
                v-if="!disabled"
                class="el-upload-list__item-delete"
                @click="handleDownload(file)"
              >
                <i class="el-icon-download"></i>
              </span>
              <span
                v-if="!disabled"
                class="el-upload-list__item-delete"
                @click="handleRemove(file)"
              >
                <i class="el-icon-delete"></i>
              </span>
            </span>
          </div>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="">
      </el-dialog>
      <!--  -->
      <span></span>
      <el-upload
        action="#"
        list-type="picture-card"
        :auto-upload="false">
          <i slot="default" class="el-icon-plus"></i>
          <div slot="file" slot-scope="{file}">
            <img
              class="el-upload-list__item-thumbnail"
              :src="file.url" alt=""
            >
            <span class="el-upload-list__item-actions">
              <span
                class="el-upload-list__item-preview"
                @click="handlePictureCardPreview(file)"
              >
                <i class="el-icon-zoom-in"></i>
              </span>
              <span
                v-if="!disabled"
                class="el-upload-list__item-delete"
                @click="handleDownload(file)"
              >
                <i class="el-icon-download"></i>
              </span>
              <span
                v-if="!disabled"
                class="el-upload-list__item-delete"
                @click="handleRemove(file)"
              >
                <i class="el-icon-delete"></i>
              </span>
            </span>
          </div>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl2" alt="">
      </el-dialog>
      <br/>
      <!-- br --> 
    </div>
    <div>
      <el-upload
        class="upload-demo"
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :file-list="fileList"
        list-type="picture">
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
    </div>
    <div style="margin:60px 0px 0px 100px">
      <el-button>取消</el-button>
      <el-button type="primary">确定</el-button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
 export default {
   data() {
      return {
        options1: [{
          value: '选项1',
          label: '网站1'
        }, {
          value: '选项2',
          label: '网站2'}
        ],
        value: '',
        dialogImageUrl: '',
        dialogImageUrl2: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3171504138,757775911&fm=26&gp=0.jpg',
        dialogVisible: false,
        disabled: false,
        fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]

      }
    },
    methods: {
      handleRemove(file) {
        console.log(file);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      handleDownload(file) {
        console.log(file);
      },
      handlePreview(file) {
        console.log(file);
      }
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .send-container
    width 100%
    height 100%
    .up
      display flex
      margin-top 30px
      span 
        margin 0px 30px 0px 0px
</style>
