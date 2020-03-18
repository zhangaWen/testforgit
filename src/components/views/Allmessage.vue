<template>
  <div class="allmessage-container">
    <span>站点/频道:</span>
    <!-- 下拉列表 -->
    <el-select v-model="value" placeholder="请选择" style="margin-left:20px; width:800px;height:40px;">
      <el-option
        v-for="item in options1"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <br/>
    <!-- 标题 -->
    <el-input v-model="input" placeholder="请输入内容" style="width:300px;height:40px;margin:20px 20px 0px 0px"></el-input>
    <el-select v-model="value1" placeholder="已发布">
      <el-option
        v-for="item in options2"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <!-- 时间选择器 -->
    <span style="margin: 0px 20px">发布日期</span>
    <el-date-picker
      v-model="pickerOptions.dat1"
      type="daterange"
      align="right"
      unlink-panels
      range-separator="~"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      :picker-options="pickerOptions">
    </el-date-picker>
    <el-button type="primary" style="margin-left:20px;">查询</el-button>
    <el-button>导出</el-button>
    <br/>
    <!-- 信息列表 -->
    <ul class="message-container">
      <li class="ctros">
        <el-button >编辑属性</el-button>
        <el-button >删撤</el-button>
        <el-button >回复</el-button>
        <el-button >归档</el-button>
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
   data() {
      return {
        options1: [{
          value: '选项1',
          label: '主站'
        }, {
          value: '选项2',
          label: '销售公司'
        }],
        options2: [{
          value: '选项1',
          label: '已撤稿'
        }, {
          value: '选项2',
          label: '已归档'
        }],
        value: '',
        value1: '',
        input: '标题',
        pickerOptions: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }],
          dat1: ''
        },
        currentPage4: 1
      }
    },
    methods: {
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

  .allmessage-container
    width 100%
    height 100%
    .message-container
      list-style none 
      box-sizing border-box
      padding 20px 0px 0px 40px
      .ctros
        width 100%
        height 40px
        border none
        display block
        .el-button
          margin-left 0px
          border-radius 4px 
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
