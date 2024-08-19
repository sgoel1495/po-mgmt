import React from 'react';
import {Button, Card, Form, Input, InputNumber, Select} from "antd";

const VendorForm = (props: {
    loading: boolean,
    onSubmit: any,
    formRef: any,
    reset?: any,
    setCompanyName: any,
    options: any
}) => {
    const {onSubmit, formRef, loading, setCompanyName, options} = props;
    return (
        <Form onFinish={onSubmit} layout="vertical" ref={formRef}>
            <Form.Item label="Vendor Name" required rules={[{required: true}]} name={'name'}>
                <Input placeholder="Vendor Name"/>
            </Form.Item>
            <Form.Item label="Vendor Id" name={'vendorId'}>
                <Input placeholder="Vendor Id"/>
            </Form.Item>
            <Form.Item label="EIN Number" name={'einNumber'}>
                <Input placeholder="EIN Number"/>
            </Form.Item>
            <Form.Item label="Payment Terms" required rules={[{required: true}]} name={'paymentTerms'}>
                <InputNumber placeholder="Payment Terms" className={'w-full'} addonAfter={"Days"}/>
            </Form.Item>
            <Form.Item label="Client" required rules={[{required: true}]} name={'client'}>
                <Select
                    showSearch
                    filterOption={false}
                    placeholder={"Search Client Name"}
                    onSearch={setCompanyName}
                    options={options}
                />
            </Form.Item>
            <Card title="Signing Authority" className={'mb-5 w-full'}>
                <Form.Item label="Name" name={'authSignName'}>
                    <Input placeholder="Name"/>
                </Form.Item>
                <Form.Item label="Email" name={'authSignEmail'} rules={[{type: 'email'}]}>
                    <Input placeholder="Email"/>
                </Form.Item>
                <Form.Item label="Designation" name={'authSignDesig'}>
                    <Input placeholder="Designation"/>
                </Form.Item>
            </Card>
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
            <Card title="Bank" className={'mb-5 w-full'}>
                <Form.Item label="Account Name" required rules={[{required: true}]} name={['bank', 'accountName']}>
                    <Input placeholder="Account Name"/>
                </Form.Item>
                <Form.Item label="Account Number" required rules={[{required: true}]} name={['bank', 'accountNumber']}>
                    <Input placeholder="Account Number"/>
                </Form.Item>
                <Form.Item label="Bank Name" required rules={[{required: true}]} name={['bank', 'bankName']}>
                    <Input placeholder="Bank Name"/>
                </Form.Item>
                <Form.Item label="Routing Number" required rules={[{required: true}]} name={['bank', 'routingNumber']}>
                    <Input placeholder="Routing Number"/>
                </Form.Item>
                <Card title="Address" className={'mb-5 w-full'}>
                    <Form.Item label="Line 1" required rules={[{required: true}]} name={['bank', 'addressLine1']}>
                        <Input placeholder="Line 1"/>
                    </Form.Item>
                    <Form.Item label="Line 2" name={['bank', 'addressLine2']}>
                        <Input placeholder="Line 2"/>
                    </Form.Item>
                    <Form.Item label="Line 3" name={['bank', 'addressLine3']}>
                        <Input placeholder="Line 3"/>
                    </Form.Item>
                </Card>
            </Card>
            <div className={'w-full flex justify-end gap-5'}>
                <Button type={'primary'} loading={loading} htmlType={'submit'}>
                    Save
                </Button>
                <Button htmlType={'reset'} loading={loading}>Reset</Button>
            </div>
        </Form>
    );
};

export default VendorForm;