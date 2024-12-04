<template>
    <div class="tags">
        <el-button v-for="tag in tags" :key="tag.text" link>#{{ tag.text }}</el-button>
    </div>
</template>

<script setup lang="ts">
const tags = [
    {
        text: '4K',
    },
    {
        text: 'space',
    },
];
</script>

<style scoped lang="less">
.tags {
    margin: 10px 0px 10px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
