<?php

include "conn.php";

$product=$_POST["name"];
$desc=$_POST["description"];
$qty=$_POST["quantity"];
$img=$_POST["image"];
$price=$_POST["price"];


$sql = "INSERT INTO products(product_name,product_desc,qty,img,price) VALUES('$product','$desc',$qty,'$img',$price)";
$query = mysqli_query($conn, $sql);

if($query){
    echo 1;
}else{
    echo 0;
}

//echo $sql;


?>