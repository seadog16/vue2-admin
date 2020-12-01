<template lang="pug">
    .login
        .login-card.clearfix
            .login-bg
                .fly
                .fly
                .flash
            .login-form
                h2 {{title}}
                el-form(
                    :model="login"
                    @submit.native.prevent="submitHandler"
                    hide-required-asterisk)
                    el-form-item(label="用户名")
                        el-input(v-model.trim="login.user")
                    el-form-item(label="密码")
                        el-input(show-password v-model.trim="login.pass")
                    el-form-item.formItem
                        el-checkbox.floatLeft(v-model="savePass") 记住密码
                        a.register.floatRight(@click="$router.push('/register')") 忘记密码？
                    el-form-item
                        el-button.btn(
                            type="primary"
                            native-type="submit"
                            :loading="submitLoad") 登录
                        span.red(v-if="passErrorMsg") {{ passErrorMsg }}
</template>

<script>
import { getToken } from "@/http/api/auth";
import AES from "crypto-js/aes";
import ENC from "crypto-js/enc-utf8";

export default {
    name: "Login",
    data() {
        return {
            title: document.title,
            login: { user: "", pass: "" },
            passErrorMsg: "",
            submitLoad: false,
            timeSet: 0,
            codeRule: { required: true, message: "请填写验证码" },
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
                this.login.user = obj?.user;
                this.login.pass = obj?.pass;
                this.savePass = Boolean(obj?.user) || Boolean(obj?.user);
            }
        },
        submitHandler() {
            if (!this.login.user || !this.login.pass) {
                this.passErrorMsg = "用户名或密码不能为空";
            } else {
                this.passErrorMsg = "";
                this.submitLoad = true;
                if (this.savePass) {
                    const { user, pass } = this.login;
                    const jsonStr = JSON.stringify({ user, pass });
                    const cache = AES.encrypt(jsonStr, "ytj").toString();
                    window.localStorage.setItem("login", cache);
                } else {
                    window.localStorage.removeItem("login");
                }
                getToken({
                    username: this.login.user,
                    password: this.login.pass
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
    background url("~@/assets/images/loginBG.svg")
    background-size cover
    background-position center
    width 100%
    height calc(100vh - 80px)
    position relative

    h1
        font-weight 200
        font-size 28px
        text-align center

        & > *
            vertical-align middle

        .logo
            width 40px
            height @width

    h2
        color $color-primary
        font-weight 400
        margin-bottom 10px
        margin-top 15px
        text-align center

    &-card
        $width = 640px
        $height = 400px
        $left = 260px
        width $width
        height $height
        position absolute
        top 40%
        left 50%
        transform translate(-50%, -50%)
        box-sizing border-box
        box-shadow 0 2px 12px 0 rgba(0, 0, 0, .1)
        border-radius 6px
        background #fff
        overflow hidden

        .login-bg
            width $left
            position absolute
            left 0
            top 0
            height 100%
            background url("~@/assets/images/bannerPic.svg"),
                linear-gradient(to right, #000f89, #2d3368)
            background-size contain
            background-position center
            background-repeat no-repeat
            overflow hidden

            .flash
                background url("~@/assets/images/ellipse.svg")
                position absolute
                top 80px
                left -160px
                width 600px
                height 330px
                background-size 140%
                background-repeat no-repeat
                background-position center
                backdrop-filter filter(20px)
                opacity 0.3
                transform rotate(-40deg)

            .fly
                position absolute
                width 160px
                height 6px
                border-radius 20px
                transform rotate(-20deg)
                background linear-gradient(90deg, rgba(0, 255, 255, .45), rgba(0, 255, 255, 0))

            .fly:nth-child(1)
                top 280px
                right -130px

            .fly:nth-child(2)
                top 120px
                left -80px

        .login-form
            margin-left $left
            padding 0 40px

        .red
            margin-left 20px
            color $color-error

        .btn
            width 100%

.register
    font-weight 500
    margin-left 20px

.input
    .disabled
        position absolute
        width 100%
        height @width
        top 0
        left 0
        cursor not-allowed
        background rgba(255, 255, 255, .5)
</style>
