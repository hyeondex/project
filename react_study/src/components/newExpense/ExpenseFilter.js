import "./ExpenseFilter.css";

const ExpensesFilter = (props) => {
  const selectDate = (e) => {
    const selectedYear = e.target.value; // 선택된 연도 value
    props.onDateHandler(selectedYear);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={selectDate} value={props.selected}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
