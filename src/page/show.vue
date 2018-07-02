<template>
    <div>
      <el-row height='200px'>
         <el-col :span="8" class="show-el-col">今日新增用户：200</el-col>
         <el-col :span="8" class="show-el-col">今日新增订单：200</el-col>
         <el-col :span="8" class="show-el-col">今日新增商家：20</el-col>
         
      </el-row>

      <el-row height='200px'>
         <el-col :span="8" class="show-el-col">系统总用户：200</el-col>
         <el-col :span="8" class="show-el-col">系统总订单：200</el-col>
         <el-col :span="8" class="show-el-col">系统总商家：20</el-col>
      </el-row>

      <div id="myChart" :style="{width: '100%', height: '500px'}"></div>
      
    </div>
</template>


<script>
export default {
   
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
    this.drawLine();
  },
  methods: {
    drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
           
               tooltip : {
                    trigger: 'axis'
                },
                legend: {
                    data:['新增用户','新增订单','新增商家',]
                },
                toolbox: {
                    show : true,
                    feature : {
                        mark : {show: true},
                        dataView : {show: true, readOnly: false},
                        magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                        restore : {show: true},
                        saveAsImage : {show: true}
                    }
                },
                calculable : true,
                xAxis : [
                    {
                        type : 'category',
                        boundaryGap : false,
                        data : ['周一','周二','周三','周四','周五','周六','周日']
                    }
                ],
                yAxis : [
                    {
                        type : 'value'
                    }
                ],
                series : [
                    {
                        name:'新增用户',
                        type:'line',
                        stack: '总量',
                        data:[120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name:'新增订单',
                        type:'line',
                        stack: '总量',
                        data:[220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name:'新增商家',
                        type:'line',
                        stack: '总量',
                        data:[150, 232, 201, 154, 190, 330, 410]
                    }
                    
                ]
        })
    }
  }
}

</script>


<style lang="less" scoped>
  #myChart{
     margin:0 auto;
     margin-top:100px;
    }
  .show-el-col{
     height:60px;
     line-height: 60px;
     border: 1px solid #bdbdbd;
     
  }
</style>


