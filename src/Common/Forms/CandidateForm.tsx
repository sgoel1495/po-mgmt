import React from 'react';
import {Button, Card, Form, Input} from "antd";

const CandidateForm = (props: { loading: boolean, onSubmit: any, formRef: any, reset?: any }) => {
    const {onSubmit, formRef, loading} = props;
    return (
        <Form onFinish={onSubmit} layout="vertical" ref={formRef}>
            <Form.Item label="Name" required rules={[{required: true}]} name={'name'}>
                <Input placeholder="Name"/>
            </Form.Item>
            <Form.Item label="Personal Email" name={'personalEmail'} rules={[{type: 'email'}]}>
                <Input placeholder="Personal Email" type={'email'}/>
            </Form.Item>
            <Form.Item label="Profile" name={'profile'}>
                <Input placeholder="Profile"/>
            </Form.Item>
            <Form.Item label="Contact" name={'contact'}>
                <Input placeholder="Contact"/>
            </Form.Item>
            <Form.Item label="Timezone" name={'timezone'}>
                <Input placeholder="Timezone"/>
            </Form.Item>
            <Card title="Address" className={'mb-5 w-full'}>
                <Form.Item label="Line 1" required rules={[{required: true}]} name={'addressLine1'}>
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
                <Button htmlType={props.reset ? "button" : 'reset'} onClick={props.reset}
                        loading={loading}>Reset</Button>
            </div>
        </Form>
    );
};

export default CandidateForm;