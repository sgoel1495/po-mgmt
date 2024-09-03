import {gql} from "@apollo/client";

export const ADD_JOINING = gql`
    mutation AddJoining($data: JoiningInput!, $openingId: String) {
        addJoining(data: $data, openingId: $openingId)
    }
`

export const UPDATE_JOINING = gql`
    mutation UpdateJoining($data: JoiningUpdateInput!, $joiningId: String) {
        updateJoining(data: $data, joiningId: $joiningId)
    }
`

export const GET_COMPANY_JOINING = gql`
    query JoiningByBank($companyId: ObjectID) {
        joiningByBank(companyId: $companyId) {
            candidate {
                name
            }
            vendor {
                name
            }
        }

    }
`

export const GET_CANDIDATE_JOINING = gql`
    query GetJoiningByCandidate($candidateId: ObjectID) {
        joiningByCandidate(candidateId: $candidateId) {
            candidate {
                name
                personalEmail
                contact
                timezone
                profile
                addressLine1
                addressLine2
                addressLine3
            }
            joinings {
                joining {
                    id
                    empId
                    officialEmail
                    company {
                        companyName
                        bank {
                            accountName
                        }
                    }
                    client {
                        companyName
                    }
                    joiningDate
                    actualStartDate
                    paymentTerms
                    vendor {
                        name
                    }
                    timesheetApprover {
                        name
                        email
                    }
                    vendorRate {
                        rate
                        otRate
                    }
                    candidateRate {
                        rate
                        otRate
                    }
                    vendorSpoc {
                        name
                        email
                        phone
                    }
                    vendorAcctSpoc {
                        name
                        email
                        phone
                    }
                    invoiceFormat
                    fixedMonthDate
                    invoices {
                        name
                        month
                    }
                }
                opening {
                    name
                    endClient
                    location
                }
            },

        }
    }
`

export const GET_JOINING = gql`
    query GetJoining($id: ObjectID!) {
        joining(id: $id) {
            empId
            candidate {
                name
                id
            }
            company {
                companyName
                id
            }
            joiningDate
            actualStartDate
            paymentTerms
            officialEmail
            timesheetApprover {
                name
                email
            }
            vendorRate {
                rate
                otRate
            }
            candidateRate {
                rate
                otRate
            }
            vendorSpoc {
                name
                email
                phone
            }
            vendorAcctSpoc {
                name
                email
                phone
            }
        }
    }
`