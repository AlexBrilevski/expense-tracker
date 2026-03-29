import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

const Expenses = ({ items }) => {
  const [selectedYear, setSelectedYear] = useState('2020');

  const filteredItems = items.filter(item => {
    return item.date.getFullYear().toString() === selectedYear;
  });

  const onSelectYear = (year) => {
    setSelectedYear(year);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter selected={selectedYear} onFilter={onSelectYear} />
      {filteredItems.map(item => (
        <ExpenseItem key={item.id} {...item} />
      ))}
    </Card>
  );
}

export default Expenses;
