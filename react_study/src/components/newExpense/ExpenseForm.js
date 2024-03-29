// 사용자 비용을 받는 form component
import { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  /*const [test, setTest] = useState(true);*/
  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };
  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };
  /*const funcTest = (test) => {};*/
  const submitHandler = (e) => {
    e.preventDefault(); // page reload X
    const expenseData = {
      title: enteredTitle,
      date: new Date(enteredDate),
      amount: enteredAmount,
    };
    props.onSaveExpenseData(expenseData); // NewExpense에서 받는 매개변수
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
    <div className="form">
      <form onSubmit={submitHandler}>
        <label>
          <span>Title</span>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={enteredTitle}
          />
        </label>
        <label>
          <span>Amount</span>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={enteredAmount}
          />
        </label>
        <label>
          <span>Date</span>
          <input
            type="date"
            min="2019-01-01"
            onChange={dateChangeHandler}
            value={enteredDate}
          />
        </label>
        <div className="btn-wrap">
          <button type="button" onClick={props.editCloseForm}>
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
