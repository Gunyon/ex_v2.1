<!doctype html>
<head>
	<meta charset="utf-8">
	<title>Curs valutar</title>
	<link href="css/style.css" rel="stylesheet" type="text/css">
</head>
<body>
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
			<td>
				<div class="convertor">
					<h2 class="convtop">Convertor valutar</h2>
					<br />
					<span class="seltext">Din</span> <span class="from">Introdu suma</span>
					<div style="clear:both; height:0px;"></div>
					<input type="text" id="inputfrom" size="10" maxlength="10" allowed=".0123456789" messageid="zipwarn"/>
					<select id="selectfrom">
					</select>
					<div style="clear:both; height:0px;"></div>
					<br />
					<span id="zipwarn" class="hidden" style="color:red;">Introduceţi cifre</span>
					<div class="swap">
						<a href="#" id="swap"><img src="img/swap.png" border="0"></a>
					</div>
					<br />
					<span class="seltext">In</span><span class="to">Rezultat</span>
					<div style="clear:both; height:0px;"></div>
					<input type="text" id="inputto" size="10" allowed=" "/>
					<select id="selectto">
					</select>
					<div style="clear:both; height:0px;"></div>
					<a href="#" class="clearBtn"><img border="0" id="clearbtn" src="img/clear.png" /></a>
				</div>
			</td>
			<td>
				<table class="table2" width="320" border="0" cellspacing="0" cellpadding="0">
					<tr>
						<td class='tabel_c1'>
							<img class='v_align' src='img/countries/eur.jpg' alt='EUR'>
							<span class='textmare'>EUR</span>
							<span class='textspacer'></span>
							<span class='namevalute'>Euro</span>
						</td>
						<td id="eur" class='tabel_c2'>
						</td>
					</tr>
					<tr>
						<td class='tabel_c1'>
							<img class='v_align' src='img/countries/usd.jpg' alt='EUR'>
							<span class='textmare'>USD</span>
							<span class='textspacer'></span>
							<span class='namevalute'>Dolar S.U.A.</span>
						</td>
						<td id="usd" class='tabel_c2'>
						</td>
					</tr>
					<tr>
						<td class='tabel_c1'>
							<img class='v_align' src='img/countries/gbp.jpg' alt='GBP'>
							<span class='textmare'>GBP</span>
							<span class='textspacer'></span>
							<span class='namevalute'>Lira sterlina</span>
						</td>
						<td id="gbp" class='tabel_c2'>
						</td>
					</tr>
					<tr>
						<td class='tabel_c1'>
							<img class='v_align' src='img/countries/ron.jpg' alt='RON'>
							<span class='textmare'>RON</span>
							<span class='textspacer'></span>
							<span class='namevalute'>Leu romanesc</span>
						</td>
						<td id="ron" class='tabel_c2'>
						</td>
					</tr>
					<tr>
						<td class='tabel_c1'>
							<img class='v_align' src='img/countries/rub.jpg' alt='RUB'>
							<span class='textmare'>RUB</span>
							<span class='textspacer'></span>
							<span class='namevalute'>Rubla rusa</span>
						</td>
						<td id="rub" class='tabel_c2'>
						</td>
					</tr>
					<tr>
						<td class='tabel_c1'>
							<img class='v_align' src='img/countries/uah.jpg' alt='UAH'>
							<span class='textmare'>UAH</span>
							<span class='textspacer'></span>
							<span class='namevalute'>Hrivna ucraineana</span>
						</td>
						<td id="uah" class='tabel_c2'>
						</td>
					</tr>
				</table>
			</td>
		</tr>
		<tr>
			<td colspan="2">&nbsp;</td>
		</tr>
	</table>
	<!--=========== [ SCRIPTS ]=========== -->
	<script src="js/jquery-1.7.2.js" type="text/javascript"></script>
	<script src="js/myscript.js" type="text/javascript"></script>
</body>
</html>