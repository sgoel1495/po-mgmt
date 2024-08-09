import React from 'react';
import {Button, Table} from "antd";
import {gql, useQuery} from "@apollo/client";
import {EyeOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";

const GET_COMPANIES = gql`
    query QueryCandidate($pageNum: Int, $pageSize: Int) {
        candidates(pageNum: $pageNum, pageSize: $pageSize) {
            results {
                id
                name
                joiningDate
                paymentTerms
                actualStartDate
                contact
                manager
                company{
                    companyName
                },
                vendor{
                    name
                }
            }
            total
        }
    }
`

const Index = () => {
    const navigate = useNavigate();
    const [page, setPage] = React.useState(1);
    const [pageSize, setPageSize] = React.useState(10);
    const {loading, error, data} = useQuery(GET_COMPANIES, {
        variables: {
            pageNum: page,
            pageSize: pageSize
        }
    });

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        }, {
            title: 'Company',
            dataIndex: 'company.companyName',
            key: 'companyName',
        }, {
            title: 'Vendor',
            dataIndex: 'vendor.name',
            key: 'vendor',
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
            render: (text: any) => {
                return <Button onClick={() => navigate(text)} type="link">
                    <EyeOutlined/>
                </Button>
            }
        }
    ]
    return <Table
        title={() => {
            return<span className={'text-xl font-semibold'}>Candidates</span>
        }}
        columns={columns}
        dataSource={error ? [] : data?.candidates.results}
        loading={loading}
        onChange={(page) => {
            setPage(page.current ?? 1)
            setPageSize(page.pageSize ?? 10)
        }}
        pagination={{
            current: page,
            pageSize: pageSize,
            total: data?.candidates.total,
            showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`
        }}
    />;
};

export default Index;