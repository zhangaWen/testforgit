<template>
  <div class="pubinformation-container">
    <div class="btns">
      <el-button type="primary" @click="goto('/home/pubinformation')">信息报送</el-button>
      <el-button @click="goto('/home/wassend')">已报送列表</el-button>
    </div>
    <el-form label-width="auto">
      <el-form-item label="站点频道">
        <el-select v-model="form.region"  placeholder="请选择" style="width: 500px">
          <el-option label="主站" value="shanghai"></el-option>
          <el-option label="销售公司" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item class="datepick">
        <el-input></el-input>
      </el-form-item>
      <el-form-item class="datepick2">
        <el-select v-model="form.date1"  placeholder="全部">
          <el-option label="最近一天" value="oneday"></el-option>
          <el-option label="最近一周" value="week"></el-option>
          <el-option label="全部" value="all"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <ul class="message-container">
      <li class="ctros">
        <el-button >报送</el-button>
        <el-button >推送</el-button>
      </li>
      <li class="message-item"  v-for="(item,index) of 10" :key="index" >
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
          <span>2020年3月2日</span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span>13:20:21</span>
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
  </div>
</template>

<script type="text/ecmascript-6">
 export default {
   data () {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      currentPage4: 1
    }
   },
   methods: {
      onSubmit() {
        console.log('submit!');
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      goto (path) {
        this.$router.push(path)
      }
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .pubinformation-container
    width 100%
    height 100%
    box-sizing border-box
    padding 20px 40px
    .btns
      width 100%
      .el-button
        margin-left 0px
        &:nth-child(1)
            background rgb(2,125,180)
    .el-form
      width 100%
      display flex
      margin 40px 0px 20px 0px
      .datepick
        .el-form-item__content
          .el-input
            width 300px
      .datepick2
        margin-left -68px
    .message-container
      list-style none 
      box-sizing border-box
      .ctros
        width 100%
        height 40px
        border none
        display block
        .el-button
          border-radius 4px 
          &:nth-child(1)
            background rgb(22,155,213)
            color white
      li
        width 70%
        height 80px
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
      width 100%
      box-sizing border-box
      padding 40px 0px 40px 300px
    
</style>
