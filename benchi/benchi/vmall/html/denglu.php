<?php

@$con = mysqli_connect('localhost','root','','sjdl');
$shoujihaoma = @$_REQUEST['shoujihaoma'];
$yanzhengma = @$_REQUEST['yanzhengma'];

if(!$con){
    echo '数据库连接失败！';
    return;
}

    header('Content-Type:text/html; charset=utf-8'); 
    mysqli_query($con,'set names utf8');

    $sql = "select * from dl where shoujihaoma = '{$shoujihaoma}' and yanzhengma = '{$yanzhengma}'"; 
    $query = mysqli_query($con , $sql);

    if($query && $query->num_rows){
        echo '<script>alert("登陆成功");</script>';
    }
    else if($query){
        echo '<script>alert("手机号码或验证码错误");</script>';
    }
    else{
        echo '<script>alert("登陆失败");</script>';
    }

?>