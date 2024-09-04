import squetic from "soquetic";
let data=[{
    nombre:"a1",
    funcion:"setdevice",
    appdata:"null"
},{
    nombre:"p1",
    funcion:document.getElementById("p1").value,
    appdata:"null"
},{
    nombre:"p2",
    funcion:"setappvolume",
    appdata:"Spotify.exe"
},{
    nombre:"p3",
    funcion:"setbrightnes",
    appdata:"null"
},{
    nombre:"b1",
    funcion:"mute",
    appdata:"null"
},{
    nombre:"b2",
    funcion:"mutemic",
    appdata:"null"
},{
    nombre:"b3",
    funcion:"muteapp",
    appdata:"Spotify.exe"
}]
function enviar(){
    squetic.postData("funciones",data);
};
document.getElementById("apply").addEventListener("click",enviar);