import React from 'react';
import {Button, Card, Form, Input, Select} from "antd";
import {useQuery} from "@apollo/client";
import {GET_INVOICE_FORMATS} from "@common/gql/company";

const CompanyForm = (props: { loading: boolean, onSubmit: any, formRef: any, reset?: any }) => {
    const {onSubmit, formRef, loading} = props;
    const {data} = useQuery(GET_INVOICE_FORMATS)
    return (
        <Form onFinish={onSubmit} layout="vertical" ref={formRef}>
            <Form.Item label="Company Name" required rules={[{required: true}]} name={'companyName'}>
                <Input placeholder="Company Name"/>
            </Form.Item>
            <Form.Item label="Owner Name" name={'ownerName'}>
                <Input placeholder="Owner Name"/>
            </Form.Item>
            <Form.Item name={"invoiceFormat"} label={'Invoice Format'}>
                <Select options={data?.getInvoiceFormats}/>
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
            <Card title="Bank" className={'mb-5 w-full'}>
                <Form.Item label="Account Name" name={['bank', 'accountName']}>
                    <Input placeholder="Account Name"/>
                </Form.Item>
                <Form.Item label="Account Number"
                           name={['bank', 'accountNumber']}>
                    <Input placeholder="Account Number"/>
                </Form.Item>
                <Form.Item label="Bank Name" name={['bank', 'bankName']}>
                    <Input placeholder="Bank Name"/>
                </Form.Item>
                <Form.Item label="Routing Number"
                           name={['bank', 'routingNumber']}>
                    <Input placeholder="Routing Number"/>
                </Form.Item>
                <Card title="Address" className={'mb-5 w-full'}>
                    <Form.Item label="Line 1" name={['bank', 'addressLine1']}>
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
                <Button htmlType={props.reset ? 'button' : 'reset'} onClick={props.reset}
                        loading={loading}>Reset</Button>
            </div>
        </Form>

    );
};

export default CompanyForm;