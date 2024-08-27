import { SerialPort } from 'serialport';
const puerto=new SerialPort({path:'COM4'},{baudRate:9600});
//import { exec } from 'child_process';
// exec( `C:/Users/49194525/Documents/GitHub/Proyecto-soporte/nircmd/nircmd.exe mutesysvolume 1`);


let sensores=['a1','p1','p2','p3','b1','b2','b3']
//crear funciones con las funcionalidades como por ejemplo lo de cambiar el output, volumen, intensidad de
//la luz, etc
function CategorizadorS(r){
    for(let i=0;i<sensores.length;i++){
    if(r.includes(sensores[i])){
    let num=r.replace(`${sensores[i]}`,"").replace("\n","");
    let Fc=0//aca necesito tomar el valor asignado al sensor en la pagina web
    console.log(num)
    }}
};


puerto.on('data',function(data){
    var enc = new TextDecoder();
    var arr = new Uint8Array(data);
    ready=enc.decode(arr);
    console.log(ready)
    CategorizadorS(ready);
});