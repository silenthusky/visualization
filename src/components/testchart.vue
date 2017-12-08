<template>
  <div>
      <div id="testchart"></div>
  </div>
</template>

<script>
 import echarts from 'echarts';
 import {HTTP} from './http-common';

 export default {
     data() {
         return {
             chart: null,
             goods: {},
             xAxisData: [],
             yData: []
         }
     },

     watch: {
         // 如果 `goods` 发生改变，这个函数就会运行
         // 函数会添加数据到到 echarts 中
         goods: function (newGoods) {
             this.formatData(newGoods);
             this.chart.setOption({
                 xAxis: {
                     data: this.xAxisData
                 },
                 series: [{
                     // 根据名字对应到相应的系列
                     name: '销量',
                     data: this.yData
                 }]
             });
             //hide loading icon
             this.chart.hideLoading();
         }
     },

     methods: {
         request(url, chart_option) {
             let limit = 10;
             HTTP.get(url)
                 .then(
                     (response) => {
                         this.goods = response.data;
                     }).catch(e => {
                         this.errors.push(e);
                     })
         },

         formatData(data) {
             this.xAxisData = [];
             this.yData = [];
             var x;
             for (x = 0; x < data.goods_list.length; ++x) {
                 this.xAxisData.push(data.goods_list[x].goods_name);
                 this.yData.push(data.goods_list[x].clicked);
             }
         },

         drawChart(id) {
             this.chart = echarts.init(document.getElementById(id));
             this.chart.setOption({
                 title: {
                     text: '商品热度表'
                 },
                 tooltip: {},
                 legend: {
                     data:['销量']
                 },
                 xAxis: {
                     data: []
                 },
                 yAxis: {},
                 series: [{
                     name: '销量',
                     type: 'bar',
                     data: []
                 }]
             });
             // add loading icon
             this.chart.showLoading({});

             this.request('goods/top/10');

         }},
     mounted() {
         this.$nextTick(() => {
             this.drawChart('testchart');

             var that = this;
             var resizeTimer = null;
             window.onresize = function() {
                 if (resizeTimer)
                     clearTimeout(resizeTimer);
                 resizeTimer = setTimeout(function() {
                     that.drawChart('testchart');
                 }, 100);
             }
         });
     }
 }

</script>

<style scoped>
  #testchart {
    position: relative;
    left: 50%;
    width: 90%;
    height: 600px;
    margin-left: -45%;
    border: solid #D01257 1px;
    box-shadow: 0 0 8px #FB90B7;
    border-radius: 10px;
  }
  @media screen and (max-width: 470px) {
    #testchart {
      height: 500px;
    }
  }
</style>
