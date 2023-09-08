<template>
	<view class="wrap" style="background-color:#e6e6e6;">
		<view class="swiper_box">
			<u-swiper :list="list" height="350;" :title="title" :effect3d="effect3d"
				indicator-position="indicatorPos"></u-swiper>
		</view>
		<view class="title_box">
			食堂档口
		</view>
		
		<view class="canteen_item" v-for="(canteen,index) in canteenlist" :item="canteen" :index="index" :key="canteen.id"
			@click="toDetail(canteen.id)" 
			style="display: flex;flex-direction: row;flex: 3;padding: 3rpx;background-color:#ffffff;border-radius: 15rpx ;margin:30rpx">
			<view class="image_box" style="flex: 1;border-radius: 5rpx;">
				<u-image width="100%" border-radius="5rpx" height="300rpx" :src="canteen.simage"></u-image>
			</view>
			<view class="film_content" style="flex: 2;padding: 10rpx;">
				<view class="title" style="line-height: 70rpx;">
					{{canteen.sname}}
				</view>
				<view class="sy_time1" style="line-height: 60rpx;">
					供应时间:{{canteen.time}}
				</view>
				<view class="sy_time2" style="line-height: 60rpx;">					
					{{canteen.description}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//轮播图开始
				list: [{
						image: 'https://img.zcool.cn/community/01ad055bef8159a80121ab5de2e6bb.jpg@1280w_1l_2o_100sh.jpg',
						title: '食堂实景展示'
					}, {
						image: 'https://bpic.588ku.com/Templet_origin_pic/05/08/11/93f63f95d3e38c19e005199f41b73fce.jpg',
						title: '厉行节约,请勿浪费食物'
					},{
						image: 'https://p5.itc.cn/images01/20210410/3b83354ee7554754afff38a441d6dd38.jpeg',
						title: '菜品展示'
					},{
						image: 'https://news.sicau.edu.cn/__local/2/82/01/43713E865B8ADA20F3E835765E8_DDF50801_71C57.jpg',
						title: '菜品展示'
					},{
						image: 'https://www.wggai.com/attached/image/20200622/20200622183337_18890.jpg',
						title: '菜品展示'
					}
				],
				title: true, //是否显示轮播图对应的标题
				mode: 'round',
				indicatorPos: 'bottomCenter', //
				effect3d: true, //是否开启3d效果
				//轮播图结束

				canteenlist: [] //用于存储食堂档口集合数据
			}
		},
		onLoad() { //在页面加载时会执行的函数
			//发送请求去查询电影列表数据
			//uni.request({})  uniapp中的请求
			//使用uview的方式请求数据:
			this.$u.get('http://192.168.137.142:8888/canteen/list').then(res => { //请求成功执行的函数
				
				if (res.code == 200) {
					this.canteenlist = res.data
				}
				console.log("canteenlist:", this.canteenlist)
			}).catch(err => { //请求失败执行的函数
				console.log(err)
			})
		},
		computed: {

		},
		methods: {
			toDetail: function(id) { //跳转到电影详情页面
			
				uni.navigateTo({
					url: '/pages/SchoolMap_function/FirstCanteen/manu/manu?manuId=' + id
				})
				console.log("id是",id)
			}
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
		font-size: 37rpx;
		font-weight: 700;
		text-align: center;
		color:#00a1e1;
	}
	.sy_time1{
		font-size: 32rpx;
		font-weight: 700;
		text-align: center;
		color:#c54162;
	}
	.sy_time2{
		font-size: 28rpx;
		font-weight: 700;
		text-align: left;
		padding:15rpx
	}
	.image_box{
			box-shadow: 0 1upx 10upx 0upx rgba(0, 0, 150, .2);
		border: 2px solid #7f7f7f; 
	}
</style>