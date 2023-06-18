<?php
$fname = filter_input(INPUT_POST, 'fname');
$lname = filter_input(INPUT_POST, 'lname');
$email = filter_input(INPUT_POST, 'email');
$tnumber = filter_input(INPUT_POST, 'tnumber');
$addres = filter_input(INPUT_POST, 'addres');
$typec1 = filter_input(INPUT_POST, 'typec1');
$typec = filter_input(INPUT_POST, 'typec');

if (!empty($fname)) {
    if(!empty($lname)){
        $host = "localhost";
        $dbusername = "root";
        $dbpassword = "";
        $dbname = "donation";
        $conn=new mysqli ($host,$dbusername,$dbpassword,$dbname);
        if(mysqli_connect_error()){
            die('Connect Error ('. mysqli_connect_errno().')'
            . mysqli_connect_error());
        }
        else{

        $sql="INSERT INTO donate (fname,lname,email,tnumber,addres,typec) values ('$fname','$lname','$email','$tnumber','$addres','$typec')";
        if($conn->query($sql)){
                echo "New record is inserted sucessfully";
    }
    else{
        echo "Error:". $sql."<br>".$conn->error;
    }
    $conn->close();
}
    }
    else{
        echo "Lastname should not be empty";
        die();
    }
}

else{
    echo "Firstname should not be empty";
    die();
}
?>