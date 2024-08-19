import React from 'react';
import {Button, Table} from "antd";
import {gql, useQuery} from "@apollo/client";
import {CheckCircleOutlined, CloseCircleOutlined, EyeOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";
import CreateCompany from "./CreateCompany";
import EditCompany from "./EditCompany";

const GET_COMPANIES = gql`
    query QueryCompany($pageNum: Int, $pageSize: Int) {
        companies(pageNum: $pageNum, pageSize: $pageSize) {
            results {
                id
                companyName
                ownerName
                addressLine1
                bank {
                    bankName
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
    const {loading, error, data, refetch} = useQuery(GET_COMPANIES, {
        variables: {
            pageNum: page,
            pageSize: pageSize
        }
    });

    const columns = [
        {
            title: 'Company',
            dataIndex: 'companyName',
            key: 'companyName',
        }, {
            title: 'Owner Name',
            dataIndex: 'ownerName',
            key: 'ownerName',
        }, {
            title: 'Address Line',
            dataIndex: 'addressLine1',
            key: 'addressLine1',
        }, {
            title: 'Bank',
            dataIndex: 'bank',
            key: 'bank',
            render: (bank: any) => {
                if (bank?.bankName)
                    return <CheckCircleOutlined className="text-green-500"/>
                else
                    return <CloseCircleOutlined className="text-red-500"/>;
            }
        }, {
            title: 'Actions',
            dataIndex: 'id',
            key: 'id',
            render: (text: any) => {
                return <>
                    <Button onClick={() => navigate(text)} type="link">
                        <EyeOutlined/>
                    </Button>
                    <EditCompany refetch={refetch} companyId={text}/>
                </>
            }
        }
    ]
    return <Table
        title={() => {
            return <div className={'flex justify-between items-center'}>
                <span className={'text-xl font-semibold'}>Companies</span>
                <CreateCompany refetch={refetch}/>
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