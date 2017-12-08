<template>
  <div>
    <div id="post"></div>
  </div>
</template>

<script>
import echarts from 'echarts';
import {HTTP} from './http-common';

export default {
  data() {
    return {
        chart: null,
        goods: {"goods_list": [], "clicked": 0},
        // xAxisData: [],
        // yData: []
        Data:[],
        errors:[]
    }
    },

    methods: {
      request(url, chart_option) {
        let limit = 10;
        HTTP.get(url)
          .then(
            (response) => {
              this.goods = response.data;
              this.formatData(this.goods);
              this.chart.setOption({
                series: [{
                    // 根据名字对应到相应的系列
                    // name: '销量',
                  // data: this.
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:this.Data
                }]
              });
              this.chart.hideLoading();
           })
          .catch(e => {
            this.errors.push(e);
          })
      },
      formatData(data) {
        // this.xAxisData = [];
        // this.yData = [];
        var x;
        for (x = 0; x < data.goods_list.length; ++x) {
          // this.xAxisData.push(data.goods_list[x].goods_name);
          // this.yData.push(data.goods_list[x].clicked);
          this.Data.push({
             'name':data.goods_list[x].goods_name,
             'value':data.goods_list[x].clicked
             });
        }
      },

      drawChart(id) {
        this.chart = echarts.init(document.getElementById(id));
        this.chart.setOption({
            title: {
                text: '商品热度表'
            },
            tooltip: {},
            toolbox: {
              feature: {
              dataView: {show: true, readOnly: false},
              // magicType: {show: true, type: ['line', 'bar']},
              restore: {show: true},
              saveAsImage: {show: true}
            }
           },
            legend: {
                // data:['点击数']
            },
        });

        this.chart.showLoading({});
        this.request('goods/top/10');

      }},
      mounted() {
        this.$nextTick(() => {
              this.drawChart('post');
              var that = this;
              var resizeTimer = null;
              window.onresize = function() {
                if (resizeTimer)
                  clearTimeout(resizeTimer);
                resizeTimer = setTimeout(function() {
                  that.drawChart('post');
                }, 100);
              }
        });
   }
 }

</script>

<style scoped>
  #post {
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
    #post {
      height: 500px;
    }
  }
</style>
