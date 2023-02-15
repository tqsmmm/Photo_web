<template>
    <div class="search">
        <el-input class="search-item" v-model="search" placeholder="Search..." size="large">
            <template #suffix>
                <el-button text :icon="Camera" />
                <el-button text :icon="Search" />
            </template>
        </el-input>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Search, Camera } from '@element-plus/icons-vue';

const search = ref('');
</script>

<style scoped lang="less">
.search {
    margin: 10px 0px 10px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    &-item {
        width: 600px;
    }
}
</style>
