<?php

$news_page = isset($_GET['news_page']) ? $_GET['news_page'] : false;

?>

<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<title>Stiri</title>
		<link href="css/style.css" rel="stylesheet" type="text/css">
	</head>
	<body onload="process()">
		<table class="maintable" align="center" border="0" cellspacing="0">
			<tr>
				<td align="center" colspan="2">
					<h1 class="toptext">Curs valutar Banca Naţională a Moldovei</h1>
				</td>
			</tr>
			<tr>
				<?php include "blocks/topNav.php"; ?>
			</tr>
			<tr valign="top">
				<td>

				<?php 
					if ($news_page) { 
						include "news/news" . $news_page . ".php";
					} else {
				?>

					<h4 class="news">
					<img class="ico_news" src="img/ico_news.png" alt="" />
					<a href="news.php?news_page=1">Guvernatorul BNM participă la aniversarea Băncii Naţionale a României</a>
					</h4>
					<h4 class="news">
					<img class="ico_news" src="img/ico_news.png" alt="" />
					<a href="news.php?news_page=2">O conferinţă de presă cu tema: "Raportul de politică monetară" la Banca Naţională a Moldovei</a>
					</h4>
					<h4 class="news">
					<img class="ico_news" src="img/ico_news.png" alt="" />
					<a href="news.php?news_page=3">Prezentarea Guvernatorului BNM Dorin Drăguţanu în cadrul săptămânii investiţionale "Moldova Business Week 2010"</a>
					</h4>
					<h4 class="news">
					<img class="ico_news" src="img/ico_news.png" alt="" />
					<a href="news.php?news_page=4">Seminarul cu tema: "Instruire privind gestionarea riscurilor şi prevenirea delictelor în sectorul bancar"</a>
					</h4>
					<?php } ?>
				</td>
			</tr>
			<tr>
				<td colspan="2">&nbsp;</td>
			</tr>
		</table>
	</body>
</html>