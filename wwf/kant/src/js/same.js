// 头部
$(function () {
    function init() {
        var nums = getCookie('name');
        if (nums) {
            $('.p_login1').css('display', 'none');
            $('.p_login2').css('display', '').html('欢迎' + nums);
            $('.p_exit1').css('display', 'none');
            $('.p_exit2').css('display', '');
        } else {
            $('.p_login1').css('display', '');
            $('.p_login2').css('display', 'none').html('');
            $('.p_exit1').css('display', '');
            $('.p_exit2').css('display', 'none');
        }
    }
    init();
    $('.p_exit2').on('click', function () {
        removeCookie('name');
        init();
    });
    $('.serve_li').on('mouseenter', function () {
        // console.log(21);
        $(this).children().eq(1).css('display', 'block');
        $(this).children().eq(0).css('display', 'none');
    });
    $('.serve_li').on('mouseleave', function () {
        $(this).children().eq(1).css('display', 'none');
        $(this).children().eq(0).css('display', 'block');
    });
    $('.last_li').on('mouseenter', function () {
        // console.log(21);
        $('.kdlmcode').css('display', 'block');
        $('.last_li .users_triangle').css('display', 'none');
        $('.last_li .users_triangle2').css('display', '');
    });
    $('.last_li').on('mouseleave', function () {
        // console.log(21);
        $('.kdlmcode').css('display', 'none');
        $('.last_li .users_triangle').css('display', '');
        $('.last_li .users_triangle2').css('display', 'none');
    });
    // 导航部分
    $('.form_navlist1').on('mouseenter', function () {
        $('.form_navlist1 .nav_triangle1').css('display', 'none');
        $('.form_navlist1 .nav_triangle2').css('display', 'block');
        $('.form_navlist1 .secondnav').slideDown();
        $('.form_navlist2 .secondnav').css('display', 'none');
    });
    $('.form_navlist1').on('mouseleave', function () {
        $('.form_navlist1 .nav_triangle1').css('display', 'block');
        $('.form_navlist1 .nav_triangle2').css('display', 'none');
        $('.form_navlist1 .secondnav').slideUp();
    });
    $('.form_navlist2').on('mouseenter', function () {
        $('.form_navlist2 .nav_triangle1').css('display', 'none');
        $('.form_navlist2 .nav_triangle2').css('display', 'block');
        $('.form_navlist2 .secondnav').slideDown();
        $('.form_navlist1 .secondnav').css('display', 'none');

    });
    $('.form_navlist2').on('mouseleave', function () {
        $('.form_navlist2 .nav_triangle1').css('display', 'block');
        $('.form_navlist2 .nav_triangle2').css('display', 'none');
        $('.form_navlist2 .secondnav').slideUp();
    });
});

// 导航

// 导航列表
$(function () {
    // //全部商品
    var lis = document.querySelectorAll('.section li');
    var item_lef = document.querySelectorAll('.item_lef');

    var num = 0;
    for (var i = 0; i < item_lef.length; i++) {
        // console.log(num);
        item_lef[i].style.top = num + 'px';
        num = num - 41;
    }

    for (var i = 0; i < lis.length; i++) {
        $('.section li h3 a').attr('class', 'col');
    }
});
$(function () {
    var $res1 = '';
    var $res2 = '';

    var $html = `<div class="diseases">
                    <dl>
                    <dd class="ttit">
                          <a title="肝癌">肝癌</a>
                    </dd>
                    <dd class="tcon">
                        <a href="###" title="多吉美">多吉美</a> <a
                        href="###" title="肝复乐片">肝复乐片</a> <a
                        href="###" title="化癥回生口服液">化癥回生口服液</a> <a
                        href="" title="肝复乐胶囊">肝复乐胶囊</a> <a
                        href="###" title="复方万年青胶囊">复方万年青胶囊</a> <a
                        href="###" title="金龙胶囊">金龙胶囊</a> <a
                        href="###" title="金克">金克</a> </dd>
                    </dl>
                 </div>
                 <div class="diseases">
                     <dl>
                        <dd class="ttit">
                            <a href="###" title="肺癌">肺癌</a>
                        </dd>
                    <dd class="tcon">
                     <a href="###" title="泰瑞沙">泰瑞沙</a> <a
                         href="###" title="易瑞沙">易瑞沙</a> 
                          <a href="###" title="安体舒">安体舒</a> <a
                            href="###" title="复方红豆杉胶囊">复方红豆杉胶囊</a> <a
                            href="###" title="复方万年青胶囊">复方万年青胶囊</a> <a
                            href="###" title="清肺散结丸">清肺散结丸</a> <a
                            href="###" title="益肺清化颗粒">益肺清化颗粒</a> <a
                            href="###" title="赛可瑞">赛可瑞</a> </dd>
                    </dl>
                </div>`;
    // console.log($html);
    for ($i = 0; $i < 4; $i++) {
        $res1 += $html;
    }
    for ($i = 0; $i < 3; $i++) {
        $res2 += $html;
    }
    // console.log($res);
    for ($j = 0; $j < $('.section li').size(); $j++) {
        if ($j % 2 == 0) {
            $('.section .item_lef').eq($j).html($res1);
        } else {
            $('.section .item_lef').eq($j).html($res2);
        }
    }
});

//底部
$(function () {
    var $html = '';
    for ($i = 0; $i < 6; $i++) {
        $html += `<div class="fl guide_item">
                       <h3>购物指南</h3>
                       <ul class="guide_uls">
                             <li>
                               <a href = "###">
                               退货换货流程
                                </a>
                            </li>
                            <li>
                            <a href = "###">
                                订购方式
                                </a>
                            </li>
                            <li>
                            <a href = "###">
                                订购流程
                                </a>
                            </li>
                            <li>
                            <a href = "###">
                                用户注册
                                </a>
                            </li>
                            <li>
                            <a href = "###">
                                订单管理
                                </a>
                            </li>
                       </ul>
                   </div>`;
    }
    $('.guide_box').html($html);
});
//购物车点击加数量
// $(function () {
//     $('.as_cear').on('click', function () {
//         console.log(1);
//     });
// });