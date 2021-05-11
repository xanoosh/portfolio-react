const Select = ({ title, valuesArr, onChange }) => {
  const options = valuesArr.map((el, i) => (
    <option value={el.value} key={i}>
      {el.title}
    </option>
  ));
  return (
    <div className="select">
      <label htmlFor={title}>{title.toUpperCase()}</label>
      <select onChange={() => onChange} name={title} id={title}>
        {options}
      </select>
    </div>
  );
};

export default Select;
