<template lang="pug">
    el-tag(
        size="small"
        disable-transitions
        effect="plain"
        :style="style") {{valueItem.label||value}}
</template>

<script>
export default {
    name: "ColumnTag",
    props: {
        item: {
            type: Object,
            default: () => ({})
        },
        row: Object
    },
    computed: {
        value() {
            return this.row[this.item.prop];
        },
        valueItem() {
            const findItem = v => String(v.value || "") === String(this.value || "");
            return this.item.options?.find(findItem) || {};
        },
        itemIndex() {
            const findItem = v => String(v.value || "") === String(this.value || "");
            return this.item.options?.findIndex(findItem);
        },
        style() {
            const findItem = v => String(v.value || "") === String(this.value || "");
            const index = this.item.options?.findIndex(findItem);
            return {
                color: this.item.tagColors?.color?.[index],
                borderColor: this.item.tagColors?.border?.[index]
            };
        }
    }
};
</script>
