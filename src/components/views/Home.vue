<template>
  <div class="home-container">
    <div class="home-left">
       <el-row class="nav-container">
         <el-col class="nav-list" :span="24">
           <el-menu class="el-menu-vertical-demo" default-active="2" active-text-color="#000">
             <!-- 第一项 -->
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>导航一</span>
                </template>
                <el-menu-item-group title="分组1">
                  <!-- <template slot="title">分组一</template> -->
                  <el-menu-item index="1-1"  @click="goto('/home/allmessage')">全部新闻</el-menu-item>
                  <el-menu-item index="1-2"  @click="goto('/home/wait')">代办审批</el-menu-item>
                  <el-menu-item index="1-3"  @click="goto('/home/ms')">信息发布</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                  <el-menu-item index="1-3" @click="goto('/home/duplicateremoval')">排重检查</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组3">
                  <el-menu-item index="1-4-1" @click="goto('/home/vertify')">审核</el-menu-item>
                  <el-menu-item index="1-4-2" @click="goto('/home/library')">素材库</el-menu-item>
                  <el-menu-item index="1-4-2" @click="goto('/home/newsdetail')">新闻发布详情</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <!-- 第二项  -->
              <el-menu-item index="2" @click="goto('/home/desk2')">
                <i class="el-icon-menu"></i>
                <span slot="title">采编平台</span>
              </el-menu-item>
              <!-- 第三项 -->
              <el-menu-item index="3"  @click="goto('/home/edit')">
                <i class="el-icon-document"></i>
                <span slot="title">审核图文</span>
              </el-menu-item>
              <!-- 第四项      -->
              <el-menu-item index="4"  @click="goto('/home/update')">
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
              </el-menu-item>
               <!-- 第五项      -->
              <el-menu-item index="5"  @click="goto('/home/pubinformation')">
                <i class="el-icon-edit-outline"></i>
                <span slot="title">信息报送</span>
              </el-menu-item>
              <el-menu-item index="6"  @click="goto('/home/publicdetails')">
                <i class="el-icon-thumb"></i>
                <span slot="title">宣传效果详情</span>
              </el-menu-item>
              <el-menu-item index="7"  @click="goto('/home/publicresult')">
                <i class="el-icon-document-copy"></i>
                <span slot="title">宣传效果编辑</span>
              </el-menu-item>
               <el-menu-item index="8"  @click="goto('/home/publicpreview')">
                <i class="el-icon-video-camera-solid"></i>
                <span slot="title">宣传模板预览</span>
              </el-menu-item>
              <el-menu-item index="9"  @click="goto('/home/publicmanagement')">
                <i class="el-icon-s-marketing"></i>
                <span slot="title">宣传管理</span>
              </el-menu-item>
              <el-menu-item index="9"  @click="goto('/home/inforeditphotext')">
                <i class="el-icon-news"></i>
                <span slot="title">信息编辑_图文</span>
              </el-menu-item>
              <el-menu-item index="9"  @click="goto('/home/inforeditatlas')">
                <i class="el-icon-news"></i>
                <span slot="title">信息编辑_图集</span>
              </el-menu-item>
           </el-menu>
         </el-col>
       </el-row>
    </div>
    <div class="home-right">
      <div class="home-right-head">
        <Header/>
      </div>
      <div class="home-right-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
 import Header from '../pages/Header.vue'
 export default {
   data () {
     return {
       msg: '你好啊',
     }
   },
   components: {
     Header,
   },
   methods: {
     goto (path) {
       this.$router.push(path)
     }
   },
   mounted () {

   }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .home-container
    width 100%
    height 100%
    display flex
    align-items center
    .home-left
      width 250px
      height 100%
      // overflow hidden
      // background-color gray
      .nav-container
        width 100%
        height 100%
        border none
        .nav-list
          width 100%
          height 100%
          // background gray 
          .el-menu
            height 100%
    .home-right
      flex 1
      height 100%
      // background-color red
      .home-right-head
        width 100%
        height 50px
        line-height 50px
        text-align center
        box-sizing border-box
        border-bottom 1px solid #336699
        margin-bottom 10px
        padding 0px 10px
        background-color rgba(34,56,78,1)
      .home-right-content
        padding 10px
        box-sizing border-box
        width 100%
        height 93vh

</style>
