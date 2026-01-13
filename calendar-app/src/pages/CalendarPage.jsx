import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick

export default function Calendar() {
    const onDateClick = (arg) => {
        alert(arg.dateStr)
    }
    const onEventClick = () => {
        alert()
    }

    return (
        <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
			left: "prev,next today",
			center: "title",
			right: "dayGridMonth,timeGridWeek,timeGridDay",
		}}
        weekends={true}
        events={[
            {
                id: "uuid-문자열", // 반드시 유니크
                title: "휴가",
                start: "2026-01-13T09:00:00",
                end: "2026-01-14T18:00:00",
                memo: "줌 링크...",
                color: "#3a7e29ff" // 선택
            },
            {
                id: "uuid-문자열", // 반드시 유니크
                title: "회의",
                start: "2026-01-19T13:00:00",
                end: "2026-01-19T14:00:00",
                memo: "줌 링크...",
                color: "#3b82f6" // 선택
            },
        ]}
        dateClick={onDateClick}
		eventClick={onEventClick}
		selectable={true} //드래그 선택 가능
        />
    );
}
