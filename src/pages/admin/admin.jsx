import * as React from "react";
import memory from "../../utils/memory";
import { Redirect, Switch } from "react-router-dom";
import { Layout } from "antd";

import PrivateRoute from "../../utils/PrivateRoute";
import { Dashboard } from "../dashboard/dashboard";
import { Products } from "../products/products";
import { Technology } from "../technology/technology";
import { Uber_atg } from "../uber_atg/uber_atg";
import { Engagement } from "../engagement/engagement";

const { Footer, Sider, Content } = Layout;

export class Admin extends React.Component {
    render() {
        const { user } = memory;

        return (
            <Layout style={{ height: "100%" }}>
                <Sider>
                    <LeftNav />
                </Sider>
                <Layout>
                    <Header />
                    <Content style={{ backgroundColor: "#fff", margin: 20 }}>
                        <Switch>
                            <PrivateRoute
                                path={"/dashboard"}
                                component={Dashboard}
                            />
                            <PrivateRoute
                                path={"/items"}
                                component={Products}
                            />
                            <PrivateRoute
                                path={"/technology"}
                                component={Technology}
                            />
                            <PrivateRoute
                                path={"/uberatg"}
                                component={Uber_atg}
                            />
                            <PrivateRoute
                                path={"/engagement"}
                                component={Engagement}
                            />
                            <Redirect to={"/dashboard"} />
                        </Switch>
                    </Content>
                    <Footer style={{ textAlign: "center" }}>
                        Advanced Artificial Intelligence Ltd. Content Management
                        System{" "}
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}
