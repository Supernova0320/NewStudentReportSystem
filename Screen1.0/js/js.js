$(function() {
	echarts_1();
	echarts_2();
	echarts_3();
	echarts_4();
	echarts_5();

	function echarts_1() {
var totalNumOfNewStudents;
			axios.get('http://192.168.137.142:8888/student/getSumNum').then(res => {
				//console.log("res:", res);
				b = res.data.data[0].num;
				//console.log('应到人数',b)
				if (res.data.code == 200) {
					/*var*/ totalNumOfNewStudents =b ;
					
				//	console.log('应到人数2',totalNumOfNewStudents)
					document.getElementById('totalNumOfNewStudents').innerHTML = totalNumOfNewStudents;
				}
			}).catch(err => {
				console.log("err:", err)
			})
		//固定总新生人数，若有修改将在前端修改
		//var totalNumOfNewStudents = 100;
		//document.getElementById('totalNumOfNewStudents').innerHTML = totalNumOfNewStudents;
		// 基于准备好的dom，初始化echarts实例
		var myChart = echarts.init(document.getElementById('echart1'));

		/*option = {
			color: [
				'#ffb19d', '#ffde67'
			],
			tooltip: {*/
				trigger: 'item',
				/*formatter: function() {
					return '已经报到人数';
				}*/
			/*},
			legend: {
				top: '5%',
				left: 'center',
				// doesn't perfectly work with our tricks, disable it
				selectedMode: false,
				textStyle: {
					color: "#FFFDFE",
				}*/
				/*formatter: function() {
					console.log("试图修改图例");
					return '已经报到人数';
				}*/
		/*	},
			series: [{
				name: '报到完成情况',
				type: 'pie',
				radius: ['40%', '70%'],
				center: ['50%', '90%'],
				// adjust the start angle
				startAngle: 180,
				label: {
					show: true,
					formatter: '{b}：{d}%'
				},

			}]
		};*/
		option = {
			color: [
				'#ffb19d', '#ffde67'
			],
		 /*tooltip: {
		 	trigger: 'item',
		 	axisPointer: {
		 		type: 'shadow'
		 	},
		 	formatter: '{b}:{c}'
		 },*/
		  legend: {
		    orient: 'vertical',
		    x: 'left',
		    y: 'bottom',
			textStyle: {
				color: "#FFFDFE"
			}
		  },
		  series: [
		    {
				name: '报到完成情况',
		      type: 'pie',
		      radius: '50%',
			  label: {
			  	show: true,
			  	formatter: '{b}：{d}%'
			  },
		      /*data: [
		        { value: 1048, name: 'Search Engine' },
		        { value: 735, name: 'Direct' },
		        { value: 580, name: 'Email' },
		        { value: 484, name: 'Union Ads' },
		        { value: 300, name: 'Video Ads' }
		      ],*/
		      emphasis: {
		        itemStyle: {
		          shadowBlur: 10,
		          shadowOffsetX: 0,
		          shadowColor: 'rgba(0, 0, 0, 0.5)'
		        }
		      }
		    }
		  ]
		};
		// 使用刚指定的配置项和数据显示图表。
		myChart.setOption(option);
		//查询后端数据，用变量a接收已报到人数数据
		let a;
		axios.get('http://192.168.137.142:8888/student/getRepSumNum').then(res => {
			//console.log("res:", res);
			a = res.data.data[0].num;
			//console.log("变量值：",JSON.stringify(a));
			if (res.data.code == 200) {
				var numOfRestStudents = totalNumOfNewStudents - a;
				 a = parseFloat(a.toFixed(2));
				    numOfRestStudents = parseFloat(numOfRestStudents.toFixed(2));
			//	console.log("未报到人数:", numOfRestStudents);
				let optionData = {
					dataset: {
						source: [
							{name:'已报到人数',value:a},
							{name:'未报到人数',value:numOfRestStudents}
						]
					},
					tooltip: {
						trigger: 'item',
						axisPointer: {
							type: 'shadow'
						}
					}	
					
				}
				myChart.setOption(optionData);
				
				document.getElementById('numOfRegisterdStudents').innerHTML = a;
			//	console.log("未到人数：", numOfRestStudents);
			}
		}).catch(err => {
			console.log("err:", err)
		})
		
		window.addEventListener("resize", function() {
			myChart.resize();
		});
	}

	function echarts_2() {
		// 基于准备好的dom，初始化echarts实例
		var myChart = echarts.init(document.getElementById('echart2'));

		option = {
			color: ['#ffb19d', '#aaffff', ],
			tooltip: {
				trigger: 'item'
			},
			legend: {
				orient: 'vertical',
				textStyle: {
					color: "#FFFDFE"
				},
				x: 'left',
				y: 'bottom'
			},
			series: [{
				name: '男女比例',
				type: 'pie',
				radius: ['40%', '70%'],
				avoidLabelOverlap: false,
				itemStyle: {
					borderRadius: 10,
					borderColor: '#fff',
					borderWidth: 2
				},
				label: {
					show: true,
					formatter: '{b}：{d}%'
				},
				emphasis: {
					label: {
						show: true,
						fontSize: 25,
						fontWeight: 'solid'
					}
				},
				labelLine: {
					show: false
				},
				/*data: [{
						name: '男生',
						value: 1048
					},
					
					{name: '女生',
						value: 300
						
					}
				]*/
			}]
		};

		// 使用刚指定的配置项和数据显示图表。
		myChart.setOption(option);
		axios.get('http://192.168.137.142:8888/student/getGenderNum').then(res => {
			//console.log("res:", res);
			if (res.data.code == 200) {
				let optionData = {
					dataset: {
						source:
						[
							{name:'女',value:res.data.data[0].num},
							{name:'男',value:res.data.data[1].num}
						]
					}
				}
				myChart.setOption(optionData);
			}
		}).catch(err => {
			console.log("err:", err)
		})
		window.addEventListener("resize", function() {
			myChart.resize();
		});
	}


	function echarts_3() {
		// 基于准备好的dom，初始化echarts实例
		var myChart = echarts.init(document.getElementById('echart5'));

		option = {
			
			grid: {
				left: '3%',
				right: '4%',
				bottom: '3%',
				containLabel: true
			},
			xAxis: [{
				type: 'category',
				//data: ['电气信息', '工程能源', '法学新闻', '环化健康', '建筑', '艺术', '外国语'],
				axisTick: {
					alignWithLabel: true
				},
				axisLabel: {
					interval: 0,
					rotate: 45,
					show: true,
					textStyle: {
						color: '#c3dbff', //更改坐标轴文字颜色
						fontSize: 14, //更改坐标轴文字大小
					},


				}
			}],
			yAxis: [{
				type: 'value',
				axisLabel: {
					color: '#ffffff'
				}
			}],
			series: [{
				name: '人数',
				type: 'bar',
				color: "#ffea7e",
				barWidth: '60%',
				// data: [10, 52, 200, 334, 390, 330, 220],
				label: {
					show: true,
					
								position: 'top'
				}
			}]
		};
		// 使用刚指定的配置项和数据显示图表。
		myChart.setOption(option);
		axios.get('http://192.168.137.142:8888/student/getMajorNum'
		).then(res => {
			//console.log("res:", res);
			if (res.data.code == 200) {

				let optionData = {
					dataset: {
						source: res.data.data
					},
					tooltip: {
						trigger: 'axis',
						axisPointer: {
							type: 'shadow'
						}
						
					}
				}
				myChart.setOption(optionData);
			}
		}).catch(err => {
			console.log("err:", err)
		})
		window.addEventListener("resize", function() {
			myChart.resize();
		});
	}


	function echarts_4() {
		// 基于准备好的dom，初始化echarts实例
		var myChart = echarts.init(document.getElementById('echart4'), null, );

		option = {
			legend: {
				top: 'bottom',
				textStyle: {
					color: "#FFFDFE"
				}
			},
			toolbox: {
				show: true,
				feature: {
					mark: {
						show: true
					},
					dataView: {
						show: true,
						readOnly: false
					},
					restore: {
						show: true
					},
					saveAsImage: {
						show: true
					}
				}
			},
			series: [{
				name: '兴趣分布',
				type: 'pie',
				radius: [20, 70],
				center: ['50%', '40%'],
				roseType: 'area',
				label: {
					show: true,
					formatter: '{b}:{d}%'
				},
				color: ['#ffffff', '#faff8c', '#aaffff', '#a2e7ff', '#d8bdff', '#ffa1c7'],
				itemStyle: {
					borderRadius: 3,

				},
				
			}]
		};

		// 使用刚指定的配置项和数据显示图表。
		myChart.setOption(option);
		axios.get('http://192.168.137.142:8888/student/getHobbyNum'
			/*,{
					    params: {
					      hobby:'足球'
					    }
					  }*/
		).then(res => {
			//console.log("res:", res);
			if (res.data.code == 200) {
				const filteredData = res.data.data.filter(item => item.hobby !==null);//实现了去掉null
				let optionData = {
					dataset: {
						source: filteredData
					},
					tooltip: {
						trigger: 'item',
						axisPointer: {
							type: 'shadow'
						}
					}	
				}
				myChart.setOption(optionData);
			}
		}).catch(err => {
			console.log("err:", err)
		})


		window.addEventListener("resize", function() {
			myChart.resize();
		});
	}
	//柱状图，民族
	function echarts_5() {
		// 基于准备好的dom，初始化echarts实例
		var myChart = echarts.init(document.getElementById('fb1'));

		option = {
			//  backgroundColor: '#00265f',
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'shadow'
				}
			},

			grid: {
				left: '0%',
				top: '45px',
				right: '0%',
				bottom: '2%',
				containLabel: true
			},
			xAxis: [{
				type: 'category',
				//data: ['汉族', '回族', '维吾尔族', '土家族', '蒙古族', '朝鲜族', ],
				axisLine: {
					show: true,
					lineStyle: {
						color: "rgba(255,255,255,.1)",
						width: 1,
						type: "solid"
					},
				},

				axisTick: {
					show: false,
				},
				axisLabel: {
					interval: 0,
					// rotate:50,
					show: true,
					splitNumber: 15,
					textStyle: {
						color: "rgba(255, 255, 255, 0.6)",
						fontSize: '12',
					},
				},
			}],
			yAxis: [{
				type: 'value',
				axisLabel: {
					//formatter: '{value} %'
					show: true,
					textStyle: {
						color: "rgba(255,255,255,.6)",
						fontSize: '12',
					},
				},
				axisTick: {
					show: false,
				},
				axisLine: {
					show: true,
					lineStyle: {
						color: "rgba(255,255,255,.1	)",
						width: 1,
						type: "solid"
					},
				},
				splitLine: {
					lineStyle: {
						color: "rgba(255,255,255,.1)",
					}
				}
			}],
			series: [{
				type: 'bar',
				//data: [2, 3, 3, 9, 15, 12, ],
				barWidth: '35%', //柱子宽度
				// barGap: 1, //柱子之间间距
				itemStyle: {
					normal: {
						//color:['#8ec9ff','#ffb19d','#ffffff','#25ffdf','#fff798','#92acff'],
						color: '#ffb19d',
						opacity: 1,
						barBorderRadius: 5,
					}
				},
				 encode:{
				                    //将"amount"列映射到X轴
				                    x:'nation',
				                    //将"product"列映射到Y轴
				                    y:'num'
				
				                }
				
			}]
		};

		// 使用刚指定的配置项和数据显示图表。
		myChart.setOption(option);
		axios.get('http://192.168.137.142:8888/student/getNationNum'
		).then(res => {
			//console.log("res:", res);
			if (res.data.code == 200) {
			/*var sourceData = [];
			for (let i = 0; i < res.data.data.length; i++) {
				sourceData.push({
					name: res.data.data[i].nation,
					value: res.data.data[i].value
			
				});
			}*/
			//console.log('res.data.length:',res.data.data)
			const filteredData = res.data.data.filter(item => item.nation !==null);//实现了去掉null
			/*let optionData = {
				dataset: {
					source: filteredData
				}
			}*/
			/*console.log("sourceData:",sourceData);*/
				var optionData = {
					dataset: {
						source: filteredData,
					/*	sourceData*/
					}
				}
				myChart.setOption(optionData);
			}
		}).catch(err => {
			//console.log("err:", err)
		})
		window.addEventListener("resize", function() {
			myChart.resize();
		});
	}
	/*
function echarts_6() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart6'));

        var dataStyle = {
	normal: {
		label: {
			show: false
		},
		labelLine: {
			show: false
		},
		//shadowBlur: 40,
		//shadowColor: 'rgba(40, 40, 40, 1)',
	}
};
var placeHolderStyle = {
	normal: {
		color: 'rgba(255,255,255,.05)',
		label: {show: false,},
		labelLine: {show: false}
	},
	emphasis: {
		color: 'rgba(0,0,0,0)'
	}
};
option = {
	color: ['#0f63d6', '#0f78d6', '#0f8cd6', '#0fa0d6', '#0fb4d6'],
	tooltip: {
		show: true,
		formatter: "{a} : {c} "
	},
	legend: {
		itemWidth: 10,
        itemHeight: 10,
		itemGap: 12,
		bottom: '3%',
		
		data: ['浙江', '上海', '广东', '北京', '深圳'],
		textStyle: {
                    color: 'rgba(255,255,255,.6)',
                }
	},
	
	series: [
		{
		name: '浙江',
		type: 'pie',
		clockWise: false,
		center: ['50%', '42%'],
		radius: ['59%', '70%'],
		itemStyle: dataStyle,
		hoverAnimation: false,
		data: [{
			value: 80,
			name: '01'
		}, {
			value: 20,
			name: 'invisible',
			tooltip: {show: false},
			itemStyle: placeHolderStyle
		}]
	},
		{
		name: '上海',
		type: 'pie',
		clockWise: false,
		center: ['50%', '42%'],
		radius: ['49%', '60%'],
		itemStyle: dataStyle,
		hoverAnimation: false,
		data: [{
			value: 70,
			name: '02'
		}, {
			value: 30,
			name: 'invisible',
			tooltip: {show: false},
			itemStyle: placeHolderStyle
		}]
	}, 
		{
		name: '广东',
		type: 'pie',
		clockWise: false,
		hoverAnimation: false,
		center: ['50%', '42%'],
		radius: ['39%', '50%'],
		itemStyle: dataStyle,
		data: [{
			value: 65,
			name: '03'
		}, {
			value: 35,
			name: 'invisible',
			tooltip: {show: false},
			itemStyle: placeHolderStyle
		}]
	},
		{
		name: '北京',
		type: 'pie',
		clockWise: false,
		hoverAnimation: false,
		center: ['50%', '42%'],
		radius: ['29%', '40%'],
		itemStyle: dataStyle,
		data: [{
			value: 60,
			name: '04'
		}, {
			value: 40,
			name: 'invisible',
			tooltip: {show: false},
			itemStyle: placeHolderStyle
		}]
	}, 
		{
		name: '深圳',
		type: 'pie',
		clockWise: false,
		hoverAnimation: false,
		center: ['50%', '42%'],
		radius: ['20%', '30%'],
		itemStyle: dataStyle,
		data: [{
			value: 50,
			name: '05'
		}, {
			value: 50,
			name: 'invisible',
			tooltip: {show: false},
			itemStyle: placeHolderStyle
		}]
	}, ]
};
      
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }*/



})