import React from 'react';
import dayjs from "dayjs";
import {LeftOutlined, RightOutlined} from "@ant-design/icons";
import {Button, Modal} from "antd";
import {TimeSheet} from "../../gql/graphql";

const MonthSelector = (props: {
    startDate: string,
    selected: dayjs.Dayjs,
    setSelected: React.Dispatch<React.SetStateAction<dayjs.Dayjs>>,
    timesheet: TimeSheet
}) => {
    const [isModalOpen, setIsModalOpen] = React.useState<dayjs.Dayjs | null>(null);
    const [startTime, setStartTime] = React.useState<dayjs.Dayjs>(dayjs().subtract(2, 'months'))
    const [months, setMonths] = React.useState([
        {
            date: dayjs().subtract(2, 'month'),
            month: dayjs().subtract(2, 'month').format("MMM"),
            year: dayjs().subtract(2, 'month').format("YY"),
        },
        {
            date: dayjs().subtract(1, 'month'),
            month: dayjs().subtract(1, 'month').format("MMM"),
            year: dayjs().subtract(1, 'month').format("YY"),
        },
        {
            date: dayjs(),
            month: dayjs().format("MMM"),
            year: dayjs().format("YY"),
        },
        {
            date: dayjs().add(1, 'month'),
            month: dayjs().add(1, 'month').format("MMM"),
            year: dayjs().add(1, 'month').format("YY"),
        },
        {
            date: dayjs().add(2, 'month'),
            month: dayjs().add(2, 'month').format("MMM"),
            year: dayjs().add(2, 'month').format("YY"),
        }
    ])
    React.useEffect(() => {
        const temp = [
            {
                date: startTime,
                month: startTime.format("MMM"),
                year: startTime.format("YY"),
            },
            {
                date: startTime.add(1, 'month'),
                month: startTime.add(1, 'month').format("MMM"),
                year: startTime.add(1, 'month').format("YY"),
            },
            {
                date: startTime.add(2, 'month'),
                month: startTime.add(2, 'month').format("MMM"),
                year: startTime.add(2, 'month').format("YY"),
            },
            {
                date: startTime.add(3, 'month'),
                month: startTime.add(3, 'month').format("MMM"),
                year: startTime.add(3, 'month').format("YY"),
            },
            {
                date: startTime.add(4, 'month'),
                month: startTime.add(4, 'month').format("MMM"),
                year: startTime.add(4, 'month').format("YY"),
            }
        ]
        setMonths(temp)
    }, [startTime])

    const onMonthChange = (activeKey: dayjs.Dayjs) => {
        if (activeKey.month() !== props.selected.month()) {
            setIsModalOpen(activeKey)
        } else {
            props.setSelected(activeKey)
        }
    }

    const handleCancel = () => {
        setIsModalOpen(null)
    }

    const handleOk = () => {
        if (isModalOpen) {
            props.setSelected(isModalOpen)
            setIsModalOpen(null)
        }

    }

    return (
        <div className={'flex'}>
            <Button className={'w-10 h-16 grid place-items-center rounded-r-none'}
                    onClick={() => setStartTime(startTime.subtract(1, 'month'))}>
                <LeftOutlined/>
            </Button>
            <div className={'flex-1 flex'}>
                {
                    months.map((month, i) => {
                        const selectedDate = props.selected.month() === month.date.month() && props.selected.year() === month.date.year()
                        return <div
                            className={'flex-1 grid place-items-center cursor-pointer border' + (selectedDate ? ' border-blue-400' : '')}
                            key={month.month}
                            onClick={() => onMonthChange(month.date)}
                        >
                            <span>{month.month} '{month.year}</span>
                        </div>
                    })
                }
            </div>
            <Button className={'w-10 h-16 grid place-items-center rounded-l-none'}
                    onClick={() => setStartTime(startTime.add(1, 'month'))}>
                <RightOutlined/>
            </Button>
            <Modal
                title="Change Month"
                open={!!isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <p>
                    Changing the month will delete all the changes in the timesheet.
                </p>
            </Modal>
        </div>
    );
};

export default MonthSelector;