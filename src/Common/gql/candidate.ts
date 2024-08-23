import {gql} from "@apollo/client";

export const CREATE_CANDIDATE = gql`
    mutation CreateCandidate($data: CandidateInput!) {
        addCandidate(data: $data)
    }
`

export const EDIT_CANDIDATE = gql`
    mutation UpdateCandidate($data: CandidateInput!, $id: String!) {
        updateCandidate(data: $data, id: $id)
    }
`

export const GET_CANDIDATE = gql`
    query GetCandidate($id: ObjectID) {
        candidate(id: $id) {
            name
            personalEmail
            contact
            timezone
            profile
            addressLine1
            addressLine2
            addressLine3
        }
    }
`

export const GET_CANDIDATES = gql`
    query QueryCandidate($pageNum: Int, $pageSize: Int) {
        candidates(pageNum: $pageNum, pageSize: $pageSize) {
            results {
                id
                name
                personalEmail
                contact
                timezone
                profile
            }
            total
        }
    }
`