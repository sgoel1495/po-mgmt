import React from 'react';
import {Button, Card, Drawer, Form, Input, notification} from "antd";
import {gql, useMutation} from "@apollo/client";
import {CompanyInput} from "../../gql/graphql";

const CREATE_COMPANIES = gql`
    mutation CreateCompany($data: CompanyInput!) {
        addCompany(data: $data)
    }
`

const CreateCompanies = (props: { refetch: any }) => {
    const [api, contextHolder] = notification.useNotification();
    const [open, setOpen] = React.useState(false);
    const formRef = React.useRef<any>(null);
    const [addCompany, {loading, error}] = useMutation(CREATE_COMPANIES);
    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const onSubmit = (data: CompanyInput) => {
        addCompany({
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
    }, [error])

    return (
        <>
            {contextHolder}
            <Button type="primary" onClick={showDrawer}>
                Create
            </Button>
            <Drawer
                title="New Comapny"
                onClose={onClose}
                open={open}
                size={'large'}
            >
                <Form onFinish={onSubmit} layout="vertical" ref={formRef}>
                    <Form.Item label="Company Name" required name={'companyName'}>
                        <Input placeholder="Company Name"/>
                    </Form.Item>
                    <Form.Item label="End Client" required name={'endClient'}>
                        <Input placeholder="End Client"/>
                    </Form.Item>
                    <Card title="Signing Authority" className={'mb-5 w-full'}>
                        <Form.Item label="Name" required name={'signingAuthName'}>
                            <Input placeholder="Name"/>
                        </Form.Item>
                        <Form.Item label="Email" required name={'signingAuthEmail'} rules={[{type: 'email'}]}>
                            <Input placeholder="Email"/>
                        </Form.Item>
                        <Form.Item label="Designation" required name={'signingAuthDesignation'}>
                            <Input placeholder="Designation"/>
                        </Form.Item>
                    </Card>
                    <Card title="Address" className={'mb-5 w-full'}>
                        <Form.Item label="Line 1" required name={'addressLine1'}>
                            <Input placeholder="Line 1"/>
                        </Form.Item>
                        <Form.Item label="Line 2" required name={'addressLine2'}>
                            <Input placeholder="Line 2"/>
                        </Form.Item>
                        <Form.Item label="Line 3" required name={'addressLine3'}>
                            <Input placeholder="Line 3"/>
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

export default CreateCompanies;