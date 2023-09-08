<template>
	<view class="wrap">
		<view class="top"></view>
		<view class="content">
			<view class="title">修改密码	</view>

			<u-form ref="validateFormRef" :model="user" :label-width="140">
				<u-form-item label="原密码" prop="oripassword" :border-bottom="false">
					<u-input type="password" class="u-border-bottom" v-model="user.oripassword" placeholder="请输入新密码"  />
				</u-form-item>
				<u-form-item label="新密码" prop="password" :border-bottom="false">
					<u-input type="password" class="u-border-bottom" v-model="user.password" placeholder="请输入新密码"  />
				</u-form-item>
				<u-form-item label="确认密码" prop="passwords" :border-bottom="false">
					<u-input type="password" class="u-border-bottom" v-model="user.passwords" placeholder="请再次输入新密码" />
				</u-form-item>
			</u-form>
			  <u-button type="primary" @click="change()"  class="loginBtn">确定</u-button>
		</view>
	</view>
</template>

<script>
export default {
    name: "changePwd",
    data() {
        return {
			user:{
				id:'',
				oripassword:'',
				password:'',
				passwords: ''
		
			}
        };
    },
	onLoad(e) {   //在加载时获取跳转后的数据
				this.user.id = e.id ;// code为上一个页面传递时自定义的参数
			},
    methods: {
		change:function(){
				if(this.user.password.length>=6 && this.user.password.length<=12 && this.user.passwords.length>=6 && this.user.passwords.length<=12 )
				{
					uni.request({
						url:'http://192.168.137.142:8888/testcaptcha/mypasswordchange',
						data:this.user,
						method:'PUT',
						Timeout:5000,
						success:(res) =>{
							console.log("res:",res);
							if(res.data.code==200){	
								//修改成功
								uni.showToast({
									icon:'success',
									title:'修改成功！'
								})
								setTimeout(() => {
									uni.navigateTo({
										url:'/pages/PersonalCenter_function/login/login'
									})
								}, 1700);				
							}	
							else if(res.data.code==300)
							{
								uni.showToast({
									icon:'none',
									title:'两次新密码不一致！'
								})
								//两次密码不一致
							}
							else if(res.data.code==250)
							{
								//原密码错误	
								uni.showToast({
									icon:'none',
									title:'与原密码相同,请重新输入!'
								})
							}
							else if(res.data.code==500)
							{
								//原密码错误	
								uni.showToast({
									icon:'none',
									title:'原密码错误！'
								})
							}
						},
						fail:function(){
							uni.showToast({
								icon:'none',
								title:'修改失败！'
							})
						}
					})		
				}
				else if(this.user.password.length==0 && this.user.passwords.length==0)
				{
					uni.showToast({
						icon:'none',
						title:'请输入密码！'
					})
				}
				else{
					uni.showToast({
						icon:'none',
						title:'密码长度不正确，请重新输入！'
					})
				}
		}
    }

}
</script>
<style>
	page {
		background: #f3f4f6;
	}
</style>
<style lang="scss" scoped>
    @import "./ChangePassword.scss";
</style>