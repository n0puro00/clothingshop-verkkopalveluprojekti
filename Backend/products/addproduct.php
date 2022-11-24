<?php
require_once '../inc/functions.php';
require_once '../inc/headers.php';

$input = json_decode(file_get_contents('php://input'));
$name = filter_var($input->name,FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$price = filter_var($input->price,FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$category_id = filter_var($input->categoryid,FILTER_SANITIZE_FULL_SPECIAL_CHARS);

try {
    $db = openDb();
    $sql = "insert into product (name,price,image,category_id) values ('$name',$price,'placeholder.png',$category_id)";
    executeInsert($db,$sql);
    $data = array('id' => $db->lastInsertedId(),'name' => $name, 'price' => $price, 'image' => 'placeholder.png');
    print json_encode($data);
}
catch (PDOException $pdoex) {
    returnError($pdoex);
}