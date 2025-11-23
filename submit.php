<?php
// Database connection
$conn = new mysqli("localhost", "root", "", "Sample"); // change DB name if needed

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data
$full_name = $_POST['full_name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Insert into database
$sql = "INSERT INTO contact_messages (full_name, email, message) VALUES ('$full_name', '$email', '$message')";

if ($conn->query($sql) === TRUE) {
    echo "<script>
            alert('Message successfully submitted!');
            window.location.href='index.html'; // Change to your page name
          </script>";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
