<template>
    <div id="publish-root">
        <div class="edit-area">

            <div class="el-save">
                <el-input v-model="inputTitle" placeholder="标题" class="el-title" />
                <span class="save-btn" @click="saveAssets">保存</span>
            </div>


            <div class="select-type">
                <span>选择类别:</span>
                <div>
                    <el-radio-group v-model="radioType">
                        <el-radio-button label="0">影视</el-radio-button>
                        <el-radio-button label="1">游戏</el-radio-button>
                        <el-radio-button label="2">书籍</el-radio-button>
                        <el-radio-button label="3">图片</el-radio-button>
                        <el-radio-button label="4">工具</el-radio-button>
                    </el-radio-group>
                </div>
            </div>

            <div class="cover-img">
                <span>封面图片:</span>
                <el-upload action="http://up-z2.qiniup.com" :limit="1" list-type="picture-card"
                    :on-preview="handlePictureCardPreview" :on-remove="handleRemove" :on-success="handleUpSuccess"
                    :data="qnParam" :before-upload="handleBeforeUp">
                    <el-icon>
                        <Plus />
                    </el-icon>
                </el-upload>
                <el-dialog v-model="coverVisible">
                    <img w-full :src="coverImgUrl" alt="Preview Image" />
                </el-dialog>
            </div>

        </div>
        <!-- 编辑器 -->
        <div>
            <Toolbar :editor="editorRef" :defaultConfig="toolbarConfig" :mode="mode"
                style="border-bottom: 1px solid #ccc" />
            <Editor :defaultConfig="editorConfig" :mode="mode" v-model="valueHtml"
                style="height: 500px; overflow-y: hidden" @onCreated="handleCreated" @onChange="handleChange"
                @onDestroyed="handleDestroyed" @onFocus="handleFocus" @onBlur="handleBlur" @customAlert="customAlert"
                @customPaste="customPaste" />
        </div>

    </div>
</template>

<script>
    import '@wangeditor/editor/dist/css/style.css';
    import {
        ElMessage
    } from 'element-plus'
    import {
        onBeforeUnmount,
        ref,
        shallowRef,
        onMounted
    } from 'vue';
    import {
        Editor,
        Toolbar
    } from '@wangeditor/editor-for-vue';

    export default {
        components: {
            Editor,
            Toolbar
        },
        data() {
            return {
                inputTitle: '',
                coverVisible: false,

                coverImgUrl: '',
                radioType: "0",
                selectBean: null,
                currentDate: null,

                qiniu_token: '',
                qnParam: {
                    token: "",
                    key: ""
                },
            }
        },

        methods: {
            saveAssets() {
                if (!this.inputTitle) {
                    this.showError()
                    return
                }
            },

            showError() {
                ElMessage.error('请输入标题')
            },
        },



        setup() {
            // 编辑器实例，必须用 shallowRef，重要！
            const editorRef = shallowRef();

            // 内容 HTML
            const valueHtml = ref('');

            const toolbarConfig = {};
            const editorConfig = {
                placeholder: '请输入内容...'
            };

            // 组件销毁时，也及时销毁编辑器，重要！
            onBeforeUnmount(() => {
                const editor = editorRef.value;
                if (editor == null) return;

                editor.destroy();
            });

            // 编辑器回调函数
            const handleCreated = (editor) => {
                console.log('created', editor);
                editorRef.value = editor; // 记录 editor 实例，重要！
            };
            const handleChange = (editor) => {
                console.log('change:', editor.getHtml());
            };
            const handleDestroyed = (editor) => {
                console.log('destroyed', editor);
            };
            const handleFocus = (editor) => {
                console.log('focus', editor);
            };
            const handleBlur = (editor) => {
                console.log('blur', editor);
            };
            const customAlert = (info, type) => {
                alert(`【自定义提示】${type} - ${info}`);
            };
            const customPaste = (editor, event, callback) => {
                console.log('ClipboardEvent 粘贴事件对象', event);

                // 自定义插入内容
                editor.insertText('xxx');

                // 返回值（注意，vue 事件的返回值，不能用 return）
                callback(false); // 返回 false ，阻止默认粘贴行为
                // callback(true) // 返回 true ，继续默认的粘贴行为
            };

            const insertText = () => {
                const editor = editorRef.value;
                if (editor == null) return;

                editor.insertText('hello world');
            };

            const printHtml = () => {
                const editor = editorRef.value;
                if (editor == null) return;
                console.log(editor.getHtml());
            };

            const disable = () => {
                const editor = editorRef.value;
                if (editor == null) return;
                editor.disable()
            };

            return {
                editorRef,
                mode: 'default',
                valueHtml,
                toolbarConfig,
                editorConfig,
                handleCreated,
                handleChange,
                handleDestroyed,
                handleFocus,
                handleBlur,
                customAlert,
                customPaste,
                insertText,
                printHtml,
                disable
            };
        },
    };
</script>


<style lang="scss" scoped>
    #publish-root {
        height: 100%;
    }


    .el-save {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .el-title {
        height: 45px;
        width: 80%;
    }

    .save-btn {
        background-color: #409EFF;
        color: white;
        padding: 6px 20px;
        border-radius: 2px;
        margin-right: 20px;
        cursor: pointer;
    }

    .save-btn:hover {
        opacity: .8;
    }

    .select-type {
        display: flex;
        margin-top: 10px;
        margin-bottom: 10px;
        align-items: center;
        margin-left: 10px;

        span {
            font-size: 15px;
            font-weight: bold;
            margin-right: 10px;
        }
    }

    .cover-img {
        padding-top: 10px;
        padding-bottom: 10px;
        display: flex;
        align-items: center;
        margin-left: 10px;

        span {
            font-size: 15px;
            font-weight: bold;
            margin-right: 10px;
        }
    }
</style>