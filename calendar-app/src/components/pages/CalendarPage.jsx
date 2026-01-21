import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick
import { useState } from "react";
import DateModal, { EventModal } from "./EventModal";

export default function Calendar() {
    const [events, setEvents] = useState([{
                    id: "1", // 반드시 유니크
                    title: "휴가",
                    start: "2026-01-13T09:00",
                    end: "2026-01-14T18:00",
                    memo: "대만",
                    category: "personal",
                    color: "#f7b018ff" // 선택
                },
                {
                    id: "2", // 반드시 유니크
                    title: "회의",
                    start: "2026-01-19T13:00",
                    end: "2026-01-19T14:00",
                    memo: "줌 링크...",
                    category: "meeting",
                    color: "#31c731ff" // 선택
                }])
    //클릭한 날짜 담기
    const[startDate, setStartDate] = useState("")
    const[endDate, setEndDate] = useState("")
    //모달 관련 상태
    const [show, setShow] = useState(false)
    const [modalType, setModalType] = useState(null) //date, event
    //저장정보
    const [eventId, setEventId] = useState(null)
    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("business") //business, meeting, personal/ 업무, 회의, 개인
    const [memo, setMemo] = useState("")
    const colorMap = {
            business: "#3b82f6",
            meeting: "#31c731ff",
            personal: "#f7b018ff"
        }

    const handleClose = () => {
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
        
        setEventId(info.event.id)
        const event = info.event
        console.log(event)

        setTitle(event.title)
        setStartDate(event.startStr)
        setEndDate(event.endStr)
        setMemo(event.extendedProps.memo)
        setCategory(event.extendedProps.category)

        setShow(true)
    }

    const onSave = () => {
        if(!title){
            alert("제목을 입력하세요.")
            return
        }
        if(startDate > endDate){
            alert("시작날짜는 종료날짜보다 빨라야합니다.")
            return
        }

        if(modalType === "date"){
            const newEvent = {
                id: Date(),
                title: title,
                start: startDate,
                end: endDate,
                memo: memo,
                category: category,
                color: colorMap[category]
            }
        
            //이벤트 추가
            setEvents(prevEvents => [...prevEvents, newEvent])
        }

        if(modalType === "event"){
            setEvents(prevEvents =>
                prevEvents.map(e => (
                e.id === eventId
                ? {
                    id: eventId,
                    title: title,
                    start: startDate,
                    end: endDate,
                    memo: memo,
                    category: category,
                    color: colorMap[category]
                }
                : e
                )))
        }
        
        //초기화
        setShow(false)
        setTitle("")
        setMemo("")
        setCategory("business")
        setEventId(null)
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
            <DateModal show={show} category={category} onCategoryChange={setCategory}
                onClose={handleClose} onSave={onSave}
                startDate={startDate} endDate={endDate} 
                onStartDateChange={setStartDate} onEndDateChange={setEndDate}
                onTitleChange={setTitle}
                memo={memo} onMemoChange={setMemo}
            />
            }
            {modalType === "event" &&
            <EventModal show={show} category={category} onCategoryChange={setCategory}
                onClose={handleClose} onSave={onSave}
                startDate={startDate} endDate={endDate} 
                onStartDateChange={setStartDate} onEndDateChange={setEndDate}
                title={title} onTitleChange={setTitle}
                memo={memo} onMemoChange={setMemo}
            />
            }
        </>
    );
}
