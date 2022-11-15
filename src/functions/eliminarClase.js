import { db } from "../firebase/firebase";
import { collection, deleteDoc, doc } from "firebase/firestore";

export default async function eliminarClase(clase) {
    const collectionRef = collection(db ,'clases');
    const docuRef = doc(collectionRef, clase.uuid);
    const eliminado = await deleteDoc(docuRef);
    
    return eliminado;
}