<template>
    <div class="tag-root">
        <div class="tag-item" v-for="(item,index) in tagArr" v-bind:key="index" @mouseenter="hoverCallback"
            :class="index==selectIndex?'active':'unactive'" @click="clickTag(index)">
            <el-icon class="tag-ic">
                <component :is="iconArr[index]"></component>
            </el-icon>
            <span>{{item}}</span>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                tagArr: ['全部资源', '影视', '游戏', '书籍', '图片', '工具'],
                iconArr: ['Folder', 'VideoPlay', 'Bicycle', 'Reading', 'Picture', 'Suitcase'],
                currentx: 20,
                currenty: 20,
                targetx: 0,
                targety: 0,
                xpx: 0,
                ypx: 0,
                xxx: '500px',
                selectIndex: 0
            }
        },
        methods: {
            hoverCallback(e) {
                // console.log(e.target.offsetLeft + '  ' + e.target.offsetTop)
                this.targetx = this.currentx - e.target.offsetLeft
                this.xpx = this.targetx + 'px'
                // console.log('targetx=' + this.targetx)
                // this.targety = e.target.offsetTop
                this.currentx = e.target.offsetLeft
            },
            clickTag(index) {
                this.selectIndex = index
            }
        }
    }
</script>

<style lang="scss">
    .tag-root {
        display: flex;
        flex-direction: row;

        .tag-item {
            margin: 20px;
            position: relative;
            cursor: pointer;
            padding: 10px 20px;
            display: flex;
            align-items: center;
        }

        .tag-item::after {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            border-radius: 60px;
        }

        .tag-item:hover::after {
            background-color: #409EFF;
            animation: move1 .5s forwards;
        }

        .active {
            background-color: #409EFF;
            border-radius: 60px;
            color: white;
        }

        .unactive {
            border-radius: 60px;
            background-color: transparent;
            color: #333;
        }

        .tag-ic {
            margin-right: 6px;
        }

        @keyframes move1 {
            from {
                transform: translateX(v-bind(xpx));
                opacity: 0;
            }

            to {
                transform: translateX(0);
                opacity: .3;
            }
        }
    }
</style>