import React from 'react';
import { Button, Drawer, notification} from "antd";
import {useLazyQuery, useMutation} from "@apollo/client";
import {VendorInput} from "../../gql/graphql";
import {useDebounceValue} from "usehooks-ts";
import VendorForm from "../../Common/Forms/VendorForm";
import {CREATE_VENDOR} from "@common/gql/vendor";
import {SEARCH_CLIENT} from "@common/gql/client";

const CreateVendor = (props: { refetch: any }) => {
    const [api, contextHolder] = notification.useNotification();
    const [open, setOpen] = React.useState(false);
    const formRef = React.useRef<any>(null);
    const [addVendor, {loading, error}] = useMutation(CREATE_VENDOR);
    const [getClient, {loading: companyLoading, data: companyData}] = useLazyQuery(SEARCH_CLIENT);
    const showDrawer = () => {
        setOpen(true);
    };
    const [companyName, setCompanyName] = useDebounceValue('', 1000)

    const onClose = () => {
        setOpen(false);
    };

    const onSubmit = (data: VendorInput) => {
        addVendor({
            variables: {
                data: data
            }
        }).then((resp) => {
            if (resp.data.addVendor) {
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

    React.useEffect(() => {
        if (companyName.length >= 3)
            getClient({
                variables: {data: companyName}
            })
    }, [companyName, getClient])

    const options = React.useMemo(() => {
        return companyData?.searchClient?.map((item: any) => ({
            key: item.id,
            value: item.id,
            label: item.companyName,
            title: item.companyName
        })) || []
    }, [companyData?.searchClient])
    return (
        <>
            {contextHolder}
            <Button type="primary" onClick={showDrawer}>
                Create
            </Button>
            <Drawer
                title="New Staffing"
                onClose={onClose}
                open={open}
                size={'large'}
            >
                <VendorForm loading={loading} onSubmit={onSubmit} formRef={formRef} setCompanyName={setCompanyName}
                            options={options}/>
            </Drawer>
        </>
    );
};

export default CreateVendor;