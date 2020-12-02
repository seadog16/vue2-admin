<template lang="pug">
    .login
        .img
        .title
            h1 {{title}}
        el-form.form(
            :modal="form"
            hide-required-asterisk
            @submit.native.prevent="submitHandler")
            h2 账号登录
            el-form-item(prop="user")
                el-input(
                    v-model.trim="form.user"
                    prefix-icon="el-icon-user"
                    placeholder="请输入用户名/手机号")
            el-form-item(prop="pass")
                el-input(
                    v-model.trim="form.pass"
                    show-password
                    prefix-icon="el-icon-lock"
                    placeholder="请输入密码")
            el-form-item
                el-checkbox(v-model="savePass") 记住用户名密码
            el-form-item
                el-button.submit(
                    :loading="loading"
                    type="primary"
                    round
                    native-type="submit") 立即登录
            .error {{passErrorMsg}}
</template>

<script>
import { getToken } from "@/http/api/auth";
import AES from "crypto-js/aes";
import ENC from "crypto-js/enc-utf8";

export default {
    name: "Login",
    data() {
        return {
            loading: false,
            title: document.title,
            form: { user: "", pass: "" },
            passErrorMsg: "",
            submitLoad: false,
            timeSet: 0,
            savePass: false
        };
    },
    watch: {
        timeSet(val) {
            if (val > 0) {
                setTimeout(() => {
                    this.timeSet--;
                }, 1000);
            }
        }
    },
    created() {
        this.loadCache();
    },
    methods: {
        loadCache() {
            const cache = window.localStorage.getItem("login");
            if (cache) {
                const jsonStr = AES.decrypt(cache, "ytj").toString(ENC);
                const obj = JSON.parse(jsonStr);
                this.form.user = obj?.user;
                this.form.pass = obj?.pass;
                this.savePass = Boolean(obj?.user) || Boolean(obj?.user);
            }
        },
        submitHandler() {
            if (!this.form.user || !this.form.pass) {
                this.passErrorMsg = "用户名或密码不能为空";
            } else {
                this.passErrorMsg = "";
                this.submitLoad = true;
                if (this.savePass) {
                    const { user, pass } = this.form;
                    const jsonStr = JSON.stringify({ user, pass });
                    const cache = AES.encrypt(jsonStr, "ytj").toString();
                    window.localStorage.setItem("login", cache);
                } else {
                    window.localStorage.removeItem("login");
                }
                getToken({
                    username: this.form.user,
                    password: this.form.pass
                })
                    .then(res => {
                        window.sessionStorage.setItem("token", String(res));
                        this.$router.push("/center");
                    })
                    .catch(err => {
                        this.passErrorMsg = err;
                    })
                    .finally(() => {
                        this.submitLoad = false;
                    });
            }
        }
    }
};
</script>

<style scoped lang="stylus">
.login
    position absolute
    height 100%
    width 100%
    min-height 500px
    min-width 860px
    background url("~@/assets/images/loginBG1.svg")
    background-position center
    background-size cover

    .title
        text-align center
        h1
            font-size 20px
            font-weight normal
            position relative
            display inline-block
            margin 30px 0
            user-select none
            color $--color-text-placeholder

            &:before,
            &:after
                content ""
                width 120px
                height 1px
                background-color $--color-text-placeholder
                position absolute
                top 14px

            &:before
                left -135px
            &:after
                right -135px

    .form
        position absolute
        width 350px
        height 360px
        top 50%
        left 50%
        margin-top (-1 * @height / 2 - 20px)
        margin-left 50px
        box-shadow 6px 2px 16px #D0E2FF;
        background-color #fff
        border-radius 6px
        padding 40px
        box-sizing border-box

        h2
            font-size 22px
            color $--color-primary
            position relative
            font-weight normal
            margin 0 10px 50px
            user-select none

            &:before,
            &:after
                content ""
                position absolute
                height 4px
                background-color $--color-primary
                bottom -14px
                border-radius 10px

            &:before
                width 44px
                left 0
            &:after
                width 10px
                left 50px

        & >>> .el-input
            &__inner
                background-color $--background-color-base
                border-radius 30px
                border-color transparent
                height 36px
                line-height 36px
                &:focus
                    border-color $--color-primary
                    box-shadow 0 0 6px $--color-primary-light-4

            .el-input__prefix
                height 36px
                line-height 36px
                font-size 18px

        .submit
            width 100%
            height 36px
            box-shadow 0 2px 8px rgba($--color-primary, .5);

        .error
            text-align center
            color $--color-danger

    .img
        width 500px
        height 430px
        background url("~@/assets/images/loginIMG1.svg")
        position absolute
        top 50%
        left 50%
        margin-top (-1 * @height / 2)
        margin-left - @width
        right 0
</style>
