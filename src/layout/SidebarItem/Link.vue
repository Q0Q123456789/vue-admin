<template>
  <div>
  <!-- <component v-bind="linkProps(to)">
    <slot />
  </component> -->
  </div>

</template>
<script>
export default {
  name: 'Link',
  props: {
    to: {
      type: String,
      required: true
    }
  },
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    linkProps(url) {
      if (this.isExternal(url)) {
        return {
          is: 'a',
          href: url,
          target: '_blank',
          rel: 'noopener'
        }
      }
      return {
        is: 'router-link',
        to: url
      }
    },
    isExternal(path) {
      return /^(https?:|mailto:|tel:)/.test(path)
    }
  }
}
</script>
<style lang='less' scoped>
</style>
