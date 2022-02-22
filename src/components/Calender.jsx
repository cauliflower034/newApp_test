import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interPlugin from "@fullcalendar/interaction";

export const Calender = (props) => {
  const { myEvents, handleDateClick, eventDataClick } = props;
  return (
    <div>
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
  );
};
