import {gql} from "@apollo/client";

export const CREATE_COMPANY = gql`
    mutation CreateCompany($data: CompanyInput!) {
        addCompany(data: $data)
    }
`

export const UPDATE_COMPANY = gql`
    mutation UpdateCompany($data: CompanyInput!, $id: String) {
        updateCompany(data: $data, id: $id)
    }
`

export const GET_COMPANY = gql`
    query GetCompany($id: ObjectID) {
        company(id: $id) {
            companyName
            ownerName
            addressLine1
            addressLine2
            addressLine3
            bank {
                bankName
                accountName
                routingNumber
                accountNumber
                addressLine1
                addressLine2
                addressLine3
            }
        }
    }
`

export const GET_INVOICE_FORMATS = gql`
    query GetInvoiceFormats {
        getInvoiceFormats{
            value
            label
        }
    }
`