function MainInput({ value, setInputValue, addInpuValue }) {
  return (
    <input
      placeholder='Что необходимо сделать?'
      type='text'
      className='main__content--input'
      value={value}
      onChange={(e) => setInputValue(e.target.value)}
      onKeyDown={(e) => addInpuValue(e)}
    />
  );
}

export default MainInput;
