let colorIndicator = document.getElementById('color-indicator');
const colorPicker = new iro.ColorPicker("#color-picker", {
    width: 180,
    color: "#fff"
});


colorPicker.on('color:change', function (color) {
    
    colorIndicator.style.backgroundColor = color.hexString;
    
    document.getElementById('input').value = color.hexString;
});

function changeColorInput() {
    let color = document.getElementById('input').value;
    colorIndicator.style.backgroundColor = `${color}`;
    colorPicker.color.hexString = color;
}

function mostrarMenu7() {
var menu1 = document.getElementById("Menu1").value;
var menu7 = document.getElementById("Menu7");

if (menu1 === "Setar volumen de la app") {
menu7.style.display = "flex";
} else {
menu7.style.display = "none";
}
}





function checkOnlyOne(checkbox) {
    // Obtener todos los checkboxes con la clase "checkbox"
    let checkboxes = document.querySelectorAll('.checkbox');
    
    // Desmarcar todos los checkboxes excepto el que se ha clicado
    checkboxes.forEach((item) => {
        if (item !== checkbox) {
            item.checked = false;
        }
    });
}