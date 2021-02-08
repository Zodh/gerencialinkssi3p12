<!DOCTYPE html>
<html lang="pt-br">
<head>

	<?php
		
		session_start();

		if((!isset ($_SESSION['login']) == true) and (!isset ($_SESSION['senha']) == true))
		{
  			unset($_SESSION['login']);
  			unset($_SESSION['senha']);
  			header('location:login.html');
  		}

		$nome = $_SESSION['login'];

	?>

	<title>Informações para a turma SI3P12</title>
	<meta charset="utf-8">
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
	<link href="_css/index.css" rel="stylesheet">
	<link rel="icon" type="image/png" href="_img/code-slash.svg"/>
	<script src="_js/controlePosicao.js"></script>

</head>
<body>
	<div id="corpo">

		<div id="conteudo" class="container">
			
			<div class="alert alert-light sticky-top" role="alert">
				<nav class="navbar navbar-expand-sm navbar-light bg-light">
					<div class="container">
						<h5 id="tituloMenu">Gerenciador de Informações</h5>
					  	<div class="navbar" id="navbarText">
							<ul class="navbar-nav">
						  		<li class="nav-item">
									<button id="btAulas" onclick="levarUsuario('btAulas')" type="button" class="btn">Aulas</button>
						  		</li>
						 			<li class="nav-item">
										<button id="btGrupos" onclick="levarUsuario('btGrupos')" type="button" class="btn">Grupos</button>
						  		</li>
						  		<li class="nav-item">
									<button id="btDocente" onclick="levarUsuario('btDocente')" type="button" class="btn">Docente</button>
						  		</li>
							</ul>
					  	</div>
					</div>
				  </nav>
			</div>

			<div id="caixaDeLinks" class="container container-md">
				<center>
					<h3><span class="badge bg"><img src="_img/code-slash.svg" width="30px" height="30px"> <?php echo $nome; ?></span></h3>
					<div class="card">
						<div class="card-body">
							<h3>Aulas</h2>
					  		<script src="_js/gerenciaLinksDoDia.js"></script>
						</div>
					</div>

					<hr>

					<div class="card">

						<div class="card-body">

							<h3>Grupos</h3>

							<a href='https://discord.gg/nBhAktRh68' target="_BLANK" class='btn btn-outline-secondary btgrupo'>Discord</a>

							<hr>

							<a href='' target="_BLANK" class='btn btn-outline-primary btgrupo'>Trello (indisponível)</a>

							<hr>

							<a href='' target="_BLANK" class='btn btn-outline-success btgrupo'>WhatsApp (indisponível)</a>

						</div>

					</div>
				</center>

			</div>

			<!-- TODO: botão que revela e esconde a agenda da turma. -->
			<!-- <hr> <div class="content">
				<iframe class="alert-secondary" src="https://calendar.google.com/calendar/embed?height=400&amp;wkst=2&amp;bgcolor=%23b3b3b3&amp;ctz=America%2FSao_Paulo&amp;src=dGZiOXNtcmVybmNrMzRoZzhtczlvdGdhajhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23616161&amp;showNav=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;mode=MONTH" style="border:solid 1px #777" width="600" height="400" frameborder="0" scrolling="no"></iframe>
			</div>-->

			<hr>
			
			<div id="equipeDocente" class="container alert alert-light">

				<div id="caixaDocente" class="">
					
					<h3>Docente</h3>

					<table id="tabelaDocente" class="table table-sm">
						<thead class="table-dark">
						  <tr>
							  <td>Função</td>
							  <td>Nome</td>
							  <td>Disciplina</td>
							  <td>Contato</td>
						  </tr>
						</thead>
						<tbody>

							<tr>
								<td>Coordenador</td>
								<td>Higor Delsoto</td>
								<td class="materiaDocente">Coordena CC e SI noturno</td>
								<td><a class="link-secondary" href="mailto:higor.delsoto@docente.unip.br">higor.delsoto@docente.unip.br</a></td>
							</tr>

							<tr>
								<td>Professor</td>
								<td>-</td>
								<td class="materiaDocente">745Z - Mod. Sist. Orientado a Objeto</td>
								<td>-</td>
							</tr>

							<tr>
								<td>Professor</td>
								<td>-</td>
								<td class="materiaDocente">78B7 - Atividades Práticas Supervisionadas</td>
								<td>-</td>
							</tr>

							<tr>
								<td>Professor</td>
								<td>-</td>
								<td class="materiaDocente">D267 - Homem e Sociedade</td>
								<td>-</td>
							</tr>

							<tr>
								<td>Professor</td>
								<td>-</td>
								<td class="materiaDocente">J12B - Ling. Prog. Orient. a Objetos.</td>
								<td>-</td>
							</tr>

							<tr>
								<td>Professor</td>
								<td>-</td>
								<td class="materiaDocente">J13B - Banco de Dados</td>
								<td>-</td>
							</tr>

							<tr>
								<td>Professor</td>
								<td>-</td>
								<td class="materiaDocente">N277 - Paradigmas de Linguagens</td>
								<td>-</td>
							</tr>

							<tr>
								<td>Professor</td>
								<td>-</td>
								<td class="materiaDocente">N282 - Estatística e Probabilidade</td>
								<td>-</td>
							</tr>

						</tbody>
					</table>

				</div>

			</div>

			<br>
			<hr>

			<div class="container alert alert-light">

				<h3>Cartões do Trello</h3>

				<div class="d-xl-flex alert alert-light">
					<div class="container">
						<h5>AVA</h5>
						<blockquote class="trello-card"><a href="https://trello.com/c/1kmpptNR/11-ava">AVA</a></blockquote><script src="https://p.trellocdn.com/embed.min.js"></script>
					</div>
					
					<div class="container">
						<h5>Provas</h5>
						<blockquote class="trello-card"><a href="https://trello.com/c/SkFp41mT/7-provas">Provas</a></blockquote><script src="https://p.trellocdn.com/embed.min.js"></script>
					</div>

					<div class="container">
						<h5>Aulas</h5>
						<blockquote class="trello-card"><a href="https://trello.com/c/AxOA4ACA/6-aulas">Aulas</a></blockquote><script src="https://p.trellocdn.com/embed.min.js"></script>
					</div>

				</div>

			</div>

		</div>

		<hr>

		<footer>
			<div class="alert alert-light" role="alert">
				<h4 class="alert-heading">Sobre o site</h4>
				<hr>
				<p class="mb-0">HTML5, CSS3, JavaScript e Bootstrap.</p>
				<p class="mb-0">Desenvolvido por Felipe C - <a href="https://github.com/Zodh" target="_BLANK" class="alert-link">GitHub</a></p>
				<a href="mailto:felipe.santos146@aluno.unip.br" target="_BLANK" class="alert-link">Entre em contato</a>
			  </div>
		</footer>

	</div>
</body>
</html>