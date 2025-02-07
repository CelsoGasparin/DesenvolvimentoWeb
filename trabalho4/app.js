

function loadFile(container,file){

    fetch(file).then(arq => arq.text()).then(elemento =>{

        document.getElementById(container).innerHTML = elemento;



    }).catch(erro => console.error('erro ao carregar o arquivo'+ file));


}
loadFile('container-sidebar','sidebar.html');
loadFile('container-navbar','navbar.html');

setTimeout(()=>{
    const toggleMenu = document.getElementById('toggleMenu');
    let sidebar = document.querySelector('.sidebar');
    toggleMenu.addEventListener('click',()=>{

        sidebar.classList.toggle('sidebar-show');

    });
},1500);