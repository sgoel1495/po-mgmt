import {gql} from "@apollo/client";


export const GET_VENDOR = gql`
    query GetVendorById($id: ObjectID) {
        vendor(id: $id) {
            name
            vendorId
            addressLine1
            addressLine2
            addressLine3
            einNumber
            authSignName
            authSignEmail
            authSignDesig
            paymentTerms
            bank{
                bankName
                accountName
                accountNumber
                routingNumber
                addressLine1
                addressLine2
                addressLine3
            }
            client {
                id
                companyName
            }
        }
    }
`

export const GET_VIEW_VENDOR = gql`
    query QueryVendorById($id: ObjectID) {
        vendor(id: $id) {
            name
            vendorId
            client {
                id
                companyName
            }
            einNumber
            paymentTerms
            addressLine1
            addressLine2
            addressLine3
            authSignName
            authSignEmail
            authSignDesig
            bank{
                bankName
                accountName
                accountNumber
                routingNumber
                addressLine1
                addressLine2
                addressLine3
            }

            openings {
                id
                name
                endClient
                location
                suggestedRate {
                    otRate
                    rate
                }
                joinings {
                    id
                    candidate {
                        id
                        name
                    }
                    candidateRate {
                        rate
                    }
                    paymentTerms
                    actualStartDate
                    joiningDate
                }
            }
        }
    }
`

export const CREATE_VENDOR = gql`
    mutation CreateVendor($data: VendorInput!) {
        addVendor(data: $data)
    }
`

export const UPDATE_VENDOR = gql`
    mutation UpdateVendor($data: VendorInput!, $id: String) {
        updateVendor(data: $data, id: $id)
    }
`

export const GET_VENDORS = gql`
    query QueryVendor($pageNum: Int, $pageSize: Int) {
        vendors(pageNum: $pageNum, pageSize: $pageSize) {
            results {
                id
                name
                authSignName
                paymentTerms
                client {
                    companyName
                }
            }
            total
        }
    }
`
