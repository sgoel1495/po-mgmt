import React from 'react';
import {Button, Dropdown} from "antd";

const PdfActions = () => {
    const items = {
        timeSheet: {
            items: [
                {
                    key:'1',
                    label:<Button type={'link'}>Download</Button>
                },
                {
                    key:'2',
                    label:<Button type={'link'}>Generate New</Button>
                }
            ]
        },
        invoice: {
            items: [
                {
                    key:'1',
                    label:<Button type={'link'}>Download</Button>
                },
                {
                    key:'2',
                    label:<Button type={'link'}>Generate New</Button>
                }
            ]
        }
    }
    return (
        <div className={'gap-5 flex'}>
            <Dropdown menu={items.timeSheet} placement="bottomLeft">
                <Button type={'primary'}>TimeSheet PDF</Button>
            </Dropdown>
            <Dropdown menu={items.invoice} placement="bottomLeft">
                <Button type={'primary'}>Invoice PDF</Button>
            </Dropdown>
        </div>
    );
};

export default PdfActions;