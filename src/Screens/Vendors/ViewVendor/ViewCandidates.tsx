import React from 'react';
import {Button, Table} from "antd";
import {useNavigate} from "react-router-dom";
import {EyeOutlined} from "@ant-design/icons";


const ViewCandidates = (props: { data: any[] }) => {
    const navigate = useNavigate();
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        }, {
            title: 'Manager',
            dataIndex: 'manager',
            key: 'manager',
        }, {
            title: 'Contact',
            dataIndex: 'contact',
            key: 'contact',
        }, {
            title: 'Joining Date',
            dataIndex: 'joiningDate',
            key: 'joiningDate',
        }, {
            title: 'Actual Start Date',
            dataIndex: 'actualStartDate',
            key: 'actualStartDate',
        }, {
            title: 'Payment Terms',
            dataIndex: 'paymentTerms',
            key: 'paymentTerms',
        }, {
            title: 'Actions',
            dataIndex: 'id',
            key: 'id',
            render: (id: any) => {
                return <Button
                    onClick={() => {
                        navigate("/candidates/" + id);
                    }}
                    type={"link"}
                >
                    <EyeOutlined/>
                </Button>
            }
        }
    ]
    return (
        <Table
            columns={columns}
            dataSource={props.data}
        />
    );
};

export default ViewCandidates;