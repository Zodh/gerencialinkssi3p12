function retornaDia() {
    var diaDaSemana = new Date();

    diaDaSemana = diaDaSemana.getDay();

    var diasDaSemana = new Array(7);

    diasDaSemana[0] = "Domingo";
    diasDaSemana[1] = "Segunda-feira";
    diasDaSemana[2] = "Terça-feira";
    diasDaSemana[3] = "Quarta-feira";
    diasDaSemana[4] = "Quinta-feira";
    diasDaSemana[5] = "Sexta-feira";
    diasDaSemana[6] = "Sábado";

    var Dia = diasDaSemana[diaDaSemana];

    return Dia;
}

function materiaDeHoje(dia) {

    var FraseA = "";
    var FraseB = "";
    var aula = "";

    if (dia == "Domingo") {
        
        FraseA = "Hoje não tem aula!"
        aula = "<hr><a href='#' class='btn btn-secondary'>" + FraseA + "</a>"

    }

    if (dia == "Segunda-feira") {
            
        FraseA = "J13B - BD - 19:00~20:25"
        FraseB = "J12B - POO - 20:40~22:00"
        aula = "<hr><a href='linkzoom' class='btn btn-primary'>" + FraseA + "</a><hr><a href='linkzoom2' class='btn btn-primary'>" + FraseB + "</a>"

    }
            
    if (dia == "Terça-feira") {
            
        FraseA = "Linguagem Orientada a Objetos - 19:10~20:25"
        FraseB = "Linguagem Orientada a Objetos - 20:45~22:00"
        aula = "<hr><a href='https://zoom.us/j/91625002338' class='btn btn-primary'>" + FraseA + "</a><hr><a href='https://zoom.us/j/94744870505' class='btn btn-primary'>" + FraseB + "</a>"
    
    }
                
    if (dia == "Quarta-feira") {
            
        FraseA = "MOD SIST ORIENT OBJ - 19:10~20:25"
        FraseB = "MOD SIST ORIENT OBJ - 20:45~22:00"
        aula = "<hr><a href='https://zoom.us/j/95781527369' class='btn btn-primary'>" + FraseA + "</a><hr><a href='https://zoom.us/j/96918975280' class='btn btn-primary'>" + FraseB + "</a>"
        
    }
                    
    if (dia == "Quinta-feira") {
            
        FraseA = "J13B - BD - 19:00~20:25"
        FraseB = "J12B - POO - 20:40~22:00"
        aula = "<hr><a href='linkzoom' class='btn btn-primary'>" + FraseA + "</a><hr><a href='linkzoom2' class='btn btn-primary'>" + FraseB + "</a>"
            
    }
                        
    if (dia == "Sexta-feira") {
            
        FraseA = "J13B - BD - 19:00~20:25"
        FraseB = "J12B - POO - 20:40~22:00"
        aula = "<hr><a href='linkzoom' class='btn btn-primary'>" + FraseA + "</a><hr><a href='linkzoom2' class='btn btn-primary'>" + FraseB + "</a>"
                
    } 
    
    if (dia == "Sábado") {

        FraseA = "Hoje não tem aula!"
        aula = "<hr><a href='#' class='btn btn-secondary'>" + FraseA + "</a>"
    
    }

    return aula;
}

document.write(retornaDia());
document.write(materiaDeHoje(retornaDia()));