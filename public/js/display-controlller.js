const downloadPage = document.getElementById('download-display');
const downloadButtom = document.getElementById('buttom-download');
const form = document.getElementById('form');


const closeButtom = document.getElementById('close-btn');
const submitButtom = document.getElementById('submit');

//funcion para cerrar la ventana
const closeTab = function(event){
    downloadPage.style.display = "none";
    console.log("Fue cerrada");
}
const download = function(event){
    downloadButtom.style.display = "block";
    form.style.display = "none";

    console.log("bottom descarga habilitado");
}
//evento para cerrar la ventana
closeButtom.addEventListener("click", closeTab);
submitButtom.addEventListener("click", download);


