<?php

if(isset($_POST))
{
	$Email 		=$_POST["textEmail"];
	$Senha 		=$_POST["textPass"];
	
	$Conexao		= mysqli_connect("localhost", "3737805_gerenciadordelinkssi3p12", "Uppc461892", "3737805_gerenciadordelinkssi3p12");
	$Comando_0 		= "SELECT * FROM tabelaDeUsuarios WHERE email = '$Email'";
	$Resultado_0 	= mysqli_query($Conexao, $Comando_0);
	$Valor_0		= mysqli_fetch_assoc($Resultado_0);

	if(mysqli_num_rows($Resultado_0) > 0 and $Valor_0["senha"] == $Senha)
	{
		$Comando_1 		="SELECT usuario FROM tabelaDeUsuarios where email = '$Email'";
		$Resultado_1 	=mysqli_query($Conexao, $Comando_1);
        $Valor_1 	=mysqli_fetch_assoc($Resultado_1);
        header("location:index.html")
	}
	else
	{
        mysqli_close($Conexao);
        session_destroy();
		exit();
		header("location:login.html");
	}
}

?>