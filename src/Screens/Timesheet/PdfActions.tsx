import React from 'react';
import {Button, Dropdown} from "antd";
import {useMutation} from "@apollo/client";
import {GENERATE_TIMESHEET} from "@common/gql/timesheet";
import {connect} from "react-redux";
import {mediaUrl} from "@config/urls";

const PdfActions = (props: { timeSheetId?: string, token: string }) => {
    const [generateTimesheet, {loading, data, error}] = useMutation(GENERATE_TIMESHEET)
    const [downloadTime, setDownloadTime] = React.useState(false)
    const downloadTimesheet = () => {
        setDownloadTime(true)
        fetch(mediaUrl + "/"  + `timesheet_${props.timeSheetId}.pdf`, {
            method: "GET",
            headers: {
                "authorization": "Bearer " + props.token
            }
        }).then((resp) => {
            return resp.blob()
        })
            .then(blob => {
                const anchor = document.createElement("a" )
                anchor.download = `timesheet_${props.timeSheetId}.pdf`
                anchor.href = URL.createObjectURL(blob);
                anchor.click()
            }).finally(() => {
            setDownloadTime(false)
        });
    }

    const disabled = loading || downloadTime

    const items = {
        timeSheet: {
            items: [
                {
                    key: '1',
                    label: <Button type={'link'} disabled={disabled} loading={downloadTime} onClick={downloadTimesheet}>Download</Button>
                },
                {
                    key: '2',
                    label: <Button type={'link'} loading={loading} disabled={disabled} onClick={() => generateTimesheet({
                        variables: {
                            id: props.timeSheetId
                        }
                    })}>Generate New</Button>
                }
            ]
        },
        invoice: {
            items: [
                {
                    key: '1',
                    label: <Button type={'link'} disabled={disabled}>Download</Button>
                },
                {
                    key: '2',
                    label: <Button type={'link'} disabled={disabled}>Generate New</Button>
                }
            ]
        }
    }
    return (
        <div className={'gap-5 flex'}>
            <Dropdown menu={items.timeSheet} placement="bottomLeft">
                <Button type={'primary'} loading={loading} disabled={disabled}>TimeSheet PDF</Button>
            </Dropdown>
            <Dropdown menu={items.invoice} placement="bottomLeft">
                <Button type={'primary'} disabled={disabled}>Invoice PDF</Button>
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