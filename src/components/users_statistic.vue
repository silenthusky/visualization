<template>
  <div id="test1">
    <el-row id="ani">
      <el-col :span="12">
        <div id="clock">
          <p id="date">{{ date }}</p>
          <p id="time">{{ time }}</p>
        </div>
        <div id="clock">
          <p class="regt">注册用户总数：{{users.allUsers}}</p>
          <p class="regnum"></p>
        </div>
        <div id="clock">
          <p class="orderst">下单用户数：{{users.usersBuied}}</p>
          <p class="ordersnum"></p>
        </div>
      </el-col>
      <el-col :span="12">
        <div id="piechart" style="width:500px;height:300px;"></div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div id="historychart" style="width:1000px;height:1000px;"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
 import echarts from 'echarts';
 import {HTTP} from './http-common';
 import moment from 'moment';

export default {
     data() {
        return {
          chart: null,
          chart2: null,
          chart3: null,
          history: null,
          time: '',
          date: '',
          users: {
            "allUsers": 0,
            "usersBuied": 0,
          },
          week: []
        }
     },
     watch: {
       users: function (newUsers) {
           this.users = newUsers;
           var c1 = newUsers.allUsers-newUsers.usersBuied;
           var c2 = newUsers.usersBuied
           this.chart.setOption({
               series: [{
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[
                      {
                        value: c1,
                        name: '下单用户'
                      },
                      {
                        value: c2,
                        name: '未下单用户'
                      }
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }]
           });
           //hide loading icon
           this.chart.hideLoading();
       },
       history: function (newHistory) {
         var monthlist = newHistory.month_list;
         var dateList = monthlist.map(function (item) {
             return item['datetime'];
         });
         var valueList = monthlist.map(function (item) {
             return item['value'];
         });
         this.chart3.setOption({
           xAxis: [{
               data: dateList
           }],
           yAxis: [{
               splitLine: {show: false}
           }],
           grid: [{
               bottom: '60%'
           }],
           series: [{
               type: 'line',
               showSymbol: false,
               data: valueList
           }]
         });
         this.chart.hideLoading();
       }
     },
    methods: {
        updateTime() {
          var cd = new Date();
          this.time = this.zeroPadding(cd.getHours(), 2) + ':' + this.zeroPadding(cd.getMinutes(), 2) + ':' + this.zeroPadding(cd.getSeconds(), 2);
          this.date = this.zeroPadding(cd.getFullYear(), 4) + '年' + this.zeroPadding(cd.getMonth()+1, 2) + '月' + this.zeroPadding(cd.getDate(), 2) + '日 ' + this.week[cd.getDay()];
        },
        zeroPadding(num, digit) {
            var zero = '';
            for(var i = 0; i < digit; i++) {
                zero += '0';
            }
            return (zero + num).slice(-digit);
        },
        get_current_datetime() {
          var zone = moment().utcOffset()
          var time = moment.utc(this.created_at).utcOffset(zone)
          var formatted_time = time.format('HH:mm:ss')
          var formatted_mdy = time.format('YYYY 年 MM 月 DD 日')
          this.time = formatted_time;
          this.mdy = formatted_mdy;
          const that = this
          setTimeout(function () {
            that.get_current_datetime()
          }, 1000)
        },
        request1(url) {
             HTTP.get(url)
                 .then(
                     (response) => {
                         this.users = response.data;
                     }).catch(e => {
                         this.errors.push(e);
                     })
         },
         request2(url) {
              HTTP.get(url)
                  .then(
                      (response) => {
                          this.history = response.data;
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
                   text: '用户购买率',
                   x:'center'
               },
               tooltip: {
                 trigger: 'item',
                 formatter: "{a} <br/>{b} : {c} ({d}%)"
               },
               toolbox: {
                 feature: {
                   dataView: {show: true, readOnly: false},
                   restore: {show: true},
                   saveAsImage: {show: true}
                 }
                },
                legend: {
                   orient: 'vertical',
                   left: 'left',
                   data: ['下单用户','未下单用户']
                }
             });
             // add loading icon
             this.chart.showLoading({});
             this.request1('statistics/users/ratio/buy');
         }
         ,
         drawHistory(id) {
            this.chart3 = echarts.init(document.getElementById(id));

            var option3 = {
                // Make gradient line here
                visualMap: [{
                    show: false,
                    type: 'continuous',
                    seriesIndex: 0,
                    min: 0,
                    max: 400
                }],

                title: [{
                    left: 'center',
                    text: '用户注册变化曲线'
                }],
                tooltip: {
                    trigger: 'axis'
                },
                xAxis: [{
                    data: []
                }],
                yAxis: [{
                    splitLine: {show: false}
                }],
                grid: [{
                    bottom: '60%'
                }],
                series: [{
                    type: 'line',
                    showSymbol: false,
                    data: []
                }]
            };
            this.chart3.setOption(option3);
            this.chart.showLoading({});
            this.request2('statistics/users/history');
         }
       },
     mounted() {
        //this.get_current_datetime()
        this.week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
        var timerID = setInterval(this.updateTime, 1000);
        this.updateTime();
        this.drawChart('piechart');
        this.drawHistory('historychart');
     }

 }


</script>

<style scoped>
  #historychart1 {
    border: solid #D01257 1px;
    box-shadow: 0 0 8px #FB90B7;
    border-radius: 10px;
  }
  #ani1 {
    border: solid #D01257 1px;
    box-shadow: 0 0 8px #FB90B7;
    border-radius: 10px;
  }
  @media screen and (max-width: 470px) {
    #users_statistic {
      height: 500px;
    }
  }
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

  #clock {
      font-family: 'Share Tech Mono', monospace;

      color: #abcd;
      text-align:center;
      color: #171a1e;

      .text {
        letter-spacing: 0.1em;
          font-size: 12px;
          padding: 20px 0 0;
      }
  }
  #time {
      letter-spacing: 0.05em;
      font-size: 40px;
      padding: 5px 0;
  }
  #date {
      letter-spacing: 0.1em;
      font-size: 15px;
  }

</style>
