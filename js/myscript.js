$(document).ready(function() {
	// creem o variabila ce contine data curenta in formatu dd.mm.yyyy
	var d = new Date();
	var dd = d.getDate();
	var mm = d.getMonth() + 1;
	var yyyy = d.getFullYear();
	if (dd < 10) { dd = '0' + dd; }
	if (mm < 10) { mm = '0' + mm; }
	var date = dd + "." + mm + "." + yyyy;
	var sum1 = null; // suma introdusa
	var sum2 = null; // suma rezultat

	// in baseValute pastram datele valutelor de baza
	baseValute = [];
	// in valuteArray pastram datele tuturor valutelor
	valuteArray = [];
	// in acest masiv pastram valoare si nominalul valutelor pentru calcule
	CodeValueArray = [];

	// introducem datele pentru leul moldovenesc
	CodeValueArray.MDL = [];
	CodeValueArray.MDL.NOM = 1;
	CodeValueArray.MDL.VAL = 1;

	// extragem datele cu ajutorul ajax jquery si populam selecturile
	$.ajax({
		type: "GET",
		url: "getData.php?date=" + date,
		dataType: "xml",
		success: function(xmlHttp) {
			var j = 0;
			$(xmlHttp).find("Valute").each(function() {
				valuteArray[$(this).index()] = new Array(4);
				// extragem toate datele in masivul valuteArray
				cct = valuteArray[$(this).index()].CharCode = $(this).children("CharCode").text();
				nomt = valuteArray[$(this).index()].Nominal = $(this).children("Nominal").text();
				namet = valuteArray[$(this).index()].Name = $(this).children("Name").text();
				valt = valuteArray[$(this).index()].Value = $(this).children("Value").text();

				//v erificam daca valuta curenta este un de baza si o introducem in masivul baseValute
				if (cct == 'EUR' || cct == 'USD' || cct == 'RON' || cct == 'GBP' || cct == 'RUB' || cct == 'UAH') {
					baseValute[j] = new Array(4);
					baseValute[j].CharCode = cct;
					baseValute[j].Nominal = nomt;
					baseValute[j].Name = namet;
					baseValute[j].Value = valt;
					j++;
				}

				// introducem valoare si nominalul valutei intr-un masiv aparte pentru a putea
				// calcula rezultatul
				CodeValueArray[valuteArray[$(this).index()].CharCode] = [];
				CodeValueArray[valuteArray[$(this).index()].CharCode].NOM = valuteArray[$(this).index()].Nominal;
				CodeValueArray[valuteArray[$(this).index()].CharCode].VAL = valuteArray[$(this).index()].Value;
			});

			var selectOptions = "<option value=\"MDL\">MDL Leu Moldovenesc</option>";
			for (var i = 0; i < valuteArray.length; i++) {
				selectOptions += "<option value='" + valuteArray[i].CharCode + "'>" + valuteArray[i].CharCode + " " + valuteArray[i].Name + "</option>";
			}
			// introducem optiunile in selecturi
			$("#selectfrom").append(selectOptions);
			$("#selectto").append(selectOptions);
			initEventHandler();
		}
	});
	onChangeSelect();
});

// aceasta functie calculeaza rezultatul la orice schimbare produsa
function onChangeSelect() {
	var valuta1 = $("#selectfrom").val();
	var valuta2 = $("#selectto").val();
	sum1 = $("#inputfrom").val();
	// verificam daca numarul introdus nu are zerouri in fata si le eliminam
	var removeZero = sum1.toString();
	if (removeZero == '.') return;
	// restrictionam numarul de pencte permise
	while ((removeZero.split(".").length - 1) > 1) {
		removeZero = removeZero.substr(0, removeZero.lastIndexOf('.'));
	}

	while (removeZero.substr(0, 1) == '0' && removeZero.length > 1 && removeZero.substr(0, 2) != '0.') {
		removeZero = removeZero.substr(1, removeZero.length);
	}
	// dupa ce am eliminat zerourile introducem numarul in casuta
	$("#inputfrom").val(removeZero);
	sum1 = $("#inputfrom").val();
	sum2 = $("#inputto").val();
	if (!sum1 || sum1 === 0) {
		$("#inputto").val("0.0");
		$("#inputfrom").focus();
		return true;
	}
	// calculam rezultatul si il afisam in casuta dedesupt
	temp1 = CodeValueArray[valuta1].VAL / CodeValueArray[valuta1].NOM;
	temp2 = CodeValueArray[valuta2].VAL / CodeValueArray[valuta2].NOM;
	$("#inputto").val((sum1 / temp2 * temp1).toFixed(2));
	$("#inputfrom").focus();
}

// inversam tipurile de valute alese
function swap() {
	if ($("#selectfrom").val() == $("#selectto").val()) return;
	var aux = $("#selectfrom").val();
	$("#selectfrom").val($("#selectto").val());
	$("#selectto").val(aux);
	onChangeSelect();
}

// curata inputurile 
function clear() {
	$('#inputfrom').val("");
	$('#inputto').val("0.0");
	$('#inputfrom').focus();
}

// initializam eventhandler-urile
function initEventHandler() {
	$("#selectfrom").change(function() { onChangeSelect(); });
	$("#selectto").change(function() { onChangeSelect(); });
	$("#inputfrom").keyup(function() { onChangeSelect(); });
	$("#inputto").keyup(function() { onChangeSelect(); });
	$("#swap").click(function() { swap(); });
	$("#clearbtn").click(function() { clear(); });
	$("input[allowed]").keypress(function(e) { filter(e); });
	showBase(); // afisam valoarea valutelor de baza
	$("#selectfrom").val("EUR");
}

function showBase() {
	var tmp = "";
	for (i = 0; i < baseValute.length; i++) {
		tmp = baseValute[i].Value + "<span class='textmare2'> MDL</span>";
		$("#" + baseValute[i].CharCode.toLowerCase()).html(tmp);
	}
}


function filter(event) {
	// obtinem obiectul event si aflam ce tasta a fost tastata
	var e = event ? event : window.event;
	var code = (e.charCode) ? e.charCode : ((e.which) ? e.which : e.keyCode);
	// daca este o tasta functionala nu o filtram
	if (code === 0) return true; // doar in Firefox
	if (e.ctrlKey || e.altKey) return true; // Ctrl sau Alt
	if (code < 32) return true; // ASCII control characters
	// extragem lista de simboluri permise pentru elementul curent
	var allowed = $(e.target).attr("allowed");
	var messageElement = null;
	// gasim mesajul care trebuie afisat in caz de tastare a unei taste nepermise
	var messageid = $(e.target).attr("messageid");
	// daca exista atributul messageid, gasim elementul
	if (messageid) messageElement = $("#" + messageid);

	// trasnsformam codul simbolului in respectivul simbol
	var c = String.fromCharCode(code);
	// verificam daca este permis acest simbol

	if (allowed.indexOf(c) != -1) {
		// daca este permis, ascundem mesajul de eroare
		messageElement.fadeOut(500);
		return true; // si acceptam introducerea simbolului
	} else {
		// daca simbolul este interzis, afisam mesajul de eroare
		messageElement.fadeIn(1000);
		// si respingem evenimentul produs
		if (e.preventDefault) e.preventDefault();
		if (e.returnValue) e.returnValue = false;
		return false;
	}
}
