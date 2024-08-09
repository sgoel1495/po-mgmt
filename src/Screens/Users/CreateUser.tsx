import React from 'react';
import {Button, Form, Input, Modal, notification, Select} from "antd";
import {Roles} from "../../gql/graphql";
import {gql, useMutation} from "@apollo/client";

const CREATE_USER = gql`
    mutation CreateUser($data: UserInput!) {
        addUser(data: $data)
    }
`

const CreateUser = (props: { refetch: any }) => {
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [addUser, {loading, error}] = useMutation(CREATE_USER);
    const [form] = Form.useForm()
    const save = (payload: any) => {
        addUser({variables: {data: payload}}).then(() => {
            setIsModalOpen(false);
            props.refetch()
            form.resetFields()
        }).catch(()=>{});
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
        <>
            <Button type={'primary'} onClick={() => setIsModalOpen(true)}>Create</Button>
            <Modal title="Create user" open={isModalOpen} footer={null} onCancel={() => setIsModalOpen(false)}>
                <Form onFinish={save} form={form}>
                    <Form.Item name={'username'} label={'Username'} required rules={[{required: true}]}>
                        <Input placeholder={'Username'}/>
                    </Form.Item>
                    <Form.Item label={"Password"} name={'password'} required rules={[{required: true}]}>
                        <Input placeholder={'Password'} type={'password'}/>
                    </Form.Item>
                    <Form.Item label={'Role'} name={'role'} required rules={[{required: true}]}>
                        <Select options={Object.keys(Roles).map((item) => ({
                            value: item,
                            key: item
                        }))}/>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType={'submit'} loading={loading}>Create</Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default CreateUser;