import React from 'react';
import {Button, Form, Input, Modal, notification} from "antd";
import {fetchWithToken} from "config/helper";
import {loginUrl} from "config/urls";

const Index = () => {
    const [loading, setLoading] = React.useState(false);
    const login = (payload: any) => {
        setLoading(true)
        fetchWithToken(loginUrl, 'post', {}, payload)
            .then((res: any) => {
                console.log(res)
            })
            .catch(() => {
                notification.error({
                    message: 'Error',
                    description: 'Something went wrong',
                    duration: 5
                })
            })
            .finally(() => {
                setLoading(false);
            })
    }
    return (
        <Modal
            title="Login" open={true} centered closable={false}
            footer={null}
        >
            <Form onFinish={login}>
                <Form.Item label="Email" name="email" required>
                    <Input type="email" placeholder="Email"/>
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

export default Index;