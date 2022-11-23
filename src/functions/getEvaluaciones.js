import {db} from "../firebase/firebase";
import {collection, getDocs } from "firebase/firestore";

export default async function getEvaluaciones(){
    const evaluaciones = [];
    const collectionRef = collection(db, "evaluaciones");
    const snapshot = await getDocs(collectionRef);
    snapshot.forEach((doc) => {
        evaluaciones.push(doc.data())
    });
    return evaluaciones;
}