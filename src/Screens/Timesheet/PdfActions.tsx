import React from 'react';
import {Button, Dropdown, notification} from "antd";
import {useMutation} from "@apollo/client";
import {GENERATE_INVOICE, GENERATE_TIMESHEET} from "@common/gql/timesheet";
import {connect} from "react-redux";
import {mediaUrl} from "@config/urls";

const PdfActions = (props: { timeSheetId?: string, token: string, invoiceName: string }) => {
    const [api, contextHolder] = notification.useNotification();
    const [generateTimesheet, {loading, error}] = useMutation(GENERATE_TIMESHEET)
    const [generateInvoice, {loading: invoiceLoading, error: invoiceError}] = useMutation(GENERATE_INVOICE)
    const [downloadTime, setDownloadTime] = React.useState(false)
    const downloadTimesheet = () => {
        setDownloadTime(true)
        fetch(`${mediaUrl}/timesheet_${props.timeSheetId}.pdf`, {
            method: "GET",
            headers: {
                "authorization": "Bearer " + props.token
            }
        }).then((resp) => {
            return resp.blob()
        })
            .then(blob => {
                const anchor = document.createElement("a")
                anchor.download = `timesheet_${props.timeSheetId}.pdf`
                anchor.href = URL.createObjectURL(blob);
                anchor.click()
            }).finally(() => {
            setDownloadTime(false)
        });
    }

    const downloadInvoice = () => {
        setDownloadTime(true)
        fetch(`${mediaUrl}/${props.invoiceName}`, {
            method: "GET",
            headers: {
                "authorization": "Bearer " + props.token
            }
        }).then((resp) => {
            return resp.blob()
        })
            .then(blob => {
                const anchor = document.createElement("a")
                anchor.download = props.invoiceName
                anchor.href = URL.createObjectURL(blob);
                anchor.click()
            }).finally(() => {
            setDownloadTime(false)
        });
    }

    const disabled = loading || downloadTime || invoiceLoading

    const items = {
        timeSheet: {
            items: [
                {
                    key: '1',
                    label: <Button type={'link'} disabled={disabled} loading={downloadTime}
                                   onClick={downloadTimesheet}>Download</Button>
                },
                {
                    key: '2',
                    label: <Button
                        type={'link'}
                        loading={loading}
                        disabled={disabled}
                        onClick={() => generateTimesheet({
                            variables: {
                                id: props.timeSheetId
                            }
                        })}
                    >
                        Generate New
                    </Button>
                }
            ]
        },
        invoice: {
            items: [
                {
                    key: '1',
                    label: <Button type={'link'} disabled={disabled || !props.invoiceName}
                                   onClick={downloadInvoice}>Download</Button>
                },
                {
                    key: '2',
                    label: <Button
                        type={'link'}
                        loading={invoiceLoading}
                        disabled={disabled}
                        onClick={() => generateInvoice({
                            variables: {
                                id: props.timeSheetId
                            }
                        })}
                    >
                        Generate New
                    </Button>
                }
            ]
        }
    }

    console.log(props.invoiceName)
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
        if (invoiceError) {
            if (invoiceError.graphQLErrors.length) {
                api.error({
                    message: 'Server Error',
                    description: invoiceError.graphQLErrors[0].message
                })
            } else if (invoiceError.clientErrors.length) {
                api.error({
                    message: 'Client Error',
                    description: invoiceError.clientErrors[0].message
                })
            }
        }
    }, [api, invoiceError])

    return (
        <div className={'gap-5 flex'}>
            {contextHolder}
            <Dropdown menu={items.timeSheet} placement="bottomLeft">
                <Button type={'primary'} loading={loading} disabled={disabled}>TimeSheet PDF</Button>
            </Dropdown>
            <Dropdown menu={items.invoice} placement="bottomLeft">
                <Button type={'primary'} disabled={disabled} loading={invoiceLoading}>Invoice PDF</Button>
            </Dropdown>
        </div>
    );
};

const mapStateToProps = (state: any) => {
    return {
        token: state.user.tokens?.accessToken,
    }
}

export default connect(mapStateToProps)(PdfActions);