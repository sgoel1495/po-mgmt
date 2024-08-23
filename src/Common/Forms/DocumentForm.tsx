import React from 'react';
import {Button, Form, Input} from "antd";
import FileField from './Fields/FileField';

const DocumentForm = (props: { loading: boolean, onSubmit: any, formRef: any, reset?: any }) => {
    const {onSubmit, formRef, loading} = props;
    const [form] = Form.useForm();
    return (
        <Form onFinish={onSubmit} layout="vertical" ref={formRef} form={form}>
            <Form.Item label="Name" required rules={[{required: true}]} name={'name'}>
                <Input placeholder="Name"/>
            </Form.Item>
            <Form.Item label="Description" name={'description'}>
                <Input.TextArea placeholder="Description"/>
            </Form.Item>
            <FileField form={form} name={'file'} required={true} title={'File'}/>
            <div className={'w-full flex justify-end gap-5'}>
                <Button type={'primary'} loading={loading} htmlType={'submit'}>
                    Save
                </Button>
                <Button htmlType={props.reset ? 'button' : 'reset'} onClick={props.reset}
                        loading={loading}>Reset</Button>
            </div>
        </Form>

    );
};

export default DocumentForm;