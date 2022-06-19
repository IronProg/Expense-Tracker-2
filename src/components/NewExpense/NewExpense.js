import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

const NewExpense = (props) => {
    const [form, setForm] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    }

    const toggleFormHandler = () => {
        if (form === false) {
            setForm(true);
        } else {
            setForm(false);
        }
    }

    return (
        <div className="new-expense">
            {form === true && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onFormCancel={toggleFormHandler} />}
            {form === false && <button type='button' onClick={toggleFormHandler}>New Expense</button>}
        </div>
    )
}

export default NewExpense;