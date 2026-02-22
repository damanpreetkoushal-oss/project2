<?php
$conn = mysqli_connect("localhost", "root", "", "shopping_db");

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
?>

<?php
session_start();
include("db.php");

if (isset($_POST['login'])) {

    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $password = $_POST['password'];

    $query = "SELECT * FROM users WHERE email='$email'";
    $result = mysqli_query($conn, $query);

    if (mysqli_num_rows($result) > 0) {

        $row = mysqli_fetch_assoc($result);

        if (password_verify($password, $row['password'])) {
            $_SESSION['user'] = $row['username'];
            header("Location: index.php");
            exit();
        } else {
            $error = "Invalid Password!";
        }

    } else {
        $error = "User not found!";
    }
}
?>