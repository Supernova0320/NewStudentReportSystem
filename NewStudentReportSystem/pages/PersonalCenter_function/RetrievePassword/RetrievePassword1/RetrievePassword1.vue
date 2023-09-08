<template>
	<view class="wrap">
		<view class="top"></view>
		<view class="content">
			<view class="title">找回密码	</view>

			<u-form ref="validateFormRef" :model="user":label-width="120">
				<u-form-item label="学号" prop="id" :border-bottom="false">
					<u-input class="u-border-bottom" v-model="user.id" placeholder="请输入学号"  />
				</u-form-item>
				<u-form-item label="电话" prop="phone" :border-bottom="false">
					<u-input type="phone" class="u-border-bottom" v-model="user.phone" placeholder="请输入手机号" />
				</u-form-item>
			<u-form-item label="验证码" prop="captcha"  >
							<u-input v-model="user.captcha"  placeholder="请输入验证码"/>
							<u-button @click="sendVerificationCode()" style="size: mini;" :disabled="disableSendButton">{{text}}</u-button>
						</u-form-item>
			</u-form>
			  <u-button type="error" @click="submit()" :disabled="!isAgreement" class="loginBtn">提交</u-button>
		</view>
	</view>
</template>

<script>


    export default {
        data() {
            return {
				text:"获取验证码",
            user:{
				id:'',
				phone:'',
				captcha:''
			},
				  isAgreement: false,
			      disableSendButton: false
                }

        },
        onReady() {
            const _self = this

        },
        methods: {
			 sendVerificationCode:function() {

			      // 发送验证码逻辑
			      // 这里可以调用后台接口发送验证码到用户的手机号
			      // 验证码发送成功后可以禁用发送按钮，设置倒计时等待用户重新发送
					if(this.user.phone.length<4)
					{
						uni.showToast({
							icon:"none",
							title:"请输入正确的手机号"
						})
						return;
					}
					this.isAgreement=true;
			      this.disableSendButton = true;
			      let count = 60;
			      const timer = setInterval(() => {
			        this.text = `${count}秒后重新发送`;
			        count--;
			        if (count === 0) {
			          clearInterval(timer);
			          this.disableSendButton = false;
					  this.text='获取验证码';
			        }
			      }, 1000);
			    },
			//方法
			submit:function(){
					uni.request({
						//验证验证码是否正确
						url:'http://192.168.137.142:8888/testcaptcha/getRusult',
						method:'GET',
						data:this.user,
						timeout:5000,
						success:res=>{
							console.log(res.data)
							if(res.data.code==200){
									//跳转到修改密码界面
							uni.navigateTo({						
								url:'/pages/PersonalCenter_function/RetrievePassword/RetrievePassword2/RetrievePassword2?id='+res.data.data
	
							})
							}
							else if(res.data.code==500)
							{
								uni.showToast({
									icon:'none',
									title:'学号或电话有误!'	
								})
							}
							else if(res.data.code==300)
							{
								uni.showToast({
									icon:'none',
									title:'验证码有误!'	
								})
							}
						},	
						fail:function(){
							this.$u.toast('验证码有误!')
						}
					})
				
							}
		}
    }
</script>

<style lang="scss" scoped>
    @import "./RetrievePassword1.scss";
</style>
