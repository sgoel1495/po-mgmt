import React from 'react';
import {Button, Table} from "antd";
import {gql, useQuery} from "@apollo/client";
import CreateCompanies from "./CreateCompanies";
import {EyeOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";

const GET_COMPANIES = gql`
    query QueryCompany($pageNum: Int, $pageSize: Int) {
        companies(pageNum: $pageNum, pageSize: $pageSize) {
            results {
                id
                companyName
                endClient
                signingAuthName
                signingAuthEmail
                signingAuthDesignation
                addressLine1
            }
            total
        }
    }
`

const Index = () => {
    const navigate = useNavigate();
    const [page, setPage] = React.useState(1);
    const [pageSize, setPageSize] = React.useState(10);
    const {loading, error, data, refetch} = useQuery(GET_COMPANIES, {
        variables: {
            pageNum: page,
            pageSize: pageSize
        }
    });

    const columns = [
        {
            title: 'Company Name',
            dataIndex: 'companyName',
            key: 'companyName',
        }, {
            title: 'End Client',
            dataIndex: 'endClient',
            key: 'endClient',
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
                return <Button onClick={() => navigate(text)} type="link">
                    <EyeOutlined/>
                </Button>
            }
        }
    ]
    return <Table
        title={() => {
            return <div className={'flex justify-between items-center'}>
                <span className={'text-xl font-semibold'}>Companies</span>
                <CreateCompanies refetch={refetch}/>
            </div>
        }}
        columns={columns}
        dataSource={error ? [] : data?.companies.results}
        loading={loading}
        onChange={(page) => {
            setPage(page.current ?? 1)
            setPageSize(page.pageSize ?? 10)
        }}
        pagination={{
            current: page,
            pageSize: pageSize,
            total: data?.companies.total,
            showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`
        }}
    />;
};

export default Index;