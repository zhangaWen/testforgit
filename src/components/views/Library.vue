<template>
  <div class="library-container">
    <!-- 最近上传的素材 -->
    <div class="library-search">
      <div class="search-container">
        <h3>最近上传素材</h3>
        <!-- 搜索框 -->
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="分类">
            <el-select v-model="formInline.region" placeholder="请选择">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="关键字">
            <el-input v-model="formInline.user" placeholder="输入建议" style="width: 300px"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">搜索  </el-button>
          </el-form-item>
        </el-form>
      </div>
      <!--上传素材列表项 -->
      <div class="search-add">
        <div class="library-item add" @click="goto('/home/send')">
          新增素材
        </div>
        <div class="library-item" v-for="(item, index) in 7" :key="index">
          <div class="picturList">
            <img src="XXX" class="picture-item" @click="goto('/home/libdetail')" v-for="(item, index) in 3" :key="index">
          </div>
          <div class="active-name">
            <p>XXX活动名称</p>
          </div>
          <div class="public-time">
            <span>员工风采</span>
            <span>17分钟前</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 
      最近发布的新闻素材
     -->
    <div class="library-search">
      <div class="search-container">
        <h3>最新发布的新闻素材</h3>
        <!-- 搜索框 -->
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="关键字">
            <el-input v-model="formInline.user" placeholder="输入建议" style="width:500px"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">搜索  </el-button>
          </el-form-item>
        </el-form>
      </div>
      <!--上传素材列表项 -->
      <div class="search-add">
        
        <div class="library-item" v-for="(item, index) in 8" :key="index">
          <div class="picturList">
            <img src="XXX" class="picture-item" @click="goto('/home/libdetail')" v-for="(item, index) in 3" :key="index">
          </div>
          <div class="active-name">
            <p>XXX活动名称</p>
          </div>
          <div class="public-time">
            <span>员工风采</span>
            <span>17分钟前</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
 export default {
   data() {
      return {
        formInline: {
          user: '',
          region: ''
        }
      }
    },
     methods: {
     goto (path) {
       this.$router.push(path)
     }
   },
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .library-container
    width 100%
    height 100%
    box-sizing border-box
    padding 10px 80px  
    .library-search
      width 100%
      margin-bottom 20px
      .search-container
        position relative
        h3
          width 100%
          height 50px
          border-bottom 2px solid rgba(0,0,0,0.2)
        .demo-form-inline
          position absolute  
          right 200px
          top 0px  
      .search-add
        display flex 
        flex-wrap wrap
        .library-item
          width 25%
          height 200px
          // background gray 
          box-sizing border-box
          border 1px solid gray 
          .picturList
            width 100%
            height 100px
            display flex
            justify-content space-around
            align-items center 
            margin-bottom 10px
            img 
              width 60px
              height 60px
          .active-name
            width 100%
            height 40px
            line-height 20px
            font-size 12px
            p
              text-indent 1.6em
          .public-time
            width 100%
            box-sizing border-box
            padding 0px 20px
            color gray
            font-size 14px 
            display flex
            justify-content space-between
        .add
          line-height 200px
          text-align center
        



</style>
