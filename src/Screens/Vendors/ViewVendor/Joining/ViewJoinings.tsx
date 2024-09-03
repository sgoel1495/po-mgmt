import React from 'react';
import {Button, Table} from "antd";
import {useNavigate} from "react-router-dom";
import {EyeOutlined} from "@ant-design/icons";
import EditJoining from "./EditJoining";


const ViewJoinings = (props: { data: any[], refetch: any }) => {
    const navigate = useNavigate();
    const columns = [
        {
            title: 'Name',
            dataIndex: ['candidate', 'name'],
            key: 'name',
        }, {
            title: 'Joining Date',
            dataIndex: 'joiningDate',
            key: 'joiningDate',
        }, {
            title: 'Actual Start Date',
            dataIndex: 'actualStartDate',
            key: 'actualStartDate',
        }, {
            title: 'Rate',
            dataIndex: ['candidateRate', 'rate'],
            key: 'rate',
            render: (rate: string) => {
                return `$${rate}/hr`;
            }
        }, {
            title: 'Payment Terms',
            dataIndex: 'paymentTerms',
            key: 'paymentTerms',
            render: (text: any, row: any) => {
                return text + (row.fixedMonthDate ? " of every month" : " days")
            }
        }, {
            title: 'Actions',
            dataIndex: 'candidate',
            key: 'candidate',
            render: (candidate: any, row: any) => {
                return <>
                    <Button
                        onClick={() => {
                            navigate("/candidates/" + candidate.id);
                        }}
                        type={"link"}
                    >
                        <EyeOutlined/>
                    </Button>
                    <EditJoining refetch={props.refetch} joiningId={row.id}/>
                </>
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

export default ViewJoinings;