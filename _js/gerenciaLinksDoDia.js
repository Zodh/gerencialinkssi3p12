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
            
        FraseA = "J13B - BANCO DE DADOS - 19:10~20:25"
        FraseB = "J13B - BANCO DE DADOS - 20:45~22:00"
        aula = "<hr><a href='https://zoom.us/j/99723144869' class='btn btn-primary'>" + FraseA + "</a><hr><a href='linkzoom2' class='btn btn-primary'>" + FraseB + "</a>"

    }
            
    if (dia == "Terça-feira") {
        FraseA = "J13B - BANCO DE DADOS (PAR) - 19:10~20:25"
        FraseB = "J13B - BANCO DE DADOS (PAR) - 20:45~22:00"
        FraseAb = "LING. ORI. A OBJETOS (IMPAR) - 19:10~20:25"
        FraseBb = "LING. ORI. A OBJETOS (IMPAR) - 20:45~22:00"
        aula = "<hr><a href='https://zoom.us/j/91625002338' class='btn btn-primary'>" + FraseAb + "</a><hr><a href='https://zoom.us/j/94744870505' class='btn btn-primary'>" + FraseBb + "</a>"
    
    }
                
    if (dia == "Quarta-feira") {
            
        FraseA = "MOD SIST ORIENT OBJ - 19:10~20:25"
        FraseB = "MOD SIST ORIENT OBJ - 20:45~22:00"
        aula = "<hr><a href='https://zoom.us/j/95781527369' class='btn btn-primary'>" + FraseA + "</a><hr><a href='https://zoom.us/j/96918975280' class='btn btn-primary'>" + FraseB + "</a>"
        
    }
                    
    if (dia == "Quinta-feira") {
        
        FraseAb = "N277 - PARADIGMAS DE LINGUAGENS (PAR)- 19:10~20:25"
        FraseBb = "N277 - PARADIGMAS DE LINGUAGENS (PAR)- 20:45~22:00"
        FraseA = "N282 - ESTAT. PROBABILIDADE (IMPAR)- 19:10~20:25"
        FraseB = "N282 - ESTAT. PROBABILIDADE (IMPAR)- 20:45~22:00"
        aula = "<hr><a href='https://zoom.us/j/99744688240' class='btn btn-primary'>" + FraseAb + "</a><hr><a href='https://zoom.us/j/91241836583' class='btn btn-primary'>" + FraseBb + "</a><hr><a href='https://zoom.us/j/98853029872' class='btn btn-primary'>" + FraseA + "</a><hr><a href='https://zoom.us/j/92356685877' class='btn btn-primary'>" + FraseB + "</a>"

    }
                        
    if (dia == "Sexta-feira") {
            
        FraseA = "LING. ORI. A OBJETOS - 19:10~20:25"
        FraseB = "LING. ORI. A OBJETOS - 20:45~22:00"
        aula = "<hr><a href='https://zoom.us/j/99787849068' class='btn btn-primary'>" + FraseA + "</a><hr><a href='https://zoom.us/j/95206797549' class='btn btn-primary'>" + FraseB + "</a>"
                
    } 
    
    if (dia == "Sábado") {

        FraseA = "Hoje não tem aula!"
        aula = "<hr><a href='#' class='btn btn-secondary'>" + FraseA + "</a>"
    
    }

    return aula;
}

document.write(retornaDia());
document.write(materiaDeHoje(retornaDia()));