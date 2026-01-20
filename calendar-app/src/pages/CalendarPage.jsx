import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick
import { useState } from "react";
import DateModal, { EventModal } from "./EventModal";

export default function Calendar() {
    const [events, setEvents] = useState([{
                    id: Date(), // 반드시 유니크
                    title: "휴가",
                    start: "2026-01-13T09:00",
                    end: "2026-01-14T18:00",
                    memo: "대만",
                    color: "#f7b018ff" // 선택
                },
                {
                    id: Date(), // 반드시 유니크
                    title: "회의",
                    start: "2026-01-19T13:00",
                    end: "2026-01-19T14:00",
                    memo: "줌 링크...",
                    color: "#31c731ff" // 선택
                }])
    //클릭한 날짜 담기
    const[startDate, setStartDate] = useState("")
    const[endDate, setEndDate] = useState("")
    //모달 관련 상태
    const [show, setShow] = useState(false)
    const [modalType, setModalType] = useState(null) //date, event
    //저장정보
    const [title, setTitle] = useState(null)
    const [category, setCategory] = useState(null) //business, meeting, personal/ 업무, 회의, 개인
    const [memo, setMemo] = useState("")

    const handleClose = () => {
        if(!title){
            alert("제목을 입력하세요.")
            return
        }
        if(startDate > endDate){
            alert("시작날짜는 종료날짜보다 빨라야합니다.")
            return
        }

        setShow(false)
    }

    const onDateClick = (info) => {
        setModalType("date")
        setStartDate(info.dateStr+"T09:00")
        setEndDate(info.dateStr+"T10:00")
        setShow(true)
    }
    const onEventClick = (info) => {
        setModalType("event")
        setStartDate(info.dateStr+"T09:00")
        setEndDate(info.dateStr+"T10:00")
        setShow(true)
    }
    const onSave = () => {
        //이벤트 추가
        setEvents(prevEvents => [...prevEvents, {
            id: Date(),
            title: title,
            start: startDate,
            end: endDate,
            memo: memo,
            color: "#3b82f6"
        }])
        
        //초기화
        setTitle("")

        handleClose()
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
            events={events}
            dateClick={onDateClick}
            eventClick={onEventClick}
            selectable={true} //드래그 선택 가능
            />
            {/* ----------------------------- Modal ----------------------------- */}
            {modalType === "date" &&
            <DateModal show={show}
                onClose={handleClose} onSave={onSave}
                startDate={startDate} endDate={endDate} 
                onStartDateChange={setStartDate} onEndDateChange={setEndDate}
                onTitleChange={setTitle}
            />
            }
            {modalType === "event" &&
            <EventModal show={show}
                onClose={handleClose} onSave={onSave}
                startDate={startDate} endDate={endDate} 
                onStartDateChange={setStartDate} onEndDateChange={setEndDate}
                title={title} onTitleChange={setTitle}
            />
            }
        </>
    );
}
