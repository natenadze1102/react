import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) => {
  let expensesContent = <h2>No Expenses Found</h2>;
  if (props.items.length) {
    expensesContent = props.items.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }
  return (
    <ul className="expenses-list">
      <li className="expenses-list__fallback">{expensesContent}</li>
    </ul>
  );
};

export default ExpensesList;
