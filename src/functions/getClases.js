import {db} from "../firebase/firebase";
import {collection, getDocs } from "firebase/firestore";

export default async function getClases(){
    const clases = [];
    const collectionRef = collection(db, "clases");
    const snapshot = await getDocs(collectionRef);
    snapshot.forEach((doc) => {
        clases.push(doc.data())
    });
    return clases;
}