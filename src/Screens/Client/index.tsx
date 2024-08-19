import React from 'react';
import {Button, Table} from "antd";
import {useQuery} from "@apollo/client";
import CreateClient from "./CreateClient";
import {EyeOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";
import EditClient from "./EditClient";
import {GET_CLIENTS} from "@common/gql/client";

const Index = () => {
    const navigate = useNavigate();
    const [page, setPage] = React.useState(1);
    const [pageSize, setPageSize] = React.useState(10);
    const {loading, error, data, refetch} = useQuery(GET_CLIENTS, {
        variables: {
            pageNum: page,
            pageSize: pageSize
        }
    });

    const columns = [
        {
            title: 'Client Name',
            dataIndex: 'companyName',
            key: 'companyName',
        }, {
            title: 'Signing Auth Name',
            dataIndex: 'signingAuthName',
            key: 'signingAuthName',
        }, {
            title: 'Signing Auth Email',
            dataIndex: 'signingAuthEmail',
            key: 'signingAuthEmail',
        }, {
            title: 'Signing Designation',
            dataIndex: 'signingAuthDesignation',
            key: 'signingAuthDesignation',
        }, {
            title: 'Address',
            dataIndex: 'addressLine1',
            key: 'addressLine1',
        }, {
            title: 'Actions',
            dataIndex: 'id',
            key: 'id',
            render: (text: any) => {
                return <>
                    <Button onClick={() => navigate(text)} type="link">
                        <EyeOutlined/>
                    </Button>
                    <EditClient clientId={text} refetch={refetch}/>
                </>
            }
        }
    ]
    return <Table
        title={() => {
            return <div className={'flex justify-between items-center'}>
                <span className={'text-xl font-semibold'}>Clients</span>
                <CreateClient refetch={refetch}/>
            </div>
        }}
        columns={columns}
        dataSource={error ? [] : data?.clients.results}
        loading={loading}
        onChange={(page) => {
            setPage(page.current ?? 1)
            setPageSize(page.pageSize ?? 10)
        }}
        pagination={{
            current: page,
            pageSize: pageSize,
            total: data?.clients.total,
            showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`
        }}
    />;
};

export default Index;