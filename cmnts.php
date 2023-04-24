<?PHP
    $name = $_POST['name'];
    $comments = $_POST['comment'];

    $link = mysqli_connect("localhost", "root", "", "WAWE");
    mysqli_query($link, "INSERT INTO `Comments` (`Name`, `Comment`) VALUES ('{$_POST['name']}', '{$_POST['comment']}')");

    $f = 'comments.txt';
    $h = fopen($f,'a');
    fwrite($h, $name.PHP_EOL.PHP_EOL);
    fwrite($h, $comments.PHP_EOL.PHP_EOL.PHP_EOL.PHP_EOL);
    echo "Спасибо за отзыв";
?>