import React from 'react';
import {Button, Card, DatePicker, Drawer, Form, Input, InputNumber, notification} from "antd";
import {gql, useMutation} from "@apollo/client";
import {CandidateInput} from "../../../gql/graphql";

const ADD_CANDIDATE = gql`
    mutation AddCandidate($data: CandidateInput!, $openingId: String) {
        addCandidate(data: $data, openingId: $openingId)
    }
`

const AddCandidate = (props: { companyId: string, vendorId: string, openingId: string, refetch: any }) => {
    const [api, contextHolder] = notification.useNotification();
    const [open, setOpen] = React.useState(false);
    const formRef = React.useRef<any>(null);
    const [addCandidate, {loading, error}] = useMutation(ADD_CANDIDATE);
    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    React.useEffect(() => {
        if (error) {
            if (error.graphQLErrors.length) {
                api.error({
                    message: 'Server Error',
                    description: error.graphQLErrors[0].message
                })
            } else if (error.clientErrors.length) {
                api.error({
                    message: 'Client Error',
                    description: error.clientErrors[0].message
                })
            }
        }
    }, [api, error])

    const onSubmit = (data: CandidateInput) => {
        addCandidate({
            variables: {
                data: {
                    ...data,
                    company: props.companyId,
                    vendor: props.vendorId,
                    actualStartDate: data.actualStartDate.format('YYYY-MM-DD'),
                    joiningDate: data.joiningDate.format('YYYY-MM-DD')
                },
                openingId: props.openingId
            }
        }).then((resp) => {
            setOpen(false)
            formRef.current?.resetFields();
            props.refetch();
        }).catch(() => {
        })
    }

    return (
        <>
            {contextHolder}
            <Button type="primary" onClick={showDrawer}>
                Add Candidate
            </Button>
            <Drawer
                title="New Candidate"
                onClose={onClose}
                open={open}
                size={'large'}
            >
                <Form onFinish={onSubmit} layout="vertical" ref={formRef}>
                    <Form.Item label={'EMP ID'} name={'empId'} required>
                        <Input placeholder={'EMP ID'}/>
                    </Form.Item>
                    <Form.Item label={'Name'} name={'name'} required>
                        <Input placeholder={'Name'}/>
                    </Form.Item>
                    <Form.Item label={'Joining Date'} name={'joiningDate'} required>
                        <DatePicker/>
                    </Form.Item>
                    <Form.Item label={'Actual Start Date'} name={'actualStartDate'} required>
                        <DatePicker/>
                    </Form.Item>
                    <Form.Item label={'Payment Terms'} name={'paymentTerms'} required>
                        <InputNumber placeholder={'Payment Terms'} className={'w-full'} addonAfter={"Days"}/>
                    </Form.Item>
                    <Form.Item label={'Personal Email'} name={'personalEmail'} required rules={[{type: 'email'}]}>
                        <Input placeholder={'Personal Email'} type={'email'}/>
                    </Form.Item>
                    <Form.Item label={'Official Email'} name={'officialEmail'} required rules={[{type: 'email'}]}>
                        <Input placeholder={'Official Email'} type={'email'}/>
                    </Form.Item>
                    <Form.Item label={'Contact'} name={'contact'} required>
                        <Input placeholder={'Contact'}/>
                    </Form.Item>
                    <Form.Item label={'Manager Name'} name={'manager'} required>
                        <Input placeholder={'Manager Name'}/>
                    </Form.Item>

                    <Card title="Project" className={'mb-5 w-full'}>
                        <Form.Item label="Name" required name={'projectName'}>
                            <Input placeholder="Name"/>
                        </Form.Item>
                        <Form.Item label="Location" required name={'projectLocation'}>
                            <Input placeholder="Project Location"/>
                        </Form.Item>
                    </Card>
                    <Card title="Timesheet Approver" className={'mb-5 w-full'}>
                        <Form.Item label="Name" required name={['timesheetApprover','name']}>
                            <Input placeholder="Name"/>
                        </Form.Item>
                        <Form.Item label="Email" required name={['timesheetApprover','email']}>
                            <Input placeholder="Email" type="email"/>
                        </Form.Item>
                    </Card>
                    <Card title="Vendor Rate" className={'mb-5 w-full'}>
                        <Form.Item label={'Rate'} name={['vendorRate', 'rate']} required>
                            <InputNumber placeholder={'Rate'} className={'w-full'} addonAfter={"$ / Hr"}/>
                        </Form.Item>
                        <Form.Item label={'OT Rate'} name={['vendorRate', 'otRate']} required>
                            <InputNumber placeholder={'OT Rate'} className={'w-full'} addonAfter={"$ / Hr"}/>
                        </Form.Item>
                    </Card>
                    <Card title="Candidate Rate" className={'mb-5 w-full'}>
                        <Form.Item label={'Rate'} name={['candidateRate', 'rate']} required>
                            <InputNumber placeholder={'Rate'} className={'w-full'} addonAfter={"$ / Hr"}/>
                        </Form.Item>
                        <Form.Item label={'OT Rate'} name={['candidateRate', 'otRate']} required>
                            <InputNumber placeholder={'OT Rate'} className={'w-full'} addonAfter={"$ / Hr"}/>
                        </Form.Item>
                    </Card>
                    <Card title="Bank" className={'mb-5 w-full'}>
                        <Form.Item label="Company Name" required name={'companyName'}>
                            <Input placeholder="Company Name"/>
                        </Form.Item>
                        <Form.Item label="Account Name" required name={['bank', 'accountName']}>
                            <Input placeholder="Account Name"/>
                        </Form.Item>
                        <Form.Item label="Account Number" required name={['bank', 'accountNumber']}>
                            <Input placeholder="Account Number"/>
                        </Form.Item>
                        <Form.Item label="Bank Name" required name={['bank', 'bankName']}>
                            <Input placeholder="Bank Name"/>
                        </Form.Item>
                        <Form.Item label="Routing Number" required name={['bank', 'routingNumber']}>
                            <Input placeholder="Routing Number"/>
                        </Form.Item>
                        <Card title="Address" className={'mb-5 w-full'}>
                            <Form.Item label="Line 1" required name={['bank', 'addressLine1']}>
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
                        <Button htmlType={'reset'} loading={loading}>Reset</Button>
                    </div>
                </Form>
            </Drawer>
        </>
    );
};

export default AddCandidate;