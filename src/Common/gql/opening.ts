import {gql} from "@apollo/client";

export const UPDATE_OPENING = gql`
    mutation UpdateOpening($data: OpeningInput!, $openingId: String!) {
        updateOpening(data: $data, openingId: $openingId)
    }
`

export const GET_OPENING = gql`
    query GetOpeningById($id: ObjectID) {
        opening(id: $id) {
            name
            endClient
            location
            suggestedRate {
                rate
                otRate
            }
        }
    }
`

export const ADD_OPENING = gql`
    mutation AddOpening($data: OpeningInput!, $vendorId: String!) {
        addOpening(data: $data, vendorId: $vendorId)
    }
`