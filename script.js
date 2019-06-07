function crearLabelInput(textLabel)
{
	var div = $("<div>");
	div.append($("<label>").text(textLabel));
	div.append($("<input>").attr({"type":"text", "name":textLabel}));
	return div;
}
var contador = 0;
function crearLista(titulo, arraySimple, elementoPadre, tiporden)
{
	console.log("Entra en crear lista")
	var ol = $("<ol>");
	var ul = $("<ul>");
	var valores = $(arraySimple).val().split(",");
	contador = contador+1;
	if(tiporden)
		{
			for (var i = 0; i < valores.length; i++) {
				ol.append($("<li>").text(valores[i]));
			}
			ol.attr("id", "id-OL-"+contador).append($("<button>").attr({"id":"btn-OL-"+contador, "onclick":"agregarAlFormulario('btn-OL-"+contador+"')"}).text("Agregar al formulario"));
			elementoPadre.append(ol);
		}else
		{
			for (var i = 0; i < valores.length; i++) {
				ul.append($("<li>").text(valores[i]));
			}
			ul.attr("id", "id-UL-"+contador).append($("<button>").attr({"id":"btn-UL-"+contador, "onclick":"agregarAlFormulario('btn-UL-"+contador+"')"}).text("Agregar al formulario"));
			elementoPadre.append(ul);
		}
}
function agregarAlFormulario(btnid)
{
	var btnSubmit = $("#submit1");
	var IDBtn = btnid.split("-");
	var listaIDUL;
	var listaIDOL;
	if(IDBtn[1] == "UL")
	{
		listaIDUL = "id-"+IDBtn[1]+"-"+IDBtn[2];
		var listLIUL = $("#"+listaIDUL+" li");
		for (var i = 0; i < listLIUL.length; i++) {
			btnSubmit.before(crearLabelInput(listLIUL[i].textContent));
		}
		return btnSubmit;
	}
	if(IDBtn[1] == "OL")
	{
		listaIDOL = "id-"+IDBtn[1]+"-"+IDBtn[2];
		var listLIOL = $("#"+listaIDOL+" li");
		for (var i = 0; i < listLIOL.length; i++) {
			btnSubmit.before(crearLabelInput(listLIOL[i].textContent));
		}
		return btnSubmit;
	}
}
var count = 0;
function agregarEstilo()
{
	$("#form1 input[type=text]").css({"box-sizing":"border-box", "border": "2px solid blue", "border-radius":"4px"});
	count=count+1;
	if(count == 2)
	{
		$("#form1 input[type=text]").removeAttr('style');
		count=0;
	}
}