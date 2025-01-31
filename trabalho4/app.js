

function loadFile(container,file){

    fetch(file).then(arq => arq.text()).then(elemento =>{

        document.getElementById(container).innerHTML = elemento;



    }).catch(erro => console.error('erro ao carregar o arquivo'+ file));


}
loadFile('container-sidebar','sidebar.html');
loadFile('container-navbar','navbar.html');