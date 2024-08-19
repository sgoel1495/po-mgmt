import React from 'react';
import {Form, Select} from "antd";
import {gql, useLazyQuery} from "@apollo/client";
import {useDebounceValue} from "usehooks-ts";

const SEARCH_COMPANY = gql`
    query SearchCompany($name: String!) {
        searchCompany(name: $name){
            id
            companyName
        }
    }
`

const CompanyField = (props: { defaultValue?: any }) => {
    const [searchCompany, {loading, data}] = useLazyQuery(SEARCH_COMPANY);
    const [name, setName] = useDebounceValue('', 2000)

    React.useEffect(() => {
        if (name.length >= 3)
            searchCompany({
                variables: {name: name}
            })
    }, [name, searchCompany])

    const defaultOptions = React.useMemo(() => {
        if (props.defaultValue)
            return [
                {
                    key: props.defaultValue.id,
                    value: props.defaultValue.id,
                    label: props.defaultValue.companyName,
                    title: props.defaultValue.companyName
                }
            ]
        return []
    }, [props.defaultValue])

    const options = React.useMemo(() => {
        return data?.searchCompany?.map((item: any) => ({
            key: item.id,
            value: item.id,
            label: item.companyName,
            title: item.companyName
        })) || []
    }, [data?.searchCompany])

    return (
        <Form.Item label={'Company'} name={'company'} required rules={[{required: true}]}>
            <Select
                showSearch
                filterOption={false}
                placeholder={"Search Company Name"}
                onSearch={setName}
                options={options.length ? options : defaultOptions}
                loading={loading}
            />
        </Form.Item>
    );
};

export default CompanyField;