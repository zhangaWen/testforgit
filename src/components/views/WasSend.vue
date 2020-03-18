<template>
  <div class="wassend-container">
    <div class="btns">
      <el-button @click="goto('/home/pubinformation')">信息报送</el-button>
      <el-button @click="goto('/home/wassend')">已报送列表</el-button>
    </div>
    <el-form label-width="auto" class="form-container">
      <el-form-item label="报送站点：" class="item1">
        <el-select v-model="form.region" placeholder="请选择">
          <el-option label="总站" value="shanghai"></el-option>
          <el-option label="分站" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="标题：" class="item2">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="状态：" class="item3">
        <el-select v-model="form.region2" placeholder="待审核">
          <el-option label="待审核" value="shanghai"></el-option>
          <el-option label="审批通过" value="beijing"></el-option>
          <el-option label="审批驳回" value="beijing"></el-option>
          <el-option label="已发布" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="报送日期：" class="item4">
        <el-col :span="16">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">--</el-col>
        <el-col :span="6">
          <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
        </el-col>
      </el-form-item>
      <el-form-item class="item5">
        <el-button type="primary">查询</el-button>
        <el-button>导出</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="link" label="标题【原文链接】" width="280" @click="goto('/home/newsdetail')"></el-table-column>
      <el-table-column prop="site" label="报送站点" width="180"></el-table-column>
      <el-table-column prop="auto" label="作者"></el-table-column>
      <el-table-column prop="controler" label="报送人"></el-table-column>
      <el-table-column prop="state" label="状态"></el-table-column>
      <el-table-column prop="timer" label="报送时间" width="200"></el-table-column>
      <el-table-column prop="action" label="操作"></el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="10"
      background
      layout="total, sizes, prev, pager, next, jumper"
      :total="400" class="clip-page">
    </el-pagination>
  </div>
</template>

<script type="text/ecmascript-6">
 export default {
   data () {
     return {
      isShow: false,
      form: {
        name: '',
        region: '',
        region2: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      tableData: [{
        link: '这是一个新闻标题',
        site: '总站/新闻中心/人物采访',
        auto: '',
        controler: '',
        state: '待审核',
        timer: '2020年3月1日 14:20:13',
        action: '删除'
      },
      {
        link: '这是一个新闻标题这是一个新闻标题',
        site: '总站/新闻',
        auto: '',
        controler: '',
        state: '审核通过',
        timer: '2020年3月1日 14:20:13',
        action: '删除'
      }, 
      {
        link: '这是一个新闻标题这是一个新闻标题',
        site: '总站/新闻',
        auto: '',
        controler: '',
        state: '审核通过',
        timer: '2020年3月1日 14:20:13',
        action: '删除'
      }, 
      {
        link: '这是一个新闻标题这是一个新闻标题',
        site: '总站/新闻',
        auto: '',
        controler: '',
        state: '已发布',
        timer: '2020年3月1日 14:20:13',
        action: '删除'
      },
      {
        link: '这是一个新闻标题这是一个新闻标题',
        site: '总站/新闻',
        auto: '',
        controler: '',
        state: '已发布',
        timer: '2020年3月1日 14:20:13',
        action: '删除'
      }, 
      ],
      currentPage4: 1
     }
   },
   methods: {
     goto (path) {
       this.$router.push(path)
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
  .wassend-container
    width 100%
    height 100%
    box-sizing border-box
    padding 20px 40px
    .btns
      width 100%
      box-sizing border-box
      padding 0px 0px 20px 0px
      border-bottom 1px solid rgba(0,0,0,0.1)
      .el-button
        margin-left 0px
        &:nth-child(2)
            background rgb(2,125,180)
            color white
    .form-container
      width 90%
      margin-bottom 40px
      display flex
      flex-wrap wrap
      .item1
        .el-form-item__content
          .el-select
            width 500px
      .item2
        .el-form-item__content
          .el-input
            width 500px
      .item3
        .el-form-item__content
          .el-select
            width 100px
      .item4
        .el-form-item__content
          .el-col
            width 300px
          .line
            text-align center
            width 20px
      .item5
        margin-left 30px
    .clip-page
      // background gray
      width 100%
      box-sizing border-box
      margin 60px 0px
      padding 0px 500px 0px 0px
      display flex
      justify-content space-around

</style>
