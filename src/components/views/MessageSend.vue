<template>
  <div class="messagesend-container">
    <span>站点/频道：</span>
    <!-- 级联选择器 -->
    <el-cascader :options="options"></el-cascader>
    <!-- 状态 -->
    <span style="margin:0px 20px 0px 30px">状态</span>
     <el-select v-model="value" placeholder="请选择">
      <el-option
        v-for="item in options2"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <!-- 标题 -->
    <span style="margin: 0px 20px 3px 20px">标题</span>
    <el-input style="width:300px;height:40px"></el-input>
    <br/>
    <!-- 发布方式 -->
    <span style="margin:30px 0px 0px 0px"></span>
    <br/>
    <el-button type="primary" >立即发布</el-button>
    <el-button type="success" >定时发布</el-button>
    <el-button disabled>多渠道发布</el-button>
    <br/>
    <div style="marginTop:40px">
      <el-alert
        title="发布成功"
        type="success"
        :closable="false" style="width:70%;margin:20px 0px">
      </el-alert>
    </div>
    <!-- 表格 -->
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange">
      <el-table-column
        type="selection"
        width="88">
      </el-table-column>
      <el-table-column
        label="标题"
        width="180">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="发布站点"
        width="180">
      </el-table-column>
      <el-table-column
        prop="auth"
        label="作者"
        width="180"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="type"
        label="类型"
        width="180"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="timeId"
        label="创建时间"
        width="180"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="contro"
        width="180"
        label="操作"
        show-overflow-tooltip>
      </el-table-column>
    </el-table>
  </div>
</template>

<script type="text/ecmascript-6">
 export default {
   data () {
     return {
        options: [{
          value: 'zhinan',
          label: '主站',
          disabled: false,
          children: [{
            value: 'shejiyuanze',
            label: '勘探研究院',
            children: [{
              value: 'yizhi',
              label: '新闻中心'
            }, {
              value: 'fankui',
              label: '人物专访'
            }]
          }, {
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
        }, {
          value: 'zujian',
          label: '组件',
          disabled: true,
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
          label: '销售公司',
          children: [{
            value: 'axure',
            label: '华北销售部'
          }, {
            value: 'sketch',
            label: '东北销售部'
          }, {
            value: 'jiaohu',
            label: '总部'
          }]
        }],
        // 第二
        options2: [{
          value: '选项1',
          label: '待发布'
        }, {
          value: '选项2',
          label: '已发布'
        }],
        value: '',
        // 
        tableData: [{
          date: '这是一个新闻标题',
          name: '总站/新闻中心',
          auth: '',
          type: '原创',
          timeId: '2020:01:24'
        }, {
          date: '这是一个新闻标题',
          name: '总站/新闻中心',
          auth: '',
          type: '原创',
          timeId: '2010:01:24'
        }, {
          date: '这是一个新闻标题',
          name: '总站/新闻中心',
          auth: '',
          type: '抄送',
          timeId: '2020:01:24'
        }, {
          date: '这是一个新闻标题',
          name: '总站/新闻中心',
          auth: '',
          type: '原创',
          timeId: '2020:01:24'
        }, {
          date: '这是一个新闻标题',
          name: '总站/新闻中心',
          auth: '',
          type: '摘抄',
          timeId: '2020:01:24'
        }, {
          date: '这是一个新闻标题',
          name: '总站/新闻中心',
          auth: '',
          type: '原创',
          timeId: '2020:01:24'
        }, {
          date: '这是一个新闻标题',
          name: '总站/新闻中心',
          auth: '',
          type: '转载',
          timeId: '2020:01:24'
        }],
        multipleSelection: []
      }
   },
   methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
   }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

 
</style>
