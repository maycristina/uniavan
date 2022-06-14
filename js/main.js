function NewRoute(){
  var url = "/index.html";
  window.location.href= url;
}

function NewRequisition () {
    var url = "requerimento/index-requerimento.html";
    window.location.href= url;
}

function NewRequisitionI () {
    var url = "routes/requerimento/index-requerimento.html";
    window.location.href= url;
}


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

function onHistoric () {
  var url = "Detalhes-da-Chamada/historico-view.html";
  window.location.href= url;
}

function itemReceived() {
  var url = "Detalhes-da-Chamada/recebidos-view.html";
  window.location.href= url;
}


function didItemSend() {
  var url = "routes/Detalhes-da-Chamada/enviados-view.html";
  window.location.href= url;
}


function editRequeriment() {
  /* var url = "configurar-chamada.html";
  window.location.href= url; */
  
  var edit = document.querySelector('.background-pedido');
  console.log(edit.style.display ='flex')
}

function salvarRequeriment(){
  
  var edit = document.querySelector('.background-pedido');
  console.log(edit.style.display ='none')
}

var not = document.querySelector('.notification') /* Notificações */
  var url = "/notification.html";
  not.onclick = function () {
    window.location.href= url; 
  }
 

  let accord = document.querySelector('.xarrow');
  let logo = document.getElementsByClassName('.loginlogo');
 
  accord.onclick = function () {
    console.log(logo.style.visibility  = 'hidden');
  } 

  
  function ida () {
    var url = "Add/add-membro.html";
    window.location.href= url;
}


