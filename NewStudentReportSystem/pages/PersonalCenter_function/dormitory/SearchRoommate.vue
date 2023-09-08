<template>
	<view class="wrap">
		<view class="top"></view>
		<view class="content">
			<view class="title">竹四{{this.RoommateList[0].room}}宿舍</view>
			<view class="roommate_info" v-for="(Roommate,index) in RoommateList" :item="Roommate" :index="index"
				:key="Roommate.id">
				<view class="img_box">
					<image class="roommate_img" :src="Roommate.image"></image>
				</view>
				<view class="roommate_content">
					<view class="name">姓名 {{Roommate.name}}</view>
					<view class="other">性别 {{Roommate.gender}}</view>
					<view class="other">专业 {{Roommate.major}}</view>
					<view class="other">家乡 {{Roommate.zone}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				RoommateList: [{room:''}]
			}
		}, 
		onLoad: function(option) {
			//test*test
			this.$u.get('http://192.168.137.142:8888/student/getRoomPerson?room=' + option.DorNum).then(res => {
				//请求成功执行的函数
				if (res.code == 200) {
					this.RoommateList = res.data;
				}
				console.log(this.RoommateList)
			}).catch(err => {
				//请求失败执行的函数
				console.log(res)
			})
		},
		computed: {

		},
		methods: {


		},
		filters: {
			formatSex: function(int) {
				const sexEnum = {
					0: "女",
					1: "男",
				}
				return sexEnum[int];
			},
		},

	}
</script>

<style lang="scss" scoped>
	@import'SearchRoomate.scss';
</style>