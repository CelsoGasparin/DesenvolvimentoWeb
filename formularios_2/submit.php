<?php

if($_SERVER['REQUEST_METHOD'] == "POST"){
    
    $nome = $_POST['nome'];
    $email = $_POST['email'];










    if(filter_var($email,FILTER_VALIDATE_EMAIL) === false){
        echo "Formato de email inválido";        
    }


    if(empty($nome) || empty($email)){
        echo'';
    }else{
        echo "Nome:". htmlspecialchars($nome)."<br>";
        echo "Email:". htmlspecialchars($email);
    }



}
