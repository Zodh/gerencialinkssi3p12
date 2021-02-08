<?php

session_start();

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
		$Comando_1 		="SELECT usuario FROM tabeladeusuarios where email = '$Email'";
		$Resultado_1 	=mysqli_query($Conexao, $Comando_1);
        $Valor_1 	=mysqli_fetch_assoc($Resultado_1);

        $_SESSION['login'] = $Email;
        $_SESSION['senha'] = $Senha;

        header("location:../index.php");
	}
	else
	{
        mysqli_close($Conexao);
        header("location:../login.html");
        session_destroy();
		exit();
	}
}

?>