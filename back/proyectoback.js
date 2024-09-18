import { SerialPort } from 'serialport';
import { fileURLToPath } from 'node:url'; 
import { dirname,join } from 'node:path';
import { exec } from 'child_process'; 
import  fs  from 'fs';
import {startServer,onEvent} from 'soquetic'

//const puerto=new SerialPort({path:'COM5',baudRate:9600});
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
let setvolumestate=0;
function setvolume(numP){
    if(setvolumestate!=numP){
    let valorcomand=Number(Math.round((numP/maxpot)*maxvolumen));
    let comand = nirpath+" setsysvolume "+valorcomand;
    exec(comand);
    setvolumestate=numP;
    };
};
let setbrightnesstate=0;
function setbrightnes(numP){
    if(setbrightnesstate!=numP){
    let valorcomand=Number(Math.round((numP/maxpot)*100));
    let comand=nirpath+" setbrigtness "+valorcomand;
    exec(comand);
    setbrightnesstate=numP;
    };
};
let setappvolumestate=0;
function setappvolume(numP,app){
    if(setappvolumestate!=numP){
    let valorcomand=Number(Math.round((numP/maxpot)*maxvolumen));
    let comand = nirpath+" setappvolume "+app+" "+valorcomand;
    exec(comand);
    setvolumestate=numP;
    };
};
function takescreenshot(numP){
    if(numP===1){
        let comand= nirpath+" sendkeypress lwin+shift+s";
        exec(comand); 
    };
};
let zoomstate=0;
function zoom(numP){
    if(Math.round(zoomstate/100)!=Math.round(numP/100)){
        if(Math.round(zoomstate/100)<Math.round(numP/100)){
            let comand= nirpath+"sendkeypress ctrl+plus";
            exec(comand);
            zoomstate=numP;
        };
        if(Math.round(zoomstate/100)>Math.round(numP/100)){
            let comand= nirpath+"sendkeypress ctrl+minus";
            exec(comand);
            zoomstate=numP;
        };
    };
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
                    if(Fc[I].nombre.includes("app")){
                        funciones[`${Fc[I].funcion}`](num,`${Fc[I].appdata}`);
                    }else{
                        funciones[`${Fc[I].funcion}`](num);
                    };
                };
            };
        };
    };
};


/*puerto.on('data',(data)=>{
    let texto=Buffer.from(data, 'hex').toString('utf-8');
    CategorizadorS(texto);
});*/
onEvent("funciones",()=>{
    let sensores=JSON.parse(fs.readFileSync("data.json","utf-8"));
    return sensores;
});
onEvent("corregir",(correccion)=>{
    fs.writeFileSync("data.json",JSON.stringify(correccion,null,2));
    return  "correción hecha";
});
startServer(3000); 