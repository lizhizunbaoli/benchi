<?php

@$con = mysqli_connect('localhost','root','','sjdl');
$sjyxyhm = @$_REQUEST['sjyxyhm'];
$mima = @$_REQUEST['mima'];

if(!$con){
    echo '数据库连接失败！';
    return;
}

    header('Content-Type:text/html; charset=utf-8'); 
    mysqli_query($con,'set names utf8');

    $sql = "select * from mmdl where sjyxyhm = '{$sjyxyhm}' and mima = '{$mima}'"; 
    $query = mysqli_query($con , $sql);

    if($query && $query->num_rows){
        echo '<script>alert("登陆成功");</script>';
    }
    else if($query){
        echo '<script>alert("手机号码/邮箱地址/用户名或密码错误");</script>';
    }
    else{
        echo '<script>alert("登陆失败");</script>';
    }

?>