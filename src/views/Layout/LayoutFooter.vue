<template lang="pug">
    .footer.alignMiddle
        p.footer-info {{msg}}
        p.footer-version Vue2-admin version 1.0
</template>

<script>
let currentElem = null;
export default {
    name: "LayoutFooter",
    data() {
        return {
            msg: ""
        };
    },
    mounted() {
        document.addEventListener("mouseover", this.helpOver);
        document.addEventListener("mouseout", this.helpOut);
    },
    destroyed() {
        document.removeEventListener("mouseover", this.helpOver);
        document.removeEventListener("mouseout", this.helpOut);
    },
    methods: {
        helpOver(e) {
            if (currentElem) return;
            let target = e.target.closest("[help]");
            if (!target) return;
            currentElem = target;
            this.msg = target.getAttribute("help");
        },
        helpOut(e) {
            if (!currentElem) return;
            let relatedTarget = e.relatedTarget;
            while (relatedTarget) {
                if (relatedTarget === currentElem) return;
                relatedTarget = relatedTarget.parentNode;
            }
            this.msg = "";
            currentElem = null;
        }
    }
};
</script>

<style scoped lang="stylus">
.footer
    height 100%

    p
        margin 0

    &-version
        float right
        height 100%
        line-height 40px
</style>
