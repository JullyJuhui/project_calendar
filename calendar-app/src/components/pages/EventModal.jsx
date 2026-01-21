import React from 'react'
import { Button, Col, Form, Modal, Row } from "react-bootstrap";

function DateModal(props){
    return (
        <div>
            {/* ----------------------- 이벤트 등록 Modal ----------------------- */}
            <Modal show={props.show} onHide={props.onClose}>
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
                                <Form.Control  type="text" placeholder="title" 
                                onChange={(e)=>props.onTitleChange(e.target.value)}
                                />
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
                                    value={props.startDate}
                                    onChange={(e) => props.onStartDateChange(e.target.value)}
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
                                    value={props.endDate}
                                    onChange={(e) => props.onEndDateChange(e.target.value)}
                                />
                            </Form.Group>
                            </Col>
                        </Row>
                        
                        {/* category */}
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>카테고리</Form.Label>
                            <Form.Select aria-label="Default select example" 
                            onChange={(e)=>props.onCategoryChange(e.target.value)} >
                                <option value="business" style={{ color: "#3b82f6" }}>업무</option>
                                <option value="meeting" style={{ color: "#31c731ff" }}>회의</option>
                                <option value="personal" style={{ color: "#f7b018ff" }}>개인</option>
                            </Form.Select>
                        </Form.Group>

                        {/* memo */}
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>메모</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="memo" onChange={(e)=>props.onMemoChange(e.target.value)} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.onClose}>
                        CLOSE
                    </Button>
                    <Button variant="primary" onClick={props.onSave}>
                        SAVE
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

function EventModal(props){
    return (
        <div>
            {/* ----------------------- 이벤트 등록 Modal ----------------------- */}
            <Modal show={props.show} onHide={props.onClose}>
                <Modal.Header closeButton>
                    <Modal.Title>이벤트 상세</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                        <Form>
                        {/* 제목 */}
                        <Row className="mb-3">
                            <Form.Label column lg={2}>
                                제목
                            </Form.Label>
                            <Col>
                                <Form.Control  type="text" placeholder="title" 
                                value={props.title}
                                onChange={(e)=>props.onTitleChange(e.target.value)}
                                />
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
                                    value={props.startDate}
                                    onChange={(e) => props.onStartDateChange(e.target.value)}
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
                                    value={props.endDate}
                                    onChange={(e) => props.onEndDateChange(e.target.value)}
                                />
                            </Form.Group>
                            </Col>
                        </Row>
                        
                        {/* category */}
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>카테고리</Form.Label>
                            <Form.Select aria-label="Default select example" 
                                value={props.category} onChange={(e)=>props.onCategoryChange(e.target.value)} >
                                <option value="business" style={{ color: "#3b82f6" }}>업무</option>
                                <option value="meeting" style={{ color: "#31c731ff" }}>회의</option>
                                <option value="personal" style={{ color: "#f7b018ff" }}>개인</option>
                            </Form.Select>
                        </Form.Group>

                        {/* memo */}
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>메모</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="memo" 
                            value={props.memo} onChange={(e)=>props.onMemoChange(e.target.value)} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.onClose}>
                        CLOSE
                    </Button>
                    <Button variant="primary" onClick={props.onSave}>
                        SAVE
                    </Button>
                    <Button variant="danger" onClick={props.onSave}>
                        DELETE
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default DateModal
export {EventModal}
