$(function() {
	map();

	function map() {
		// 基于准备好的dom，初始化echarts实例
		var myChart = echarts.init(document.getElementById('map_1'));
		axios.get('http://192.168.137.142:8888/student/getZoneNum'


		).then(res => {
			console.log("res:", res);

			if (res.data.code == 200) {
				var dataForOption = convertData(res.data);
				console.log('dataForOption:', dataForOption)
				var sourceData = [];
				for (let i = 0; i < dataForOption.length; i++) {
					sourceData.push({
						name: dataForOption[i].name,
						value: dataForOption[i].value[2]
					});
				}
				// 假设sourceData是通过axios请求得到的数据集
				
				// 首先，从sourceData中获取所有的value值
				const values = sourceData.map(item => item.value);
				
				// 然后，使用Math.max()方法找到最大的数值
				const maxValue = Math.max(...values);
				
				// maxValue就是sourceData中的最大value数值
				console.log(maxValue);
				console.log('sourceData:', sourceData)
				/*let optionData = {
					dataset: {
						source: [{
							name: sourceData.name,
							value: sourceData.value
						}]
					},
					series: [{
						name: '新生人数',
						type: 'scatter',
						coordinateSystem: 'geo',
						data: dataForOption,
						symbolSize: function(val) {
							console.log("已处理气泡大小", val / 2);
							return val[2] * 5;
						},
						label: {
							normal: {
								formatter: '{b}',
								position: 'right',
								show: false
							},
							emphasis: {
								show: true
							}
						},
						itemStyle: {
							normal: {
								color: '#ffeb7b'
							}
						}
					}],
					tooltip: {
						trigger: 'item',
						formatter: function(params) {
							if (typeof(params.value)[2] == "undefined") {
								return params.name + ' : ' + params.value;
							} else {
								console.log('已执行tooltip formatter');
								return params.name + ' : ' + params.value[2];
							}
						}
					},

					geo: {
						map: 'china',
						label: {
							emphasis: {
								show: false
							}
						},
						roam: false, //禁止其放大缩小
						itemStyle: {
							normal: {
								areaColor: '#4c60ff',
								borderColor: '#002097'
							},
							emphasis: {
								areaColor: '#293fff'
							}
						}
					}
				};
				

				myChart.setOption(optionData);*/ /*data = [
          {
            name: "北京",
            value: 54,
          },
          {
            name: "台湾",
            value: 100,
          },
          {
            name: "天津",
            value: 13,
          },
          {
            name: "上海",
            value: 40,
          },
]*/
let optionData = {
 /* dataset: {
    source: [{
      name: sourceData.name,
      value: sourceData.value
    }]
  },*/
 
  title: {
            text: "全国新生分布图",
            left: "center",
            textStyle: {
              color: "#fff",
              fontSize: 25,
            }
           
          },
          tooltip: {
            trigger: "item",
            formatter: function(e, t, n) {
              return e.seriesName + "<br />" + e.name + "：" + e.value;
            },
          },
          // 热力地图
         visualMap: {
						type:'continuous',
                         //默认放置是垂直放置，当前设置为水平放置，所以有些参数和实际应该是倒过来的，如itemHeight实际代表的是组件的长度 
                         min: 0,
                         max:maxValue ,
                         itemWidth:'20',
                         
                         inRange:{
                             colorHue:[200,1]
                         },
                         calculable: true,
                         precision:1,//数据展示的小数精度
                         orient: 'horizontal',
                         left: 442,
                        top:44,
						textStyle: {
						    color: '#fff' // 将 textStyle 的 color 属性设置为白色 (#fff)
						  }
                     },
      
  
          series: [
            {
              name: "新生数",
              data: sourceData,
              type: "map",
              map: "china",
              zoom: 1.2,
              aspectScale: 0.75,
              label: {
                // 默认文本标签样式
                normal: {
                  color: "white",
                  show: true,
                },
                // 高亮文本标签样式
                emphasis: {
                  color: "white",
                  fontSize: 22,
                  fontWeight: "bold",
                },
              },
              itemStyle: {
                // 默认区域样式
                normal: {
                  // 区域背景透明
                  areaColor: "transparent",
                  borderColor: "rgba(255, 255, 255, 1.0)",
                  borderWidth: 1,
                },
                // 高亮区域样式
                emphasis: {
                  // 高亮区域背景色
                  areaColor: "#e7e8f2",
                },
              },
            },
          ]

};
myChart.setOption(optionData);
				window.addEventListener("resize", function() {
					myChart.resize();
				});
			}
		}).catch(err => {
			console.log("err:", err)
		})

		var geoCoordMap = {
			'香港': [114.173355, 22.320048],
			'澳门': [113.54909,
				22.198951
			],
			'四川省': [104.065735, 30.659462],
			'河南省': [113.665412, 34.757975],
			'重庆市': [106.54, 29.59],
			'安徽省': [117.283042, 31.86119],
			'河北省': [114.502461,
				38.045474
			],
			'山西省': [112.549248,
				37.857014
			],
			'黑龙江省': [126.642464,
				45.756967
			],
			'吉林省': [125.3245,
				43.886841
			],
			'辽宁省': [123.429096,
				41.796767
			],
			'江苏省': [118.767413,
				32.041544
			],
			'浙江省': [120.153576,
				30.287459
			],
			'福建省': [119.306239,
				26.075302
			],
			'江西省': [115.892151,
				28.676493
			],
			'山东省': [117.000923,
				36.675807
			],
			'湖北省': [114.298572,
				30.584355
			],
			'湖南省': [112.982279,
				28.19409
			],
			'广东省': [113.280637,
				23.125178
			],
			'海南省': [110.33119,
				20.031971
			],
			'贵州省': [106.713478,
				26.578343
			],
			'云南省': [102.712251,
				25.040609
			],
			'陕西省': [108.948024,
				34.263161
			],
			'甘肃省': [103.823557,
				36.058039
			],
			'青海省': [101.778916,
				36.623178
			],
			'台湾': [121.509062,
				25.044332
			],
			'内蒙古自治区': [111.670801,
				40.818311
			],
			'广西壮族自治区': [108.320004,
				22.82402
			],
			'西藏自治区': [91.132212,
				29.660361
			],
			'宁夏回族自治区': [106.278179,
				38.46637
			],
			'新疆维吾尔自治区': [87.617733,
				43.792818
			],
			'天津市': [117.2, 39.13],
			'北京市': [116.46, 39.92],
			'上海市': [121.48, 31.22]
		};

		var convertData = function(data) {
			var res = [];
			for (var i = 0; i < data.data.length; i++) {
				var geoCoord = geoCoordMap[data.data[i].zone];
				if (geoCoord) {
					res.push({
						name: data.data[i].zone,
						value: geoCoord.concat(data.data[i].num)
					});
				}
			}
			console.log("convertData执行后：", res);
			return res;
		};
		/*var convertData = function (data) {
		    var res = [];
		    for (var i = 0; i < data.length; i++) {
		        var geoCoord = geoCoordMap[data[i].name];
		        if (geoCoord) {
		            res.push({
		                name: data[i].name,
		                value: geoCoord.concat(data[i].value)
		            });
		        }
		    }
		    return res;
		};*/


	}

})