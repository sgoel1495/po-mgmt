import React from 'react';
import {AutoComplete, Button, Card, Drawer, Form, Input, InputNumber, notification, Select} from "antd";
import {gql, useLazyQuery, useMutation} from "@apollo/client";
import {VendorInput} from "../../gql/graphql";
import {useDebounceValue} from "usehooks-ts";
import Company from "../Company";

const CREATE_VENDOR = gql`
    mutation CreateVendor($data: VendorInput!) {
        addVendor(data: $data)
    }
`

const SEARCH_COMPANY = gql`
    query SearchCompany($data: String) {
        searchCompany(name: $data){
            id
            companyName
        }
    }
`

const CreateVendor = (props: { refetch: any }) => {
    const [api, contextHolder] = notification.useNotification();
    const [open, setOpen] = React.useState(false);
    const formRef = React.useRef<any>(null);
    const [addVendor, {loading, error}] = useMutation(CREATE_VENDOR);
    const [getCompany, {loading: companyLoading, data: companyData}] = useLazyQuery(SEARCH_COMPANY);
    const showDrawer = () => {
        setOpen(true);
    };
    const [companyName, setCompanyName] = useDebounceValue('', 2000)

    const onClose = () => {
        setOpen(false);
    };

    const onSubmit = (data: VendorInput) => {
        addVendor({
            variables: {
                data: data
            }
        }).then((resp) => {
            setOpen(false)
            formRef.current?.resetFields();
            props.refetch();
        }).catch(() => {
        })
    }

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

    React.useEffect(() => {
        if (companyName.length >= 3)
            getCompany({
                variables: {data: companyName}
            })
    }, [companyName, getCompany])
    const options = React.useMemo(() => {
        return companyData?.searchCompany?.map((item: any) => ({
            key: item.id,
            value: item.id,
            label: item.companyName,
            title: item.companyName
        })) || []
    }, [companyData?.searchCompany])
    return (
        <>
            {contextHolder}
            <Button type="primary" onClick={showDrawer}>
                Create
            </Button>
            <Drawer
                title="New Vendor"
                onClose={onClose}
                open={open}
                size={'large'}
            >
                <Form onFinish={onSubmit} layout="vertical" ref={formRef}>
                    <Form.Item label="Vendor Name" required name={'name'}>
                        <Input placeholder="Vendor Name"/>
                    </Form.Item>
                    <Form.Item label="Vendor Id" required name={'vendorId'}>
                        <Input placeholder="Vendor Id"/>
                    </Form.Item>
                    <Form.Item label="EIN Number" required name={'einNumber'}>
                        <Input placeholder="EIN Number"/>
                    </Form.Item>
                    <Form.Item label="Payment Terms" required name={'paymentTerms'}>
                        <InputNumber placeholder="Payment Terms" className={'w-full'}  addonAfter={"Days"}/>
                    </Form.Item>
                    <Form.Item label="Company" required name={'company'}>
                        <Select
                            showSearch
                            filterOption={false}
                            placeholder={"Search Company Name"}
                            onSearch={setCompanyName}
                            options={options}
                        />
                    </Form.Item>
                    <Card title="Signing Authority" className={'mb-5 w-full'}>
                        <Form.Item label="Name" required name={'authSignName'}>
                            <Input placeholder="Name"/>
                        </Form.Item>
                        <Form.Item label="Email" required name={'authSignEmail'} rules={[{type: 'email'}]}>
                            <Input placeholder="Email"/>
                        </Form.Item>
                        <Form.Item label="Designation" required name={'authSignDesig'}>
                            <Input placeholder="Designation"/>
                        </Form.Item>
                    </Card>
                    <Card title="Address" className={'mb-5 w-full'}>
                        <Form.Item label="Line 1" required name={'addressLine1'}>
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

export default CreateVendor;