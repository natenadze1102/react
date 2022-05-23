import { useState } from 'react';
// import Button from '../UI/Button';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  //
  const [btnIsClicked, setBtnIsClicked] = useState(false);
  let content;

  function handleClick() {
    setBtnIsClicked(true);
  }

  function handleBtnState(value) {
    console.log(`Value is ${value}`);
    setBtnIsClicked(value);
  }

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setBtnIsClicked(false);
  };
  // ...

  if (btnIsClicked) {
    content = (
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onChangeBtnState={handleBtnState}
      />
    );
  } else {
    content = <button onClick={handleClick}>Add Expense</button>;
  }
  // ...
  return (
    <div className="new-expense">
      {content}
      <h1>{btnIsClicked.toString()}</h1>
    </div>
  );
};

export default NewExpense;
