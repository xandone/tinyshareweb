<template>
    <div id="card-list-root" @mouseenter="handleEnter" @mouseleave="handleLeave">
        <el-card shadow="Always">
            <div class="shadow-root">
                <img src="http://www.xandone.pub/FmZzFx7cG3vzfpBA0MlmA1l5e9eB" alt="" class="card-img">
                <div class="content">
                    <div class="title">
                        <span>[影视]</span>
                        <h2><a href="">是多少分水电费水电费水电费</a></h2>
                    </div>
                    <div class="user-des-date">
                        <div class="des"><span>是多少分水电费水电费水电费是多少分水电费水电费水电费是多少分水电费水电费水电费是多少分水电费水电费水电费</span></div>
                        <div class="user-date">
                            <div class="user-ic">
                                <el-icon :size="16">
                                    <User />
                                </el-icon>
                                <span>xandone</span>
                            </div>
                            <div> <span class="date">2022-11-12</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </el-card>

        <el-popover placement="top-start" trigger="hover" v-if="showCollection">
            <span class="colletion-tip">收藏资源</span>
            <template #reference>
                <el-icon class="colletion" :size="14">
                    <CollectionTag />
                </el-icon>
            </template>
        </el-popover>
    </div>
</template>

<script>
    export default {
        props: {
            bean: {}
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
    #card-list-root {
        margin-bottom: 10px;
        position: relative;
    }

    #card-list-root:hover {
        transition: all 0.3s linear;
        transform: translateX(-10px);
    }

    .shadow-root {
        display: flex;
        // margin-bottom: 10px;

        .card-img {
            width: 150px;
            height: 100px;
        }


    }

    .content {
        margin-left: 10px;
        display: flex;
        flex-direction: column;
        position: relative;

        .title {
            display: flex;
            align-items: center;

            span {
                font-size: 12px;
                color: #99a9bf;
            }

            h2 {
                display: inline-block;
                margin-left: 6px;
            }

            a {
                margin-right: 10px;
                font-size: 16px;
            }
        }

        .user-des-date {
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            .des {
                span {
                    color: #99a9bf;
                    font-size: 14px;
                }
            }
        }

        .user-date {
            display: flex;
            flex-direction: row;
            align-items: center;
        }

        .user-ic {
            display: flex;
            flex-direction: row;
            color: #67C23A;
            align-items: center;

            span {
                margin-left: 6px;
                font-size: 14px;
            }
        }

        .date {
            color: #99a9bf;
            margin-left: 20px;
            font-size: 12px;
        }

    }

    .colletion {
        position: absolute;
        top: 20px;
        left: 20px;
        background-color: #aaa;
        padding: 10px;
        border-radius: 50%;
        color: white;
    }

    .colletion-tip {
        font-size: 12px;
    }
</style>