import { db } from "../firebase/firebase";
import { collection, deleteDoc, doc } from "firebase/firestore";

export default async function eliminarEvaluacion(evaluacion) {
    const collectionRef = collection(db ,'evaluaciones');
    const docuRef = doc(collectionRef, evaluacion.uuid);
    const eliminado = await deleteDoc(docuRef);
    
    return eliminado;
}