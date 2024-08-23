import React from 'react';
import {EyeOutlined} from "@ant-design/icons";
import {Button} from "antd";
import {connect} from "react-redux";

const PreviewFile = (props: { link: string, token: string }) => {
    const [loading, setLoading] = React.useState(false);

    const viewFile = () => {
        setLoading(true)
        fetch(props.link, {
            method: "GET",
            headers: {
                "authorization": "Bearer " + props.token
            }
        }).then((resp) => {
            return resp.blob()
        })
            .then(blob => {
                let file = window.URL.createObjectURL(blob);
                window.open(file, "_blank")
            }).finally(() => {
            setLoading(false)
        });
    }

    return (
        <Button type="link" onClick={viewFile} loading={loading}>
            <EyeOutlined/>
        </Button>
    );
};

const mapStateToProps = (state: any) => {
    return {
        token: state.user.tokens?.accessToken,
    }
}

export default connect(mapStateToProps)(PreviewFile);