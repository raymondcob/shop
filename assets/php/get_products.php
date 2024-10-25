<?php

include "conn.php";

$sql = "SELECT * FROM products";
$query = mysqli_query($conn, $sql);
$data = array();

while($row = mysqli_fetch_assoc($query)){
    $data[] = array("id" => $row["id_product"], "name" => $row["product_name"], "desc" => $row["product_desc"],"quantity" => $row["qty"], "image" => $row["img"],"price"=>$row["price"]);
}

echo json_encode($data);

?>