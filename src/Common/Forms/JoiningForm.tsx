import React from 'react';
import {Button, Card, DatePicker, Form, Input, InputNumber, Select} from "antd";
import CandidateField from "@common/Forms/Fields/CandidateField";
import CompanyField from "@common/Forms/Fields/CompanyField";
import {useQuery} from "@apollo/client";
import {GET_INVOICE_FORMATS} from "@common/gql/company";

const JoiningForm = (props: { onSubmit: any, formRef: any, loading: boolean, reset?: any, defaultValue?: any }) => {
    const {onSubmit, formRef, loading} = props;
    const {data} = useQuery(GET_INVOICE_FORMATS)
    return (
        <Form onFinish={onSubmit} layout="vertical" ref={formRef}>
            <Form.Item label={'EMP ID'} name={'empId'} required rules={[{required: true}]}>
                <Input placeholder={'EMP ID'}/>
            </Form.Item>
            <CandidateField defaultValue={props.defaultValue?.candidate} />
            <CompanyField defaultValue={props.defaultValue?.company}/>
            <Form.Item name={"invoiceFormat"} label={'Invoice Format'}>
                <Select options={data?.getInvoiceFormats}/>
            </Form.Item>
            <Form.Item label={'Joining Date'} name={'joiningDate'} required rules={[{required: true}]}>
                <DatePicker/>
            </Form.Item>
            <Form.Item label={'Actual Start Date'} name={'actualStartDate'} required rules={[{required: true}]}>
                <DatePicker/>
            </Form.Item>
            <Form.Item label={'Payment Terms'} name={'paymentTerms'} required rules={[{required: true}]}>
                <InputNumber placeholder={'Payment Terms'} className={'w-full'} addonAfter={"Days"}/>
            </Form.Item>
            <Form.Item label={'Official Email'} name={'officialEmail'} required
                       rules={[{required: true, type: 'email'}]}>
                <Input placeholder={'Official Email'} type={'email'}/>
            </Form.Item>
            <Card title="Timesheet Approver/ Manager" className={'mb-5 w-full'}>
                <Form.Item label="Name" required rules={[{required: true}]} name={['timesheetApprover', 'name']}>
                    <Input placeholder="Name"/>
                </Form.Item>
                <Form.Item label="Email" required rules={[{required: true, type: 'email'}]}
                           name={['timesheetApprover', 'email']}>
                    <Input placeholder="Email" type="email"/>
                </Form.Item>
            </Card>
            <Card title="Vendor Rate" className={'mb-5 w-full'}>
                <Form.Item label={'Rate'} name={['vendorRate', 'rate']} required rules={[{required: true}]}>
                    <InputNumber placeholder={'Rate'} className={'w-full'} addonAfter={"$ / Hr"}/>
                </Form.Item>
                <Form.Item label={'OT Rate'} name={['vendorRate', 'otRate']} required rules={[{required: true}]}>
                    <InputNumber placeholder={'OT Rate'} className={'w-full'} addonAfter={"$ / Hr"}/>
                </Form.Item>
            </Card>
            <Card title="Candidate Rate" className={'mb-5 w-full'}>
                <Form.Item label={'Rate'} name={['candidateRate', 'rate']} required rules={[{required: true}]}>
                    <InputNumber placeholder={'Rate'} className={'w-full'} addonAfter={"$ / Hr"}/>
                </Form.Item>
                <Form.Item label={'OT Rate'} name={['candidateRate', 'otRate']} required rules={[{required: true}]}>
                    <InputNumber placeholder={'OT Rate'} className={'w-full'} addonAfter={"$ / Hr"}/>
                </Form.Item>
            </Card>
            <Card title="Vendor Spoc" className={'mb-5 w-full'}>
                <Form.Item label={'Name'} name={['vendorSpoc', 'name']}>
                    <Input placeholder={'Name'}/>
                </Form.Item>
                <Form.Item label={'Email'} name={['vendorSpoc', 'email']} rules={[{type: 'email'}]}>
                    <Input placeholder={'Email'} type={'email'}/>
                </Form.Item>
                <Form.Item label={'Phone'} name={['vendorSpoc', 'phone']}>
                    <Input placeholder={'Phone'}/>
                </Form.Item>
            </Card>
            <Card title="Vendor Account Spoc" className={'mb-5 w-full'}>
                <Form.Item label={'Name'} name={['vendorAcctSpoc', 'name']}>
                    <Input placeholder={'Name'}/>
                </Form.Item>
                <Form.Item label={'Email'} name={['vendorAcctSpoc', 'email']}
                           rules={[{type: 'email'}]}>
                    <Input placeholder={'Email'} type={'email'}/>
                </Form.Item>
                <Form.Item label={'Phone'} name={['vendorAcctSpoc', 'phone']}>
                    <Input placeholder={'Phone'}/>
                </Form.Item>
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

export default JoiningForm;