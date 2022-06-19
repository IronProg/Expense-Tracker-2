import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    const expenseDate = props.expenseData.date;
    const expenseAmount = parseFloat(props.expenseData.amount).toFixed(2);

    return (
        <li>
            <Card className='expense-item'>
                <ExpenseDate date={expenseDate} />
                <div className='expense-item__description'>
                    <h2>{props.expenseData.title}</h2>
                    <div className='expense-item__price'>${expenseAmount}</div>
                </div>
            </Card>
        </li>
    )
}

export default ExpenseItem;