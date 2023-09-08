<template>
	<view class="wrap" style="background-color:#e6e6e6;">
		<view class="title_box">
			搜索结果
		</view>
		
		
	<view class="canteen_item" v-for="(course,index) in courselist" :item="course" :index="index" :key="course.id"
			style="padding: 3rpx;background-color:#ffffff;border-radius: 15rpx ;margin:30rpx">
			<view class="film_content" style="padding: 10rpx;">
				<view class="title" style="line-height: 60rpx;">
					课程名称:{{course.name}}
				</view>
				<view class="sy_time1" style="line-height: 60rpx;">
					课程类别:{{course.category}}
				</view>
				<view class="sy_time2" style="line-height: 60rpx;">
					开课学院:{{course.college}}
				</view>
				<view class="sy_time2" style="line-height: 50rpx;">
					课程介绍:{{course.description}}
				</view>
			</view>
		</view>


	</view>
</template>

<script>
	export default {
		data() {
			return {
				course:{},
				courselist: [],
				word: ''
			}
		},
		onLoad: function(option) {
			console.log("option:", option)
			this.$u.get('http://192.168.137.142:8888/study/getStudyByWord?word='+option.word)
				.then(res => { //请求成功执行的函数
				console.log("res:", res)
				if (res.code == 200) {
					this.courselist = res.data
					console("courselist:",this.courselist)
				}
				
				else{
					this.$u.toast("未查询到相关内容")
				}

			}).catch(err => { //请求失败执行的函数
				
			})
		},
		methods: {

		}
	}
</script>

<style>
	page {
		background: #f3f4f6;
	}
	.swiper_box {
		margin: 5rpx;
	}

	.title_box {
		
		margin: 10rpx;
		/* 		border: 1px solid red; */
		padding: 30rpx 30rpx;
		line-height: 60rpx;
		font-size: 50rpx;
		text-align: center;
		font-weight: 700;
		border-radius:15rpx ;
		background-color: #ffffff;
	}

	.film_content {
		/*  	border: 1px solid green; */
		margin: 5px;
		border-radius: 5rpx;
		font-size: 32rpx;
	}
	.title{
				margin-top: 15rpx;
		font-size: 36rpx;
		font-weight: 700;
		text-align: center;
		color:#da0000;
	}
	.sy_time1{
		margin-top: 10rpx;
		font-size: 30rpx;
		font-weight: 700;
		text-align: center;
		color:#000000;
	}
	.sy_time2{
			margin-top: 5rpx;
		font-size: 29rpx;
		font-weight: 700;
		text-align: center;
		padding:10rpx;
			color:#000000;
	}
	.image_box{
			box-shadow: 0 1upx 10upx 0upx rgba(0, 0, 150, .2);
		border: 2px solid #7f7f7f; 
	}
</style>
