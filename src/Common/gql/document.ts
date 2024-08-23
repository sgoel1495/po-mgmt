import {gql} from "@apollo/client";

export const CREATE_DOCUMENT = gql`
    mutation CreateDocument($data: DocumentInput!, $ownerId: String!) {
        addDocument(data: $data, ownerId: $ownerId)
    }
`

export const UPDATE_DOCUMENT = gql`
    mutation UpdateDocument($data: DocumentInput!, $id: String) {
        updateDocument(data: $data, id: $id)
    }
`
export const DELETE_DOCUMENT = gql`
    mutation DeleteDocument($id: String) {
        deleteDocument(id: $id)
    }
`

export const GET_DOCUMENTS = gql`
    query GetDocuments($ownerId: String!, $pageNum: Int, $pageSize: Int) {
        documents(ownerId: $ownerId, pageNum: $pageNum, pageSize: $pageSize){
            results {
                id
                name
                description
                link
            }
            total
        }
    }
`