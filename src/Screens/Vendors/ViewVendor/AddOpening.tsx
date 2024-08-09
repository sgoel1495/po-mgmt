import React from 'react';
import {Button, Card, Drawer, Form, Input, InputNumber, notification} from "antd";
import {gql, useMutation} from "@apollo/client";
import {OpeningInput} from "../../../gql/graphql";

const ADD_OPENING = gql`
    mutation AddOpening($data: OpeningInput!, $vendorId: String!) {
        addOpening(data: $data, vendorId: $vendorId)
    }
`

const AddOpening = (props: { vendorId?: string, refetch: any }) => {
    const [api, contextHolder] = notification.useNotification();
    const [open, setOpen] = React.useState(false);
    const formRef = React.useRef<any>(null);
    const [addOpening, {loading, error}] = useMutation(ADD_OPENING);
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

    const onSubmit = (data: OpeningInput) => {
        addOpening({
            variables: {
                data: data,
                vendorId: props.vendorId
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
                Add Opening
            </Button>
            <Drawer
                title="New Opening"
                onClose={onClose}
                open={open}
            >
                <Form onFinish={onSubmit} layout="vertical" ref={formRef}>
                    <Form.Item label={'Name'} name={'name'} required>
                        <Input placeholder={'Name'}/>
                    </Form.Item>
                    <Card title="Suggested Rate" className={'mb-5 w-full'}>
                        <Form.Item label={'Rate'} name={['suggestedRate', 'rate']} required>
                            <InputNumber placeholder={'Rate'} className={'w-full'} addonAfter={"$ / Hr"}/>
                        </Form.Item>
                        <Form.Item label={'OT Rate'} name={['suggestedRate', 'otRate']} required>
                            <InputNumber placeholder={'OT Rate'} className={'w-full'} addonAfter={"$ / Hr"}/>
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

export default AddOpening;