import React from 'react';
import {Button, Table} from "antd";
import {useQuery} from "@apollo/client";
import CreateVendor from "./CreateVendor";
import {EyeOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";
import EditVendor from "./EditVendor";
import {GET_VENDORS} from "@common/gql/vendor";



const Index = () => {
    const navigate = useNavigate();
    const [page, setPage] = React.useState(1);
    const [pageSize, setPageSize] = React.useState(10);
    const {loading, error, data, refetch} = useQuery(GET_VENDORS, {
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
            dataIndex: ['client', 'companyName'],
            key: 'companyName',
        }, {
            title: 'Auth Sign Name',
            dataIndex: 'authSignName',
            key: 'authSignName',
        }, {
            title: 'Payment Terms',
            dataIndex: 'paymentTerms',
            key: 'paymentTerms',
        }, {
            title: 'Actions',
            dataIndex: 'id',
            key: 'id',
            render: (text: any) => {
                return <><Button onClick={() => navigate(text)} type="link">
                    <EyeOutlined/>
                </Button>
                    <EditVendor refetch={refetch} vendorId={text}/>
                </>
            }
        }
    ]
    return <Table
        title={() => {
            return <div className={'flex justify-between items-center'}>
                <span className={'text-xl font-semibold'}>Staffing</span>
                <CreateVendor refetch={refetch}/>
            </div>
        }}
        columns={columns}
        dataSource={error ? [] : data?.vendors.results}
        loading={loading}
        onChange={(page) => {
            setPage(page.current ?? 1)
            setPageSize(page.pageSize ?? 10)
        }}
        pagination={{
            current: page,
            pageSize: pageSize,
            total: data?.vendors.total,
            showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`
        }}
    />;
};

export default Index;