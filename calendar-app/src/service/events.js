import { useEffect, useState } from "react";
import {
    getFirestore,
    collection,
    addDoc,
    doc,
    updateDoc,
    deleteDoc,
    onSnapshot,
    query,
    orderBy,
    serverTimestamp,
} from "firebase/firestore";
import app from "../../service/firebase";
const db = getFirestore(app);
const COLLECTION = "schedules"; // 🔥 localStorage KEY 대신 Firestore 컬렉션 이름
const [events, setEvents] = useState([]);

// ✅ 1) Firestore에서 불러오기(실시간 구독)
useEffect(() => {
    const q = query(collection(db, COLLECTION), orderBy("SCHEDULE_START", "asc"));
    const unsub = onSnapshot(q, (snap) => {
    const rows = snap.docs.map((d) => {
    const data = d.data();
    return {
    id: d.id, // Firestore 문서 id
    title: data.SCHEDULE_TITLE,
    start: data.SCHEDULE_START,
    end: data.SCHEDULE_END,
    category: data.SCHEDULE_STATUS,
    content: data.SCHEDULE_CONTENT,
    color: data.COLOR,
    };
    });
    setEvents(rows); // ✅ localStorage setEvents(JSON.parse(saved)) 역할
    });
 return () => unsub(); // ✅ 구독 해제
}, []);

// ✅ 2) Firestore에 저장(생성)
const createEvent = async (event) => {
 // localStorage의 setItem 역할이 아니라 "DB에 INSERT" 개념
    await addDoc(collection(db, COLLECTION), {
    SCHEDULE_TITLE: event.title,
    SCHEDULE_START: event.start, // ISO 문자열 추천
    SCHEDULE_END: event.end,
    SCHEDULE_STATUS: event.category || "",
    SCHEDULE_CONTENT: event.content || "",
    COLOR: event.color || "#2563eb",
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
    });
};

// ✅ 3) Firestore 수정(UPDATE)
const updateEvent = async (id, patch) => {
    await updateDoc(doc(db, COLLECTION, id), {
    ...(patch.title !== undefined && { SCHEDULE_TITLE: patch.title }),
    ...(patch.start !== undefined && { SCHEDULE_START: patch.start }),
    ...(patch.end !== undefined && { SCHEDULE_END: patch.end }),
    ...(patch.category !== undefined && { SCHEDULE_STATUS: patch.category }),
    ...(patch.content !== undefined && { SCHEDULE_CONTENT: patch.content }),
    ...(patch.color !== undefined && { COLOR: patch.color }),
    updatedAt: serverTimestamp(),
    });
};

// ✅ 4) Firestore 삭제(DELETE)
const deleteEventById = async (id) => {
    await deleteDoc(doc(db, COLLECTION, id));
};