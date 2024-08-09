import React from 'react';
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import {Menu} from "antd";
import {Header as AntHeader} from "antd/es/layout/layout";
import {LogoutOutlined} from "@ant-design/icons";
import {connect} from "react-redux";
import {logout} from "store/reducers/userSlice";

const Header = (props: { items: any[], logout: any }) => {
    const location = useLocation();
    const navigate = useNavigate();
    let active = location.pathname.split("/").slice(0, 2).join('/');
    active = props.items.find((item: any) => item.path === active)?.key;

    const onClick = (e: any) => {
        const item = props.items.find((item: any) => item.key === e.key);
        navigate(item.path)
    }

    return (
        <>
            <AntHeader style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    selectedKeys={[active]}
                    items={props.items}
                    style={{flex: 1, minWidth: 0}}
                    onClick={onClick}
                />
                <LogoutOutlined onClick={props.logout} style={{color: 'white'}}/>
            </AntHeader>
            <main className={'p-6'}>
                <Outlet/>
            </main>
        </>
    );
};

export default connect(null, {logout})(Header);