import React from 'react';
import {Button, Table} from "antd";
import {useQuery} from "@apollo/client";
import {EyeOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";
import CreateCandidate from "./CreateCandidate";
import EditCandidate from "./EditCandidate";
import {GET_CANDIDATES} from "@common/gql/candidate";


const Index = () => {
    const navigate = useNavigate();
    const [page, setPage] = React.useState(1);
    const [pageSize, setPageSize] = React.useState(10);
    const {loading, error, data, refetch} = useQuery(GET_CANDIDATES, {
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
            title: 'Profile',
            dataIndex: 'profile',
            key: 'profile',
        },{
            title: 'Email',
            dataIndex: 'personalEmail',
            key: 'personalEmail',
        }, {
            title: 'Contact',
            dataIndex: 'contact',
            key: 'contact',
        }, {
            title: 'Timezone',
            dataIndex: 'timezone',
            key: 'timezone',
        }, {
            title: 'Actions',
            dataIndex: 'id',
            key: 'id',
            render: (text: any) => {
                return <>
                    <Button onClick={() => navigate(text)} type="link">
                        <EyeOutlined/>
                    </Button>
                    <EditCandidate candidateId={text} refetch={refetch}/>
                </>
            }
        }
    ]
    return <Table
        title={() => {

            return <div className={'flex justify-between items-center'}>
                <span className={'text-xl font-semibold'}>Candidates</span>
                <CreateCandidate refetch={refetch}/>
            </div>
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