import React from 'react';
import {Button, Modal, notification, Table} from "antd";
import {gql, useMutation, useQuery} from "@apollo/client";
import {DeleteOutlined} from "@ant-design/icons";
import CreateUser from "./CreateUser";
import EditUser from "./EditUser";

const GET_Users = gql`
    query QueryUser($pageNum: Int, $pageSize: Int) {
        users(pageNum: $pageNum, pageSize: $pageSize) {
            results {
                username
                createdAt
                role
            }
            total
        }
    }
`

const DELETE_USER = gql`
    mutation DeleteUser($username: String!) {
        deleteUser(username: $username)
    }
`

const Index = () => {
    const [page, setPage] = React.useState(1);
    const [pageSize, setPageSize] = React.useState(10);
    const {loading, error, data, refetch} = useQuery(GET_Users, {
        variables: {
            pageNum: page,
            pageSize: pageSize
        }
    });
    const [deleteUserAPI] = useMutation(DELETE_USER)

    const deleteUser = (username: string) => {
        deleteUserAPI({
            variables: {
                username
            }
        }).then(() => {
            refetch();
        }).catch((error) => {
            notification.error({
                message: 'Error',
                description: error.message,
                duration: 5
            })
        })
    }

    const columns = [
        {
            title: 'Username',
            dataIndex: 'username',
            key: 'username',
        }, {
            title: 'Created At',
            dataIndex: 'createdAt',
            key: 'createdAt',
        }, {
            title: 'Role',
            dataIndex: 'role',
            key: 'role',
        }, {
            title: 'Actions',
            dataIndex: 'username',
            key: 'id',
            render: (text: any, row: any) => {
                console.log(row)
                return <div>
                    <EditUser refetch={refetch} data={row} />
                    <Button type="link" danger onClick={() => deleteUser(text)}>
                        <DeleteOutlined/>
                    </Button>
                </div>
            }
        }
    ]

    return <>
        <Table
            title={() => {
                return <div className={'flex justify-between items-center'}>
                    <span className={'text-xl font-semibold'}>Users</span>
                    <CreateUser refetch={refetch}/>
                </div>
            }}
            columns={columns}
            dataSource={error ? [] : data?.users.results}
            loading={loading}
            onChange={(page) => {
                setPage(page.current ?? 1)
                setPageSize(page.pageSize ?? 10)
            }}
            pagination={{
                current: page,
                pageSize: pageSize,
                total: data?.users.total,
                showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`
            }}
        />
        <Modal>

        </Modal>
    </>;
};

export default Index;