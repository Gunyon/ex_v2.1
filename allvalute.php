<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<title>Curs valutar</title>
		<link href="css/style.css" rel="stylesheet" type="text/css">
	</head>
	<body onload="process()">
		<table class="maintable" align="center" width="600" border="0" cellspacing="0">
			<tr>
				<td align="center" colspan="2">
					<h1 class="toptext">Curs valutar Banca Naţională a Moldovei</h1>
				</td>
			</tr>
			<tr>
				<?php include "blocks/topNav.php"; ?>
			</tr>
			<tr valign="top">
				<td align="center" id="allcourses"></td>
			</tr>
			<tr>
				<td colspan="2">&nbsp;</td>
			</tr>
		</table>
		<script src="js/allvalute.js" type="text/javascript"></script>
	</body>
</html>