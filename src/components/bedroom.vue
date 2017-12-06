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
          chart: null
        }
    },
    // created() {
    //   HTTP.get('posts')
    //     .then(
    //       (response) => {
    //         this.posts = response.data;
    //         console.log(response);
    //     }).catch(e => {
    //       this.errors.push(e);
    //     })
    // },

//     methods: {
//       drawChart(id) {
//         this.chart = echarts.init(document.getElementById(id));
//         this.chart.setOption({
//             title: {
//                 text: 'ECharts 入门示例'
//             },
//             tooltip: {},
//             legend: {
//                 data:['销量']
//             },
//             xAxis: {
//                 data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
//             },
//             yAxis: {},
//             series: [{
//                 name: '销量',
//                 type: 'bar',
//                 data: [5, 20, 36, 10, 10, 20]
//             }]
//         });
//         console.log(this.chart);
// //        this.chart.setOption(option);
//       },
      mounted() {
        this.chart = echarts.init(document.getElementById("testchart"));
        this.chart.setOption({
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
                data:['销量']
            },
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });
        console.log("hello");
      }
      //mounted() {
        //this.drawChart('goods');
        // this.$nextTick(() => {
        //       var that = this;
        //       var resizeTimer = null;
        //       window.onresize = function() {
        //         if (resizeTimer) clearTimeout(resizeTimer);
        //         resizeTimer = setTimeout(function() {
        //           that.drawChart('goods');
        //         }, 100);
        //       }
        // });
//    }
//  }
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
