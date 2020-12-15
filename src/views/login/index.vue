<template>
  <div class="login_box">
    <div class="content">
      <h3 class="title">科技后台管理系统</h3>
      <a-form layout="vertical" :model="form" :rules="formRule" ref="formRef">
        <a-form-item label="用户名" name="username">
          <a-input v-model:value="form.username" placeholder="请输入用户名">
            <template #prefix>
              <UserOutlined style="color:rgba(0,0,0,.25)" /></template>
          </a-input>
        </a-form-item>
        <a-form-item label="密码" name="password">
          <a-input-password v-model:value="form.password" placeholder="请输入密码">
            <template #prefix>
              <LockOutlined style="color:rgba(0,0,0,.25)" /></template>
          </a-input-password>
        </a-form-item>
        <a-form-item>
          <a-button type="primary" block @click="onSubmit">登 陆</a-button>
        </a-form-item>
        <a-form-item class="flex_box" style="padding:0">
          <router-link class="link_a" to>忘记密码？</router-link>
          <router-link class="link_a" to>注册</router-link>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, ref } from "vue";
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
import { message } from "ant-design-vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "login",
  setup() {
    let checkUsername = async (rule: any, value: any) => {
      console.log(value, "value");
      if (!value) {
        return Promise.reject("Please input the age");
      }
      if (!Number.isInteger(value)) {
        return Promise.reject("Please input digits");
      } else {
        if (value < 18) {
          return Promise.reject("Age must be greater than 18");
        } else {
          return Promise.resolve();
        }
      }
    };
    const router = useRouter();
    // ref需要加类型验证，不然在获取formRef.value时会有类型的错误提示
    const formRef = ref<any>(null);
    //表单绑定的数据
    let formData = reactive({
      form: {
        username: "",
        password: ""
      }
    });
    //验证规则
    let rules = reactive({
      formRule: {
        username: [{ validator: checkUsername, trigger: "blur" }],
        password: [
          { required: true, min: 6, message: "密码最少六位", trigger: "blur" }
        ]
      }
    });
    const onSubmit = () => {
      formRef.value
        .validate()
        .then((res: object) => {
          //验证成功时跳转首页
          // router.push({ path: "/" });
        })
        .catch((res: object) => {
          //验证失败提示错误信息
          message.error("用户名或密码未填");
        });
    };
    return { ...toRefs(formData), ...toRefs(rules), onSubmit, formRef };
  },
  components: {
    UserOutlined,
    LockOutlined
  }
});
</script>

<style scoped lang="less">
.login_box {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #283542;
  .link_a {
    color: #666;
    &:hover {
      color: #1890ff;
    }
  }
}
.content {
  width: 340px;
  padding: 20px;
  background-color: #fff;
  border-radius: 2px;
  .title {
    position: relative;
    margin-bottom: 30px;
    font-size: 18px;
    text-align: center;
    &:after {
      content: "";
      position: absolute;
      bottom: -10px;
      left: -20px;
      width: 340px;
      border-bottom: 1px solid #eee;
    }
  }
}
.flex_box :deep(.ant-form-item-children) {
  display: flex;
  justify-content: space-between;
}
</style>