/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n    query SearchCandidate($name: String!) {\n        searchCandidate(name: $name){\n            id\n            name\n        }\n    }\n": types.SearchCandidateDocument,
    "\n    query SearchCompany($name: String!) {\n        searchCompany(name: $name){\n            id\n            companyName\n        }\n    }\n": types.SearchCompanyDocument,
    "\n    mutation UpdateCandidate($data: CandidateInput!, $id: String!) {\n        updateCandidate(data: $data, id: $id)\n    }\n": types.UpdateCandidateDocument,
    "\n    query GetCandidate($id: ObjectID) {\n        candidate(id: $id) {\n            name\n            personalEmail\n            contact\n            timezone\n            addressLine1\n            addressLine2\n            addressLine3\n        }\n    }\n": types.GetCandidateDocument,
    "\n    query QueryCandidateById($id: ObjectID) {\n        candidate(id: $id) {\n            name\n            personalEmail\n            contact\n            timezone\n            addressLine1\n            addressLine2\n            addressLine3\n        }\n    }\n": types.QueryCandidateByIdDocument,
    "\n    query QueryCandidate($pageNum: Int, $pageSize: Int) {\n        candidates(pageNum: $pageNum, pageSize: $pageSize) {\n            results {\n                id\n                name\n                personalEmail\n                contact\n                timezone\n            }\n            total\n        }\n    }\n": types.QueryCandidateDocument,
    "\n    mutation CreateClient($data: ClientInput!) {\n        addClient(data: $data)\n    }\n": types.CreateClientDocument,
    "\n    mutation UpdateClient($data: ClientInput!, $id: String) {\n        updateClient(data: $data, id: $id)\n    }\n": types.UpdateClientDocument,
    "\n    query GetClientById($id: ObjectID) {\n        client(id: $id) {\n            companyName\n            logo\n            signingAuthName\n            signingAuthEmail\n            signingAuthDesignation\n            addressLine1\n            addressLine2\n            addressLine3\n        }\n    }\n": types.GetClientByIdDocument,
    "\n    query QueryClientById($id: ObjectID) {\n        client(id: $id) {\n            companyName\n            logo\n            signingAuthName\n            signingAuthEmail\n            signingAuthDesignation\n            addressLine1\n            addressLine2\n            addressLine3\n        }\n    }\n": types.QueryClientByIdDocument,
    "\n    query QueryClient($pageNum: Int, $pageSize: Int) {\n        clients(pageNum: $pageNum, pageSize: $pageSize) {\n            results {\n                id\n                companyName\n                signingAuthName\n                signingAuthEmail\n                signingAuthDesignation\n                addressLine1\n            }\n            total\n        }\n    }\n": types.QueryClientDocument,
    "\n    mutation CreateCompany($data: CompanyInput!) {\n        addCompany(data: $data)\n    }\n": types.CreateCompanyDocument,
    "\n    mutation UpdateCompany($data: CompanyInput!, $id: String) {\n        updateCompany(data: $data, id: $id)\n    }\n": types.UpdateCompanyDocument,
    "\n    query GetCompany($id: ObjectID) {\n        company(id: $id) {\n            companyName\n            ownerName\n            addressLine1\n            addressLine2\n            addressLine3\n            bank {\n                bankName\n                accountName\n                routingNumber\n                accountNumber\n                addressLine1\n                addressLine2\n                addressLine3\n            }\n        }\n    }\n": types.GetCompanyDocument,
    "\n    query QueryCompanyById($id: ObjectID) {\n        company(id: $id) {\n            companyName\n            ownerName\n            addressLine1\n            addressLine2\n            addressLine3\n            bank{\n                bankName\n                accountName\n                accountNumber\n                addressLine1\n                addressLine2\n                addressLine3\n                routingNumber\n            }\n        }\n    }\n": types.QueryCompanyByIdDocument,
    "\n    query QueryCompany($pageNum: Int, $pageSize: Int) {\n        companies(pageNum: $pageNum, pageSize: $pageSize) {\n            results {\n                id\n                companyName\n                ownerName\n                addressLine1\n                bank {\n                    bankName\n                }\n\n            }\n            total\n        }\n    }\n": types.QueryCompanyDocument,
    "\n    query LoginQuery($username: String!, $password: String!) {\n        login(username: $username, password: $password) {\n            tokens {\n                accessToken\n            }\n            role\n        }\n    }\n": types.LoginQueryDocument,
    "\n    mutation UpdateTimeSheet($data: TimeSheetInput) {\n        updateTimeSheet(data: $data)\n    }\n": types.UpdateTimeSheetDocument,
    "\n    query QueryBasicCandidateById($id: ObjectID) {\n        candidate(id: $id) {\n            name\n#            empId\n#            actualStartDate\n#            client {\n#                id\n#                companyName\n#            }\n#            vendor {\n#                id\n#                name\n#            },\n#            projectName\n#            projectLocation\n#            timesheetApprover {\n#                name\n#                email\n#            }\n#            candidateRate {\n#                otRate\n#                rate\n#            }\n        }\n    }\n": types.QueryBasicCandidateByIdDocument,
    "\n    query QueryTimeSheet($month: Int, $candidate: ID) {\n        getTimeSheet(month: $month, candidate: $candidate) {\n            id\n            timeSheet {\n                date\n                standardHours\n                OTHours\n            }\n            submissionDate\n            approvalDate\n            status\n        }\n    }\n": types.QueryTimeSheetDocument,
    "\n    mutation CreateUser($data: UserInput!) {\n        addUser(data: $data)\n    }\n": types.CreateUserDocument,
    "\n    mutation UpdateUser($username: String!, $password: String, $role: String!) {\n        updateUser(username: $username,password: $password, role: $role)\n    }\n": types.UpdateUserDocument,
    "\n    query QueryUser($pageNum: Int, $pageSize: Int) {\n        users(pageNum: $pageNum, pageSize: $pageSize) {\n            results {\n                username\n                createdAt\n                role\n            }\n            total\n        }\n    }\n": types.QueryUserDocument,
    "\n    mutation DeleteUser($username: String!) {\n        deleteUser(username: $username)\n    }\n": types.DeleteUserDocument,
    "\n    mutation CreateVendor($data: VendorInput!) {\n        addVendor(data: $data)\n    }\n": types.CreateVendorDocument,
    "\n    query SearchClient($data: String) {\n        searchClient(name: $data){\n            id\n            companyName\n        }\n    }\n": types.SearchClientDocument,
    "\n    mutation UpdateVendor($data: VendorInput!, $id: String) {\n        updateVendor(data: $data, id: $id)\n    }\n": types.UpdateVendorDocument,
    "\n    query GetVendorById($id: ObjectID) {\n        vendor(id: $id) {\n            name\n            vendorId\n            addressLine1\n            addressLine2\n            addressLine3\n            einNumber\n            authSignName\n            authSignEmail\n            authSignDesig\n            paymentTerms\n            bank{\n                bankName\n                accountName\n                accountNumber\n                routingNumber\n                addressLine1\n                addressLine2\n                addressLine3\n            }\n            client {\n                id\n                companyName\n            }\n        }\n    }\n": types.GetVendorByIdDocument,
    "\n    mutation AddOpening($data: OpeningInput!, $vendorId: String!) {\n        addOpening(data: $data, vendorId: $vendorId)\n    }\n": types.AddOpeningDocument,
    "\n    mutation UpdateOpening($data: OpeningInput!, $openingId: String!) {\n        updateOpening(data: $data, openingId: $openingId)\n    }\n": types.UpdateOpeningDocument,
    "\n    query GetOpeningById($id: ObjectID) {\n        opening(id: $id) {\n            name\n            endClient\n            suggestedRate {\n                rate\n                otRate\n            }\n        }\n    }\n": types.GetOpeningByIdDocument,
    "\n    query QueryVendorById($id: ObjectID) {\n        vendor(id: $id) {\n            name\n            vendorId\n            client {\n                id\n                companyName\n            }\n            einNumber\n            paymentTerms\n            addressLine1\n            addressLine2\n            addressLine3\n            authSignName\n            authSignEmail\n            authSignDesig\n            bank{\n                bankName\n                accountName\n                accountNumber\n                routingNumber\n                addressLine1\n                addressLine2\n                addressLine3\n            }\n\n            openings {\n                id\n                name\n                endClient\n                suggestedRate {\n                    otRate\n                    rate\n                }\n                joinings {\n                    id\n                    candidate {\n                        id\n                        name\n                    }\n                    candidateRate {\n                        rate\n                    }\n                    paymentTerms\n                    actualStartDate\n                    joiningDate\n                }\n            }\n        }\n    }\n": types.QueryVendorByIdDocument,
    "\n    query QueryVendor($pageNum: Int, $pageSize: Int) {\n        vendors(pageNum: $pageNum, pageSize: $pageSize) {\n            results {\n                id\n                name\n                authSignName\n                paymentTerms\n                client {\n                    companyName\n                }\n            }\n            total\n        }\n    }\n": types.QueryVendorDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query SearchCandidate($name: String!) {\n        searchCandidate(name: $name){\n            id\n            name\n        }\n    }\n"): (typeof documents)["\n    query SearchCandidate($name: String!) {\n        searchCandidate(name: $name){\n            id\n            name\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query SearchCompany($name: String!) {\n        searchCompany(name: $name){\n            id\n            companyName\n        }\n    }\n"): (typeof documents)["\n    query SearchCompany($name: String!) {\n        searchCompany(name: $name){\n            id\n            companyName\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation UpdateCandidate($data: CandidateInput!, $id: String!) {\n        updateCandidate(data: $data, id: $id)\n    }\n"): (typeof documents)["\n    mutation UpdateCandidate($data: CandidateInput!, $id: String!) {\n        updateCandidate(data: $data, id: $id)\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GetCandidate($id: ObjectID) {\n        candidate(id: $id) {\n            name\n            personalEmail\n            contact\n            timezone\n            addressLine1\n            addressLine2\n            addressLine3\n        }\n    }\n"): (typeof documents)["\n    query GetCandidate($id: ObjectID) {\n        candidate(id: $id) {\n            name\n            personalEmail\n            contact\n            timezone\n            addressLine1\n            addressLine2\n            addressLine3\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query QueryCandidateById($id: ObjectID) {\n        candidate(id: $id) {\n            name\n            personalEmail\n            contact\n            timezone\n            addressLine1\n            addressLine2\n            addressLine3\n        }\n    }\n"): (typeof documents)["\n    query QueryCandidateById($id: ObjectID) {\n        candidate(id: $id) {\n            name\n            personalEmail\n            contact\n            timezone\n            addressLine1\n            addressLine2\n            addressLine3\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query QueryCandidate($pageNum: Int, $pageSize: Int) {\n        candidates(pageNum: $pageNum, pageSize: $pageSize) {\n            results {\n                id\n                name\n                personalEmail\n                contact\n                timezone\n            }\n            total\n        }\n    }\n"): (typeof documents)["\n    query QueryCandidate($pageNum: Int, $pageSize: Int) {\n        candidates(pageNum: $pageNum, pageSize: $pageSize) {\n            results {\n                id\n                name\n                personalEmail\n                contact\n                timezone\n            }\n            total\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation CreateClient($data: ClientInput!) {\n        addClient(data: $data)\n    }\n"): (typeof documents)["\n    mutation CreateClient($data: ClientInput!) {\n        addClient(data: $data)\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation UpdateClient($data: ClientInput!, $id: String) {\n        updateClient(data: $data, id: $id)\n    }\n"): (typeof documents)["\n    mutation UpdateClient($data: ClientInput!, $id: String) {\n        updateClient(data: $data, id: $id)\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GetClientById($id: ObjectID) {\n        client(id: $id) {\n            companyName\n            logo\n            signingAuthName\n            signingAuthEmail\n            signingAuthDesignation\n            addressLine1\n            addressLine2\n            addressLine3\n        }\n    }\n"): (typeof documents)["\n    query GetClientById($id: ObjectID) {\n        client(id: $id) {\n            companyName\n            logo\n            signingAuthName\n            signingAuthEmail\n            signingAuthDesignation\n            addressLine1\n            addressLine2\n            addressLine3\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query QueryClientById($id: ObjectID) {\n        client(id: $id) {\n            companyName\n            logo\n            signingAuthName\n            signingAuthEmail\n            signingAuthDesignation\n            addressLine1\n            addressLine2\n            addressLine3\n        }\n    }\n"): (typeof documents)["\n    query QueryClientById($id: ObjectID) {\n        client(id: $id) {\n            companyName\n            logo\n            signingAuthName\n            signingAuthEmail\n            signingAuthDesignation\n            addressLine1\n            addressLine2\n            addressLine3\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query QueryClient($pageNum: Int, $pageSize: Int) {\n        clients(pageNum: $pageNum, pageSize: $pageSize) {\n            results {\n                id\n                companyName\n                signingAuthName\n                signingAuthEmail\n                signingAuthDesignation\n                addressLine1\n            }\n            total\n        }\n    }\n"): (typeof documents)["\n    query QueryClient($pageNum: Int, $pageSize: Int) {\n        clients(pageNum: $pageNum, pageSize: $pageSize) {\n            results {\n                id\n                companyName\n                signingAuthName\n                signingAuthEmail\n                signingAuthDesignation\n                addressLine1\n            }\n            total\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation CreateCompany($data: CompanyInput!) {\n        addCompany(data: $data)\n    }\n"): (typeof documents)["\n    mutation CreateCompany($data: CompanyInput!) {\n        addCompany(data: $data)\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation UpdateCompany($data: CompanyInput!, $id: String) {\n        updateCompany(data: $data, id: $id)\n    }\n"): (typeof documents)["\n    mutation UpdateCompany($data: CompanyInput!, $id: String) {\n        updateCompany(data: $data, id: $id)\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GetCompany($id: ObjectID) {\n        company(id: $id) {\n            companyName\n            ownerName\n            addressLine1\n            addressLine2\n            addressLine3\n            bank {\n                bankName\n                accountName\n                routingNumber\n                accountNumber\n                addressLine1\n                addressLine2\n                addressLine3\n            }\n        }\n    }\n"): (typeof documents)["\n    query GetCompany($id: ObjectID) {\n        company(id: $id) {\n            companyName\n            ownerName\n            addressLine1\n            addressLine2\n            addressLine3\n            bank {\n                bankName\n                accountName\n                routingNumber\n                accountNumber\n                addressLine1\n                addressLine2\n                addressLine3\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query QueryCompanyById($id: ObjectID) {\n        company(id: $id) {\n            companyName\n            ownerName\n            addressLine1\n            addressLine2\n            addressLine3\n            bank{\n                bankName\n                accountName\n                accountNumber\n                addressLine1\n                addressLine2\n                addressLine3\n                routingNumber\n            }\n        }\n    }\n"): (typeof documents)["\n    query QueryCompanyById($id: ObjectID) {\n        company(id: $id) {\n            companyName\n            ownerName\n            addressLine1\n            addressLine2\n            addressLine3\n            bank{\n                bankName\n                accountName\n                accountNumber\n                addressLine1\n                addressLine2\n                addressLine3\n                routingNumber\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query QueryCompany($pageNum: Int, $pageSize: Int) {\n        companies(pageNum: $pageNum, pageSize: $pageSize) {\n            results {\n                id\n                companyName\n                ownerName\n                addressLine1\n                bank {\n                    bankName\n                }\n\n            }\n            total\n        }\n    }\n"): (typeof documents)["\n    query QueryCompany($pageNum: Int, $pageSize: Int) {\n        companies(pageNum: $pageNum, pageSize: $pageSize) {\n            results {\n                id\n                companyName\n                ownerName\n                addressLine1\n                bank {\n                    bankName\n                }\n\n            }\n            total\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query LoginQuery($username: String!, $password: String!) {\n        login(username: $username, password: $password) {\n            tokens {\n                accessToken\n            }\n            role\n        }\n    }\n"): (typeof documents)["\n    query LoginQuery($username: String!, $password: String!) {\n        login(username: $username, password: $password) {\n            tokens {\n                accessToken\n            }\n            role\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation UpdateTimeSheet($data: TimeSheetInput) {\n        updateTimeSheet(data: $data)\n    }\n"): (typeof documents)["\n    mutation UpdateTimeSheet($data: TimeSheetInput) {\n        updateTimeSheet(data: $data)\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query QueryBasicCandidateById($id: ObjectID) {\n        candidate(id: $id) {\n            name\n#            empId\n#            actualStartDate\n#            client {\n#                id\n#                companyName\n#            }\n#            vendor {\n#                id\n#                name\n#            },\n#            projectName\n#            projectLocation\n#            timesheetApprover {\n#                name\n#                email\n#            }\n#            candidateRate {\n#                otRate\n#                rate\n#            }\n        }\n    }\n"): (typeof documents)["\n    query QueryBasicCandidateById($id: ObjectID) {\n        candidate(id: $id) {\n            name\n#            empId\n#            actualStartDate\n#            client {\n#                id\n#                companyName\n#            }\n#            vendor {\n#                id\n#                name\n#            },\n#            projectName\n#            projectLocation\n#            timesheetApprover {\n#                name\n#                email\n#            }\n#            candidateRate {\n#                otRate\n#                rate\n#            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query QueryTimeSheet($month: Int, $candidate: ID) {\n        getTimeSheet(month: $month, candidate: $candidate) {\n            id\n            timeSheet {\n                date\n                standardHours\n                OTHours\n            }\n            submissionDate\n            approvalDate\n            status\n        }\n    }\n"): (typeof documents)["\n    query QueryTimeSheet($month: Int, $candidate: ID) {\n        getTimeSheet(month: $month, candidate: $candidate) {\n            id\n            timeSheet {\n                date\n                standardHours\n                OTHours\n            }\n            submissionDate\n            approvalDate\n            status\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation CreateUser($data: UserInput!) {\n        addUser(data: $data)\n    }\n"): (typeof documents)["\n    mutation CreateUser($data: UserInput!) {\n        addUser(data: $data)\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation UpdateUser($username: String!, $password: String, $role: String!) {\n        updateUser(username: $username,password: $password, role: $role)\n    }\n"): (typeof documents)["\n    mutation UpdateUser($username: String!, $password: String, $role: String!) {\n        updateUser(username: $username,password: $password, role: $role)\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query QueryUser($pageNum: Int, $pageSize: Int) {\n        users(pageNum: $pageNum, pageSize: $pageSize) {\n            results {\n                username\n                createdAt\n                role\n            }\n            total\n        }\n    }\n"): (typeof documents)["\n    query QueryUser($pageNum: Int, $pageSize: Int) {\n        users(pageNum: $pageNum, pageSize: $pageSize) {\n            results {\n                username\n                createdAt\n                role\n            }\n            total\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation DeleteUser($username: String!) {\n        deleteUser(username: $username)\n    }\n"): (typeof documents)["\n    mutation DeleteUser($username: String!) {\n        deleteUser(username: $username)\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation CreateVendor($data: VendorInput!) {\n        addVendor(data: $data)\n    }\n"): (typeof documents)["\n    mutation CreateVendor($data: VendorInput!) {\n        addVendor(data: $data)\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query SearchClient($data: String) {\n        searchClient(name: $data){\n            id\n            companyName\n        }\n    }\n"): (typeof documents)["\n    query SearchClient($data: String) {\n        searchClient(name: $data){\n            id\n            companyName\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation UpdateVendor($data: VendorInput!, $id: String) {\n        updateVendor(data: $data, id: $id)\n    }\n"): (typeof documents)["\n    mutation UpdateVendor($data: VendorInput!, $id: String) {\n        updateVendor(data: $data, id: $id)\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GetVendorById($id: ObjectID) {\n        vendor(id: $id) {\n            name\n            vendorId\n            addressLine1\n            addressLine2\n            addressLine3\n            einNumber\n            authSignName\n            authSignEmail\n            authSignDesig\n            paymentTerms\n            bank{\n                bankName\n                accountName\n                accountNumber\n                routingNumber\n                addressLine1\n                addressLine2\n                addressLine3\n            }\n            client {\n                id\n                companyName\n            }\n        }\n    }\n"): (typeof documents)["\n    query GetVendorById($id: ObjectID) {\n        vendor(id: $id) {\n            name\n            vendorId\n            addressLine1\n            addressLine2\n            addressLine3\n            einNumber\n            authSignName\n            authSignEmail\n            authSignDesig\n            paymentTerms\n            bank{\n                bankName\n                accountName\n                accountNumber\n                routingNumber\n                addressLine1\n                addressLine2\n                addressLine3\n            }\n            client {\n                id\n                companyName\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation AddOpening($data: OpeningInput!, $vendorId: String!) {\n        addOpening(data: $data, vendorId: $vendorId)\n    }\n"): (typeof documents)["\n    mutation AddOpening($data: OpeningInput!, $vendorId: String!) {\n        addOpening(data: $data, vendorId: $vendorId)\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation UpdateOpening($data: OpeningInput!, $openingId: String!) {\n        updateOpening(data: $data, openingId: $openingId)\n    }\n"): (typeof documents)["\n    mutation UpdateOpening($data: OpeningInput!, $openingId: String!) {\n        updateOpening(data: $data, openingId: $openingId)\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GetOpeningById($id: ObjectID) {\n        opening(id: $id) {\n            name\n            endClient\n            suggestedRate {\n                rate\n                otRate\n            }\n        }\n    }\n"): (typeof documents)["\n    query GetOpeningById($id: ObjectID) {\n        opening(id: $id) {\n            name\n            endClient\n            suggestedRate {\n                rate\n                otRate\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query QueryVendorById($id: ObjectID) {\n        vendor(id: $id) {\n            name\n            vendorId\n            client {\n                id\n                companyName\n            }\n            einNumber\n            paymentTerms\n            addressLine1\n            addressLine2\n            addressLine3\n            authSignName\n            authSignEmail\n            authSignDesig\n            bank{\n                bankName\n                accountName\n                accountNumber\n                routingNumber\n                addressLine1\n                addressLine2\n                addressLine3\n            }\n\n            openings {\n                id\n                name\n                endClient\n                suggestedRate {\n                    otRate\n                    rate\n                }\n                joinings {\n                    id\n                    candidate {\n                        id\n                        name\n                    }\n                    candidateRate {\n                        rate\n                    }\n                    paymentTerms\n                    actualStartDate\n                    joiningDate\n                }\n            }\n        }\n    }\n"): (typeof documents)["\n    query QueryVendorById($id: ObjectID) {\n        vendor(id: $id) {\n            name\n            vendorId\n            client {\n                id\n                companyName\n            }\n            einNumber\n            paymentTerms\n            addressLine1\n            addressLine2\n            addressLine3\n            authSignName\n            authSignEmail\n            authSignDesig\n            bank{\n                bankName\n                accountName\n                accountNumber\n                routingNumber\n                addressLine1\n                addressLine2\n                addressLine3\n            }\n\n            openings {\n                id\n                name\n                endClient\n                suggestedRate {\n                    otRate\n                    rate\n                }\n                joinings {\n                    id\n                    candidate {\n                        id\n                        name\n                    }\n                    candidateRate {\n                        rate\n                    }\n                    paymentTerms\n                    actualStartDate\n                    joiningDate\n                }\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query QueryVendor($pageNum: Int, $pageSize: Int) {\n        vendors(pageNum: $pageNum, pageSize: $pageSize) {\n            results {\n                id\n                name\n                authSignName\n                paymentTerms\n                client {\n                    companyName\n                }\n            }\n            total\n        }\n    }\n"): (typeof documents)["\n    query QueryVendor($pageNum: Int, $pageSize: Int) {\n        vendors(pageNum: $pageNum, pageSize: $pageSize) {\n            results {\n                id\n                name\n                authSignName\n                paymentTerms\n                client {\n                    companyName\n                }\n            }\n            total\n        }\n    }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;