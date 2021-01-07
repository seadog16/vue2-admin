<template lang="pug">
    .header.alignMiddle
        img.logo(src="~@/assets/logo.png")
        h1 Vue2-admin
</template>

<script>
export default {
    name: "LayoutBrand"
};
</script>

<style scoped lang="stylus">
.header
    height 100%
    user-select none

    h1
        font-size 20px
        color #1a9866

.logo
    max-height 30px
    vertical-align middle
    margin-right 10px
</style>
