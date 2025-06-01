<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// Basic router for API endpoints
$requestMethod = $_SERVER["REQUEST_METHOD"];
$requestUri = $_SERVER["REQUEST_URI"];

require_once 'config.php';

// Simple routing example
if (preg_match('/\/api\/users/', $requestUri)) {
    if ($requestMethod == 'GET') {
        // Example: return all users (to be implemented)
        echo json_encode(["message" => "GET users endpoint"]);
    } elseif ($requestMethod == 'POST') {
        // Example: create user (to be implemented)
        echo json_encode(["message" => "POST users endpoint"]);
    } else {
        http_response_code(405);
        echo json_encode(["error" => "Method not allowed"]);
    }
} else {
    http_response_code(404);
    echo json_encode(["error" => "Endpoint not found"]);
}
?>
