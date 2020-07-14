<template>
  <div class="login">
    <Card class="login-card">
      <div class="logo"></div>
      <Form ref="form" :model="data" :rules="rules" :label-width="70">
        <FormItem prop="user" label="用户名">
          <Input type="text" v-model="data.user" placeholder="请输入用户名" />
        </FormItem>
        <FormItem prop="password" label="密码">
          <Input type="password" v-model="data.password" placeholder="请输入密码" />
        </FormItem>
        <Button type="primary" @click="login">登录</Button>
      </Form>
    </Card>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      data: {
        user: '',
        password: ''
      },
      rules: {
        user: [
          { required: true, message: '请输入您的用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入您的密码', trigger: 'blur' },
          { type: 'string', min: 6, message: '密码不能小于6位字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    ...mapMutations(['setState']),
    login () {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.$Message.success('登录成功!')
          this.setState({
            user: { ...this.data }
          })
          const { backUrl = '/' } = this.$route.query
          this.$router.replace(backUrl)
        } else {
          // this.$Message.error('登录失败!')
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  width: 100vw;
  height: 100vh;
  background: #f8f8f9;
  @include flex($jus: center);

  &-card {
    margin-bottom: 100px;
    width: 400px;

    /deep/ .ivu-card-body {
      padding: 30px;
    }
  }
  .logo {
    margin: 10px auto 30px;
    height: 36px;
    background: url(~@/assets/logo-b.png) center no-repeat;
    background-size: contain;
  }
  .ivu-btn {
    display: block;
    margin: 0 auto;
    width: 200px;
    height: 34px;
  }
}
</style>
