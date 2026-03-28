import React from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

const Expenses = ({items}) => {
  return (
    <Card className="expenses">
      <ExpensesFilter />
      {items.map(item => (
        <ExpenseItem key={item.id} {...item} />
      ))}
    </Card>
  );
}

export default Expenses;
