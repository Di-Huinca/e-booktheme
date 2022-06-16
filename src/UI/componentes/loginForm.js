import React from "react";
import { TextInput, Button, View } from "react";

export default function LoginForm(){
    return(
        <View>
            <h1>¡Comencemos!</h1>
            <h2>Use su DNI para ingresar</h2>
            <TextInput placeholder="Email" />
            <TextInput placeholder="Contraseña" />
            <Button title="Enviar" onPress={() => console.log("Enviado")} />
        </View>
        );

}