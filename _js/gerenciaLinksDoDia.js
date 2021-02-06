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
        
        Frase = "Hoje não tem aula!"
        aula = "<hr><a href='#' class='btn btn-secondary'>" + Frase + "</a>"

    }

    if (dia == "Segunda-feira") {
            
        Frase = FraseA = "J13B - BD - 19:00~20:25"
        FraseB = "J12B - POO - 20:40~22:00"
        aula = "<hr><a href='linkzoom' class='btn btn-primary'>" + FraseA + "</a><hr><a href='linkzoom2' class='btn btn-primary'>" + FraseB + "</a>"

    }
            
    if (dia == "Terça-feira") {
            
        FraseA = "J13B - BD - 19:00~20:25"
        FraseB = "J12B - POO - 20:40~22:00"
        aula = "<hr><a href='linkzoom' class='btn btn-primary'>" + FraseA + "</a><hr><a href='linkzoom2' class='btn btn-primary'>" + FraseB + "</a>"
    
    }
                
    if (dia == "Quarta-feira") {
            
        FraseA = "J13B - BD - 19:00~20:25"
        FraseB = "J12B - POO - 20:40~22:00"
        aula = "<hr><a href='linkzoom' class='btn btn-primary'>" + FraseA + "</a><hr><a href='linkzoom2' class='btn btn-primary'>" + FraseB + "</a>"
        
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

        Frase = "Hoje não tem aula!"
        aula = "<hr><a href='#' class='btn btn-secondary'>" + Frase + "</a>"
    
    }

    return aula;
}

document.write(retornaDia());
document.write(materiaDeHoje(retornaDia()));