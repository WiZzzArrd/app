function MainDataItem(props) {
  return (
    <div className='main__content--data-item'>
      <p className='text'>
        {props.isEdit ? (
          <input
            style={{ width: "200px", height: "40px" }}
            value={props.text}
            onChange={(e) => {
              props.changeHandler(props.id, e);
            }}
          />
        ) : (
          <span className={props.isDone ? "isDone" : "default"}>
            {props.text}
          </span>
        )}
      </p>
      <div className='btns'>
        <button
          className='btn edit'
          onClick={() => props.editHandler(props.id)}
        >
          {props.isEdit ? "Готово" : "Изменить"}
        </button>

        <button
          className='btn done'
          onClick={() => props.doneHandler(props.id)}
        >
          ✔
        </button>
        <button
          className='btn cancel'
          onClick={() => props.cancelHandler(props.id)}
        >
          ✕
        </button>
      </div>
    </div>
  );
}

export default MainDataItem;
