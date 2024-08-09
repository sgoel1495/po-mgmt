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
    "\n    query QueryCandidateById($id: ObjectID) {\n        candidate(id: $id) {\n            name\n            personalEmail\n            addressLine1\n            addressLine2\n            addressLine3\n            contact\n            officialEmail\n            manager\n            empId\n            joiningDate\n            actualStartDate\n            vendorRate{\n                rate\n                otRate\n            }\n            candidateRate{\n                rate\n                otRate\n            }\n            paymentTerms\n            companyName\n            vendorSpoc{\n                name\n                email\n                phone\n            }\n            vendorAcctSpoc{\n                name\n                email\n                phone\n            }\n            bank{\n                accountNumber\n                accountName\n                routingNumber\n                bankName\n            }\n            company {\n                id\n                companyName\n            }\n            vendor {\n                id\n                name\n            }\n            projectName\n            projectLocation\n            timesheetApprover{\n                name\n                email\n            }\n        }\n    }\n": types.QueryCandidateByIdDocument,
    "\n    query QueryCandidate($pageNum: Int, $pageSize: Int) {\n        candidates(pageNum: $pageNum, pageSize: $pageSize) {\n            results {\n                id\n                name\n                joiningDate\n                paymentTerms\n                actualStartDate\n                contact\n                manager\n                company{\n                    companyName\n                },\n                vendor{\n                    name\n                }\n            }\n            total\n        }\n    }\n": types.QueryCandidateDocument,
    "\n    mutation CreateCompany($data: CompanyInput!) {\n        addCompany(data: $data)\n    }\n": types.CreateCompanyDocument,
    "\n    query QueryCompanyById($id: ObjectID) {\n        company(id: $id) {\n            companyName\n            logo\n            signingAuthName\n            signingAuthEmail\n            signingAuthDesignation\n            addressLine1\n            addressLine2\n            addressLine3\n        }\n    }\n": types.QueryCompanyByIdDocument,
    "\n    query QueryCompany($pageNum: Int, $pageSize: Int) {\n        companies(pageNum: $pageNum, pageSize: $pageSize) {\n            results {\n                id\n                companyName\n                signingAuthName\n                signingAuthEmail\n                signingAuthDesignation\n                addressLine1\n            }\n            total\n        }\n    }\n": types.QueryCompanyDocument,
    "\n    query LoginQuery($username: String!, $password: String!) {\n        login(username: $username, password: $password) {\n            tokens {\n                accessToken\n            }\n            role\n        }\n    }\n": types.LoginQueryDocument,
    "\n    mutation UpdateTimeSheet($data: TimeSheetInput) {\n        updateTimeSheet(data: $data)\n    }\n": types.UpdateTimeSheetDocument,
    "\n    query QueryBasicCandidateById($id: ObjectID) {\n        candidate(id: $id) {\n            name\n            empId\n            actualStartDate\n            company {\n                id\n                companyName\n            }\n            vendor {\n                id\n                name\n            },\n            projectName\n            projectLocation\n            timesheetApprover {\n                name\n                email\n            }\n            candidateRate {\n                otRate\n                rate\n            }\n        }\n    }\n": types.QueryBasicCandidateByIdDocument,
    "\n    query QueryTimeSheet($month: Int, $candidate: ID) {\n        getTimeSheet(month: $month, candidate: $candidate) {\n            id\n            timeSheet {\n                date\n                standardHours\n                OTHours\n            }\n            submissionDate\n            approvalDate\n            status\n        }\n    }\n": types.QueryTimeSheetDocument,
    "\n    mutation CreateUser($data: UserInput!) {\n        addUser(data: $data)\n    }\n": types.CreateUserDocument,
    "\n    mutation UpdateUser($username: String!, $password: String, $role: String!) {\n        updateUser(username: $username,password: $password, role: $role)\n    }\n": types.UpdateUserDocument,
    "\n    query QueryUser($pageNum: Int, $pageSize: Int) {\n        users(pageNum: $pageNum, pageSize: $pageSize) {\n            results {\n                username\n                createdAt\n                role\n            }\n            total\n        }\n    }\n": types.QueryUserDocument,
    "\n    mutation DeleteUser($username: String!) {\n        deleteUser(username: $username)\n    }\n": types.DeleteUserDocument,
    "\n    mutation CreateVendor($data: VendorInput!) {\n        addVendor(data: $data)\n    }\n": types.CreateVendorDocument,
    "\n    query SearchCompany($data: String) {\n        searchCompany(name: $data){\n            id\n            companyName\n        }\n    }\n": types.SearchCompanyDocument,
    "\n    mutation AddCandidate($data: CandidateInput!, $openingId: String) {\n        addCandidate(data: $data, openingId: $openingId)\n    }\n": types.AddCandidateDocument,
    "\n    mutation AddOpening($data: OpeningInput!, $vendorId: String!) {\n        addOpening(data: $data, vendorId: $vendorId)\n    }\n": types.AddOpeningDocument,
    "\n    query QueryVendorById($id: ObjectID) {\n        vendor(id: $id) {\n            name\n            vendorId\n            addressLine1\n            addressLine2\n            addressLine3\n            einNumber\n            authSignName\n            authSignEmail\n            authSignDesig\n            paymentTerms\n            bank{\n                bankName\n                accountName\n                accountNumber\n            }\n            company {\n                id\n                companyName\n            }\n            openings {\n                id\n                name\n                endClient\n                suggestedRate {\n                    otRate\n                    rate\n                }\n                candidates {\n                    id\n                    name\n                    joiningDate\n                    paymentTerms\n                    actualStartDate\n                    contact\n                    manager\n                }\n            }\n        }\n    }\n": types.QueryVendorByIdDocument,
    "\n    query QueryVendor($pageNum: Int, $pageSize: Int) {\n        vendors(pageNum: $pageNum, pageSize: $pageSize) {\n            results {\n                id\n                name\n                authSignName\n                paymentTerms\n                company {\n                    companyName\n                }\n            }\n            total\n        }\n    }\n": types.QueryVendorDocument,
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
export function graphql(source: "\n    query QueryCandidateById($id: ObjectID) {\n        candidate(id: $id) {\n            name\n            personalEmail\n            addressLine1\n            addressLine2\n            addressLine3\n            contact\n            officialEmail\n            manager\n            empId\n            joiningDate\n            actualStartDate\n            vendorRate{\n                rate\n                otRate\n            }\n            candidateRate{\n                rate\n                otRate\n            }\n            paymentTerms\n            companyName\n            vendorSpoc{\n                name\n                email\n                phone\n            }\n            vendorAcctSpoc{\n                name\n                email\n                phone\n            }\n            bank{\n                accountNumber\n                accountName\n                routingNumber\n                bankName\n            }\n            company {\n                id\n                companyName\n            }\n            vendor {\n                id\n                name\n            }\n            projectName\n            projectLocation\n            timesheetApprover{\n                name\n                email\n            }\n        }\n    }\n"): (typeof documents)["\n    query QueryCandidateById($id: ObjectID) {\n        candidate(id: $id) {\n            name\n            personalEmail\n            addressLine1\n            addressLine2\n            addressLine3\n            contact\n            officialEmail\n            manager\n            empId\n            joiningDate\n            actualStartDate\n            vendorRate{\n                rate\n                otRate\n            }\n            candidateRate{\n                rate\n                otRate\n            }\n            paymentTerms\n            companyName\n            vendorSpoc{\n                name\n                email\n                phone\n            }\n            vendorAcctSpoc{\n                name\n                email\n                phone\n            }\n            bank{\n                accountNumber\n                accountName\n                routingNumber\n                bankName\n            }\n            company {\n                id\n                companyName\n            }\n            vendor {\n                id\n                name\n            }\n            projectName\n            projectLocation\n            timesheetApprover{\n                name\n                email\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query QueryCandidate($pageNum: Int, $pageSize: Int) {\n        candidates(pageNum: $pageNum, pageSize: $pageSize) {\n            results {\n                id\n                name\n                joiningDate\n                paymentTerms\n                actualStartDate\n                contact\n                manager\n                company{\n                    companyName\n                },\n                vendor{\n                    name\n                }\n            }\n            total\n        }\n    }\n"): (typeof documents)["\n    query QueryCandidate($pageNum: Int, $pageSize: Int) {\n        candidates(pageNum: $pageNum, pageSize: $pageSize) {\n            results {\n                id\n                name\n                joiningDate\n                paymentTerms\n                actualStartDate\n                contact\n                manager\n                company{\n                    companyName\n                },\n                vendor{\n                    name\n                }\n            }\n            total\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation CreateCompany($data: CompanyInput!) {\n        addCompany(data: $data)\n    }\n"): (typeof documents)["\n    mutation CreateCompany($data: CompanyInput!) {\n        addCompany(data: $data)\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query QueryCompanyById($id: ObjectID) {\n        company(id: $id) {\n            companyName\n            logo\n            signingAuthName\n            signingAuthEmail\n            signingAuthDesignation\n            addressLine1\n            addressLine2\n            addressLine3\n        }\n    }\n"): (typeof documents)["\n    query QueryCompanyById($id: ObjectID) {\n        company(id: $id) {\n            companyName\n            logo\n            signingAuthName\n            signingAuthEmail\n            signingAuthDesignation\n            addressLine1\n            addressLine2\n            addressLine3\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query QueryCompany($pageNum: Int, $pageSize: Int) {\n        companies(pageNum: $pageNum, pageSize: $pageSize) {\n            results {\n                id\n                companyName\n                signingAuthName\n                signingAuthEmail\n                signingAuthDesignation\n                addressLine1\n            }\n            total\n        }\n    }\n"): (typeof documents)["\n    query QueryCompany($pageNum: Int, $pageSize: Int) {\n        companies(pageNum: $pageNum, pageSize: $pageSize) {\n            results {\n                id\n                companyName\n                signingAuthName\n                signingAuthEmail\n                signingAuthDesignation\n                addressLine1\n            }\n            total\n        }\n    }\n"];
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
export function graphql(source: "\n    query QueryBasicCandidateById($id: ObjectID) {\n        candidate(id: $id) {\n            name\n            empId\n            actualStartDate\n            company {\n                id\n                companyName\n            }\n            vendor {\n                id\n                name\n            },\n            projectName\n            projectLocation\n            timesheetApprover {\n                name\n                email\n            }\n            candidateRate {\n                otRate\n                rate\n            }\n        }\n    }\n"): (typeof documents)["\n    query QueryBasicCandidateById($id: ObjectID) {\n        candidate(id: $id) {\n            name\n            empId\n            actualStartDate\n            company {\n                id\n                companyName\n            }\n            vendor {\n                id\n                name\n            },\n            projectName\n            projectLocation\n            timesheetApprover {\n                name\n                email\n            }\n            candidateRate {\n                otRate\n                rate\n            }\n        }\n    }\n"];
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
export function graphql(source: "\n    query SearchCompany($data: String) {\n        searchCompany(name: $data){\n            id\n            companyName\n        }\n    }\n"): (typeof documents)["\n    query SearchCompany($data: String) {\n        searchCompany(name: $data){\n            id\n            companyName\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation AddCandidate($data: CandidateInput!, $openingId: String) {\n        addCandidate(data: $data, openingId: $openingId)\n    }\n"): (typeof documents)["\n    mutation AddCandidate($data: CandidateInput!, $openingId: String) {\n        addCandidate(data: $data, openingId: $openingId)\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation AddOpening($data: OpeningInput!, $vendorId: String!) {\n        addOpening(data: $data, vendorId: $vendorId)\n    }\n"): (typeof documents)["\n    mutation AddOpening($data: OpeningInput!, $vendorId: String!) {\n        addOpening(data: $data, vendorId: $vendorId)\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query QueryVendorById($id: ObjectID) {\n        vendor(id: $id) {\n            name\n            vendorId\n            addressLine1\n            addressLine2\n            addressLine3\n            einNumber\n            authSignName\n            authSignEmail\n            authSignDesig\n            paymentTerms\n            bank{\n                bankName\n                accountName\n                accountNumber\n            }\n            company {\n                id\n                companyName\n            }\n            openings {\n                id\n                name\n                endClient\n                suggestedRate {\n                    otRate\n                    rate\n                }\n                candidates {\n                    id\n                    name\n                    joiningDate\n                    paymentTerms\n                    actualStartDate\n                    contact\n                    manager\n                }\n            }\n        }\n    }\n"): (typeof documents)["\n    query QueryVendorById($id: ObjectID) {\n        vendor(id: $id) {\n            name\n            vendorId\n            addressLine1\n            addressLine2\n            addressLine3\n            einNumber\n            authSignName\n            authSignEmail\n            authSignDesig\n            paymentTerms\n            bank{\n                bankName\n                accountName\n                accountNumber\n            }\n            company {\n                id\n                companyName\n            }\n            openings {\n                id\n                name\n                endClient\n                suggestedRate {\n                    otRate\n                    rate\n                }\n                candidates {\n                    id\n                    name\n                    joiningDate\n                    paymentTerms\n                    actualStartDate\n                    contact\n                    manager\n                }\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query QueryVendor($pageNum: Int, $pageSize: Int) {\n        vendors(pageNum: $pageNum, pageSize: $pageSize) {\n            results {\n                id\n                name\n                authSignName\n                paymentTerms\n                company {\n                    companyName\n                }\n            }\n            total\n        }\n    }\n"): (typeof documents)["\n    query QueryVendor($pageNum: Int, $pageSize: Int) {\n        vendors(pageNum: $pageNum, pageSize: $pageSize) {\n            results {\n                id\n                name\n                authSignName\n                paymentTerms\n                company {\n                    companyName\n                }\n            }\n            total\n        }\n    }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;