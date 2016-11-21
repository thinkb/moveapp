
$(document).ready(function(){
    mostraContas();
   $('.collapsible').collapsible();
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

function mostraContas(){
    console.log(pais[0].listaContas[0]);
    var html = "";
    for(i = 0; i < pais[0].listaContas.length; i++){
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
            html +="                <a href=\"#\" class=\"progresso\"><img class=\"btn_adm\" src=\"css/assets/graficoicon.svg\" alt=\"\" /></a>";
            html +="                <a href=\"#\" class=\"criar\"><img class=\"btn_adm\" src=\"css/assets/lapisicon.svg\" alt=\"\" /></a>";
            html +="            </li>";
        });
        html +="        </ul>";
        html +="    </div>";
        html +="</li>";
        $("#grupos").html(html);
    }
}
