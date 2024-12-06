



let ajax = new XMLHttpRequest();
let butao = document.querySelector('button');
let resultado = document.querySelector('.resuldato');
let input = document.querySelector('input');


// console.log(CEP);
ajax.open('GET','https://viacep.com.br/ws/01001000/json/',true);
// console.log('AVISOAVISOEUNÃOSEIOQUEESCREVER')

ajax.onload = function(){
    
    // console.log('AVISOAVISOEUNÃOSEIOQUEESCREVER');
    if(ajax.status == 200 && ajax.readyState == 4){
        console.log('Resposta:',JSON.parse(ajax.responseText));
        // console.log('AVISOAVISOEUNÃOSEIOQUEESCREVER');
    }else{
        console.error('Erro:',ajax.status, ajax.statusText);
        // console.log('AVISOAVISOEUNÃOSEIOQUEESCREVER');
    }
}
ajax.send(null);


butao.addEventListener('click',()=>{
    let ajax = new XMLHttpRequest();
    let CEP = input.value;
    ajax.open('GET','https://viacep.com.br/ws/'+CEP+'/json/',true);
    // console.log('AVISOAVISOEUNÃOSEIOQUEESCREVER')
    // console.log(CEP);
    ajax.onload = function(){
        let carregamento = document.querySelector('.carregando');
        carregamento.style.display = 'block';
        
        // console.log('AVISOAVISOEUNÃOSEIOQUEESCREVER');
        if(ajax.status == 200 && ajax.readyState == 4){
            carregamento.style.display = 'none';
            console.log('Resposta:',JSON.parse(ajax.responseText));
            let endereco = JSON.parse(ajax.responseText);
            // console.log(ajax.responseText);
            resultado.innerHTML = `<p>[Logradouro]- `+endereco['logradouro']+`</p>`
            +`<p>[Bairro]- `+endereco['bairro']+`</p>`
            +`<p>[Cidade]- `+endereco['localidade']+`</p>`
            +`<p>[Estado]- `+endereco['estado']+`</p>`;
            // console.log('AVISOAVISOEUNÃOSEIOQUEESCREVER');
        }else{
            console.error('Erro:',ajax.status, ajax.statusText);
            carregamento.style.display = 'none';
            // console.log('AVISOAVISOEUNÃOSEIOQUEESCREVER');
        }
    }
    ajax.send(null);

});