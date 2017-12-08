<template>
  <div>
      <div id="status"></div>
      <!-- <div id="statuspie"></div> -->
  </div>
</template>

<script>
 import echarts from 'echarts';
 import {HTTP} from './http-common';

 export default {
     data() {
         return {
             chart: null,
             value1:this.value1,
             value2:this.value2,
             value3:this.value3,
             value4:this.value4,
             value5:this.value5,
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
                                data:['已取消订单','无效订单','未确认订单','已确认订单','已退货订单']
                            },
                            yAxis: {},
                            series: [{
                                type:'bar',
                                data: [this.value1,this.value2,this.value3,this.value4,this.value5]
                            }]
                        });
                        this.chart.hideLoading();
                     })
                    .catch(e => {
                         this.errors.push(e);
                    })
         },
         formatData(data) {
             this.value1=data.orderCancelled;
             this.value2=data.orderConfirmed;
             this.value3=data.orderInvalid;
             this.value4=data.orderNotConfirm;
             this.value5=data.orderReturned;
         },

         drawChart(id) {
             this.chart = echarts.init(document.getElementById(id));
             this.chart.setOption({
                 title: {
                     text: '订单状态表',
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

             this.request('statistics/order/ratio/status');

         }},
         mounted() {
             this.$nextTick(() => {
                 this.drawChart('status');

                 var that = this;
                 var resizeTimer = null;
                 window.onresize = function() {
                     if (resizeTimer)
                         clearTimeout(resizeTimer);
                     resizeTimer = setTimeout(function() {
                         that.drawChart('status');
                     }, 100);
                 }
             });
         }
 }

</script>

<style scoped>
  #status {
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
    #status {
      height: 500px;
    }
  }
</style>
