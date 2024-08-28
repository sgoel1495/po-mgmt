import React from 'react';
import {Button, Card, Form, Input, Select, Upload} from "antd";
import {LoadingOutlined, PlusOutlined} from "@ant-design/icons";
import {connect} from "react-redux";
import {useQuery} from "@apollo/client";
import {GET_TIMESHEET_FORMATS} from "@common/gql/client";
import FileField from "@common/Forms/Fields/FileField";

const ClientForm = (props: { loading: boolean, onSubmit: any, formRef: any, reset?: any, token: string }) => {
    const {onSubmit, formRef, loading} = props;
    const [form] = Form.useForm();
    const logoObj = Form.useWatch('logo', form);
    const [logo, setLogo] = React.useState<any>(undefined);
    const {data} = useQuery(GET_TIMESHEET_FORMATS)
    const uploadButton = (
        <button style={{border: 0, background: 'none'}} type="button">
            {loading ? <LoadingOutlined/> : <PlusOutlined/>}
            <div style={{marginTop: 8}}>Upload</div>
        </button>
    );
    const normFile = (e: any) => {
        if (Array.isArray(e)) {
            return [e[0]];
        }
        return [e?.fileList[0]];
    };


    React.useEffect(() => {
        if (logoObj && logoObj[0].url) {
            fetch(logoObj[0].url, {
                method: "GET",
                headers: {
                    "authorization": "Bearer " + props.token
                }
            }).then((resp) => {
                return resp.blob()
            })
                .then(blob => {
                    let file = window.URL.createObjectURL(blob);
                    setLogo(file)
                });
        }
    }, [logoObj])

    return (
        <Form onFinish={onSubmit} layout="vertical" form={form} ref={formRef} onChange={(e) => console.log(e)}>
            <Form.Item label="Client Name" required name={'companyName'} rules={[{required: true}]}>
                <Input placeholder="Client Name"/>
            </Form.Item>
            <FileField name={'logo'} form={form} title={'Logo'} required={false}/>
            <Form.Item name={"timeSheetFormat"} label={'TimeSheet Format'}>
                <Select options={data?.getTimeSheetFormats}/>
            </Form.Item>
            <Card title="Signing Authority" className={'mb-5 w-full'}>
                <Form.Item label="Name" name={'signingAuthName'}>
                    <Input placeholder="Name"/>
                </Form.Item>
                <Form.Item label="Email" name={'signingAuthEmail'} rules={[{type: 'email'}]}>
                    <Input placeholder="Email"/>
                </Form.Item>
                <Form.Item label="Designation" name={'signingAuthDesignation'}>
                    <Input placeholder="Designation"/>
                </Form.Item>
            </Card>
            <Card title="Address" className={'mb-5 w-full'}>
                <Form.Item label="Line 1" name={'addressLine1'}>
                    <Input placeholder="Line 1"/>
                </Form.Item>
                <Form.Item label="Line 2" name={'addressLine2'}>
                    <Input placeholder="Line 2"/>
                </Form.Item>
                <Form.Item label="Line 3" name={'addressLine3'}>
                    <Input placeholder="Line 3"/>
                </Form.Item>
            </Card>
            <div className={'w-full flex justify-end gap-5'}>
                <Button type={'primary'} loading={loading} htmlType={'submit'}>
                    Save
                </Button>
                <Button htmlType={props.reset ? "button" : 'reset'} onClick={props.reset}
                        loading={loading}>Reset</Button>
            </div>
        </Form>
    );
};

const mapStateToProps = (state: any) => {
    return {
        token: state.user.tokens?.accessToken,
    }
}

export default connect(mapStateToProps)(ClientForm);