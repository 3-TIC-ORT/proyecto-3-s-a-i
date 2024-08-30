import { SerialPort } from 'serialport';
import { fileURLToPath } from 'node:url';
import { dirname,join } from 'node:path';
import { exec } from 'child_process';
import  fs  from 'fs';

const puerto=new SerialPort({path:'COM4',baudRate:9600});
const __dirname = dirname(fileURLToPath(import.meta.url));
const nirpath = join(__dirname,"/nircmd/nircmd.exe");

let funciones={
    mute:mute,
    setdevice:setdevice,
    setvolume:setvolume,
    setbrightnes:setbrightnes
};
function mute(numP){
    if(numP===1){
    let comand = nirpath+" mutesysvolume 2";
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
    let valorcomand=Number(math.round((numP/maxpot)*maxvolumen));
    let comand = nirpath+" setsysvolume "+valorcomand;
    exec(comand);
    setvolumestate=numP;
    };
};
let setbrightnesstate=0;
function setbrightnes(numP){
    if(setbrightnesstate!=numP){
    let valorcomand=Number(math.round((numP/maxpot)*100));
    let comand=nirpath+" setbrigtnes "+valorcomand;
    exec(comand);
    setbrightnesstate=numP;
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
                funciones[`${Fc[I].funcion}`](num);
                };
            };
        };
    };
};


puerto.on('data',function(data){
    let texto=Buffer.from(data, 'hex').toString('utf-8');
    CategorizadorS(texto);
});