<html>
    <head>
        <link rel="stylesheet" href="css/common.css">
        <link rel="stylesheet" href="css/user-detail.css">
        <?php
            // Bước 1 lấy thông tin user đang login
            session_start();
            $user_login =  $_SESSION['username'];

            // Mình sẽ ví dụ user khác. không phải user đang login bằng cách thay 1 user bất kì
            //$user_login = "admin";

            // Bước 2: Lấy thông tin từ database để hiển thị lên màn hình
            $connection = mysqli_connect( "localhost" ,"root", "" , "brse_training");
            
            // Cần lấy thông tin. username, password, fullname, email, gender, language, country
            $sql = "SELECT username, password, fullname, email, gender, language, country FROM user WHERE username = '$user_login' ";
            $result = mysqli_query($connection , $sql);
            
            if(mysqli_num_rows($result) > 0) {
                // echo "Nếu có thì mình lưu giá trị vào hiển thị lên màn hình";
                // Vậy thì chỗ này là có dữ liệu: Vậy nên lấy thông tin của user ra màn hình 
                // Tạo các biến để chứa thông tin
                if ($result) {
                    // Hàm `mysql_fetch_row()` sẽ chỉ fetch dữ liệu một record mỗi lần được gọi
                    // do đó cần sử dụng vòng lặp While để lặp qua toàn bộ dữ liệu trên bảng posts
                    while ($row=mysqli_fetch_row($result)) {
                        echo "Username: ".$row[0]."<br>";
                        echo "password: ".$row[1]."<br>";
                        echo "fullname: ".$row[2]."<br>";
                        echo "email: ".$row[3]."<br>";
                        echo "gender: ".$row[4]."<br>";
                        echo "language: ".$row[5]."<br>";
                        echo "country: ".$row[6]."<br>";
                        $username = $row[0];
                        $password = $row[1];
                        $fullname = $row[2];
                        $email = $row[3];
                        $gender = $row[4];
                        $language = $row[5];
                        $country = $row[6];
                    }
                    // header('Location: ProfileEdit.php');
            
                
            }
            }
            else {
                $error = "Tài khoản ".$user_login." không tồn tại";
            }
            ?>
    </head>
<body>
    <div class="header">
        <div class="login-info">
            <span><?php if(isset($user_login)) echo $user_login ?></span>
            /
            <a href="Logout.php">Đăng Xuất</a>
        </div>
    </div>
    <div id="nav">

        <div id="titlehead">
            <a href="LoginUser.html" >Trang chủ</a>
             >>>>>>
            <a href="ProfileConfirm.html">Xác nhận chỉnh sửa</a>
        </div>

        <div id="left">
            <img src="paris.jpg" width="300px" height="300px">
            <b style="margin-top: 10px;">Ảnh đại diện</b>
        </div>

        <div id="right">
            <div id="title">
                <h3>Thông tin cá nhân</h3>
            </div>

            <!-- Chỗ này dùng để hiển thị lỗi -->

            <div class="error" style="margin-top:5px"><?php if(isset($error)) echo $error; ?></div>

            <!-- Chỗ này dùng để hiển thị lỗi -->

            <form action="ProfileDetail.php" method="POST"> 
                <div>
                    <h4>Tên tài khoản</h4>
                    <input type="text" name="username" value="<?php if(isset($username)) echo $username; ?>">
                </div>
                <div>
                    <h4>Mật khẩu</h4>
                    <div class="error"><?php if(isset($password_err)) echo $password_err ?></div>
                    <input type="password" name="password" value="<?php if(isset($password)) echo $password; ?>">
                </div>
                <div>
                    <h4>Nhập lại mật khẩu</h4>
                    <div class="error"><?php if(isset($repassword_err)) echo $repassword_err ?></div>
                    <input type="password" name="repassword" value="<?php if(isset($password)) echo $password ?>">
                </div>
                <div>
                    <h4>Tên thật</h4>
                    <div class="error"><?php if(isset($realName_err)) echo $realName_err ?></div>
                    <input type="text" name="realName"  value="<?php if(isset($fullname)) echo $fullname ?>">
                </div>
                <div>
                    <h4>Email</h4>
                    <div class="error"><?php if(isset($email_err)) echo $email_err ?></div>
                    <input type="email" name="email" value="<?php if(isset($email)) echo $email ?>">
                </div>
                <div>
                    <h4>Giới tính</h4>
                    <div class="error"><?php if(isset($gender_err)) echo $gender_err ?></div>
                    <input type="radio" name="gender" value="male" <?php if(isset($gender) && $gender == "male") echo "checked" ?>> Nam
                    <input type="radio" name="gender" value="female" <?php if(isset($gender) && $gender == "female") echo "checked"?>> Nữ
                </div>
                <div>
                    <h4>Ngôn ngữ lập trình</h4>
                    <input type="checkbox" name="lang[]" value="Php" <?php if(isset($language) && strstr($language, "Php"))  echo "checked"?> > PHP
                    <input type="checkbox" name="lang[]" value="java" <?php if(isset($language) && (strstr($language, "java,") || strstr($language, "java") )) echo "checked"?>> Java
                    <input type="checkbox" name="lang[]" value="Javascript" <?php if(isset($language) && strstr($language, "Javascript"))  echo "checked"?>> Javascript
                    <input type="checkbox" name="lang[]" value="C" <?php if(isset($language) && strstr($language, "C")) echo "checked"?>> C
                    <input type="checkbox" name="lang[]" value="Python" <?php if(isset($language) && strstr($language, "Python")) echo "checked"?>> Python
                </div>
                <div>
                    <select name="country">
                        <option value="">--Lựa chọn quốc tịch--</option>
                        <option value="Vietnamese" <?php if(isset($country) && $country == "Vietnamese")  echo "selected"?>>Vietnamese</option>
                        <option value="Japanese" <?php if(isset($country) && $country == "Japanese")  echo "selected"?>>Japanese</option>
                        <option value="Chinese" <?php if(isset($country) && $country == "Chinese")  echo "selected"?>>Chinese</option>
                        <option value="American" <?php if(isset($country) && $country == "American")  echo "selected"?>>American</option>
                    </select>
                </div>
            <br/>
                <div>
                    <input style="background-color: cadetblue; margin-left: 10px; border: 1px solid cadetblue;" type="submit" value="Chỉnh sửa" name="add-detail">
                </div>
        </div>
        
        </form>
    </div>
</body>    
</html>