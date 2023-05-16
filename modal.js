function abrirModal(carregarModal){
    console.log("carregar janela modal:" + carregarModal)
   var modal = document.getElementById('vis-modal');
   modal.style.display = 'block';
   document.body.style.overflow = 'hidden';
}

function fecharModal(fecharModal){
    console.log("fechar janela modal:" + fecharModal)
    let modal = document.getElementById('vis-modal');
     modal.style.display = 'none'
     document.body.style.overflow = 'auto'
}

