import { db } from "../firebase/firebase";
import { collection, doc, setDoc } from "firebase/firestore";

async function añadirClase (infoClase) {
    const collectionRef = collection(db, 'clases');
    const docRef = doc(collectionRef, infoClase.uuid);
    setDoc(docRef, infoClase);

}

export default añadirClase;