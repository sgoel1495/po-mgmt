import React from 'react';
import {Button, Drawer, notification} from "antd";
import {useLazyQuery, useMutation} from "@apollo/client";
import {CompanyInput} from "../../gql/graphql";
import {EditOutlined} from "@ant-design/icons";
import CompanyForm from "@common/Forms/CompanyForm";
import {GET_COMPANY, UPDATE_COMPANY} from "@common/gql/company";

const EditCompany = (props: { refetch: any, companyId: string }) => {
    const [api, contextHolder] = notification.useNotification();
    const [open, setOpen] = React.useState(false);
    const formRef = React.useRef<any>(null);
    const [updateCompany, {loading, error}] = useMutation(UPDATE_COMPANY);
    const [getCompany, {data}] = useLazyQuery(GET_COMPANY);

    React.useEffect(() => {
        if (data?.company) {
            formRef.current?.setFieldsValue({
                ...data.company
            })
        }
    }, [data])

    const onClose = () => {
        setOpen(false);
    };
    const showDrawer = () => {
        getCompany({
            variables: {
                id: props.companyId
            }
        })
        setOpen(true);
    };
    const onSubmit = (data: CompanyInput) => {
        updateCompany({
            variables: {
                data: data,
                id: props.companyId
            }
        }).then((resp) => {
            if (resp.data.updateCompany) {
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

    const reset = () => {
        formRef.current?.setFieldsValue({
            ...data.company
        })
    }

    return <>
        {contextHolder}
        <Button type="link" onClick={showDrawer}>
            <EditOutlined/>
        </Button>
        <Drawer
            title="Edit Company"
            onClose={onClose}
            open={open}
            size={'large'}
        >
            <CompanyForm loading={loading} onSubmit={onSubmit} formRef={formRef} reset={reset}/>
        </Drawer>
    </>
};

export default EditCompany;