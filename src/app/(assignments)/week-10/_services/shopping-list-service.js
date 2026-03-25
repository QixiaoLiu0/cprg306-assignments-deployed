import { db } from "@/app/utils/firebase";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

export const getItems = async userId => {
  const items = [];

  const itemRef = collection(db, "users", userId, "items");

  const querySnap = await getDocs(itemRef);
  querySnap.forEach(doc => {
    //it adds an object to the items array containing the document ID and data
    items.push({
      ...doc.data(),
      id: doc.id,
    });
  });
  return items;
};

export const addItem = async (userId, item) => {
  const itemsRef = collection(db, "users", userId, "items");

  const docRef = await addDoc(itemsRef, item);

  return docRef.id;
};

export const deleteItem = async (userId, itemId) => {
  const docRef = doc(db, "users", userId, "items", itemId);
  await deleteDoc(docRef);
};
