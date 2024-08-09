import React from 'react';
import {Button, Form, Input, Modal, notification} from "antd";
import {connect} from "react-redux";
import {firstLogin} from "store/reducers/userSlice";
import {gql, useLazyQuery} from "@apollo/client";

const LOGIN_QUERY = gql`
    query LoginQuery($username: String!, $password: String!) {
        login(username: $username, password: $password) {
            tokens {
                accessToken
            }
            role
        }
    }
`

const Index = (props: { firstLogin: any }) => {
    const [loginAPI, {loading, error}] = useLazyQuery(LOGIN_QUERY);
    const login = (payload: any) => {
        loginAPI({variables: payload}).then((resp) => {
            if (resp.data) {
                props.firstLogin(resp.data.login)
            }
        }).catch(() => {
        });
    }
    React.useEffect(() => {
        if (error)
            notification.error({
                message: 'Error',
                description: error.message,
                duration: 5
            })
    }, [error])
    return (
        <Modal
            title="Login" open={true} centered closable={false}
            footer={null}
        >
            <Form onFinish={login}>
                <Form.Item label="Username" name="username" required>
                    <Input placeholder="Username"/>
                </Form.Item>
                <Form.Item label="Password" name="password" required>
                    <Input type="password" placeholder="Password"/>
                </Form.Item>
                <div className={'w-full flex justify-end'}>
                    <Button type={'primary'} loading={loading} htmlType={'submit'}>Login</Button>
                </div>
            </Form>
        </Modal>
    );
};

export default connect(null, {firstLogin})(Index);