<template>
    <div class="card-bg">
        <div class="w-raduis-bg anim  content-root" @mouseenter="handleEnter" @mouseleave="handleLeave">
            <img class="card-img" src="http://www.xandone.pub/FmZzFx7cG3vzfpBA0MlmA1l5e9eB" alt="">
            <div class="card-descip">
                <div class="date"><span>2022-11-12</span> <span>[影视]</span></div>
                <h2>
                    <router-link :to="'/details/'+bean" target="_blank" class="title">
                        是多少分水电费水电费水电费
                    </router-link>
                </h2>
                <span class="descip">是多少分水电费水电费水电费水电费水电费水电费水电费</span>

                <div class="user-ic">
                    <el-icon :size="30">
                        <User />
                    </el-icon>
                    <span>xandone</span>
                </div>
            </div>

            <el-popover placement="top-start" trigger="hover">
                <span class="colletion-tip">收藏资源</span>
                <template #reference>
                    <el-icon class="colletion" v-if="showCollection" :size="30">
                        <CollectionTag />
                    </el-icon>
                </template>
            </el-popover>

        </div>

    </div>
</template>

<script>
    export default {
        props: {
            bean: {
                type: Object
            }
        },
        data() {
            return {
                showCollection: false,
            }
        },
        methods: {
            handleEnter(e) {
                console.log(11111)
                this.showCollection = !this.showCollection;
            },
            handleLeave(e) {
                console.log(2222)
                this.showCollection = !this.showCollection;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .card-bg {
        margin: 20px 20px;
        width: calc((100% - 200px) / 5);
        position: relative;
    }



    .content-root {
        position: relative;

        .colletion {
            position: absolute;
            top: 20px;
            right: 20px;
            background-color: #aaa;
            padding: 10px;
            border-radius: 50%;
            color: white;
        }
    }

    .colletion-tip {
        font-size: 22px;
    }


    .anim {
        transition: all .5s ease;
    }

    .anim:hover {
        transform: translateY(-30px);
    }

    .card-img {
        width: 100%;
        height: 400px;
        border-top-right-radius: 20px;
        border-top-left-radius: 20px;
    }

    .card-descip {
        display: flex;
        flex-direction: column;
        padding: 0 20px 10px 20px;
        color: #99a9bf;


        .date {
            display: flex;
            align-items: center;
            justify-content: space-between;

            span:last-child {
                font-size: 26px;
            }
        }

        .title {
            display: inline-block;
            margin: 10px 0;
            font-size: 30px;
        }

        .descip {
            font-size: 25px;
        }

        .user-ic {
            display: flex;
            flex-direction: row;
            color: #67C23A;
            align-items: center;
            margin-top: 10px;

            span {
                margin-left: 6px;
            }
        }
    }
</style>