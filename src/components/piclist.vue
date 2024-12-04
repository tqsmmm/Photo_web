<template>
    <div class="pic">
        <div :style="{ height: item.height + 'px', top: item.top + 'px', left: item.left + 'px' }"
            v-for="(item, index) in items" class="items">
            <el-image :src="item.file" :zoom-rate="1.2" :preview-src-list="srcList" :initial-index="index"
                loading="lazy" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, onMounted } from 'vue';

const props = defineProps<{
    list: any[];
}>();

const items = reactive<any[]>([]);

const srcList = reactive<string[]>([]);

const init = () => {
    const heightList: any[] = [];
    const width = 310;
    const x = document.body.clientWidth;
    const column = Math.floor(x / width);

    for (let i = 0; i < props.list.length; i++) {
        let img = document.createElement('img');
        img.src = props.list[i].file;

        if (i < column) {
            props.list[i].top = 10;
            props.list[i].left = i * width + (x - column * width) / 2;

            heightList.push(Math.floor(img.height / (img.width / width)) + 10);

            items.push(props.list[i]);
        } else {
            let current = heightList[0];
            let index = 0;

            heightList.forEach((h, inx) => {
                if (current > h) {
                    current = h;
                    index = inx;
                }
            });

            props.list[i].top = current + 10;
            props.list[i].left = index * width + (x - column * width) / 2;

            heightList[index] =
                heightList[index] + Math.floor(img.height / (img.width / width)) + 10;

            items.push(props.list[i]);
        }

        srcList.push(props.list[i].file);
    }
};

onMounted(() => {
    window.onresize = () => init();
    init();
});
</script>

<style scoped lang="less">
.pic {
    position: relative;
    height: 100%;

    .items {
        position: absolute;
        width: 300px;
    }
}
</style>
