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
    "\n    query QueryCompany($pageNum: Int, $pageSize: Int) {\n        companies(pageNum: $pageNum, pageSize: $pageSize) {\n            results {\n                id\n                companyName\n                ownerName\n                addressLine1\n                bank {\n                    bankName\n                }\n\n            }\n            total\n        }\n    }\n": types.QueryCompanyDocument,
    "\n    query LoginQuery($username: String!, $password: String!) {\n        login(username: $username, password: $password) {\n            tokens {\n                accessToken\n            }\n            role\n        }\n    }\n": types.LoginQueryDocument,
    "\n    mutation UpdateTimeSheet($data: TimeSheetInput) {\n        updateTimeSheet(data: $data)\n    }\n": types.UpdateTimeSheetDocument,
    "\n    query QueryTimeSheet($month: String, $joining: ID) {\n        getTimeSheet(month: $month, joining: $joining) {\n            id\n            timeSheet {\n                date\n                standardHours\n                OTHours\n            }\n            submissionDate\n            approvalDate\n            status\n        }\n    }\n": types.QueryTimeSheetDocument,
    "\n    mutation CreateUser($data: UserInput!) {\n        addUser(data: $data)\n    }\n": types.CreateUserDocument,
    "\n    mutation UpdateUser($username: String!, $password: String, $role: String!) {\n        updateUser(username: $username,password: $password, role: $role)\n    }\n": types.UpdateUserDocument,
    "\n    query QueryUser($pageNum: Int, $pageSize: Int) {\n        users(pageNum: $pageNum, pageSize: $pageSize) {\n            results {\n                username\n                createdAt\n                role\n            }\n            total\n        }\n    }\n": types.QueryUserDocument,
    "\n    mutation DeleteUser($username: String!) {\n        deleteUser(username: $username)\n    }\n": types.DeleteUserDocument,
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
export function graphql(source: "\n    query QueryTimeSheet($month: String, $joining: ID) {\n        getTimeSheet(month: $month, joining: $joining) {\n            id\n            timeSheet {\n                date\n                standardHours\n                OTHours\n            }\n            submissionDate\n            approvalDate\n            status\n        }\n    }\n"): (typeof documents)["\n    query QueryTimeSheet($month: String, $joining: ID) {\n        getTimeSheet(month: $month, joining: $joining) {\n            id\n            timeSheet {\n                date\n                standardHours\n                OTHours\n            }\n            submissionDate\n            approvalDate\n            status\n        }\n    }\n"];
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

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;