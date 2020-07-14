<template>
  <MenuItem v-if="menu.title && menu.component" :name="menu.path" :to="menu.path">{{menu.title}}</MenuItem>
  <Submenu v-else-if="menu.title && menu.children" :name="menu.path">
    <template slot="title">
      <Icon v-if="menu.icon" :type="menu.icon" />
      {{menu.title}}
    </template>
    <menu-render :menu="m" v-for="(m,i) in menu.children" :key="i"></menu-render>
  </Submenu>
</template>

<script>
export default {
  name: 'menu-render',
  props: {
    menu: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
