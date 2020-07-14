<template>
  <div class="layout">
    <Layout :style="{ minHeight: '100vh' }">
      <Sider>
        <Menu theme="dark" width="auto" :active-name="$route.path" :open-names="openNames">
          <MenuRender :menu="m" v-for="(m,i) in menuRoutes" :key="i"></MenuRender>
        </Menu>
      </Sider>
      <Layout>
        <Header theme="light">
          <div class="header-layout">
            <div class="header-layout-content"></div>
            <div class="header-layout-content">
              <Dropdown @on-click="handleUserMenuClick">
                <Avatar class="user-avator" v-if="user && user.avator" src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
                <Avatar class="user-avator" v-else style="background-color: #87d068" icon="ios-person" />
                <DropdownMenu slot="list">
                  <DropdownItem>用户信息</DropdownItem>
                  <DropdownItem>系统设置</DropdownItem>
                  <DropdownItem divided name="logout">退出</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
        </Header>
        <Content :style="{ padding: '16px' }">
          <Breadcrumb :style="{ margin: '0 0 16px' }">
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Components</BreadcrumbItem>
            <BreadcrumbItem>{{openNames}}</BreadcrumbItem>
          </Breadcrumb>
          <Card>
            <router-view class="view"></router-view>
          </Card>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import { menuRoutes } from '@/router'
import MenuRender from './MenuRender'
export default {
  components: {
    MenuRender
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['user']),
    menuRoutes () {
      return menuRoutes
    },
    openNames () {
      return this.$route.path.split('/').reduce((res, item) => {
        if (item) {
          const lastItem = (res.length && res[res.length - 1]) || ''
          res.push(`${lastItem}/${item}`)
        }
        return res
      }, [])
    }
  },
  methods: {
    ...mapMutations(['setState']),
    handleUserMenuClick (key) {
      key && this[key]()
    },
    logout () {
      console.log('logout')
      this.setState({ user: null })
      this.$router.replace('/login')
    }
  }
}
</script>
<style lang="scss" scoped>
.ivu-layout-header {
  background: #fff;
  box-shadow: 0 1px 1px rgba(0,0,0,.1);
  &:hover {
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
    border-color: #eee;
  }
}
.header-layout {
  @include flex;
  .user-avator {
    cursor: pointer;
  }
}
</style>
