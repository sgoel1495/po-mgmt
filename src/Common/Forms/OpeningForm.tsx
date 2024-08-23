import React from 'react';
import {Button, Card, Form, Input, InputNumber} from "antd";

const OpeningForm = (props: { onSubmit: any, formRef: any, loading: boolean, reset?: any }) => {
    const {formRef, onSubmit, loading} = props;
    return (
        <Form onFinish={onSubmit} layout="vertical" ref={formRef}>
            <Form.Item label={'Name'} name={'name'} required rules={[{required: true}]}>
                <Input placeholder={'Name'}/>
            </Form.Item>
            <Form.Item label="End Client" required rules={[{required: true}]} name={'endClient'}>
                <Input placeholder="End Client"/>
            </Form.Item>
            <Form.Item label="Project Location" required rules={[{required: true}]} name={'location'}>
                <Input placeholder="Project Location"/>
            </Form.Item>
            <Card title="Suggested Rate" className={'mb-5 w-full'}>
                <Form.Item label={'Rate'} name={['suggestedRate', 'rate']} required rules={[{required: true}]}>
                    <InputNumber placeholder={'Rate'} className={'w-full'} addonAfter={"$ / Hr"}/>
                </Form.Item>
                <Form.Item label={'OT Rate'} name={['suggestedRate', 'otRate']} required rules={[{required: true}]}>
                    <InputNumber placeholder={'OT Rate'} className={'w-full'} addonAfter={"$ / Hr"}/>
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

export default OpeningForm;