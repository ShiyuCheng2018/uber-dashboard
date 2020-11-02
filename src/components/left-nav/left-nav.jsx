import * as React from "react";
import "./index.less";
import { Link, withRouter } from "react-router-dom";
import { Menu } from "antd";
import MenuList from "../../config/menuConfig";
import { LogoIcon } from "../logo/logo";

const { SubMenu } = Menu;
class LeftNav extends React.Component {
    getMenuNodes_reduce = (menuList, key = 1) => {
        return menuList.reduce((pre, next) => {
            // push either <Menu.Item> or <SubMenu>
            if (!next.children) {
                pre.push(
                    <Menu.Item key={next.key} icon={next.icon}>
                        <Link to={next.key}>{next.title}</Link>
                    </Menu.Item>
                );
            } else {
                let path = this.props.location.pathname;
                const cItem = next.children.find((cItem) => path.indexOf(cItem.key) === 0);
                if (cItem) {
                    this.openKey = next.key;
                }

                pre.push(
                    <SubMenu key={`sub${key}`} icon={next.icon} title={next.title}>
                        {next.children.map((child, j) => {
                            return (
                                <Menu.Item key={child.key}>
                                    <Link to={child.key}>{child.title}</Link>
                                </Menu.Item>
                            );
                        })}
                    </SubMenu>
                );
            }
            key += 1;
            return pre;
        }, []);
    };

    render() {
        return (
            <>
                <Link to={"/"} className={"left-nav"}>
                    <header className={"left-nav-header"}>
                        <LogoIcon alt={"logo"} fill={"#fff"} className={"logo"} />
                    </header>
                </Link>

                <div style={{ width: "100%" }}>
                    <Menu
                        defaultOpenKeys={[this.openKey]}
                        mode="inline"
                        theme="dark"
                        defaultSelectedKeys={["/dashboard"]}
                    >
                        {this.getMenuNodes_reduce(MenuList)}
                    </Menu>
                </div>
            </>
        );
    }
}

export default withRouter(LeftNav);
