

var lista = [];

$(document).ready(function() {
    $('select').material_select();
  });

$(document).ready(function(){
	lista = [];
    mostraContas();
   $('.collapsible').collapsible();
   $('#modal_add_conta').leanModal();
	$('#adicionars').leanModal();

 });

 $('#sairadm').click(function(){
   $('#myMainDiv').empty();
   $('#myMainDiv').load('login_user.html');
   $('body').addClass('bgblue');
 });

 $('#home').click(function(){
   $('#myMainDiv').empty();
   $('#myMainDiv').load('adm_area.html');
 });

 $('.progresso').click(function(){
   $('#main-intern-div').empty();
   $('#main-intern-div').load('progresso.html');
 });

 $('.criar').click(function(){
   $('#main-intern-div').empty();
   $('#main-intern-div').load('criardesafio.html');
 });

 $('#adicionar').click(function(){
   $('#main-intern-div').empty();
   $('#main-intern-div').load('adicionarconta.html');
 });

 function criarde() {
	$('#adicionars').openModal('open');
 }

function mostraContas(){
    //console.log(pais[0].listaContas[0]);

  var html = "<span class=\"title center\"> Nenhum conta adicionada</span>";

	if(pais[0].listaContas.length > 1){
		html = "";
		for(i = 1; i < pais[0].listaContas.length; i++){
			console.log(pais[0].listaContas[i].nome);
			console.log(pais[0].listaContas[i].lista[0]);

			html +="<li>";
			html +="    <div class=\"collapsible-header active\">"+pais[0].listaContas[i].nome+"</div>";
			html +="    <div class=\"collapsible-body\">";
			html +="        <ul class=\"collection\">";
			pais[0].listaContas[i].lista.forEach(function (l){
				console.log(l);

				html +="            <li class=\"collection-item avatar\">";
				html +="                <img class=\"circle amigos-modal\" src=\"images/user4.png\" />";
				html +="                <span class=\"title\">"+l+"</span>";
				html +="                <p class=\"semmargin\"><span class=\"outlinee\">1</span> Nível | <span class=\"outlinee\">20</span> pts </p>";
				html +="	 							<a href=\"#\"><img class=\"btn_adm\" onclick=\"criarde ()\" src=\"css/assets/lapisicon.svg\" /></a>";
				html +="            </li>";
			});
			html +="        </ul>";
			html +="    </div>";
			html +="</li>";

		}
	}
	$("#grupos").html(html);

}

function search(){
			var nickBusca = $("#search_box").val();
			$.get("/searchFriends", {nick: nickBusca},function (response) {
      			var html = "";

      			if(response.length > 0)
      			{
      				response.forEach(function (res){
                            html +="<li id=li-"+res.nick+" class=\"collection-item addamigo avatar\" onclick=\"sendToList('"+res.nick+"')\" >";
          					html +="	<img class=\"circle amigos-modal\" src=\"images/user1.png\" />";
          					html += "	<span class=\"title\">"+res.nick+"</span>";
          					html +="	<p><span class=\"outlinee\">"+res.level+"</span> Nível | <span class=\"outlinee\">"+res.points+"</span> pts </p>";
          				
														html +="</li>";
      				});
      			}
      			else{
      				html +="<li class=\"collection-item\">";
      				html += "	<span class=\"title\">Usuário não encontrado</span>";
      				html +="</li>";
      			}
      			$("#search_results").html(html);
      			//console.log(response);
      	});
}

function sendToList(nick){

	lista.push(nick);
	console.log(lista);
	$("#lista_grupo").append($("#li-"+nick));
	$("#li-"+nick).removeClass("addamigo");
	$("#li-"+nick).attr("onclick", "removeFromList('"+nick+"')");

}
function removeFromList(nick){
			listTemp = [];
            for(i=0; i < lista.length; i++){
                if(lista[i] != nick){
                    listTemp.push(lista[i] );
                }
            }
            lista = listTemp;
			console.log(lista);
	$("#li-"+nick).css("display", "none");
}

function addLista(){
	var nomeGrupo = $("#group_name").val();
	console.log(nomeGrupo);
	console.log(pais[0].namepai);
	console.log(lista);
	if(lista.length == 0 || nomeGrupo == "")
		return;
	$.post("/addContasLista", {nomeGrupo: nomeGrupo, namePai: pais[0].namepai, grupo: lista}, function(res){
		console.log(res);
		pais = res;
		mostraContas();
		lista = [];
		$("#lista_grupo").html("");
		$("#search_box").val("");
		$("#group_name").val("");
	});

}
