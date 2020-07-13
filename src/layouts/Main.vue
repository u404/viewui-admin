<template>
  <div class="layout">
    <Layout :style="{ minHeight: '100vh' }">
      <Sider>
        <Menu theme="dark" width="auto" active-name="1-2" :open-names="['1']">
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-analytics" />
              Navigation One
            </template>
            <MenuItem name="1-1">Option 1</MenuItem>
            <MenuItem name="1-2">Option 2</MenuItem>
            <MenuItem name="1-3">Option 3</MenuItem>
            <MenuItem name="1-4">Option 4</MenuItem>
          </Submenu>
          <Submenu name="2">
            <template slot="title">
              <Icon type="ios-filing" />
              Navigation Two
            </template>
            <MenuItem name="2-1">Option 5</MenuItem>
            <MenuItem name="2-2">Option 6</MenuItem>
            <Submenu name="3">
              <template slot="title">Submenu</template>
              <MenuItem name="3-1">Option 7</MenuItem>
              <MenuItem name="3-2">Option 8</MenuItem>
            </Submenu>
          </Submenu>
          <Submenu name="4">
            <template slot="title">
              <Icon type="ios-cog" />
              Navigation Three
            </template>
            <MenuItem name="4-1">Option 9</MenuItem>
            <MenuItem name="4-2">Option 10</MenuItem>
            <MenuItem name="4-3">Option 11</MenuItem>
            <MenuItem name="4-4">Option 12</MenuItem>
          </Submenu>
        </Menu>
      </Sider>
      <Layout>
        <Header></Header>
        <Content :style="{ padding: '16px' }">
          <Breadcrumb :style="{ margin: '0 0 16px' }">
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Components</BreadcrumbItem>
            <BreadcrumbItem>Layout</BreadcrumbItem>
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
export default {
  data () {
    return {
    }
  },
  computed: {

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
</style>
