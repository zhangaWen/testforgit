<template>
  <div class="Duplicateremoval-container">
    <el-form ref="form" label-width="100px" class="form-list">
      <el-form-item label="标题：" class="form-item">
        <el-input style="width:400px"></el-input>
      </el-form-item>
      <el-form-item label="关键字：" class="form-item">
        <el-input style="width:400px"></el-input>
      </el-form-item>
      <br/>
       <el-form-item label="时间范围：" class="form-item">
         <el-select v-model="value" style="width:200px">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <!-- 时间 -->
      <el-form-item  class="form-item">
        <el-date-picker
          v-model="value1"
          type="datetimerange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item class="form-item">
        <el-button type="primary" style="width:100px;border-radius:10px">搜索</el-button>
      </el-form-item>
      <el-form-item style="margin-left:-60px">
        <el-table
          :data="tableData"
          fit
          border>
          <el-table-column
            prop="date"
            label="标题"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="发布站点"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="所属单位">
          </el-table-column>
          <el-table-column
            prop="auto"
            label="作者">
          </el-table-column>
          <el-table-column
            prop="uptime"
            label="发布时间">
          </el-table-column>
        </el-table>
      </el-form-item>
    </el-form>
  </div>
</template>

<script type="text/ecmascript-6">
 export default {
   data() {
      return {
        // 下拉框数据
        options: [{
          value: '选项1',
          label: '最近一个月'
        }, {
          value: '选项2',
          label: '最近六个月'
        }, {
          value: '选项3',
          label: '最近一年'
        }, {
          value: '选项4',
          label: '自定义'
        }],
        value: '',
        // 时间选择器数据
        value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
        // 表格数据
        tableData: [{
          date: '主持召开中央企业经济运行座谈会',
          name: '/site/XXX',
          address: 'XXX',
          auto: "张三三",
          uptime: '2019-12-11 15:20:00'
        }, {
          date: '主持召开中央企业经济运行座谈会',
          name: '/site/XXX',
          address: 'XXX',
          auto: "张三三",
          uptime: '2019-12-11 15:20:00'
        }, {
          date: '主持召开中央企业经济运行座谈会',
          name: '/site/XXX',
          address: 'XXX',
          auto: "张三三",
          uptime: '2019-12-11 15:20:00'
        }, {
          date: '主持召开中央企业经济运行座谈会',
          name: '/site/XXX',
          address: 'XXX',
          auto: "张三三",
          uptime: '2019-12-11 15:20:00'
        }]
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .Duplicateremoval-container
    width 100%
    height 100%
    box-sizing border-box
    padding 20px 60px
    border 1px solid block
    .form-list
      width 100%
      height 100%
      .form-item
        display inline-block
</style>
