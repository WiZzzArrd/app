import MainDataItem from "../MainDataItem/MainDataItem";

function MainData({
  data,
  editHandler,
  cancelHandler,
  doneHandler,
  changeHandler,
}) {
  let arr = data.map((el) => {
    return (
      <MainDataItem
        text={el.text}
        id={el.id}
        key={el.id}
        isEdit={el.isEdit}
        isDone={el.isDone}
        isCancelled={el.isCancelled}
        editHandler={editHandler}
        cancelHandler={cancelHandler}
        doneHandler={doneHandler}
        changeHandler={changeHandler}
      />
    );
  });

  return <div className='main__content--data'>{arr}</div>;
}

export default MainData;
