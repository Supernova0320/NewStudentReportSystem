<template>
	<view class="wrap" style="background-color:#e6e6e6;">
		<view class="title_box">
			课程详情
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
				fid: '',
				keyword: '',
				courselist: [] //用于存储食堂档口集合数据

			}
		},
		onLoad: function(option) { //在页面加载时会执行的函数
			//发送请求去查询电影列表数据
			//uni.request({})  uniapp中的请求
			//使用uview的方式请求数据:
			console.log("option:", option)
			this.$u.get('http://192.168.137.142:8888/study/getStudyById/' + option.Id).then(res => { //请求成功执行的函数
				console.log("res:", res)
				if (res.code == 200) {
					this.fid = option.Id
					console.log("id为:", this.fid)
					this.courselist = res.data
				}
				console.log("manulist:", this.courselist)
			}).catch(err => { //请求失败执行的函数
				console.log(err)
			})
		},
		computed: {

		},
		methods: {
			// research: function(keyword) {
			// 	console.log("搜索成功:",this.keyword)
			// 	console.log("id:",this.fid)
			// 	if(keyword){
			//                uni.navigateTo({
			// 		url:'/pages/serve_function/study/research?word='+this.keyword
			// })
			// 	}
			// 	else{
			// 		this.$u.toast("请输入搜索内容!")
			// 	}

			//  }
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
