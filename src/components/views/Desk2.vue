<template>
  <div class="desk-container">
    <div class="desk-container-left">
      <!-- Card卡片1 -->
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>最近编辑的新闻</span>
          <el-button style="float: right; padding: 3px 0" type="text">全部项目</el-button>
        </div>
        <div class="card-max1">
          <div class="box-item" v-for="(item, index) in 6" :key="index">
            <div class="box-item1">
              <el-image class="image-log"></el-image>
              <p class="ni-gao"> <i class=""></i>拟稿</p>
            </div>
            <div class="box-item2">
              <h3>中国石油风险勘探再获重大发现</h3>
            </div>
            <div class="box-item3">
              <span>人物专访</span>
              <span>17分钟前</span>
            </div>
          </div>
        </div>
      </el-card>
      <!-- 卡片2 -->
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>最近编辑的活动</span>
          <el-button style="float: right; padding: 3px 0" type="text">全部项目</el-button>
        </div>
        <div class="card-max2">
          <div class="box-item" v-for="(item, index) in 3" :key="index">
            <div class="box-item1">
              <el-image class="image-log"></el-image>
              <p class="ni-gao"> <i class=""></i>拟稿</p>
            </div>
            <div class="box-item2">
              <h3>中国石油风险勘探再获重大发现</h3>
            </div>
            <div class="box-item3">
              <span>人物专访</span>
              <span>17分钟前</span>
            </div>
          </div>
        </div>
      </el-card>
      <!--卡片3  -->
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>代办审批</span>
          <el-button style="float: right; padding: 3px 0" type="text">全部项目</el-button>
        </div>
        <div class="card-max3">
          <!-- 搜索框 -->
          <div class="search">
            <el-input style="width:300px;height:40px;margin: 0px 20px 0px 0px " placeholder="输入审批意见"></el-input>
            <el-button >通过</el-button>
            <el-button type="primary">驳回</el-button>
          </div>
          <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane label="用户管理" name="first">
              <ul class="message-container">
                <li class="message-item" v-for="(item,index) of 5" :key="index">
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
            </el-tab-pane>
            <el-tab-pane label="配置管理" name="second" disabled>报送</el-tab-pane>
            <el-tab-pane label="角色管理" name="third" disabled>互动</el-tab-pane>
            <el-tab-pane label="定时任务补偿" name="fourth" disabled>专题</el-tab-pane>
          </el-tabs>
        </div>
      </el-card>
    </div>
    <div class="desk-container-right">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>常用功能</span>
        </div>
        <div class="detail-message">
          <el-button class="items">信息编辑</el-button>
          <el-button class="items">撰写互动</el-button>
          <el-button class="items">新建通知</el-button>
          <el-button class="items" @click="goto('/home/send')">上传素材</el-button>
          <el-button class="items" @click="goto('/home/ms')">我的报送</el-button>
          <el-button disabled class="items">我的报送</el-button>
        </div>
      </el-card>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <el-badge :value="1" class="item"><span>待读通知</span></el-badge>
          <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
        </div>
        <!-- ehcrts01 -->
        <div class="about">
          <p>关于媒体运营的政策法规</p>
          <span>一小时前</span>
        </div>
      </el-card>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>原创数量</span>
          <el-button style="float: right; padding: 3px 0" type="text"></el-button>
        </div>
        <div id="myChart" :style="{width: '300px', height: '300px'}"></div>
      </el-card>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>报送数量</span>
          <el-button style="float: right; padding: 3px 0" type="text"></el-button>
        </div>
        <div id="myChart2" :style="{width: '100%', height: '300px'}"></div>
      </el-card>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>审核通过率</span>
          <el-button style="float: right; padding: 3px 0" type="text"></el-button>
        </div>
        <div id="myChart3" :style="{width: '100%', height: '300px'}"></div>
      </el-card>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
 export default {
   data () {
     return {
      msg: 'once',
      activeName: 'first',
      currentPage4: 1
     }
   },
   methods: {
     goto (path) {
       this.$router.push(path)
     },
     handleClick() {
        // console.log(tab,event)
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
            title: { text: '原创文章' },
            tooltip: {},
            xAxis: {
                data: ["站1","站2","站3","站4","站5","站6"]
            },
            yAxis: {},
            series: [{
                name: '浏览量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });
      },
      drawLine2(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart2'))
        // 绘制图表
        myChart.setOption({
            title: { text: '报送数量' },
            tooltip: {},
            xAxis: {
                data: ["报送1","报送2","报送3","报送4","报送5","报送6"]
            },
            yAxis: {},
            series: [{
                name: '浏览量',
                type: 'line',
                data: [16, 24, 36, 12, 19, 55]
            }]
        });
      },
      drawLine3(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart3'))
        // 绘制图表
        myChart.setOption(
          {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            legend: {
                orient: 'horizontal',
                left: 2,
                data: ['通过', '未通过', '审核中', '未浏览','复审']
            },
            series: [
                {
                    name: '审核状态',
                    type: 'pie',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: true,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [
                        {value: 335, name: '通过'},
                        {value: 310, name: '未通过'},
                        {value: 234, name: '审核中'},
                        {value: 135, name: '未浏览'},
                        {value: 1548, name: '复审'}
                    ]
                }
            ]
        });
      }
   },
   mounted () {
     this.drawLine();
     this.drawLine2();
     this.drawLine3();
   }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .desk-container
    width 100%
    // height 100%
    display flex
    .desk-container-left
      width 75%
      // height 100%
      // 卡片项
      .box-card
        width 100%
        box-sizing border-box
        padding 20px 20px
        // height 3000px
        .card-max1
          width 100%
          display flex
          flex-wrap wrap
          .box-item
            width 33.3%
            padding 20px 40px 
            box-sizing border-box
            border 1px solid rgba(0,0,0,0.1)
            .box-item1
              width 40%
              display flex
              justify-content space-between
              .image-log
                width 80px
                height 80px
              .ni-gao
                // background gray
                box-sizing border-box
                height 80px
                color rgba(0,0,0,0.5)
                line-height 80px
                box-sizing border-box
                padding-top 22px
            .box-item2
              width 100%
              margin 20px 0px
              h3
                color rgba(0,0,0,0.6)
            .box-item3
              width 90%
              display flex
              justify-content space-between
              font-size 12px
              color gray
        .card-max2
          width 100%
          display flex
          flex-wrap wrap
          .box-item
            width 33.3%
            padding 20px 20px
            box-sizing border-box
            border 1px solid rgba(0,0,0,0.1)
            .box-item1
              width 40%
              display flex
              justify-content space-between
              .image-log
                width 80px
                height 80px
              .ni-gao
                // background gray
                box-sizing border-box
                height 80px
                color rgba(0,0,0,0.5)
                line-height 80px
                box-sizing border-box
                padding-top 22px
            .box-item2
              width 100%
              margin 20px 0px
              h3
                color rgba(0,0,0,0.6)
            .box-item3
              width 90%
              display flex
              justify-content space-between
              font-size 12px
              color gray
    
        .card-max3
          width 100%
          height 600px
          position relative
          .search
            position absolute
            right 140px
            top 0px
            z-index 200
          .message-container
            list-style none 
            box-sizing border-box
            // padding 0px 20px
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
            width 100%
            box-sizing border-box
            padding 20px 0px 40px 200px
    .desk-container-right
      height 1200px
      flex 1
      // background gray
      // display flex
      // flex-direction column
      // justify-content space-between
      .box-card
        // height 25%
        box-sizing border-box
        padding 20px 20px
        .clearfix
          .item
            box-sizing border-box
            padding 10px 10px
        .about
          width 85%
          margin 0px auto
          display flex
          justify-content space-between
          padding 30px 0px 85px 0px
          span 
            color rgba(0,0,0,0.2)
            font-size 12px
      .detail-message
        display flex
        align-items center
        justify-content space-around
        flex-wrap wrap
        .items
          margin-top 15px
          &:nth-child(4)
            margin-left 0px
</style>
