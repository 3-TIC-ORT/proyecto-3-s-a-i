import { SerialPort,ReadlineParser } from 'serialport';
import { fileURLToPath } from 'node:url'; 
import { dirname,join } from 'node:path';
import { exec } from 'child_process'; 
import  fs  from 'fs';
import {startServer,onEvent} from 'soquetic';

const puerto=new SerialPort({path:'COM11',baudRate:9600});
const parser = puerto.pipe(new ReadlineParser());
const __dirname = dirname(fileURLToPath(import.meta.url));
const nirpath = join(__dirname,"/nircmd/nircmd.exe");

let funciones={
    mute:mute,
    mutemic:mutemic,
    muteapp:muteapp,
    setdevice:setdevice,
    setvolume:setvolume,
    setappvolume:setappvolume,
    setbrightnes:setbrightnes,
    takescreenshot:takescreenshot,
    zoom:zoom
};
function mute(numP){
    if(numP===1){
    let comand = nirpath+" mutesysvolume 2";
    exec(comand);
    };
};
function muteapp(numP,app){
    if(numP===1){
    let comand = nirpath+" muteappvolume "+app+" 2";
    exec(comand);
    };
};
function mutemic(numP){
    if(numP===1){
    let comand = nirpath+" mutesysvolume 2 microphone";
    exec(comand);
    };
};
let setdevicestate=0;
function setdevice(numP){
    if(setdevicestate!=numP){
        if(numP===1){
        let comand = nirpath+" setdefaultsounddevice Altavoces";
        exec(comand);
        } else if(numP===0){
        let comand = nirpath+" setdefaultsounddevice Auriculares";
        exec(comand);
        };
        setdevicestate=numP;
    };
};
let maxvolumen=65535;
let maxpot=1023;
function setvolume(numP){
    let valorcomand=Number((numP*maxvolumen)/maxpot);
    let comand = nirpath+" setsysvolume "+valorcomand;
    exec(comand);
};
function setbrightnes(numP){
    let valorcomand=Number(Math.round((numP/maxpot)*100));
    let comand=nirpath+" setbrightness "+valorcomand;
    exec(comand);
};

function setappvolume(numP,app){
    let valorcomand=Number((numP/maxpot)*1);
    let comand = nirpath+" setappvolume "+app+" "+valorcomand;
    exec(comand);
};
function takescreenshot(numP){
    if(numP===1){
        let comand= nirpath+" sendkeypress lwin+shift+s";
        exec(comand); 
    };
};
let zoomstate=0;
function zoom(numP){
    if(Math.round(zoomstate/100)<Math.round(numP/100)){
        let comand= nirpath+" sendkeypress ctrl+plus";
        exec(comand);
    };
    if(Math.round(zoomstate/100)>Math.round(numP/100)){
        let comand= nirpath+" sendkeypress ctrl+minus";
        exec(comand);
    };
    zoomstate=numP;
};
function CategorizadorS(txt){
    let sensores=['a1','p1','p2','p3','b1','b2','b3'];
    for(let i=0;i<sensores.length;i++){
        if(txt.includes(sensores[i])){
            let sensor=sensores[i];
            let num=Number(txt.replace(`${sensor}`,"").replace("\n",""));
            let Fc=JSON.parse(fs.readFileSync('data.json','utf-8'));
            for(let I=0;I<Fc.length;I++){
                if(Fc[I].nombre===sensor){
                    if(Fc[I].funcion==="setappvolume"||Fc[I].funcion==="muteapp"){
                        funciones[`${Fc[I].funcion}`](num,`${Fc[I].appdata}`);
                    }else{
                        funciones[`${Fc[I].funcion}`](num);
                    };
                };
            };
        };
    };
};


parser.on('data',(data)=>{
    let txt=data.toString();
    CategorizadorS(txt);
});
onEvent("funciones",()=>{
    let sensores=JSON.parse(fs.readFileSync("data.json","utf-8"));
    return sensores;
});
onEvent("corregir",(correccion)=>{
    fs.writeFileSync("data.json",JSON.stringify(correccion,null,2));
    return  "correción hecha";
});
onEvent("led",(ledata)=>{
    let red =parseInt(ledata.slice(1, 3),16);
    let green=parseInt(ledata.slice(3, 5),16);
    let blue=parseInt(ledata.slice(5, 7),16);
    puerto.write(`${red},${green},${blue}\n`);
});
startServer(3000); 