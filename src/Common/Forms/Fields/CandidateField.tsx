import React, {useMemo} from 'react';
import {Form, Select} from "antd";
import {gql, useLazyQuery} from "@apollo/client";
import {useDebounceValue} from "usehooks-ts";
import invariant from "ts-invariant";
import log = invariant.log;

const SEARCH_CANDIDATE = gql`
    query SearchCandidate($name: String!) {
        searchCandidate(name: $name){
            id
            name
        }
    }
`

const CandidateField = (props: { defaultValue?: any }) => {
    const [searchCandidate, {loading, data}] = useLazyQuery(SEARCH_CANDIDATE);
    const [name, setName] = useDebounceValue('', 2000)

    React.useEffect(() => {
        if (name.length >= 3)
            searchCandidate({
                variables: {name: name}
            })
    }, [name, searchCandidate])

    const defaultOptions = React.useMemo(() => {
        if (props.defaultValue)
            return [
                {
                    key: props.defaultValue.id,
                    value: props.defaultValue.id,
                    label: props.defaultValue.name,
                    title: props.defaultValue.name
                }
            ]
        return []
    }, [props.defaultValue])

    const options = React.useMemo(() => {
        return data?.searchCandidate?.map((item: any) => ({
            key: item.id,
            value: item.id,
            label: item.name,
            title: item.name
        })) || []
    }, [data?.searchCandidate])

    return (
        <Form.Item label={'Candidate'} name={'candidate'} required rules={[{required: true}]}>
            <Select
                showSearch
                filterOption={false}
                placeholder={"Search Candidate Name"}
                onSearch={setName}
                options={options.length ? options : defaultOptions}
                loading={loading}
            />
        </Form.Item>
    );
};

export default CandidateField;