<template>
  <div>
      <div id="goodsclick"></div>
  </div>
</template>

<script>
 import echarts from 'echarts';
 import {HTTP} from './http-common';

 export default {
     data() {
         return {
             chart: null,
             xAxisData: this.xAxisData,
             yData: this.yData,
             errors:[]
         }
     },

     methods: {
         request(url, chart_option) {
             HTTP.get(url)
                 .then(
                     (response) => {
                         this.formatData(response.data);
                         this.chart.setOption({
                            xAxis:{
                                data:this.xAxisData
                            },
                            yAxis: {},
                            series: [{
                                type:'bar',
                                barWidth : 25,
                                data: this.yData
                            }]
                        });
                        this.chart.hideLoading();
                     })
                    .catch(e => {
                         this.errors.push(e);
                    })
         },
         formatData(data) {
             this.xAxisData = [];
             this.yData = [];
             var x;
             for (x = 0; x < data.goods_list.length; x++) {
                 this.xAxisData.push(data.goods_list[x].goodsName);
                 this.yData.push(data.goods_list[x].clickCount);
             }
         },

         drawChart(id) {
             this.chart = echarts.init(document.getElementById(id));
             this.chart.setOption({
                 title: {
                     text: '商品热度表',
                     x:'center'
                 },
                 toolbox: {
                  feature: {
                  dataView: {show: true, readOnly: false},
                  magicType: {show: true, type: ['line', 'bar']},
                  restore: {show: true},
                  saveAsImage: {show: true}
                  }
                },
                 tooltip: {},
                 legend: {
                     data:['点击量']
                 }
             });
             // add loading icon
              this.chart.showLoading({});

             this.request('statistics/goods/top/visit/1');

         }},
     mounted() {
         this.$nextTick(() => {
             this.drawChart('goodsclick');

             var that = this;
             var resizeTimer = null;
             window.onresize = function() {
                 if (resizeTimer)
                     clearTimeout(resizeTimer);
                 resizeTimer = setTimeout(function() {
                     that.drawChart('goodsclick');
                 }, 100);
             }
         });
     }
 }

</script>

<style scoped>
  #goodsclick {
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
    #goodsclick {
      height: 500px;
    }
  }
</style>
