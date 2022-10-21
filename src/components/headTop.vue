<template>
    <div class="navi">
        <div class="web-tag">
            <a href="/" class="webname">
                资源共享
            </a>
            <div class="search">
                <el-icon class="search-ic" :size="18">
                    <Search />
                </el-icon>
                <input @keyup.enter="submit22" class="search-input" v-model="input" placeholder="搜索关键字" type="text"
                    maxlength="20" />
            </div>
        </div>

        <div class="top-item">
            <div class="item">
                <el-icon class="ic" :size="18">
                    <HomeFilled />
                </el-icon>
                <span>首&nbsp;页</span>
            </div>
            <el-icon class="btn edit" @click="go2Publish" :size="16">
                <Edit />
            </el-icon>
            <div class="login-root">
                <span class="login" @click="login">登&nbsp;录</span>
                <span class="login" @click="regist">注&nbsp;册</span>
            </div>
        </div>

        <!-- 登录 -->
        <el-dialog v-model="loginDialog" title="登录" width="400px" :before-close="handleClose">
            <el-input class="el-login" v-model="usermail" placeholder="请输入邮箱">
                <template #prepend>账户</template>
            </el-input>
            <el-input class="el-login" v-model="userpsw" placeholder="请输入密码">
                <template #prepend>密码</template>
            </el-input>

            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="loginDialog = false">取消</el-button>
                    <el-button type="primary" @click="loginDialog = false">登录</el-button>
                </span>
            </template>
        </el-dialog>

        <!-- 注册 -->
        <el-dialog v-model="registDialog" title="注册" width="400px" :before-close="handleClose">
            <el-input class="el-login" v-model="usermail" placeholder="请输入邮箱">
                <template #prepend>账户</template>
            </el-input>
            <el-input class="el-login" v-model="userpsw" placeholder="请输入密码">
                <template #prepend>密码</template>
            </el-input>

            <el-input class="el-login" v-model="userpsw" placeholder="请输入邀请码">
                <template #prepend>邀请码</template>
            </el-input>

            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="registDialog = false">取消</el-button>
                    <el-button type="primary" @click="registDialog = false">注册</el-button>
                </span>
            </template>
        </el-dialog>
    </div>

</template>


<script>
    import {
        store
    } from '../store.js'

    export default {
        data() {
            return {
                input: '',
                loginDialog: false,
                registDialog: false,
                usermail: '',
                userpsw: '',
                visiteCode: '',
                store,
            }
        },
        methods: {
            submit22() {
                alert(this.input)
            },
            go2Publish() {
                this.$router.push('/publish')
            },
            login() {
                this.loginDialog = true
                this.store.count++;
            },

            regist() {
                this.registDialog = true
                this.store.count++;
            },
        }
    }
</script>


<style lang="scss" scoped>
    .navi {
        height: 80px;
        margin: 0 200px;
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
            font-size: 36px;
            font-weight: bold;
            font-family: '仿宋';
            line-height: 80px;
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
                    // margin-right: 2px;
                }


            }

            .item::after {
                content: '';
                position: absolute;
                height: 2px;
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
                font-size: 16px;
            }

            .btn:hover {
                opacity: .8;
            }

            .login-root {
                padding: 6px 10px;
                border: 1px solid #409EFF;
                border-radius: 6px;
                margin-left: 10px;
            }

            .login {
                color: #409EFF;
                font-size: 14px;
                font-weight: none;
                cursor: pointer;
            }

            .login:first-child {
                padding-right: 5px;
                border-right: 1px solid #409EFF;
            }

            .login:last-child {
                padding-left: 5px;
            }

        }

        .edit {
            padding: 8px 12px;
            background-color: #409EFF;
            color: white;
            margin-left: 10px;
            border-radius: 6px;
            cursor: pointer;
        }


        .search {
            display: flex;
            align-items: center;
            flex-direction: row;
            margin-left: 80px;
            padding: 10px;

            .search-ic {
                padding: 12px;
                color: #409EFF;
                border-radius: 50%;
                background-color: #ddd;
            }
        }

        .search-input {
            height: 50px;
            width: 0;
            background-color: transparent;
            transition: all .3s linear;
            border: 0;
            outline: none;
        }

        .search:hover .search-input {
            width: 400px;
            padding: 0 10px;
        }

        .search:hover .search-ic {
            background-color: #409EFF;
            color: white;
        }

        .search:hover .search-input {
            width: 400px;
            padding: 0 10px;
            border-bottom: 1px solid #409EFF;
        }

        .search-input:focus {
            width: 400px;
            padding: 0 10px;
            border-bottom: 1px solid #409EFF;
        }

        // .search-input:focus+.search-line {
        //     width: 800px;
        // }

    }

    .el-login {
        margin: 0 20px 20px 20px;
    }

    .el-input {
        width: 90%;
        height: 40px;
    }
</style>