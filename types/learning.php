<?php

$name = "esee";
echo print_r($name, true);
$age = 19;
$stupid = false;
$clever = true;
echo print_r(5 + 2 === 9, true);
$red_table = null;
$fruits = ["pineapple","coconut","grape"];
$animals = ["koala","leopard","ant"];
$things = [$fruits, $animals];
echo print_r($fruits, true);
echo print_r(count($fruits), true);
$person = [
    "name" => "esee",
    "age" => 19,
    "pets" => ["pickle","squid"],
    "alive" => true,
    "dead" => false,
    "tail" => null
];
echo print_r($person, true);
echo print_r($person["name"], true);
