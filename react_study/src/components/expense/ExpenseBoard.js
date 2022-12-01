import "./ExpenseBoard.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../common/Card";
import ExpenseFilter from "../newExpense/ExpenseFilter";
import { useState } from "react";

const ExpenseBoard = (props) => {
  const [year, setYear] = useState("2022");
  const dateHandler = (selectedYear) => {
    setYear(selectedYear);
  };

  const tempList = props.data.filter((data) => {
    return data.date.getFullYear().toString() === year;
  });

  //nodata case 내 작업
  /*if (tempList.length === 0) {
    return <div className="nodata">nodata</div>;
  }*/

  return (
    <Card>
      <ExpenseFilter onDateHandler={dateHandler} selected={year} />
      {tempList.length === 0 ? (
        <p className="nodata">No data</p>
      ) : (
        tempList.map((data) => (
          <ExpenseItem
            key={data.id}
            title={data.title}
            amount={data.amount}
            date={data.date}
          />
        ))
      )}
    </Card>
  );
};

export default ExpenseBoard;

/*
* <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        * // 이렇게 한번에 적어 줄 수 도 있습니다.
        {props.items
          .filter(
            (expenseItem) =>
              expenseItem.date.getFullYear().toString() === filteredYear
          )
          .map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))}
      </Card>*/
