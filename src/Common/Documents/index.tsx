import React from 'react';
import {Button, Popconfirm, Table} from "antd";
import {useMutation, useQuery} from "@apollo/client";
import {DELETE_DOCUMENT, GET_DOCUMENTS} from "@common/gql/document";
import {DeleteOutlined} from "@ant-design/icons";
import EditDocument from "@common/Documents/EditDocument";
import CreateDocument from "@common/Documents/CreateDocument";
import PreviewFile from "@common/Documents/PreviewFile";
import {mediaUrl} from "@config/urls";

const Index = (props: { ownerId: string }) => {
    const [page, setPage] = React.useState(1);
    const [pageSize, setPageSize] = React.useState(10);
    const [deleteDoc] = useMutation(DELETE_DOCUMENT);
    const {loading, error, data, refetch} = useQuery(GET_DOCUMENTS, {
        variables: {
            pageNum: page,
            pageSize: pageSize,
            ownerId: props.ownerId
        }
    });

    const deleteDocument = (id: string) => {
        deleteDoc({
            variables: {
                id
            }
        }).then((resp) => {
            if (resp.data.deleteDocument) {
                refetch();
            }
        })
    }

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        }, {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        }, {
            title: 'Actions',
            dataIndex: 'link',
            key: 'link',
            width: '25%',
            render: (text: any, data: any) => {
                return <>
                    <PreviewFile link={mediaUrl + "/" + text}/>
                    <EditDocument data={data} refetch={refetch}/>
                    <Popconfirm title={"Are you sure you want to delete this document?"}
                                onConfirm={() => deleteDocument(data.id)}>
                        <Button type={"link"} danger>
                            <DeleteOutlined/>
                        </Button>
                    </Popconfirm>

                </>
            }
        }
    ]

    return (
        <Table
            title={() => {
                return <div className={'flex justify-between items-center'}>
                    <span className={'text-xl font-semibold'}>Documents</span>
                    <CreateDocument refetch={refetch} ownerId={props.ownerId}/>
                </div>
            }}
            columns={columns}
            dataSource={error ? [] : data?.documents.results}
            loading={loading}
            onChange={(page) => {
                setPage(page.current ?? 1)
                setPageSize(page.pageSize ?? 10)
            }}
            pagination={{
                current: page,
                pageSize: pageSize,
                total: data?.documents.total,
                showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`
            }}
        />
    );
};

export default Index;