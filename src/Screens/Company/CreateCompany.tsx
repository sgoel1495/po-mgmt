import React from 'react';
import {Button, Drawer, notification} from "antd";
import {useMutation} from "@apollo/client";
import {CompanyInput} from "../../gql/graphql";
import CompanyForm from "@common/Forms/CompanyForm";
import {CREATE_COMPANY} from "@common/gql/company";


const CreateCompany = (props: { refetch: any }) => {
    const [api, contextHolder] = notification.useNotification();
    const [open, setOpen] = React.useState(false);
    const formRef = React.useRef<any>(null);
    const [addVendor, {loading, error}] = useMutation(CREATE_COMPANY);
    const onClose = () => {
        setOpen(false);
    };
    const showDrawer = () => {
        setOpen(true);
    };
    const onSubmit = (data: CompanyInput) => {
        addVendor({
            variables: {
                data: data
            }
        }).then((resp) => {
            if (resp.data.addCompany) {
                setOpen(false)
                formRef.current?.resetFields();
                props.refetch();
            }
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
    return <>
        {contextHolder}
        <Button type="primary" onClick={showDrawer}>
            Create
        </Button>
        <Drawer
            title="New Company"
            onClose={onClose}
            open={open}
            size={'large'}
        >
            <CompanyForm loading={loading} onSubmit={onSubmit} formRef={formRef}/>
        </Drawer>
    </>
};

export default CreateCompany;