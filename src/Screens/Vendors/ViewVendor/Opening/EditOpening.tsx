import React from 'react';
import {Button, Drawer, notification} from "antd";
import {gql, useLazyQuery, useMutation} from "@apollo/client";
import {OpeningInput} from "../../../../gql/graphql";
import OpeningForm from "@common/Forms/OpeningForm";

const UPDATE_OPENING = gql`
    mutation UpdateOpening($data: OpeningInput!, $openingId: String!) {
        updateOpening(data: $data, openingId: $openingId)
    }
`

const GET_OPENING = gql`
    query GetOpeningById($id: ObjectID) {
        opening(id: $id) {
            name
            endClient
            suggestedRate {
                rate
                otRate
            }
        }
    }
`

const EditOpening = (props: { openingId: string, refetch: any }) => {
    const [api, contextHolder] = notification.useNotification();
    const [open, setOpen] = React.useState(false);
    const formRef = React.useRef<any>(null);
    const [updateOpening, {loading, error}] = useMutation(UPDATE_OPENING);
    const [getOpening, {loading: vendorLoading, data}] = useLazyQuery(GET_OPENING);

    React.useEffect(() => {
        if (data?.opening) {
            formRef.current?.setFieldsValue({
                ...data.opening
            })
        }
    }, [data])

    const showDrawer = () => {
        getOpening({
            variables: {
                id: props.openingId
            }
        })
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
        updateOpening({
            variables: {
                data: data,
                openingId: props.openingId
            }
        }).then((resp) => {
            if (resp.data.updateOpening) {
                setOpen(false)
                formRef.current?.resetFields();
                props.refetch();
            }
        }).catch(() => {
        })
    }

    const reset = () => {
        formRef.current?.setFieldsValue({
            ...data.opening
        })
    }

    return (
        <>
            {contextHolder}
            <Button type="primary" onClick={showDrawer} className={'ml-2'}>
                Edit
            </Button>
            <Drawer
                title="Edit Opening"
                onClose={onClose}
                open={open}
            >
                <OpeningForm formRef={formRef} loading={loading} onSubmit={onSubmit} reset={reset}/>
            </Drawer>
        </>
    );
};

export default EditOpening;