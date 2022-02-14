import React, { useState, useEffect } from "react";
import "./styles.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interPlugin from "@fullcalendar/interaction";

//import { InputTodo } from "./components/InputTodo";
import { IncmpTodo } from "./components/IncmpTodo";
import { CmpTodo } from "./components/CmpTodo";
import { Progress } from "./components/Progress";

export const App = (props) => {
  const [TodoText, setTodoText] = useState("");
  const [incmp, setincmp] = useState([]);
  const [cmp, setcmp] = useState([]);
  const [Val, setVal] = useState(0.0);
  const [change, setchange] = useState(false);
  const [myEvents, setMyEvents] = useState([]);

  const theme = "ゼミをもっと管理しやすくするためのアプリ制作とその研究";

  //const onChangeTodoText = (event) => setTodoText(event.target.value);

  const progress_set = () => {
    let allcnt = 0;
    let cmpcnt = 0;
    useEffect(() => {
      incmp.map(() => allcnt++);
      cmp.map(() => allcnt++);
      cmp.map(() => cmpcnt++);
      setVal(allcnt === 0 ? 0 : keisan());
      //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [incmp]);

    const keisan = () => {
      const V = (100 * cmpcnt) / allcnt;
      return V.toFixed(0);
    };
  };

  const ChangeDisplay = () => {
    setchange(!change);
  };

  // const allDelete = () => {
  //   // const pop = prompt("何を消す?", "here");
  //   // console.log(pop);
  //   // const allTodods = [...incmp,...cmp];
  //   // console.log(allTodods);
  //   setincmp([]);
  //   setcmp([]);
  // };

  // const onClickAdd = () => {
  //   if (TodoText === "") return;
  //   const newTodos = [...incmp, TodoText];
  //   setincmp(newTodos);
  //   setTodoText("");
  // };

  const onClickdel = (index) => {
    const newTodos = [...incmp];
    newTodos.splice(index, 1);
    setincmp(newTodos);
  };

  const onClickCmp = (index) => {
    const newincmpTodos = [...incmp];
    newincmpTodos.splice(index, 1);
    setincmp(newincmpTodos);

    const newcmpTodos = [...cmp, incmp[index]];
    setcmp(newcmpTodos);
  };

  const onClickBack = (index) => {
    const newcmpTodos = [...cmp];
    newcmpTodos.splice(index, 1);

    const newincmpTodos = [...incmp, cmp[index]];
    setcmp(newcmpTodos);
    setincmp(newincmpTodos);
  };

  const handleDateClick = (info) => {
    let title = prompt("add events");
    setMyEvents([
      ...myEvents,
      {
        id: "",
        title: title,
        start: info.startStr,
        end: info.endStr
      }
    ]);
  };

  const eventDataClick = (info) => {
    //console.log(info.event.id);
    const eventData = [...myEvents];
    eventData.splice(info.event.id, 1);
    setMyEvents(eventData);
    info.event.remove();
  };

  const testConsole = () => {
    console.log(myEvents);
  };

  useEffect(() => {
    //eslint-disable-next-line
    myEvents.map((data, index) => {
      data.id = index;
    });
  }, [myEvents]);

  return (
    <>
      {/* <InputTodo
        todoText={TodoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        delclick={allDelete}
        setVal={progress_set}
      /> */}

      <Progress
        Setpro={progress_set}
        Value={Val}
        ChangeClick={ChangeDisplay}
        yourTheme={theme}
      />

      <IncmpTodo
        incmp={incmp}
        onCmp={onClickCmp}
        onDel={onClickdel}
        flag={change}
      />

      <CmpTodo cmp={cmp} onBack={onClickBack} flag={change} />

      <button onClick={testConsole}>Console</button>

      <div id="Calendar">
        <FullCalendar
          plugins={[dayGridPlugin, interPlugin]}
          initialView="dayGridMonth"
          locale="ja"
          selectable="true"
          events={myEvents}
          select={handleDateClick} //props.selectDateByDragAndDrop}
          eventClick={eventDataClick}
          //dateClick={handleDateClick}
          //events={myEvents} //カレンダーで表示するイベント
        />
      </div>
    </>
  );
};
