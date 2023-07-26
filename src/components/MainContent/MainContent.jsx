import { useState } from "react";
import "./MainContent.css";
import MainData from "./MainData/MainData";
import MainInput from "./MainInput/MainInput";

function MainContent() {
  function id() {
    return Math.floor(Math.random() * 500) + Math.floor(Math.random() * 231);
  }

  function validateValue(value) {
    let str = ``;
    let arr = value.split("");
    let counter = 0;

    for (let i = 0; i < arr.length; i++) {
      if (counter === 61) {
        str += "\n";
        counter = 0;
      } else {
        counter += 1;
        str += arr[i];
      }
    }
    return str;
  }

  let initialData = [
    {
      text: `Купить масло`,
      isEdit: false,
      isDone: false,
      isCancelled: false,
      id: id(),
    },
  ];

  let [inputValue, setInputValue] = useState("");
  let [data, setData] = useState(initialData);

  function addInputValue(e) {
    if (e.key === "Enter") {
      let obj = {
        text: validateValue(inputValue),
        isEdit: false,
        isDone: false,
        isCancelled: false,
        id: id(),
      };

      let arrCopy = [...data, obj];

      setData(arrCopy);
      setInputValue("");
    }
  }

  function editHandler(id, e) {
    let copyArr = [...data];

    copyArr.map((el) => {
      if (el.id === id) {
        el.isEdit = !el.isEdit;
      }
    });

    setData(copyArr);
  }

  function changeHandler(id, e) {
    let copyArr = [...data];

    copyArr.map((el) => {
      if (el.id === id) {
        if (el.isEdit) {
          el.text = e.target.value;
        }
      }
    });

    setData(copyArr);
  }

  function cancelHandler(id) {
    let copyArr = [...data];
    let result = [];
    copyArr.map((el, index) => {
      if (el.id === id) {
        result.push(...copyArr.splice(0, index), ...copyArr.splice(index + 1));
      }
    });

    setData(result);
  }

  function doneHandler(id) {
    let copyArr = [...data];

    copyArr.map((el) => {
      if (el.id === id) {
        el.isDone = !el.isDone;
      }
    });

    setData(copyArr);
  }

  return (
    <main className='main'>
      <div className='main__content'>
        <MainInput
          value={inputValue}
          setInputValue={setInputValue}
          addInpuValue={addInputValue}
        />
        <MainData
          data={data}
          editHandler={editHandler}
          cancelHandler={cancelHandler}
          doneHandler={doneHandler}
          changeHandler={changeHandler}
        />
      </div>
    </main>
  );
}

export default MainContent;
