import * as React from "react";
import "./index.less";
import { withRouter } from "react-router-dom";
import { formatDate } from "../../utils/dateUtil";
import memory from "../../utils/memory";
import MenuList from "../../config/menuConfig";
import { Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import storage from "../../utils/storage";
import LinkButton from "../link-buttom/linkButton";

class Header extends React.Component {
    state = {
        currentTime: formatDate(Date.now()),
        weatherIcon: "https://icons.iconarchive.com/icons/icons-land/weather/256/Sunny-icon.png",
        weather: "Sunny"
    };

    getTime = () => {
        this.intervalId = setInterval(() => {
            const currentTime = formatDate(Date.now());
            this.setState({ currentTime });
        }, 1000);
    };

    getTitle = () => {
        const path = this.props.location.pathname;
        let title;
        MenuList.forEach((item) => {
            if (item.key && item.key === path) {
                title = item.title;
            } else if (item.children) {
                const find = item.children.find((each) => each.key === path);
                if (find) {
                    title = find.title;
                }
            }
        });
        return title;
    };

    confirm = () => {
        Modal.confirm({
            title: "Log out",
            icon: <ExclamationCircleOutlined />,
            content: "Are you sure log out?",
            okText: "Ok",
            cancelText: "Cancel",
            onOk: () => {
                storage.removeUser();
                memory.user = {};
                this.props.history.replace("/login");
            }
        });
    };

    componentDidMount() {
        // get current time
        this.getTime(this.intervalId);
    }

    // execute to clear timeInterval before the component die out
    componentWillUnmount() {
        clearInterval();
    }

    render() {
        const { currentTime, weatherIcon, weather } = this.state;
        const username = memory.user.username;
        const title = this.getTitle();

        return (
            <div className={"header"}>
                <div className="header-top">
                    <span>Welcome {username}!</span>
                    <LinkButton onClick={this.confirm}>Log out</LinkButton>
                </div>
                <div className="header-bottom">
                    <div className="header-bottom-left">{title}</div>
                    <div className="header-bottom-right">
                        <span>{currentTime}</span>
                        <img src={weatherIcon} alt={"weather"} />
                        <span>Sunny</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Header);
