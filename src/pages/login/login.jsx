import * as React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./login.less";
import logo from "../../assets/img/Uber_logo_2018.svg";
import { userLogin } from "../../api";
import { message } from "antd";
import memory from "../../utils/memory";
import storage from "../../utils/storage";
import { Redirect } from "react-router-dom";
import LinkButton from "../../components/link-buttom/linkButton";

export class Login extends React.Component {
    onFinish = async (values) => {
        const result = await userLogin(values.username, values.password);
        console.log(result);

        if (result.status === 0) {
            message.success("Login Succeed!");
            memory.user = result.data;
            storage.saveUser(result.data);
            this.props.history.replace("/");
        } else {
            message.error(result.message);
        }
    };

    validatePwd = (rule, value, callback) => {
        console.log("validatePwd", rule, value);
        if (!value) {
            callback("Please input your password!");
        } else if (value.length < 4) {
            callback("Your password should longer than 4!");
        } else if (value.length > 12) {
            callback("Your password should shorter than 12!");
        } else {
            callback();
        }
    };

    render() {
        // redirect to the default page if it has a user
        const user = memory.user;
        if (user && user._id) {
            return <Redirect to={"/"} />;
        }

        return (
            <div className={"login"}>
                <header className={"login-header"}>
                    <img src={logo} alt={"logo"} />
                </header>
                <section className={"login-content"}>
                    <h2>Log in</h2>

                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={this.onFinish}
                    >
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your Username!",
                                },
                                {
                                    min: 3,
                                    message: "Username has to longer than 3!",
                                },
                                {
                                    max: 10,
                                    message: "Username has to shorter than 10!",
                                },
                                {
                                    pattern: /^[a-zA-Z0-9_]/,
                                    message:
                                        "Username has undefined characters!",
                                },
                            ]}
                        >
                            <Input
                                prefix={
                                    <UserOutlined className="site-form-item-icon" />
                                }
                                placeholder="Username: admin"
                            />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    validator: this.validatePwd,
                                },
                            ]}
                        >
                            <Input
                                prefix={
                                    <LockOutlined className="site-form-item-icon" />
                                }
                                type="password"
                                placeholder="Password: admin"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Form.Item
                                name="remember"
                                valuePropName="checked"
                                noStyle
                            >
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                            <LinkButton className="login-form-forgot" href="#">
                                Forgot password
                            </LinkButton>
                        </Form.Item>

                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="login-form-button"
                            >
                                Log in
                            </Button>
                            or <a href="">register now!</a>
                        </Form.Item>
                    </Form>
                </section>
            </div>
        );
    }
}
