import {gql} from "@apollo/client";

export const CREATE_CLIENT = gql`
    mutation CreateClient($data: ClientInput!) {
        addClient(data: $data)
    }
`

export const UPDATE_CLIENT = gql`
    mutation UpdateClient($data: ClientInput!, $id: String) {
        updateClient(data: $data, id: $id)
    }
`

export const GET_CLIENT = gql`
    query GetClientById($id: ObjectID) {
        client(id: $id) {
            companyName
            logo
            signingAuthName
            signingAuthEmail
            signingAuthDesignation
            addressLine1
            addressLine2
            addressLine3
        }
    }
`

export const GET_CLIENTS = gql`
    query QueryClient($pageNum: Int, $pageSize: Int) {
        clients(pageNum: $pageNum, pageSize: $pageSize) {
            results {
                id
                companyName
                signingAuthName
                signingAuthEmail
                signingAuthDesignation
                addressLine1
            }
            total
        }
    }
`

export const SEARCH_CLIENT = gql`
    query SearchClient($data: String) {
        searchClient(name: $data){
            id
            companyName
        }
    }
`