import {Form, Upload} from 'antd';
import React from 'react';
import {PlusOutlined} from "@ant-design/icons";
import {connect} from "react-redux";

const FileField = (props: { token: string, form: any, name: string, required: boolean, title: string }) => {

    const logoObj = Form.useWatch(props.name, props.form);
    const [logo, setLogo] = React.useState<any>(undefined);

    React.useEffect(() => {
        if (logoObj) {
            let index = 0
            if (logoObj.length > 1)
                index = 1
            if (logoObj[0].url)
                fetch(logoObj[index].url, {
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
            else
                setLogo(window.URL.createObjectURL(logoObj[index].originFileObj));
        }
    }, [logoObj])

    const uploadButton = (
        <button style={{border: 0, background: 'none'}} type="button">
            <PlusOutlined/>
            <div style={{marginTop: 8}}>Upload</div>
        </button>
    );
    const normFile = (e: any) => {
        let index = 0
        if (Array.isArray(e)) {
            if (e.length > 1)
                index = 1
            return [e[index]];
        }
        if (e?.fileList.length > 1)
            index = 1
        return [e?.fileList[index]];
    };
    return (
        <Form.Item label={props.title} name={props.name} valuePropName="fileList" getValueFromEvent={normFile}
                   required={props.required}  rules={[{required: props.required}]}>
            <Upload
                name={props.name}
                listType="picture-card"
                showUploadList={false}
                beforeUpload={() => false}
            >
                {logo ? <img src={logo} alt="avatar" style={{width: '100%'}}/> : uploadButton}
            </Upload>
        </Form.Item>
    );
};

const mapStateToProps = (state: any) => {
    return {
        token: state.user.tokens?.accessToken,
    }
}

export default connect(mapStateToProps)(FileField);