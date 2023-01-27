/*function ocultar() {
    document.getElementById('ubicacion1').onclick=style.display='none';
}
function mostrar(){
    document.getElementById('ubicacion1').style.display = 'block';
    }*/
    document.getElementById('ubicacion1').onclick = function ocultar() {
        console.log.apply("se realizo el click")
        document.getElementById('ubicacion1').style.display='block'
    }