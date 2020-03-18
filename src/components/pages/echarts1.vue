<template>
 <div>
     <div id="chart" class="chart">

     </div>
 </div>
</template>

<script>
  export default {
      data(){
          return{}
      },
      mounted(){
          this.myChart = 
              this.$echarts.init(document.getElementById("chart"));
          this.drawChart();
      },
      methods:{
          drawChart(){
             let option = {
                  xAxis: {
                      type: 'category',
                      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                  },
                  yAxis: {
                      type: 'value'
                  },
                  series: [{
                      data: [120, 200, 150, 80, 70, 110, 130],
                      type: 'bar'
                  }]
              };

             this.myChart.setOption(option);
                window.onresize = function(){
                       this.myChart.resize()
                  }
          }
      }
  }
</script>
<style lang="stylus" scoped>

</style>