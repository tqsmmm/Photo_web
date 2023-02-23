<template>
    <div class="menu">
        <el-menu
            style="width: 100%"
            :default-active="activeIndex"
            mode="horizontal"
            router
            :ellipsis="false"
            @select="handleSelect"
        >
            <el-menu-item index="/">LOGO</el-menu-item>
            <div class="flex-grow" />
            <el-menu-item index="latest">Latest</el-menu-item>
            <el-menu-item index="toplist">Toplist</el-menu-item>
            <el-menu-item index="random">Random</el-menu-item>
        </el-menu>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const activeIndex = ref('1');
const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath);
};
</script>

<style scoped lang="less">
.flex-grow {
    flex-grow: 1;
}
.menu {
    display: flex;
    justify-content: center;
    align-items: center;
    &-item {
        margin: 10px;
        padding: 10px;
        width: 80px;
        height: 70px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
}
</style>
