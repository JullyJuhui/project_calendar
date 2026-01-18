import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick
import { useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";

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
    const onEventClick = () => {
        alert()
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
            {/* ----------------------- 이벤트 등록 Modal ----------------------- */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>이벤트 등록</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                        <Form>
                        {/* 제목 */}
                        <Row className="mb-3">
                            <Form.Label column lg={2}>
                                제목
                            </Form.Label>
                            <Col>
                                <Form.Control  type="text" placeholder="title" />
                            </Col>
                        </Row>
                        
                        {/* 시작, 종료 날짜 */}
                        <Row className="mb-3">
                            <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>
                                    시작
                                </Form.Label>
                                <Form.Control
                                    type="datetime-local"
                                    value={startDate}
                                    onChange={(e) => setStartDate(e.target.value)}
                                />
                            </Form.Group>
                            </Col>
                            <Col md={6}>
                            <Form.Group>
                                <Form.Label>
                                    종료
                                </Form.Label>
                                <Form.Control
                                    type="datetime-local"
                                    value={endDate}
                                    onChange={(e) => setEndDate(e.target.value)}
                                />
                            </Form.Group>
                            </Col>
                        </Row>
                        
                        {/* category */}
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>카테고리</Form.Label>
                            <Form.Select aria-label="Default select example" >
                                <option>카테고리를 선택하세요</option>
                                <option value="1" style={{ color: "#3b82f6" }}>업무</option>
                                <option value="2" style={{ color: "#31c731ff" }}>회의</option>
                                <option value="3" style={{ color: "#f7b018ff" }}>개인</option>
                            </Form.Select>
                        </Form.Group>

                        {/* memo */}
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>메모</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="memo"/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
