import React from 'react';
import {Descriptions} from "antd";
import AddJoining from "../Joining/AddJoining";
import ViewJoinings from "../Joining/ViewJoinings";
import EditOpening from "./EditOpening";

const ViewOpening = (props: { opening: any, clientId: string, vendorId: string, refetch: any }) => {
    return (
        <>
            <div className={'flex'}>
                <Descriptions
                    className={'flex-1'}
                    items={[
                        {label: 'End Client', children: props.opening['endClient']},
                        {label: 'Rate', children: props.opening['suggestedRate']['rate'] + " $ / Hr"},
                        {label: 'OT Rate', children: props.opening['suggestedRate']['otRate'] + " $ / Hr"}
                    ]}
                />
                <AddJoining clientId={props.clientId} vendorId={props.vendorId} openingId={props.opening.id}
                            refetch={props.refetch}/>
                <EditOpening refetch={props.refetch} openingId={props.opening.id}/>
            </div>
            <ViewJoinings data={props.opening.joinings} refetch={props.refetch}/>
        </>
    );
};

export default ViewOpening;