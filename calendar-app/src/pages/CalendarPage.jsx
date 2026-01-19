import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick
import { useState } from "react";
import DateModal, { EventModal } from "./EventModal";

export default function Calendar() {
    //클릭한 날짜 담기
    const[startDate, setStartDate] = useState(null)
    const[endDate, setEndDate] = useState(null)
    //모달 관련 상태
    const [show, setShow] = useState(false)
    const handleClose = () => {
        if(startDate <= endDate){
            setShow(false)
        }else{
            alert("시작날짜는 종료날짜보다 빨라야합니다.")
        }
    }

    const onDateClick = (info) => {
        setStartDate(info.dateStr+"T09:00")
        setEndDate(info.dateStr+"T10:00")
        setShow(true)
    }
    const onEventClick = (info) => {
        setStartDate(info.dateStr+"T09:00")
        setEndDate(info.dateStr+"T10:00")
        setShow(true)
    }

    

    return (
        <>
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
                    start: "2026-01-13T09:00",
                    end: "2026-01-14T18:00",
                    memo: "줌 링크...",
                    color: "#3a7e29ff" // 선택
                },
                {
                    id: "uuid-문자열", // 반드시 유니크
                    title: "회의",
                    start: "2026-01-19T13:00",
                    end: "2026-01-19T14:00",
                    memo: "줌 링크...",
                    color: "#3b82f6" // 선택
                },
            ]}
            dateClick={onDateClick}
            eventClick={onEventClick}
            selectable={true} //드래그 선택 가능
            />
            <DateModal show={show}
                onClose={handleClose} onSave={handleClose}
                startDate={startDate} endDate={endDate} 
                onStartDateChange={setStartDate} onEndDateChange={setEndDate}
            />
            <EventModal show={show}
                onClose={handleClose} onSave={handleClose}
                startDate={startDate} endDate={endDate} 
                onStartDateChange={setStartDate} onEndDateChange={setEndDate}
            />
        </>
    );
}
