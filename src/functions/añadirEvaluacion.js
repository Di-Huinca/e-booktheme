import { db } from "../firebase/firebase";
import { collection, doc, setDoc } from "firebase/firestore";

async function añadirEvaluacion (infoEvaluacion) {
    const collectionRef = collection(db, 'evaluaciones');
    const docRef = doc(collectionRef, infoEvaluacion.uuid);
    setDoc(docRef, infoEvaluacion);

    // await setDoc(doc(db, 'evaluaciones'), infoEvaluacion)

}

export default añadirEvaluacion;