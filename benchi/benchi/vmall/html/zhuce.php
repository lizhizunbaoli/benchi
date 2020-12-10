<?php

@$con = mysqli_connect('localhost','root','','sjdl');
$shoujihaoma = @$_REQUEST['shoujihaoma'];
$yanzhengma = @$_REQUEST['yanzhengma'];

if($con){
    header('Content-Type:text/html; charset=utf-8'); 
    mysqli_query($con,'set names utf8');

    // $sql = "select * from dl where shoujihaoma = '{$shoujihaoma}'"; 
    $sql ="select * from dl as A,mmdl as B where A.shoujihaoma=B.sjyxyhm and A.shoujihaoma='{$shoujihaoma}'";
    $query = mysqli_query($con , $sql);

    if($query && $query->num_rows){
        echo '<script>alert("手机号被注册");history.back();</script>';
    }
    else if($query){
        $sql = "insert into dl(shoujihaoma ,yanzhengma) values('{$shoujihaoma}','{$yanzhengma}')";

        $query = mysqli_query($con , $sql);
    
        if($query){
            $sql1 = "insert into mmdl(sjyxyhm ,mima) values('{$shoujihaoma}','{$yanzhengma}')";
            $query = mysqli_query($con , $sql1);
            echo '<script>alert("恭喜你注册成功");</script>';
        }
        else{
            echo '<script>alert("注册失败");</script>';
        }
    }
}
else{
    echo '数据库连接失败！';
}
?>