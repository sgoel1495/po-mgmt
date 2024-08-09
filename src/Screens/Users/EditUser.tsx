import React from 'react';
import {Button, Form, Input, Modal, notification, Select} from "antd";
import {Roles} from "../../gql/graphql";
import {gql, useMutation} from "@apollo/client";
import {EditOutlined} from "@ant-design/icons";

const UPDATE_USER = gql`
    mutation UpdateUser($username: String!, $password: String, $role: String!) {
        updateUser(username: $username,password: $password, role: $role)
    }
`

const EditUser = (props: { refetch: any, data: any }) => {
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [updateUser, {loading, error}] = useMutation(UPDATE_USER);
    const [form] = Form.useForm()
    const save = (payload: any) => {
        updateUser({variables: payload}).then(() => {
            setIsModalOpen(false);
            props.refetch()
            form.resetFields()
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

    const openModal = () =>{
        setIsModalOpen(true);
        form.setFieldsValue(props.data);
    }

    return (
        <>
            <Button type={'link'} onClick={openModal}><EditOutlined/></Button>
            <Modal title="Update user" open={isModalOpen} footer={null} onCancel={() => setIsModalOpen(false)}>
                <Form onFinish={save} form={form}>
                    <Form.Item name={'username'} label={'Username'} required rules={[{required: true}]}>
                        <Input placeholder={'Username'} disabled/>
                    </Form.Item>
                    <Form.Item label={"Password"} name={'password'}>
                        <Input placeholder={'Password'} type={'password'}/>
                    </Form.Item>
                    <Form.Item label={'Role'} name={'role'} required rules={[{required: true}]}>
                        <Select options={Object.keys(Roles).map((item) => ({
                            value: item,
                            key: item
                        }))}/>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType={'submit'} loading={loading}>Update</Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default EditUser;