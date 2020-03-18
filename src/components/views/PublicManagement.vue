<template>
  <div class="Publicmanagement-container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>常用模板</span>
        <el-button style="float: right; padding: 3px 0" type="text">新建</el-button>
      </div>
      <div class="cart-box">
        <div class="card-item" v-for="(item, index) in 6" :key="index" @click="goto('/home/publicpreview')">
          <el-image class="img"></el-image>
          <p>飘窗设计</p>
        </div>
      </div>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>宣传效果</span>
      </div>
      <div class="tabel-container">
        <el-form label-width="auto" class="tabel-part1">
          <el-form-item label="站点/频道">
            <el-cascader v-model="value" :options="options" style="width:400px"></el-cascader>
          </el-form-item>
          <el-form-item label="生效日期">
             <el-date-picker type="datetimerange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">查询</el-button>
            <el-button>导出</el-button>
          </el-form-item>
        </el-form>
        <div class="tabel-part2">
          <el-button type="primary" icon="el-icon-plus">新建</el-button>
        </div>
        <div class="tabel-part3">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="site" label="站点频道" width="140" @click="goto('/home/newsdetail')"></el-table-column>
            <el-table-column prop="address" label="地址" width="180"></el-table-column>
            <el-table-column prop="name" label="名称"></el-table-column>
            <el-table-column prop="time" label="生效时间" width="280"></el-table-column>
            <el-table-column prop="clickNum" label="点击量"></el-table-column>
            <el-table-column prop="state" label="状态"></el-table-column>
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
      </div>
    </el-card>
  </div>
</template>

<script type="text/ecmascript-6">
 export default {
   data () {
     return {
       isFirst: false,
       options: [
        {
          value: 'site1',
          label: '站点',
          children: [
            {
              value: 'site1-1',
              label: '站点1'
            },
            {
              value: 'site1-2',
              label: '站点2',
              children: [
                {
                  value: 'site1-2-1',
                  label: '站点2-1',
                }
              ]
            },{
              value: 'site1-3',
              label: '站点3'
            }
          ]
          }
      ],
      value: '',
      currentPage4: 4,
      tableData: [{
      site: '主站首页',
      address: 'http://eip.cnpc.com',
      name: '2020年五一主题',
      time: '2020年05月01日 ~ 2020年05月10日',
      clickNum: '0',
      state: '未开始'
      },
      {
      site: '华北销售公司',
      address: 'http://eip.cnpc.com',
      name: '2020年五一主题',
      time: '2020年05月01日 ~ 2020年05月10日',
      clickNum: '9981',
      state: '进行中'
      },{
      site: '华南销售公司',
      address: 'http://eip.cnpc.com',
      name: '2020年五一主题',
      time: '2020年05月01日 ~ 2020年05月10日',
      clickNum: '8848',
      state: '已过期'
      },{
      site: '东北销售公司',
      address: 'http://eip.cnpc.com',
      name: '2020年五一主题',
      time: '2020年05月01日 ~ 2020年05月10日',
      clickNum: '1290',
      state: '已过期'
      },{
      site: '欧美销售公司',
      address: 'http://eip.cnpc.com',
      name: '2020年五一主题',
      time: '2020年05月01日 ~ 2020年05月10日',
      clickNum: '12900',
      state: '已过期'
      }
      ]

    
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
  .Publicmanagement-container
    width 100%
    // height 100%
    box-sizing border-box
    padding 20px 60px
    .box-card
      width 80%
      .clearfix
        span 
          font-size 20px
          color black 
      .cart-box
        width 100%
        display flex
        flex-wrap wrap
        justify-content space-around
        .card-item
          width 30%
          height 200px
          margin-bottom 10px
          position relative
          .img
            width 100%
            height 100%
          p
            width 100%
            text-align center
            position absolute
            left 0
            top 60%
            

      .tabel-container
        width 100%
        .tabel-part1
          width 100%
          display flex
          justify-content space-between
        .tabel-part3
          width 100%
          .clip-page
            width 70%
            margin 30px 0px
            display flex
            justify-content space-between
</style>
