import TodoList from "./component/TodoList";
import Textfield from '@atlaskit/textfield';
import Button from '@atlaskit/button';
import { useCallback, useEffect, useState } from "react";
import { v4 } from 'uuid';

const TODO_APP_STORAGE_KEY = 'TODO_APP'

function App() {
  // state . props
  const [todoList, setTodoList] =  useState([]); //array useState lưu giá trị khởi tạo
  // todoList : biến lưu trữ 
  // method setTodoList thay đổi giá trị 
  const [textInput, settextInput] =  useState(""); // lưu text input
  
  useEffect(() => { // kiểm tra xem có data chưa nếu có thì set 
    
    const storagedTodoList = localStorage.getItem(TODO_APP_STORAGE_KEY)
    if (storagedTodoList !== '[]'){
      setTodoList(JSON.parse(storagedTodoList));
    }
  },[])

  useEffect(() => { // lưu data 
    localStorage.setItem(TODO_APP_STORAGE_KEY, JSON.stringify(todoList))
  },[todoList])

  const onTextInputChange = useCallback((e) => { //on change input
    settextInput(e.target.value);
  }, []);
  
  const onAddButtonClick = useCallback((e) => { // click button thêm
    // thêm text từ input vào danh sách 
    setTodoList([{id: v4() ,name: textInput, isCompleted: false},...todoList])

    settextInput("");
  },[textInput, todoList])

  const onCheckBtnClick = useCallback((id) => {
     //click check kiểm tra todo đó có tồn tại trong useState không-> có thì cập nhật isComplete thành true 
    setTodoList(prevState => prevState.map(todo => todo.id === id ? {...todo, isCompleted: true} : todo))
  }, [])
  return (
    <>
        <h3>Danh sách cần làm</h3>
        <Textfield name="add-todo" placeholder="Thêm việc cần làm..." elemAfterInput={
            <Button isDisabled={!textInput} appearance='primary' 
              onClick={onAddButtonClick}
            >
                Thêm
            </Button> 
            }
            css={{padding : "2px 4px 2px"}}
            value={textInput}
            onChange={onTextInputChange}
        ></Textfield>
        <TodoList todoList={todoList} onCheckBtnClick={onCheckBtnClick}/>
    </>
  );
}

export default App;
