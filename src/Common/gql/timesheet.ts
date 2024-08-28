import {gql} from "@apollo/client";

export const GENERATE_TIMESHEET = gql`
    mutation GENERATE_TIMESHEET($id: ID){
        generateTimesheet(id: $id)
    }
`