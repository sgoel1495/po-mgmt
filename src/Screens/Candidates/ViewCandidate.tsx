import React from 'react';
import {useQuery} from "@apollo/client";
import {useParams} from "react-router-dom";
import {Card, Descriptions, Tabs} from "antd";
import {GET_CANDIDATE_JOINING} from "@common/gql/joining";
import JoiningDetails from "./JoiningDetails";

const ViewCandidate = () => {
    const params = useParams()

    const {loading, data: allData} = useQuery(GET_CANDIDATE_JOINING, {
        variables: {candidateId: params.id},
    });

    const data = allData?.joiningByCandidate;

    const items = React.useMemo(() => {
        if (data?.candidate)
            return {
                personal: [
                    {
                        key: 'name',
                        label: 'Name',
                        children: data.candidate['name']
                    },

                    {
                        key: 'personalEmail',
                        label: 'Personal Email',
                        children: data.candidate['personalEmail']
                    },
                    {
                        key: 'profile',
                        label: 'Profile',
                        children: data.candidate['profile']
                    },
                    {
                        key: 'contact',
                        label: 'Phone Number',
                        children: data.candidate['contact']
                    },
                    {
                        key: 'timezone',
                        label: 'Timezone',
                        children: data.candidate['timezone']
                    },
                    {
                        key: 'address',
                        label: 'Address',
                        children: <>
                            {data.candidate['addressLine1']},&nbsp;
                            {data.candidate['addressLine2']},&nbsp;
                            {data.candidate['addressLine3']}
                        </>
                    },

                ],
            }
        else
            return {}
    }, [data?.candidate])

    const tabs = data?.joinings.map((item: any, index: number) => {
        return {
            key: index.toString(),
            label: item.joining.client.companyName,
            children: <JoiningDetails joining={item.joining} opening={item.opening}/>,
        }
    })

    if (loading)
        return <></>
    return (
        <div>
            <div className={'flex justify-between items-center'}>
                <span className={'text-2xl font-semibold'}>Candidate Info</span>
            </div>
            <div className={'flex gap-5 my-5'}>
                <Card title="Personal Info" type={'inner'}>
                    <Descriptions items={items.personal} layout={'vertical'} column={4}/>
                </Card>
            </div>
            <Tabs
                defaultActiveKey="1"
                items={tabs}
                type="card"
            />
        </div>
    );
};

export default ViewCandidate;