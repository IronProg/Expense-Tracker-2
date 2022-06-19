import React, { useState } from 'react';

import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import Card from "../UI/Card";
import './Expenses.css';

const Expenses = (props) => {
    const [filter, setFilter] = useState('2019');

    const filteredExpenses = props.expensesList.filter(item => {
        return item.date.getFullYear().toString() === filter;
    })

    const changeFilter = (event) => {
        setFilter(event.target.value);
    }



    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter currentYear={filter} onChangeFilter={changeFilter} />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    )
}


export default Expenses;