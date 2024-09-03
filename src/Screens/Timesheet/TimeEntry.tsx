import React from 'react';
import dayjs from "dayjs";
import {InputNumber} from "antd";
import isBetween from 'dayjs/plugin/isBetween'

dayjs.extend(isBetween);
type timeEntryState = {
    [x: string]: {
        ot?: number;
        st?: number;
    }
}

const TimeEntry = (props: {
    startDate: dayjs.Dayjs,
    endDate: dayjs.Dayjs,
    timeEntry: timeEntryState,
    setTimeEntry: React.Dispatch<React.SetStateAction<timeEntryState>>
}) => {

    const validDuration = props.endDate.diff(props.startDate, 'day');
    const invalidDuration = 6 - validDuration
    const dateContainer = 'border grid place-items-center py-4';
    const timeText = 'text-lg font-semibold'
    const timeInput = `w-full ${dateContainer} center-input rounded-none border-[#e5e7eb]`
    const timeEntryKeys = Object.keys(props.timeEntry).filter((date) => dayjs(date).isBetween(props.startDate, props.endDate, 'date', '[]'))
    const stTotal = timeEntryKeys.reduce((acc, curr) => {
        let st = 0;
        if (props.timeEntry[curr].st) { // @ts-ignore
            st = props.timeEntry[curr].st
        }
        return acc + st
    }, 0)
    const otTotal = timeEntryKeys.reduce((acc, curr) => {
        let st = 0;
        if (props.timeEntry[curr].ot) { // @ts-ignore
            st = props.timeEntry[curr].ot
        }
        return acc + st
    }, 0)

    const getTotal = (date: dayjs.Dayjs) => {
        let value = 0
        const time = props.timeEntry[date.format('YYYY-MM-DD')];
        if (time) {
            if (time.st)
                value += time.st
            if (time.ot)
                value += time.ot
        }
        return value.toFixed(1)
    }
    return (
        <div>
            <div className={'grid grid-cols-9'}>
                <div/>
                {
                    props.startDate.date() === 1 && new Array(invalidDuration).fill(0).map((_, i) => (
                        <div key={i} className={dateContainer}>
                            <span>{props.startDate.subtract(invalidDuration - i, 'day').format('ddd, DD')}</span>
                            <span
                                className={timeText}>{getTotal(props.startDate.subtract(invalidDuration - i, 'day'))}</span>
                        </div>
                    ))
                }
                {
                    new Array(validDuration + 1).fill(0).map((_, i) => (
                        <div key={i} className={dateContainer}>
                            <span>{props.startDate.add(i, 'day').format('ddd, DD')}</span>
                            <span className={timeText}>{getTotal(props.startDate.add(i, 'day'))}</span>
                        </div>
                    ))
                }
                {
                    props.startDate.date() !== 1 && new Array(invalidDuration).fill(0).map((_, i) => (
                        <div key={i} className={dateContainer}>
                            <span>{props.endDate.add(i + 1, 'day').format('ddd, DD')}</span>
                            <span className={timeText}>{getTotal(props.endDate.add(i + 1, 'day'))}</span>
                        </div>
                    ))
                }
                <div className={`${dateContainer} bg-slate-100`}>
                    <span>Weekly</span>
                    <span className={timeText}>{(otTotal + stTotal).toFixed(1)}</span>
                </div>
            </div>
            <div className={'grid grid-cols-9'}>
                <div className={'flex items-center border px-4'}>
                    Standard Time
                </div>
                {
                    new Array(7).fill(0).map((_, i) => {
                        let disabled = false, key = '', date = props.startDate
                        if (props.startDate.date() === 1) {
                            disabled = i < invalidDuration
                            date = props.startDate.add(i - invalidDuration, 'day')
                        } else {
                            disabled = i > 6 - invalidDuration
                            date = props.endDate.subtract(6 - i - invalidDuration, 'day')
                        }
                        key = date.format('YYYY-MM-DD')
                        if (!disabled) {
                            disabled = [0, 6].includes(date.day())
                        }
                        return <InputNumber
                            max={20}
                            key={key}
                            min={0}
                            precision={1}
                            controls={false}
                            className={timeInput}
                            placeholder={'-'}
                            disabled={disabled}
                            value={props.timeEntry[key]?.st}
                            onChange={(value) => {
                                if (value !== null) {
                                    if (value > 8)
                                        props.setTimeEntry({
                                            ...props.timeEntry,
                                            [key]: {
                                                ...props.timeEntry[key],
                                                st: 8,
                                                ot: value - 8
                                            }
                                        })
                                    else
                                        props.setTimeEntry({
                                            ...props.timeEntry,
                                            [key]: {
                                                ...props.timeEntry[key],
                                                st: value
                                            }
                                        })
                                }
                            }}
                        />
                    })
                }
                <div className={`${dateContainer} bg-slate-100`}>
                    <span className={`${timeText} text-base`}>{stTotal.toFixed(1)}</span>
                </div>
            </div>
            <div className={'grid grid-cols-9'}>
                <div className={'flex items-center border px-4'}>
                    Over Time
                </div>
                {
                    new Array(7).fill(0).map((_, i) => {
                        let disabled = false, key = ''
                        if (props.startDate.date() === 1) {
                            disabled = i < invalidDuration
                            key = props.startDate.add(i - invalidDuration, 'day').format('YYYY-MM-DD')
                        } else {
                            disabled = i > 6 - invalidDuration
                            key = props.endDate.subtract(6 - i - invalidDuration, 'day').format('YYYY-MM-DD')
                        }

                        return <InputNumber
                            max={12}
                            key={key}
                            min={0}
                            precision={1}
                            controls={false}
                            className={timeInput}
                            placeholder={'-'}
                            disabled={disabled}
                            value={props.timeEntry[key]?.ot}
                            onChange={(value) => {
                                if (value !== null)
                                    props.setTimeEntry({
                                        ...props.timeEntry,
                                        [key]: {
                                            ...props.timeEntry[key],
                                            ot: value
                                        }
                                    })
                            }}
                        />
                    })
                }
                <div className={`${dateContainer} bg-slate-100`}>
                    <span className={`${timeText} text-base`}>{otTotal.toFixed(1)}</span>
                </div>
            </div>
        </div>
    );
};

export default TimeEntry;