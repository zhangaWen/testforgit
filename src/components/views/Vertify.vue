<template>
  <div class="vertify-container">
    <el-form ref="form" label-width="100px" class="form-container">
      <div class="form-left">
        <el-input class="el-input" placeholder="请输入标题"></el-input>
        <Uedit/>
      </div>
      <div class="form-right">
        <el-form-item label="摘要：" class="item-container">
          <el-input class="item-input" placeholder="请输入摘要"></el-input>
        </el-form-item>
        <el-form-item label="作者：" class="item-container">
          <el-input class="item-input" placeholder="张三"></el-input>
        </el-form-item>
        <el-form-item label="所属单位：" class="item-container">
          <el-input class="item-input" placeholder="中国石油勘探开发研究院"></el-input>
        </el-form-item>
        <el-form-item label="联系电话：" class="item-container">
          <el-input class="item-input" placeholder="67891234"></el-input>
        </el-form-item>
        <el-form-item label="关键字：" class="item-container">
          <el-input class="item-input" placeholder="座谈会 经济 召开"></el-input>
        </el-form-item>
        <el-form-item label="              " class="item-container">
           <el-button type="primary" style="margin-left:170px;border-radius:10px">抽取关键字</el-button>
        </el-form-item>
        <el-form-item label="站点/频道" class="item-container">
           <el-cascader :options="options" clearable></el-cascader>
        </el-form-item>
        <el-input type="textarea" placeholder="相关新闻"></el-input>
      </div>
      <div class="btns">
        <el-button>排重搜索</el-button>
        <el-button>校验</el-button>
        <el-button>预览</el-button>
        <el-button type="primary">保存</el-button>
      </div>
      <div class="history">
        <p>文档修改历史</p>
         <el-table
          :data="tableData"
          border
          >
          <el-table-column
            prop="version"
            label="版本号"
            width="180">
          </el-table-column>
          <el-table-column
            prop="tim"
            label="时间"
            width="180">
          </el-table-column>
          <el-table-column
            prop="auto"
            label="修改人"
            width="180">
          </el-table-column>
          <el-table-column
            prop="ctro"
            label="操作"
            width="180">
          </el-table-column>
        </el-table>
      </div>
      <div class="Step">
        <el-steps :active="2" align-center>
          <el-step title="初审提交" description="张三   2019-12-28 10:30:00" ></el-step>
          <el-step title="初审通过" description="李四"></el-step>
          <el-step title="复审" ></el-step>
          <el-step title="发布" ></el-step>
        </el-steps>
      </div>
      <div class="isVertify">
        <p>审核意见</p>
        <el-input class="tear" type="textarea" style="margin-bottom:30px">
        </el-input>
        <el-button class="nopass" round="">审核拒绝</el-button>
        <el-button type="primary" round="">审核通过</el-button>
      </div>
    </el-form>
  </div>
</template>

<script type="text/ecmascript-6">
 import Uedit from '../pages/VueUEDitor.vue'
 export default {
   components: {
     Uedit,
   },
   data() {
      return {
        options: [
          {
          value: 'zhinan',
          label: '指南',
          children: [{
            value: 'shejiyuanze',
            label: '设计原则',
            children: [{
              value: 'yizhi',
              label: '一致'
            }, {
              value: 'fankui',
              label: '反馈'
            }, {
              value: 'xiaolv',
              label: '效率'
            }, {
              value: 'kekong',
              label: '可控'
            }]
          }, 
          {
            value: 'daohang',
            label: '导航',
            children: [{
              value: 'cexiangdaohang',
              label: '侧向导航'
            }, {
              value: 'dingbudaohang',
              label: '顶部导航'
            }]
          }]
        },
        {
          value: 'zujian',
          label: '组件',
          children: [{
            value: 'basic',
            label: 'Basic',
            children: [{
              value: 'layout',
              label: 'Layout 布局'
            }, {
              value: 'color',
              label: 'Color 色彩'
            }, {
              value: 'typography',
              label: 'Typography 字体'
            }, {
              value: 'icon',
              label: 'Icon 图标'
            }, {
              value: 'button',
              label: 'Button 按钮'
            }]
          }, {
            value: 'form',
            label: 'Form',
            children: [{
              value: 'radio',
              label: 'Radio 单选框'
            }, {
              value: 'checkbox',
              label: 'Checkbox 多选框'
            }, {
              value: 'input',
              label: 'Input 输入框'
            }, {
              value: 'input-number',
              label: 'InputNumber 计数器'
            }, {
              value: 'select',
              label: 'Select 选择器'
            }, {
              value: 'cascader',
              label: 'Cascader 级联选择器'
            }, {
              value: 'switch',
              label: 'Switch 开关'
            }, {
              value: 'slider',
              label: 'Slider 滑块'
            }, {
              value: 'time-picker',
              label: 'TimePicker 时间选择器'
            }, {
              value: 'date-picker',
              label: 'DatePicker 日期选择器'
            }, {
              value: 'datetime-picker',
              label: 'DateTimePicker 日期时间选择器'
            }, {
              value: 'upload',
              label: 'Upload 上传'
            }, {
              value: 'rate',
              label: 'Rate 评分'
            }, {
              value: 'form',
              label: 'Form 表单'
            }]
          }, {
            value: 'data',
            label: 'Data',
            children: [{
              value: 'table',
              label: 'Table 表格'
            }, {
              value: 'tag',
              label: 'Tag 标签'
            }, {
              value: 'progress',
              label: 'Progress 进度条'
            }, {
              value: 'tree',
              label: 'Tree 树形控件'
            }, {
              value: 'pagination',
              label: 'Pagination 分页'
            }, {
              value: 'badge',
              label: 'Badge 标记'
            }]
          }, {
            value: 'notice',
            label: 'Notice',
            children: [{
              value: 'alert',
              label: 'Alert 警告'
            }, {
              value: 'loading',
              label: 'Loading 加载'
            }, {
              value: 'message',
              label: 'Message 消息提示'
            }, {
              value: 'message-box',
              label: 'MessageBox 弹框'
            }, {
              value: 'notification',
              label: 'Notification 通知'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'menu',
              label: 'NavMenu 导航菜单'
            }, {
              value: 'tabs',
              label: 'Tabs 标签页'
            }, {
              value: 'breadcrumb',
              label: 'Breadcrumb 面包屑'
            }, {
              value: 'dropdown',
              label: 'Dropdown 下拉菜单'
            }, {
              value: 'steps',
              label: 'Steps 步骤条'
            }]
          }, {
            value: 'others',
            label: 'Others',
            children: [{
              value: 'dialog',
              label: 'Dialog 对话框'
            }, {
              value: 'tooltip',
              label: 'Tooltip 文字提示'
            }, {
              value: 'popover',
              label: 'Popover 弹出框'
            }, {
              value: 'card',
              label: 'Card 卡片'
            }, {
              value: 'carousel',
              label: 'Carousel 走马灯'
            }, {
              value: 'collapse',
              label: 'Collapse 折叠面板'
            }]
          }]
        }, {
          value: 'ziyuan',
          label: '资源',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'sketch',
            label: 'Sketch Templates'
          }, {
            value: 'jiaohu',
            label: '组件交互文档'
          }]
        }],
        // 表格数据
        tableData: [{
            version: 'V1.0',
            tim: '2019-12-28 10:30:00',
            auto: '张三',
            ctro: "获取此版本"
          }, {
            version: 'V1.1',
            tim: '2019-12-28 10:30:00',
            auto: '张三风',
            ctro: "获取此版本"
          }]
      }
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .vertify-container
    width 100%
    height 100%
    form
      width 100%
      height 100%
      box-szing border-box
      padding  0px 10px
      display flex
      flex-wrap wrap
      justify-content center
      .form-left
        width 50%
        height 100%
        box-sizing border-box
        border 1px solid rgba(0,0,0,0.2)
        padding 40px 30px
        margin-right 60px
        .el-input
          width 80%
      .form-right
        width 30%
        height 100%
        box-sizing border-box
        border 1px solid rgba(0,0,0,0.2)
        padding 40px 20px
        .item-container
         width 100%
         .item-input
          width 80%
      .btns
        box-sizing border-box
        padding 20px 0px 20px 500px
      .history
        box-sizing border-box
        padding 20px 0px 20px 200px
        p
          font-size 30px
          color black 
          margin-left -400px
      .Step
        width 100%
        heigt 300px
        margin-top 30px
        box-sizing border-box
        padding 50px 30px
      .isVertify
        width 78%
        height 600px
        box-sizing border-box
        margin-top 30px
        padding 40px 0px
        p
          margin-bottom 20px
          font-size 30px
          color black
        .nopass
          margin-left 900px
</style>
