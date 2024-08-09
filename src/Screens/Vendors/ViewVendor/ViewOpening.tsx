import React from 'react';
import {Descriptions} from "antd";
import AddCandidate from "./AddCandidate";
import ViewCandidates from "./ViewCandidates";

const ViewOpening = (props: { opening: any, companyId: string, vendorId: string, refetch: any }) => {
    return (
        <>
            <div className={'flex'}>
                <Descriptions
                    className={'flex-1'}
                    items={[
                        {label: 'Rate', children: props.opening['suggestedRate']['rate'] + " $ / Hr"},
                        {label: 'OT Rate', children: props.opening['suggestedRate']['otRate'] + " $ / Hr"}
                    ]}
                />
                <AddCandidate companyId={props.companyId} vendorId={props.vendorId} openingId={props.opening.id} refetch={props.refetch}/>
            </div>
            <ViewCandidates data={props.opening.candidates}/>
        </>
    );
};

export default ViewOpening;