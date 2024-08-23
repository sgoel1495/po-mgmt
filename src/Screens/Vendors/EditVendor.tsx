import React from 'react';
import {Button, Drawer, notification} from "antd";
import {useLazyQuery, useMutation} from "@apollo/client";
import {VendorInput} from "../../gql/graphql";
import {useDebounceValue} from "usehooks-ts";
import {EditOutlined} from "@ant-design/icons";
import VendorForm from "@common/Forms/VendorForm";
import {SEARCH_CLIENT} from "@common/gql/client";
import {GET_VENDOR, UPDATE_VENDOR} from "@common/gql/vendor";

const EditVendor = (props: { refetch: any, vendorId: string }) => {
    const [api, contextHolder] = notification.useNotification();
    const [open, setOpen] = React.useState(false);
    const formRef = React.useRef<any>(null);
    const [updateVendor, {loading, error}] = useMutation(UPDATE_VENDOR);
    const [getClient, {loading: companyLoading, data: companyData}] = useLazyQuery(SEARCH_CLIENT);
    const [getVendor, {loading: vendorLoading, data: vendorData}] = useLazyQuery(GET_VENDOR);

    const showDrawer = () => {
        setOpen(true);
        getVendor({variables: {id: props.vendorId}});
    };

    React.useEffect(() => {
        if (vendorData?.vendor) {
            getClient({
                variables: {data: vendorData.vendor.client.companyName}
            }).then(() => {
                formRef.current?.setFieldsValue({
                    ...vendorData.vendor,
                    client: vendorData.vendor.client.id
                })
            })
        }
    }, [vendorData])

    const [companyName, setCompanyName] = useDebounceValue('', 1000)

    const onClose = () => {
        setOpen(false);
    };

    const onSubmit = (data: VendorInput) => {
        updateVendor({
            variables: {
                data: data,
                id: props.vendorId,
            }
        }).then((resp) => {
            if (resp.data.updateVendor) {
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

    const reset = () => {
        getClient({
            variables: {data: vendorData.vendor.client.companyName}
        }).then(() => {
            formRef.current?.setFieldsValue({
                ...vendorData.vendor,
                client: vendorData.vendor.client.id
            })
        })
    }

    return (
        <>
            {contextHolder}
            <Button type="link" onClick={showDrawer}>
                <EditOutlined/>
            </Button>
            <Drawer
                title="Edit Staffing"
                onClose={onClose}
                open={open}
                size={'large'}
            >
                <VendorForm loading={loading} onSubmit={onSubmit} formRef={formRef} setCompanyName={setCompanyName}
                            options={options} reset={reset}/>
            </Drawer>
        </>
    );
};

export default EditVendor;