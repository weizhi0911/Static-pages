$(function () {
    //遮罩
    $('.mem_arg_but .argee').on('click', function () {
        $('.nwadd_bla').css('display', 'none');
        $('#cw_callw_bbc').css('display', 'none');
    });
    // 注册
    var reg_inp = document.getElementsByClassName('reg_inp')[0];
    var $code = null; //随机数
    $('.reg_input .reg_inp').on('blur', function () {
        if (reg_inp.value) {
            var res = checkReg.tel(reg_inp.value.trim());
            if (res) {
                $('.reg_input>.hurdle').eq(0).css('border-color', '#dddddd');
                $('.reg_input .mem_tipicon01').css('display', 'block');
                $('.reg_p').html('').css('color', 'red').css('background-image', ' ');
                // $('.reg_inp').css('background', )
                // $isok = true;
            } else {
                // console.log(222);
                $('.reg_input>.hurdle').eq(0).css('border-color', 'red');
                $('.reg_input .mem_tipicon01').css('display', 'none');
                $('.reg_p').html('手机号码格式错误!').css('color', 'red').css('background-image', 'url(../img/kdlphicon.png)');
                // $isok = false;
            }
        } else {
            $('.reg_input>.hurdle').eq(0).css('border-color', 'red');
            $('.reg_input .mem_tipicon01').css('display', 'none');
            $('.reg_p').html('请输入手机号!').css('color', 'red').css('background-image', 'url(../img/kdlphicon.png)');
            // $isok = false;
        }
    });

    var $usersname = null;
    var $password = null;
    $('.reg_box .reg_input .reg_btn').on('click', function () {
        if (reg_inp.value.trim()) {
            var res = checkReg.tel(reg_inp.value.trim());
            // console.log(res);
            if (res) {
                //注册验证手机号有没注册
                $.ajax({
                    type: 'get',
                    url: '../api/reg_name',
                    data: {
                        name: $('.reg_input .reg_inp').val(),
                    },
                    success: function (str) {
                        if (str == 'yes') {
                            $usersname = $('.reg_input .reg_inp').val();
                            $('.reg_input>.hurdle').eq(1).css('display', 'block');
                            $('.reg_input>.reg_btn').eq(0).css('display', 'none');
                            $('.reg_input .mem_tipicon01').css('display', 'block');
                            $('.reg_p').html('').css('color', 'red').css('background-image', ' ');
                            // $('.reg_inp').css('background', )
                            send();
                            //可以注册
                        } else {
                            $('.reg_input .reg_p').html('手机号码已存在，请直接登录').css('color', 'red').css('background-image', 'url(../img/kdlphicon.png)');
                        }
                    }
                });

                // $getParagraph = $('<script scr="123"></script>');
                // console.log($getParagraph);
                // $('body').append($getParagraph);

            } else {
                $('.reg_input>.hurdle').eq(0).css('border-color', 'red');
                $('.reg_input .mem_tipicon01').css('display', 'none');
                $('.reg_p').html('手机号码格式错误!').css('color', 'red').css('background-image', 'url(../img/kdlphicon.png)');

            }
        } else {
            $('.reg_input>.hurdle').eq(0).css('border-color', 'red');
            $('.reg_input .mem_tipicon01').css('display', 'none');

            $('.reg_p').html('请输入手机号!').css('color', 'red').css('background-image', 'url(../img/kdlphicon.png)');
        }
    });
    $('.reg_btnyan').on('click', function () {
        if ($('.reg_btnyan').html() == '发送短信') {
            send();
        }
    });
    $tel_yan = null;

    function send() { //短信接口
        $timer = null;
        $time_num = 60;
        $code = ranNum();
        console.log($code);
        $tel = $('.reg_btn').prev().prev().children().eq(1).val();
        console.log($tel);
        var $p = new Promise(function (res) {
            $.ajax({
                type: 'get',
                url: '../api/sms.php',
                async: true,
                data: {
                    tel: $tel,
                    code: $code,
                },
                dataType: 'json',
                success: function (str) {
                    // console.log(str);
                    res(str);
                }
            });

        });
        $p.then(function (str) {
            if (str.reason == '操作成功') {
                $tel_yan = $('#login_inp .reg_inps').val();
                console.log($tel_yan);
                $('.reg_btn').on('click', 'null');
                $timer = setInterval(function () {
                    $time_num--;
                    // console.log($time_num);
                    $('.reg_btnyan').html($time_num + '秒后重新获取');
                    if ($time_num == 0) {
                        clearInterval($timer);
                        $('.reg_btnyan').html('发送短信');
                    }
                }, 1000);
            }
        });
    }
    // reg_btn2注册夜1下一步
    $('.reg_btn2').on('click', function () {
        if ($('.reg_input>.hurdle>.reg_btn1').val() == $code) {
            $('.reg_input').css('display', 'none');
            $('.reg_input2').css('display', 'block');
            $('.follow').css('background-position', '0px -83px');
        }
    });
    // 登录
    $('.login_menu span').eq(0).on('click', function () {
        // $('.login_yi').css('display', 'block');
        // $('.login_er').css('display', 'none');
        $('#login_pas').css('display', 'block');
        $('#login_inp').css('display', 'none');
        $('.login_menu').css('background-position', '54px 32px');
    });
    $('.login_menu span').eq(1).on('click', function () {
        // $('.login_yi').css('display', 'none');
        // $('.login_er').css('display', 'block');
        $('#login_pas').css('display', 'none');
        $('#login_inp').css('display', 'block');
        $('.login_menu').css('background-position', '235px 32px');
    });
    // 注册夜2密码
    $reg_pasok1 = false;
    $reg_pasok2 = false;

    $('.reg_input2>.hurdle>.reg_pass').on('blur', function () {
        if ($('.reg_input2>.hurdle>.reg_pass').val()) {
            var res = checkReg.psweasy($('.reg_input2 .hurdle .reg_pass').val());
            if (res) {
                $password = $('.reg_input2>.hurdle>.reg_pass').val();
                $reg_pasok1 = true;
                $('.reg_input2 .hurdle .mem_tipicon01').eq(0).css('display', 'block');
                $('.reg_input2 .reg_p').html(' ').css('background-image', ' ');
            } else {
                $('.reg_input2 .reg_p').html('密码格式不正确!').css('color', 'red').css('background-image', 'url(../img/kdlphicon.png)');
                $('.reg_input2 .mem_tipicon01').eq(0).css('display', 'none');
                $reg_pasok1 = false;
            }
            //要数据库
        } else {
            $('.reg_input2 .reg_p').html(' ').css('background-image', ' ');
            $('.reg_input2 .mem_tipicon01').eq(0).css('display', 'none');
            $(this).css('color', '#999');
            $(this).val('请输入密码').attr('type', 'text');
            $reg_pasok1 = false;
        }
    });
    //注册页2确认密码
    $('.reg_input2 .reg_que').on('blur', function () {
        if ($('.reg_input2 .reg_que').val()) {
            var res = checkReg.pwwagain($('.reg_input2 .reg_que').val(), $('.reg_input2 .hurdle .reg_inp').val());
            // console.log(res);
            if (res) {
                $reg_pasok2 = true;
                $(this).next().css('display', 'block');
            } else {
                $(this).next().css('display', 'none');
                $reg_pasok2 = false;
            }
            //要数据库
        } else {
            $(this).next().css('display', 'none');
            $(this).css('color', '#999').val('请确认密码');
            // $('.login_hint').html('请确认密码!').css('background-image', 'url(../img/kdlphicon.png)');
            $reg_pasok2 = false;
        }
    });
    //注册页2确认键
    $('.affirm').on('click', function () {
        console.log($reg_pasok1, $reg_pasok1);
        if ($reg_pasok1 && $reg_pasok2) {
            console.log($usersname, $password);
            $.ajax({
                type: 'post',
                url: '../api/reg_two.php',
                data: {
                    name: $usersname,
                    psw: $password,
                },
                success: function (str) {
                    console.log(str);
                    if (str == 'yes') {
                        $('.reg_input2').css('display', 'none');
                        $('.reg_input3').css('display', 'block');
                        $('.follow').css('background-position', '0px -166px');
                    }
                }
            });
        }
    });
    // 帐号密码登录帐号

    $login_ok = false;
    $login_ok2 = false;

    $('#login_pas .login_inp1').on('blur', function () {

        if ($('#login_pas .login_inp1').val()) {
            var res = checkReg.tel($('.login_inp1').val());
            if (res) {
                $('.login_hint').html(' ').css('background-image', ' ');
            } else {
                $('.login_hint').html('手机格式不正确').css('background-image', 'url(../img/kdlphicon.png)');
            }
            //要数据库
        } else {
            $(this).css('color', '#999');
            $('#login_pas .login_inp1').val('请输入邮箱/用户名/手机号');
            $('.login_hint').html('请输入邮箱/用户名/手机号!').css('background-image', 'url(../img/kdlphicon.png)');
        }
    });
    // 帐号密码登录密码
    $('#login_pas .login_inp2').on('blur', function () {
        if ($('.login_inp2').val()) {
            $('.login_hint2').html('').css('background-image', '');
            // var res = checkReg.tel($('.login_inp1').val());
            //要数据库
        } else {
            $(this).css('color', '#999');
            $(this).val('请输入密码').attr('type', 'text');
            $('.login_hint2').html('请输入密码!').css('background-image', 'url(../img/kdlphicon.png)');
            $login_ok = false;
        }
    });

    $('.login_yi').on('click', function () {
        var res = checkReg.tel($('.login_inp1').val());
        if (res) {
            $('.login_hint').html(' ').css('background-image', ' ');
            $.ajax({
                type: 'post',
                url: '../api/login_two.php',
                // async :true,
                data: {
                    name: $('#login_pas .login_inp1').val(),
                    psw: $('#login_pas .login_inp2').val(),
                },
                // dataType: 'json',
                success: function (str) {
                    // console.log(str);
                    var arr = JSON.parse(str);
                    if (arr.name) {
                        $('#login_pas .login_hint').html('')
                            .css('background-image', ' ');
                        //没有此号码
                    } else {
                        $('#login_pas .login_hint').html('此用户没有注册')
                            .css('background-image', 'url(../img/kdlphicon.png)');
                    }
                    if (arr.pass) {
                        $('#login_pas .login_hint2').html('')
                            .css('background-image', ' ');
                        //没有此号码
                    } else {
                        $('#login_pas .login_hint2').html('密码错误')
                            .css('background-image', 'url(../img/kdlphicon.png)');
                    }
                    if (arr.name && arr.pass) {
                        setCookie('name', $('#login_pas .login_inp1').val(), 7);
                        $(location).attr('href', '../index.html');
                        $('#login_pas .login_inp1').val('请输入邮箱/用户名/手机号');
                        $('#login_pas .login_inp2').val('');
                    }
                }
            });
        } else {
            $('.login_hint').html('手机格式不正确').css('background-image', 'url(../img/kdlphicon.png)');
        }

    });
    $lotel_ok = false;

    $('#login_inp .reg_inps').on('blur', function () {
        //登录手机验证
        if ($('#login_inp .reg_inps').val()) {
            var res = checkReg.tel($(this).val());
            if (res) {
                $('#login_inp .reg_p').css({
                    'color': ' ',
                    'background-image': ' '
                }).html(' ');
                $.ajax({
                    type: 'get',
                    url: '../api/reg_name',
                    data: {
                        name: $(this).val(),
                    },
                    success: function (str) {
                        if (str == 'no') {
                            $lotel_ok = true;
                            // console.log('可以');
                            $('#login_inp .reg_btn').css('cursor', 'pointer');
                        } else {
                            $lotel_ok = false;
                            $('#login_inp .reg_p').css({
                                'color': 'red',
                                'background-image': 'url(../img/kdlphicon.png)'
                            }).html('该手机号未注册');
                        }
                    }
                });
            } else {
                $lotel_ok = false;
                $('#login_inp .reg_p').css({
                    'color': 'red',
                    'background-image': 'url(../img/kdlphicon.png)'
                }).html('手机格式错误');
            }
        } else {
            console.log(21);
            $lotel_ok = false;
            $(this).css('color', '#999');
            $(this).val('请输入手机号码')
            $('#login_inp .reg_p').html('请输入手机号码!')
                .css('background-image', 'url(../img/kdlphicon.png)')
                .css('color', 'red');
        }
    });
    //登录手机获取验证码
    $('#login_inp .reg_btn').on('click', function () {
        if ($lotel_ok) {
            $(this).next().css('display', 'block');
            $(this).css('display', 'none');
            send();
        }
    });
    //手机登录的按钮
    $('#login_inp .login_er').on('click', function () {
        console.log($code);
        console.log($('#login_inp .reg_btn1').val());
        if ($tel_yan == $('#login_inp .reg_inps').val()) {
            $('#login_inp .reg_p').html(' ')
                .css('background-image', ' ')
                .css('color', ' ');
            if ($('#login_inp .reg_btn1').val() == $code) {
                setCookie('name', $('#login_inp .reg_inps').val(), 7);
                $(location).attr('href', '../index.html');
            }
        } else if ($('#login_inp .reg_inps').val() == '请输入手机号码') {
            $('#login_inp .login_er').on('click', null);
        } else if ($tel_yan != null && $tel_yan !== $('#login_inp .reg_inps').val()) {
            $('#login_inp .reg_p').html('手机号码不正确!')
                .css('background-image', 'url(../img/kdlphicon.png)')
                .css('color', 'red');
        }

    });
});