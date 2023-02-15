<template>
    <div class="common-layout">
        <el-container>
            <el-header><menus></menus></el-header>
            <el-main>toplist</el-main>
        </el-container>
    </div>
</template>

<script setup lang="ts">
import menus from '../../components/menus/index.vue';
</script>

<style scoped>
* {
    padding: 0;
    margin: 0;
}
</style>
