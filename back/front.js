function enviar(){
    let p1=document.getElementById("p1").value;
    fetchData("funciones",(data)=>{
        data[1].funcion=p1;
        
        //for(let i=1;i<data.lenght;i++){
        //    data[i].funcion=document.getElementById(`${data.nombre}`).value
        //};
        postData("corregir",data,(respuesta)=>{console.log(respuesta)});
    });
    
};
document.getElementById("apply").addEventListener("click",enviar);