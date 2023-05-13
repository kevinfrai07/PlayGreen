import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/firebase.config";

export const getHistory = async (uid:string) => {
    const citiesRef = collection(db, "historyLikes");
    const q = query(citiesRef, where("idUser", "==", uid));
    const querySnapshot = await getDocs(q);
    return querySnapshot
};




