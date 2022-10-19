<template>
    <div class="navi">
        <div class="web-tag">
            <a href="/">
                <span class="webname">Tiny分享</span>
            </a>
            <div class="search">
                <el-icon class="search-ic" :size="35">
                    <Search />
                </el-icon>
                <input @keyup.enter="submit22" class="search-input" v-model="input" placeholder="搜索关键字" type="text"
                    maxlength="20" />
            </div>
        </div>

        <div class="top-item">
            <div class="item">
                <el-icon class="ic" :size="30">
                    <HomeFilled />
                </el-icon>
                <span>首&nbsp;页</span>
            </div>
            <el-icon class="btn edit" @click="go2Publish" :size="30">
                <Edit />
            </el-icon>
            <span class=" btn login">登&nbsp;录</span>
        </div>
    </div>

</template>


<script>
    export default {
        data() {
            return {
                input: '',
            }
        },
        methods: {
            submit22() {
                alert(this.input)
            },
            go2Publish() {
                this.$router.push('/publish')
            }
        }
    }
</script>


<style lang="scss" scoped>
    .navi {
        height: 150px;
        margin: 0 250px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        a:focus,
        a:hover {
            color: #8492a6;
            text-decoration: none;
        }

        .web-tag {
            display: flex;
            flex-direction: row;
        }

        .webname {
            font-size: 60px;
            font-weight: bold;
            font-family: '仿宋';
        }

        .top-item {
            color: #8492a6;
            font-weight: bold;
            display: flex;
            align-items: center;

            .item {
                display: flex;
                align-items: center;
                cursor: pointer;
                position: relative;

                .ic {
                    margin-right: 6px;
                }


            }

            .item::after {
                content: '';
                position: absolute;
                height: 4px;
                background-color: #409EFF;
                bottom: -10px;
                left: 0;
                right: 0;
                transition: all .3s;
                transform: scaleX(0);

            }

            .item:hover::after {
                transform: scaleX(1);
            }

            .item:hover {
                color: #409EFF;
            }

            span {
                font-size: 32px;
            }

            .btn:hover {
                opacity: .8;
            }

            .login {
                background-color: #409EFF;
                color: white;
                font-size: 28px;
                font-weight: none;
                padding: 6px 20px;
                border-radius: 6px;
                margin-left: 20px;
                cursor: pointer;
            }
        }

        .edit {
            padding: 10px 20px;
            background-color: #409EFF;
            color: white;
            margin-left: 20px;
            border-radius: 6px;
            cursor: pointer;
        }


        .search {
            display: flex;
            align-items: center;
            flex-direction: row;
            margin-left: 100px;
            padding: 10px;

            .search-ic {
                padding: 20px;
                color: #409EFF;
                border-radius: 50%;
                background-color: #ddd;
            }
        }

        .search-input {
            height: 60px;
            width: 0;
            background-color: transparent;
            transition: all .3s linear;
            border: 0;
            outline: none;
        }

        .search:hover .search-input {
            width: 800px;
            padding: 0 10px;
        }

        .search:hover .search-input {
            width: 800px;
            padding: 0 10px;
            border-bottom: 1px solid #409EFF;
        }

        .search-input:focus {
            width: 800px;
            padding: 0 10px;
            border-bottom: 1px solid #409EFF;
        }

        // .search-input:focus+.search-line {
        //     width: 800px;
        // }

    }
</style>