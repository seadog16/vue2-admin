<!--<template lang="pug">-->
<!--    .page-->
<!--        .page-tool-side(v-if="$slots.left||$slots.right")-->
<!--            .page-tool-side-left-->
<!--                slot(name="left")-->
<!--            .page-tool-side-right-->
<!--                slot(name="right")-->
<!--        .page-contain-->
<!--            slot-->
<!--</template>-->
<script lang="jsx">
export default {
    name: "ByPage",
    functional: true,
    render(h, context) {
        const { left, right } = context.slots();
        let side;
        if (left || right) side = (
            <div class="page-tool-side">
                <div class="page-tool-side-left">
                    <slot name="left"/>
                </div>
                <div class="page-tool-side-right">
                    <slot name="right"/>
                </div>
            </div>
        )
        return (
            <div class="page">
                { side }
                <div class="page-contain">
                    { context.children }
                </div>
            </div>
        )
    }
};
</script>
<style scoped lang="stylus">
.page
    background #fff
    padding 20px
    box-sizing border-box
    box-shadow 0 0 10px rgba(183, 192, 206, 0.2)
    height 100%

    &-tool
        margin-bottom 10px

        &-side
            justify-content space-around
            margin-bottom 10px

            &-left
                flex auto

            &-right
                flex auto
                text-align right


    &-contain
        position relative
        height 100%
</style>
