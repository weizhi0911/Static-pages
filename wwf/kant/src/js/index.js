$(function () {
    var $html = '<li class="tab  cur">广州越秀</li>';
    for ($i = 0; $i < 17; $i++) {
        $html += `<li class="tab">北京朝阳</li>
                  <li class="tab">广州海珠</li>`;
    }
    // console.log($html);
    $('#scrollul').html($html);
});

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
        $('.form_navlist1 .secondnav').css('display', 'block');
    });
    $('.form_navlist1').on('mouseleave', function () {
        $('.form_navlist1 .nav_triangle1').css('display', 'block');
        $('.form_navlist1 .nav_triangle2').css('display', 'none');
        $('.form_navlist1 .secondnav').css('display', 'none');
    });
    $('.form_navlist2').on('mouseenter', function () {
        $('.form_navlist2 .nav_triangle1').css('display', 'none');
        $('.form_navlist2 .nav_triangle2').css('display', 'block');
        $('.form_navlist2 .secondnav').css('display', 'block');
    });
    $('.form_navlist2').on('mouseleave', function () {
        $('.form_navlist2 .nav_triangle1').css('display', 'block');
        $('.form_navlist2 .nav_triangle2').css('display', 'none');
        $('.form_navlist2 .secondnav').css('display', 'none');
    });
});

// 轮播图按钮
$(function () {
    $('.swiper-container').on('mouseenter', function () {
        $('#banner_slideshow .swiper-button-next').css('display', 'block');
        $('#banner_slideshow .swiper-button-prev').css('display', 'block');
    });
    $('.swiper-container').on('mouseleave', function () {
        $('#banner_slideshow .swiper-button-next').css('display', 'none');
        $('#banner_slideshow .swiper-button-prev').css('display', 'none');
    });
});
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

//banner药店分店部分
$(function () {
    for (let $i = 0; $i < $('#scrollul .tab').size(); $i++) {

        $('#scrollul .tab').eq($i).on('click', function () {
            for (var $j = 0; $j < $('#scrollul .tab').size(); $j++) {
                // $('#img_list .lazy').eq($i).attr('src', '//imgcdn.baiji.com.cn//data/store/bjhd-01.jpg');
                $('#scrollul .tab').eq($j).removeClass('cur');
                $('#img_list .jqgrid_m').eq($j).css('display', 'none');
            }
            // console.log($('#scrollul .tab').size());
            // console.log($('#img_list .jqgrid_m').size());
            $(this).addClass('cur');
            // console.log($(this).index());
            $('#img_list .jqgrid_m').eq($(this).index()).css('display', 'block');
            // console.log($('.jqgrid_m').eq($(this).index()));
        });
    }

    $('.allstore_buta').on('click', function () {
        $(this).css('background-position', '-419px -2px');
        $(this).next().css('background-position', '-482px -2px');
        $('#scrollul').css('margin-top', '0px');
    });
    $('.allstore_butb').on('click', function () {
        $(this).css('background-position', '-440px -2px');
        $(this).prev().css('background-position', '-461px -2px');
        $('#scrollul').css('margin-top', '-200px');
    });
});
$(function () {
    var $data = [{
        shoptype: '限时抢购',
        skin1: '皮肤性病',
        skin2: '眼',
        skin3: '医疗器械',
        skin4: '保健食品',
        skin5: '妇儿',
    }, {
        shoptype: '福尔',
        skin1: '皮肤性病',
        skin2: '保健食品',
        skin3: '医疗器械',
        skin4: '泌尿生殖',
        skin5: '妇儿',
    }, {
        shoptype: '限时抢购',
        skin1: '皮肤性病',
        skin2: '风湿免疫',
        skin3: '医疗器械',
        skin4: '皮肤性病',
        skin5: '消化',
    }, {
        shoptype: '皮肤性病',
        skin1: '风湿免疫',
        skin2: '肿瘤',
        skin3: '医疗器械',
        skin4: '保健食品',
        skin5: '精神',
    }, ];
    var $p = new Promise(function (res) {
        $.ajax({
            type: 'post',
            url: 'api/goos.php',
            async: true,
            data: {
                page: '1',
                num: '4',
            },
            dataType: 'json',
            success: function (str) {
                res(str);
            }
        });
    });
    $p.then(function (str) {
        // console.log(str);
        var $arr = str.data;
        var $html = '';
        for (var $i = 0; $i < 5; $i++) {
            // console.log($i);
            $html = $arr.map(function (item, i) {

                return `<div class="sp_pagehead">
                        <div class="sp_list">
                        <h3>限时抢购</h3>
                            <p class="sp_listit">
                            <span class="cur">限时抢购</span>
                            <span>风湿免疫</span>
                            <span>保健食品</span>
                            <span>精神</span>
                            <span>消化</span>
                            </p>
                            <div class="swiper_box">
                          <div class="swiper-container swiper-container${i}">
                              <div class="swiper-wrapper">
                                  <div class="swiper-slide" data-hash="slide1">
                                      <div class="sp_item" data-id="${item.gid}">
                                          <p>${item.namelist}</p>
                                          <p class="sp_itempice">￥${item.pice}</p>
                                          <p class="sp_itemimg">
                                              <a href="###" target="_blank">
                                                  <img
                                                      src = "${item.images}" >
                                              </a>
                                          </p>
                                      </div>
                                  </div>
                                  <div class="swiper-slide" data-hash="slide1">
                                      <div class="sp_item" data-id="${item.gid}">
                                          <p>${item.namelist}</p>
                                          <p class="sp_itempice">￥${item.pice}</p>
                                          <p class="sp_itemimg">
                                              <a href="###" target="_blank">
                                                  <img
                                                      src = "${item.images}" >
                                              </a>
                                          </p>
                                      </div>
                                  </div>
                                <div class="swiper-slide" data-hash="slide1">
                                      <div class="sp_item" data-id="${item.gid}">
                                          <p>${item.namelist}</p>
                                          <p class="sp_itempice">￥${item.pice}</p>
                                          <p class="sp_itemimg">
                                              <a href="###" target="_blank">
                                                  <img
                                                      src = "${item.images}" >
                                              </a>
                                          </p>
                                      </div>
                                  </div>
                                  <div class="swiper-slide" data-hash="slide1">
                                      <div class="sp_item" data-id="${item.gid}">
                                          <p>${item.namelist}</p>
                                          <p class="sp_itempice">￥${item.pice}</p>
                                          <p class="sp_itemimg">
                                              <a href="###" target="_blank">
                                                  <img
                                                      src = "${item.images}" >
                                              </a>
                                          </p>
                                      </div>
                                  </div>
                              </div>
                              <!-- Add Pagination -->
                              <div class="swiper-pagination swiper-p${i}"></div>
                              <!-- Add Arrows -->
                              <div class="swiper-button-next swiper-button-next${i}"></div>
                              <div class="swiper-button-prev swiper-button-prev${i}"></div>
                          </div>
                          </div>
                          <!-- Swiper JS -->
                     
                       

                          <!-- Initialize Swiper -->
                          <script>
                              var swiper${i} = new Swiper('.swiper-container${i}', {
                                  spaceBetween: 30,
                                  loop: true,
                                  pagination: {
                                      el: '.swiper-p${i}',
                                      clickable: true,
                                  },
                                  navigation: {
                                      nextEl: '.swiper-button-next${i}',
                                      prevEl: '.swiper-button-prev${i}',
                                  },
                              });
                          </script>
                        </div>
                    </div>`;
            });
        }
        $('#sp_page').html($html);
        for (let $i = 0; $i < $('.sp_listit').size(); $i++) {
            $('.sp_pagehead .sp_listit').eq($i).on('click', 'span', function () {
                for (var $j = 0; $j < $('.sp_listit span').size(); $j++) {
                    $('.sp_listit').eq($i).children('span').eq($j).removeClass('cur');
                }
                $(this).addClass('cur');

            });
        }
        $('#sp_page').on('click', 'img', function () {
            $(this).parent().attr('href', 'html/detail' + '?gid=' + $(this).parents('.sp_item').attr('data-id'))
        });
    });

});
// 主页商品列表初始化
$(function () {
    // console.log(1);
    var sphpro = document.getElementsByClassName('sphpro')[0];
    $.ajax({
        type: 'post',
        url: 'api/goos.php',
        data: {
            num: '8',
            page: '1',
        },
        success: function (str) {
            var arr = JSON.parse(str).data;
            // console.log(arr);
            var res = '<li style="paading:0px;margin-left:0px;">' +
                '<img src="img/1548753108523952341.jpg" class="sphpro_img">' +
                '</li>';
            res += arr.map(function (item) {
                return `<li data-id="${item.gid}">
                                <div>
                                <a href="" target="_blank">
                                    <img src="${item.images}">
                                    </a>
                                </div>
                                <p>
                                    ${item.namelist}${item.guige}
                                </p>
                                <p>
                                    ￥${item.pice}.00
                                </p>
                            </li>`;
            }).join('');
            sphpro.innerHTML = res;
            var jie = '<a href = "###">' + '男科频道' + '</a>';
            var shou = '';
            for (var i = 0; i < 8; i++) {
                shou += jie;
            }
            var $lisa = '<div style="padding:0px;margin:0px;">' + '</div>' +
                '<div class="uls" style="padding:0px;margin:0px;">' + shou +
                '</div>';
            // console.log($lisa);
            var $list = $('.sphpro li').eq(4).html();
            // console.log($list);
            $('.sphpro li').eq(4).html($list + $lisa);
            // console.log($('.sphpro li'));
            $('.sphpro').on('click', 'img', function () {
                $(this).parent().attr('href', 'html/detail' + '?gid=' + $(this).parents('li').attr('data-id'));
            });
        }
    });


});
//购物车数量
$(function () {
    // function shop_num() {
    //     $.ajax({
    //         // type: 'post',
    //         url: '../api/shopping_get.php',
    //         async: true,
    //         dataType: 'json',
    //         success: function (str) {
    //             // console.log(str.length);
    //             $('.shop_jian').html(str.length);
    //         }
    //     });
    // }

    function shop_num1() {
        $.ajax({
            // type: 'post',
            url: 'api/shopping_get.php',
            async: true,
            dataType: 'json',
            success: function (str) {
                // console.log(str.length);
                $('.shop_jians').html(str.length);
            }
        });
    }
    shop_num1();
    // shop_num();

});
$(function () {
    var $html1 = '';
    var $html2 = '';
    var $html3 = '';

    var $prod_ul = '<li>' + '金戈' + '</li>' + '<li>' + '肽口服溶液' + '</li>';
    for ($i = 0; $i < 15; $i++) {
        $html1 += $prod_ul;
    }
    for ($i = 0; $i < 11; $i++) {
        $html2 += $prod_ul;
    }
    for ($i = 0; $i < 10; $i++) {
        $html3 += $prod_ul;
    }
    $('.prod_lief').eq(0).html($html1);
    $('.prod_lief').eq(1).html($html2);
    $('.prod_lief').eq(2).html($html3);
    $('.prod').on('click', 'span', function () {
        for ($i = 0; $i < $('.prod_lief').size(); $i++) {
            $('.prod_lief').eq($i).css('display', 'none');
            $('.prod_head span').eq($i).removeClass('prod_head_active');
        }
        $(this).addClass('prod_head_active');
        $('.prod_lief').eq($(this).index()).css('display', 'block');
    });
});