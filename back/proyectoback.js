import { SerialPort } from 'serialport';
import { fileURLToPath } from 'node:url';
import { dirname,join } from 'node:path';
import { exec } from 'child_process';
import  fs  from 'fs'

const puerto=new SerialPort({path:'COM4',baudRate:9600});
const __dirname = dirname(fileURLToPath(import.meta.url));
const nirpath = join(__dirname,"/nircmd/nircmd.exe");

function mute(numP){
    let comand = nirpath+" mutesysvolume "+numP;
    exec(comand);
}
function setdevice(numP){
    if(numP===1){
        let comand = nirpath+" setdefaultsounddevice Altavoces";
        exec(comand)
    } else if(numP===0){
        let comand = nirpath+" setdefaultsounddevice Auriculares";
        exec(comand)
    }
}

//crear funciones con las funcionalidades como por ejemplo lo de cambiar el output, volumen, intensidad de
//la luz, etc.
//para resolver el tema de los decivelios en el volumen se me ocurre hacer una lista con los decivelios
//que representan los numeros del 0 al 100
function CategorizadorS(txt){
let sensores=['a1','p1','p2','p3','b1','b2','b3'];
    for(let i=0;i<sensores.length;i++){
        if(txt.includes(sensores[i])){
        let sensor=sensores[i]
        let num=Number(txt.replace(`${sensor}`,"").replace("\n",""));
        let Fc=JSON.parse(fs.readFileSync('data.json','utf-8'));
            for(let I=0;I<Fc.length;I++){
                if(Fc[I].nombre===sensor){
                Fc[I].function
            };
        };
    };
};


puerto.on('data',function(data){
    let texto=Buffer.from(data, 'hex').toString('utf-8');
    CategorizadorS(texto);
});