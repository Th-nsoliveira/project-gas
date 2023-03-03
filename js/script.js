function preco(){
    var etanol=document.querySelector('#etanol').value;
    var gasolina=document.querySelector('#gasolina').value;
    var resultado=document.querySelector('.resultado');
    

    if(etanol!='' && gasolina!=''){

        resultado.classList.add('show-result')

        if(etanol<gasolina*0.7){
            resultado.innerHTML='<h3>Abasteça com : <br>'+ '<span> Etanol</span>';
            
        }
        else{
            resultado.innerHTML='<h3>Abasteça com : <br>'+ '<span> Gasolina</span>';
        }

    }
    else{
        alert('Insira os dados')
    }
}

var btn=document.querySelector('#btn');
var gasolina=document.querySelector('#gasolina');


btn.addEventListener('click', function(){
    preco();
})



gasolina.addEventListener('keyup',function(e){
    if(e.key == 'Enter'){
        preco();
    }
})