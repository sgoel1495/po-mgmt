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
                addressLine1
                addressLine2
                addressLine3
            }
            joinings {
                joining {
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
                    projectName
                    projectLocation
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
                }
                opening {
                    name
                    endClient
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
            projectName
            projectLocation
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