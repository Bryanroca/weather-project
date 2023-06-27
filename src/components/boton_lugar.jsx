function extraer_informacion(){
    const input = document.getElementById('buscador_barra');
    const userInput = input.value;
    window.location.href=`index.html?locacion=${userInput}`

}

export default extraer_informacion