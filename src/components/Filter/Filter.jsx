export const Filter = ({ onChange, value }) => {
  return (
    <label>
      Find contacts by name
      <input type="text" onChange={onChange} value={value}></input>
    </label>
  );
};
