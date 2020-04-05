<template>
  <div class="login_body">
    <div class="login_box">
      <div>
        <input type="text"
               class="login_text"
               placeholder="账户名/手机号/Email">
      </div>
      <div>
        <input type="password"
               class="login_text"
               placeholder="请输入您的密码">
      </div>
      <div class="login_btn">
        <input type="submit"
               value="登录">
      </div>
      <div class="login_link">
        <a href="#">立即注册</a>
        <a href="#">找回密码</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login'
}


</script>

<style scoped>
.login_body {
  flex: 1;
  overflow: auto;
}
.login_body .login_box {
  position: absolute;
  top: 40px;
  overflow: hidden;
  bottom: 50px;
  width: 100%;
  background-color: #f1f1f1;
  padding: 20px;
}
.login_body .login_text {
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 20px;
  border-bottom: 1px #ccc solid;
  margin-bottom: 5px;
  margin-top: 3px;
  outline: none;
  font-size: 14px;
}
.login_body .login_btn {
  margin-top: 20px;

  width: 100%;
  height: 50px;
}
.login_body .login_btn input {
  width: 100%;
  height: 100%;
  border-radius: 50px;
  background-color: #e54847;
  border: none;
  display: block;
}
.login_body .login_link {
  display: flex;
  justify-content: space-between;
}
.login_body .login_link a {
  text-decoration: none;
  margin: 5px;
  font-size: 12px;
  color: #e54847;
}
</style>
