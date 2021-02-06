var myLink = document.getElementById('mylink');

myLink.onclick = function(){

    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "Public/Scripts/filename.js."; 
    document.getElementsByTagName("head")[0].appendChild(script);
    return false;}

var botaoAulas = document.getElementById('btAulas');
var botaoGrupos = document.getElementById('btGrupos');
var botaoDocente = document.getElementById('btDocente');

function levarUsuario(botao){

        if(botao == 'btAulas') {

            window.scrollTo(805, 0);

        }

        if(botao == 'btGrupos') {

            window.scrollTo(805, 300);

        }

        if(botao == 'btDocente') {

            window.scrollTo(805, 550);

        }
        
}