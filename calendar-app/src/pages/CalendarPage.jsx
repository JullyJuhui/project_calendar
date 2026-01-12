import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!

export default function Calendar() {
    return (
        <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        weekends={true}
        events={[
            { title: "event 1", date: "2026-01-12" },
            { title: "event 2", date: "2026-01-15" },
        ]}
        />
    );
}
