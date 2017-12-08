<template>
  <div>
    <div id="pay"></div>
  </div>
</template>

<script>
import echarts from 'echarts';
import {HTTP} from './http-common';

export default {
  data() {
    return {
        chart: null,
        // pays: {},
        errors:[],
        value1:this.value1,
        value2:this.value2
      }
    },

    methods: {
      request(url, chart_option) {
        let limit = 10;
        HTTP.get(url)
          .then(
            (response) => {
              // this.pays = response.data;
              this.formatData(response.data);
              this.chart.setOption({
                series: [{
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[
                      {value:this.value1,name:'支付宝支付'},
                      {value:this.value2,name:'微信支付'}
                    ]
                }]
              });
              this.chart.hideLoading();
           })
          .catch(e => {
            this.errors.push(e);
          })
      },
      formatData(data) {
        // var x;
        // for (x = 0; x < data.goods_list.length; ++x) {
        //   this.Data.push({
        //      'name':data.goods_list[x].goods_name,
        //      'value':data.goods_list[x].clicked
        //      });
        // }
         this.value1=data.orderPayByAlipay;
        
         this.value2=data.orderPayByWeiXin
      },

      drawChart(id) {
        this.chart = echarts.init(document.getElementById(id));
        this.chart.setOption({
            title: {
                text: '支付方式占比',
                x:'center'
            },
            tooltip: {  
              trigger: 'item',
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            toolbox: {
              feature: {
              dataView: {show: true, readOnly: false},
              // magicType: {show: true, type: ['line', 'bar']},
              restore: {show: true},
              saveAsImage: {show: true}
            }
           },
             legend: {
                orient: 'vertical',
                left: 'left',
                data: ['支付宝支付','微信支付']
           }
        });

        this.chart.showLoading({});
        this.request('statistics/order/ratio/pay');

      }},
      mounted() {
        this.$nextTick(() => {
              this.drawChart('pay');
              var that = this;
              var resizeTimer = null;
              window.onresize = function() {
                if (resizeTimer)
                  clearTimeout(resizeTimer);
                resizeTimer = setTimeout(function() {
                  that.drawChart('pay');
                }, 100);
              }
        });
   }
 }

</script>

<style scoped>
  #pay {
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
    #pay {
      height: 500px;
    }
  }
</style>
