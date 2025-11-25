import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";


export async function getItems(userId) {
  if (!userId) return [];
  const itemsRef = collection(db, "users", userId, "items");
  const q = query(itemsRef, orderBy("name"));
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
}

export async function addItem(userId, item) {
  if (!userId) throw new Error("addItem requires userId");
  const itemsRef = collection(db, "users", userId, "items");

  const toAdd = {
    ...item,
    createdAt: serverTimestamp(),
  };

  const docRef = await addDoc(itemsRef, toAdd);
  return docRef.id;
}
