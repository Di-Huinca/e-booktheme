import React from "react";
import { TextInput, Button, View } from "react";

export default function LoginForm(){
    return(
        <View>
            <TextInput placeholder="Email" />
            <TextInput placeholder="Contraseña" />
            <Button title="Enviar" onPress={() => console.log("Enviado")} />
        </View>
        );

}