import React from 'react';
import {Button, Card, Form, Input} from "antd";

const ClientForm = (props: { loading: boolean, onSubmit: any, formRef: any, reset?: any }) => {
    const {onSubmit, formRef, loading} = props;
    return (
        <Form onFinish={onSubmit} layout="vertical" ref={formRef}>
            <Form.Item label="Client Name" required name={'companyName'} rules={[{ required: true }]}>
                <Input placeholder="Client Name"/>
            </Form.Item>
            <Card title="Signing Authority" className={'mb-5 w-full'}>
                <Form.Item label="Name" name={'signingAuthName'}>
                    <Input placeholder="Name"/>
                </Form.Item>
                <Form.Item label="Email" name={'signingAuthEmail'} rules={[{type: 'email'}]}>
                    <Input placeholder="Email"/>
                </Form.Item>
                <Form.Item label="Designation" name={'signingAuthDesignation'}>
                    <Input placeholder="Designation"/>
                </Form.Item>
            </Card>
            <Card title="Address" className={'mb-5 w-full'}>
                <Form.Item label="Line 1" name={'addressLine1'}>
                    <Input placeholder="Line 1"/>
                </Form.Item>
                <Form.Item label="Line 2" name={'addressLine2'}>
                    <Input placeholder="Line 2"/>
                </Form.Item>
                <Form.Item label="Line 3" name={'addressLine3'}>
                    <Input placeholder="Line 3"/>
                </Form.Item>
            </Card>
            <div className={'w-full flex justify-end gap-5'}>
                <Button type={'primary'} loading={loading} htmlType={'submit'}>
                    Save
                </Button>
                <Button htmlType={props.reset ? "button" : 'reset'} onClick={props.reset} loading={loading}>Reset</Button>
            </div>
        </Form>
    );
};

export default ClientForm;