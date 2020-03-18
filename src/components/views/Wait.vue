<template>
  <div class="wait-container">
    <div class="titi">
      代办审批
    </div>
    <!-- 分割线 -->
    <el-divider></el-divider>
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="信息" name="first">
        <!-- 分列布局 --messagelist-->
        <ul class="message-container">
          <li class="message-item" v-for="(item,index) of 10" :key="index">
            <!-- 复选框 -->
            <el-checkbox class="chex"></el-checkbox>
            <!-- 图片 -->
            <img src="XX" >
            <!-- 信息  -->
            <div class="mess">
              <p>标题名称</p>
              <span>一段假想的简介，这是一段比较长的简介。</span>
            </div>
            <!-- 作者 -->
            <div class="auot">
              <p>作者：吴加好</p>
              <span>人物专访</span>
            </div>
            <!-- 状态 -->
            <div class="isPass">
              <p><i class="el-icon-view"></i> 待审核</p>
              <span>17分钟前</span>
            </div>
          </li>
        </ul>
        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400" :page-sizes="[10, 20, 30, 40]">
        </el-pagination>
        <!-- <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage2"
          :page-sizes="[10, 20]"
          :page-size="100"
          layout="sizes, prev, pager, next"
          :total="1000">
        </el-pagination> -->
      </el-tab-pane>
      <el-tab-pane label="报送" name="second" disabled></el-tab-pane>
      <el-tab-pane label="互动" name="third" disabled></el-tab-pane>
      <el-tab-pane label="专题" name="fourth" disabled></el-tab-pane>
    </el-tabs>
    <!-- 搜索框 -->
    <div class="search">
      <el-input style="width:500px;height:40px;margin: 0px 20px 0px 0px " placeholder="输入审批意见"></el-input>
      <el-button >通过</el-button>
      <el-button type="primary">驳回</el-button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
 export default {
    data() {
      return {
        activeName: 'first',
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 1
      };
    },
    methods: {
      handleClick() {
        // console.log(tab,event)
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
 .wait-container
  width 100%
  height 100%
  position relative
  background-color white
  .titi
    height 60px
    line-height 60px
    text-indent 20px
    margin-bottom -20px
  .search
    position absolute
    right 100px
    top 84px
  .message-container
    list-style none 
    box-sizing border-box
    padding 0px 60px
    margin-bottom 30px
    width 80%
    display flex
    justify-content space-around
    flex-wrap wrap
    li
      width 100%
      height 80px
      margin-left 60px
      display flex
      align-items center
      justify-content space-between
      border-bottom 1px solid rgba(0,0,0,0.1) 
      .chex
        margin-right 20px
      img 
        width 40px
        height 40px
        vertical-align middle
        // margin-top -20px
      .mess
        p
          font-size 18px
          color black 
        span 
          font-size 14px
          color rgba(0,0,0,0.4)
      .auot
        color gray
        p
          font-size 12px
        span 
          font-size 12px 
      .isPass
        font-size 16px
        p
          color rgba(0,0,0,0.2)
          i 
            color yellow
        span 
          color rgba(0,0,0,0.2)
          font-size 12px
  .el-pagination
    width 60%
    display flex
    justify-content space-around
    box-sizing border-box
    padding 20px 0px 40px 100px
        
</style>
