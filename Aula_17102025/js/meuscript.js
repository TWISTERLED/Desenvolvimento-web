function exibir(){
    let paragrafo =  document.getElementById("nome")
    console.log(paragrafo);
    paragrafo.innerHTML = "TESTE EXIBIÇÂO DE NOME!!!!!!!!!!!!!!!!!"
}
function ocultar(){
document.getElementById("nome").innerHTML = '';
}