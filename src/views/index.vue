<template>
    <menus></menus>
    <search></search>
    <tags></tags>
    <picList :list="list"></picList>
    <div></div>
</template>

<script setup lang="ts">
import menus from '../components/menu.vue';
import search from '../components/search.vue';
import tags from '../components/tag.vue';
import picList from '../components/piclist.vue';

const list = [
    { file: 'http://localhost:5173/images/wallhaven-6dqemx.jpg' },
    { file: 'http://localhost:5173/images/wallhaven-kx9jpq.jpg' },
    { file: 'http://localhost:5173/images/wallhaven-m3pvy8.jpg' },
    { file: 'http://localhost:5173/images/wallhaven-p92mj3.jpg' },
    { file: 'http://localhost:5173/images/wallhaven-x6128o.jpg' },
    { file: 'http://localhost:5173/images/wallhaven-yxj2el.png' },
    { file: 'http://localhost:5173/images/wallhaven-zyx9lw.jpg' },
    { file: 'http://localhost:5173/images/wallhaven-zyxvqy.jpg' },
];
</script>

<style scoped lang="less"></style>
