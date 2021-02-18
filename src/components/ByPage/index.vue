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
        const { left, right, tag } = context.slots();
        let side;
        if (left || right) {
            side = (
                <div class="page-tool">
                    <div class="page-tool-left">
                        { left }
                    </div>
                    <div class="page-tool-right">
                        { right }
                    </div>
                </div>
            )
        }
        let templateTag;
        if (tag) {
            templateTag = (
                <div class="page-tag">
                    { tag }
                </div>
            )
        }
        let height = !side && !tag
            ? "100%"
            : `calc(100%${side ? " - 42px" : ""}${tag ? " - 35px" : ""})`;
        return (
            <div class="page">
                { side }
                { templateTag }
                <div class="page-contain" style={ "height:" + height }>
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
        height 32px
        box-sizing border-box
        display flex
        justify-content space-between

        &-left
            flex auto

        &-right
            flex auto
            text-align right

    &-tag
        height 24px
        margin-bottom 10px

    &-contain
        position relative
        height 100%
</style>
