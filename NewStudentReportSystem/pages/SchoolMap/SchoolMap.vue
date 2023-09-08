<template>
	<view class="content">
		<u-navbar :is-back="false" title="校园地图" title-color="#ffffff" title-size="37"
			:background="naviBackground"></u-navbar>
		<u-top-tips ref="uTips"></u-top-tips>
		<view class="pic">
			<image class="background" src="/static/schoolMap.png"> </image>
			<!-- 第一食堂 -->
			<image @click="GoFirstCanteen()" class="bottom1" src="/static/mapclick2.png" mode="aspectFill"
				style="width: 5%; height:5%; position: absolute; top: 38%; left: 42%; z-index: 1; "></image>
			<!-- 宿舍：梅园 -->
			<image @click="GoPlumGarden()" cclass="bottom2" src="/static/mapclick2.png" mode="aspectFill"
				style="width: 5%; height:5%; position: absolute; top: 38%; left: 53%; z-index: 1;"></image>
			<!--宿舍：竹园 -->
			<image @click="GoBambooGarden()" class="bottom3" src="/static/mapclick2.png" mode="aspectFill"
				style="width: 5%; height:5%; position: absolute; top: 37%; left: 31%; z-index: 1;"></image>
			<!--宿舍：松园 -->
			<image @click="GoPineGarden()" class="bottom4" src="/static/mapclick2.png" mode="aspectFill"
				style="width: 5%; height:5%; position: absolute; top: 37%; left: 15%; z-index: 1;"></image>
			<!-- 第二食堂-->
			<image @click="GoSecondCanteen()" class="bottom5" src="/static/mapclick2.png" mode="aspectFill"
				style="width: 5%; height:5%; position: absolute; top: 44%; left: 21%; z-index: 1;"></image>
			<!-- 第一教学楼-->
			<image @click="GoFirstSchoolBuilding()" class="bottom6" src="/static/mapclick2.png" mode="aspectFill"
				style="width: 5%; height:5%; position: absolute; top: 47%; left:71%; z-index: 1;"></image>
			<!-- 运动场1-->
			<image @click="GoPlayground1()" class="bottom7" src="/static/mapclick2.png" mode="aspectFill"
				style="width: 5%; height:5%; position: absolute; top: 38%; left:71%; z-index: 1;"></image>
			<!-- 运动场2-->
			<image @click="GoPlayground2()" class="bottom8" src="/static/mapclick2.png" mode="aspectFill"
				style="width: 5%; height:5%; position: absolute; top: 52%; left:21%; z-index: 1;"></image>
			<!-- 第三食堂-->
			<image @click="GoThirdCanteen()" class="bottom9" src="/static/mapclick2.png" mode="aspectFill"
				style="width: 5%; height:5%; position: absolute; top: 65%; left: 44%; z-index: 1;"></image>
			<!-- 图书馆-->
			<image @click="GoLibrary()" class="bottom10" src="/static/mapclick2.png" mode="aspectFill"
				style="width: 5%; height:5%; position: absolute; top: 59%; left: 67%; z-index: 1;"></image>
		</view>
		  <view class="container">
		    <view class="text" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 20px; text-align: center;">
		      点击地图上的定位标查看详情
		    </view>
			
		  </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				naviBackground: {
					backgroundImage: 'linear-gradient(45deg, rgb(58, 174, 255), rgb(50,233,255))'
				},
				GoFirstCanteen: function() {
					uni.navigateTo({
						url: "/pages/SchoolMap_function/FirstCanteen/index/index"
					})
				},
				GoBambooGarden: function() {
					uni.navigateTo({
						url: "/pages/SchoolMap_function/BambooGarden/BambooGarden"
					})
				},
				GoPlumGarden: function() {
					uni.navigateTo({
						url: "/pages/SchoolMap_function/PlumGarden/PlumGarden"
					})
				},
				GoPineGarden: function() {
					uni.navigateTo({
						url: "/pages/SchoolMap_function/PineGarden/PineGarden"
					})
				},
				GoSecondCanteen: function() {
					uni.navigateTo({
						url: "/pages/SchoolMap_function/SecondCanteen/index/index"
					})
				},
				GoFirstSchoolBuilding: function() {
					uni.navigateTo({
						url: "/pages/SchoolMap_function/FirstSchoolBuilding/FirstSchoolBuilding"
					})
				},
				GoPlayground1: function() {
					uni.navigateTo({
						url: "/pages/SchoolMap_function/Playground1/Playground1"
					})
				},
				GoPlayground2: function() {
					uni.navigateTo({
						url: "/pages/SchoolMap_function/Playground2/Playground2"
					})
				},
				GoThirdCanteen: function() {
					uni.navigateTo({
						url: "/pages/SchoolMap_function/ThirdCanteen/index/index"
					})
				},
				GoLibrary: function() {
					uni.navigateTo({
						url: "/pages/SchoolMap_function/Library/Library"
					})
				}


			}
		},
		onReady() {
			this.$refs.uTips.show({
				title: '点击地图上的地点了解详情',
				type: 'info',
				duration: '1700'
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
</style>

<style lang="scss" scoped>
	@import "./SchoolMap.scss";
</style>