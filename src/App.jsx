import React, { useState, useEffect } from "react";
import "./styles.css";

//import { InputTodo } from "./components/InputTodo";
import { IncmpTodo } from "./components/IncmpTodo";
import { CmpTodo } from "./components/CmpTodo";
import { Progress } from "./components/Progress";
import { Calender } from "./components/Calender";
import { Header } from "./components/PageArea/Header";

export const App = (props) => {
  const [Val, setVal] = useState(0.0);
  const [change, setchange] = useState(false);
  const [myEvents, setMyEvents] = useState([]);
  const [allCount, setAllCount] = useState(0);
  const [cmpCount, setCmpCount] = useState(0);

  const theme = "ゼミをもっと管理しやすくするためのアプリ制作とその研究";

  useEffect(() => {
    setVal(allCount === 0 ? 0 : keisan());
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allCount]);

  const keisan = () => {
    const V = (100 * cmpCount) / allCount;
    return V.toFixed(0);
  };

  const ChangeDisplay = () => {
    console.log(change);
    setchange(!change);
  };

  const handleDateClick = (info) => {
    let title = prompt("add events");
    if (title) {
      setMyEvents([
        ...myEvents,
        {
          id: "",
          title: title,
          start: info.startStr,
          end: info.endStr
        }
      ]);
    } else {
    }
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
      <Header />

      <Progress Value={Val} ChangeClick={ChangeDisplay} yourTheme={theme} />

      <IncmpTodo flag={change} />

      <CmpTodo flag={change} />

      <button onClick={testConsole}>Console</button>

      <Calender
        myEvents={myEvents}
        handleDateClick={handleDateClick}
        eventDataClick={eventDataClick}
      />
    </>
  );
};
