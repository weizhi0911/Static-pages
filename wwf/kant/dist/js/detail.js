$(function () {
    $.ajax({
        // type: 'post',
        url: '../api/shopping_get.php',
        async: true,
        dataType: 'json',
        success: function (str) {
            console.log(str.length);
            $('.shop_jian').html(str.length);
        }
    });
    var $obj = strObj(window.location.href);
    // console.log($obj);
    var $p = new Promise(function (res) {
        $.ajax({
            url: '../api/details.php',
            type: 'get',
            async: true,
            data: {
                gid: $obj.gid,
            },
            dataType: 'json',
            success: function (str) {
                res(str);
            }
        });

    });
    $p.then(function (str) {
        var $imagesxiao = str[0].imagesxiao.split(';');
        var $specification = str[0].specification.split(';');
        var $html = '';
        var $arr = str[0];
        var $stor_list = `<li>广州秀越店</li>
                          <li>济南店</li>
                          <li>上海店</li>`;
        var $stor_html = `<li class="cur">广州秀越店</li>`;
        // console.log($stor_list);
        for (var $i = 0; $i < 10; $i++) {
            $stor_html += $stor_list;
        }

        // console.log($arr);
        $html = `<div class="detail_left fl" data-id="${$arr.gid}">
                            <div class="da_img">
                                <img class="my-foto" src="../${$arr.images}">
                                <p>
                                    <span>6</span>盒起<span>232</span>元/盒,元/盒<span>9</span>盒起<span>230</span>
                                </p>
                            </div>
                            <div class="discounts_img clearFix">
                            ${$imagesxiao[0] = $imagesxiao[0] ? '<img src="../'+$imagesxiao[0]+'" alt="" class="cur">' : ''}
                            ${$imagesxiao[1] = $imagesxiao[1] ? '<img src="../'+$imagesxiao[1]+'" alt="">' : ''}
                            ${$imagesxiao[2] = $imagesxiao[2] ? '<img src="../'+$imagesxiao[2]+'" alt="">' : ''}
                            ${$imagesxiao[3] = $imagesxiao[3] ? '<img src="../'+$imagesxiao[3]+'" alt="">' : ''}
                            ${$imagesxiao[4] = $imagesxiao[4] ? '<img src="../'+$imagesxiao[4]+'" alt="">' : ''}
                                <span class="prev">
                                    <</span> <span class="next">>
                                </span>
                            </div>
                            <div class="v7_packaging">温馨提示：部分商品包装更换频繁，如货品与图片不完全一致，请以商品实物为准。</div>
                            <div class="icon_img clearFix">
                                <span>
                                    分享:
                                </span>
                                <ul class="clearFix">
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                                <a href="###">收藏</a>
                            </div>
                        </div>
                        <div class="detail_right fl">
                            <h2>
                                <i></i>
                               ${$arr.namelist} ${$specification[0]}
                            </h2>
                            <p class="date">最新效期&nbsp;:&nbsp;2020-05-31</p>
                            <div class="deteil_pice">
                                <span>会员价</span>
                                <i>￥</i>
                                ${$arr.pice}.00
                            </div>
                            <div class="summary">
                                <p><span>通 用 名 ：</span>&nbsp;驱白巴布期片</p>
                                <p><span>厂 家 :</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 新疆银朵兰维药股份有限公司</p>
                                <p>
                                    <span>批准文号 :</span>&nbsp; 国药准字Z20054981
                                </p>
                                <p class="guige"><span>规&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;格 :
                                        &nbsp;</span>
                                        ${$specification[0] = $specification[0] ? '<a href="###" class="cur">'+$specification[0]+'<b></b></a>' : ''}
                                        ${$specification[1] = $specification[1] ? '<a href="###">'+$specification[1]+'<b></b></a>' : ''}
                                        ${$specification[2] = $specification[2] ? '<a href="###">'+$specification[2]+'<b></b></a>' : ''}
                                        ${$specification[3] = $specification[3] ? '<a href="###">'+$specification[3]+'<b></b></a>' : ''}
                                        ${$specification[4] = $specification[4] ? '<a href="###">'+$specification[4]+'<b></b></a>' : ''}
                                </p>
                                <div class="discounts clearFix">
                                    <span class="fl">优惠套餐 :&nbsp;&nbsp;</span>

                                    <div class="fl">
                                        <a>金戈10片+万业强2片仅需345元<b></b></a>
                                    </div>
                                </div>
                                <div class="outlet">
                                    <span>附近门店 &nbsp;&nbsp;</span>
                                    <div class="as"><a href="###">广州越秀店</a><i></i>
                                    <div class="store">
                                    <ul class="clearFix">
                                    ${$stor_html}
                                    </ul>
                                    </div>
                                    </div>
                                    
                                </div>
                                <div class="count clearFix">
                                    <span>数&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 量:&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                    <div class="count_num fl">
                                        <input type="text" class="inp_num" value="1" maxlength="6">
                                        <div class="gos clearFix">
                                            <a href="###" class="count_prev"></a>
                                            <a href="###" class="count_next"></a>
                                        </div>
                                        <a href="###" class="fl goumai">立即购买</a>
                                        <a href="###" class="fl sub"><em></em>加入购物车</a>
                                    </div>
                                </div>
                                <p class="chu">
                                    本品为处方药，您成功预定后，展示药品的药店会根据处方审核结果主动与您联系。
                                    （如需协助请拨打
                                    <span class="red">400-168-0606</span>)
                                </p>
                                <div class="fuwu clearFix">
                                    <a href="###"><i></i>正品保证</a>
                                    <a href="###"><i></i>提供发票</a>
                                    <a href="###"><i></i>隐私包装</a>
                                </div>
                            </div>
                        </div>`;
        $('.detail_box').html($html).attr('data-id', $arr.gid);
        //放大镜
        $(".my-foto").imagezoomsl({
            descarea: ".my-container",
            zoomrange: [1, 12],
            magnifiereffectanimate: "fadeIn",
            magnifierborder: "none"
        });
        var $num = null; //放大镜存的数字
        $('.discounts_img').on('mouseover', 'img', function () {
            for ($i = 0; $i < $('.discounts_img img').size(); $i++) {
                $('.discounts_img img').eq($i).removeClass('cur');
            }
            $num = $(this).index();
            console.log($num);
            $(this).addClass('cur');
            $('.da_img img').attr('src', $(this).attr('src'));
        });
        $('.discounts_img .prev').on('click', function () {
            $num--;
            if ($num <= 0) {
                $num = 0;
            }
            for ($i = 0; $i < $('.discounts_img img').size(); $i++) {
                $('.discounts_img img').eq($i).removeClass('cur');
            }
            $('.discounts_img img').eq($num).addClass('cur');
            $('.da_img img').attr('src', $('.discounts_img img').eq($num).attr('src'));
        });
        $('.discounts_img .next').on('click', function () {
            $num++;
            if ($num >= 4) {
                $num = 4;
            }
            for ($i = 0; $i < $('.discounts_img img').size(); $i++) {
                $('.discounts_img img').eq($i).removeClass('cur');
            }
            $('.discounts_img img').eq($num).addClass('cur');
            $('.da_img img').attr('src', $('.discounts_img img').eq($num).attr('src'));
        });
        //新浪图标
        var top = 0;
        var lis = document.querySelectorAll('.icon_img ul li');
        // console.log(lis);
        for (var i = 0; i < lis.length; i++) {
            //    console.log($top);
            lis[i].style.backgroundPosition = '0px' + ' ' + top + 'px';
            top = top - 52;
        }
        $('.pop_close').on('click', function () {
            //弹窗
            $('.shop_tan').css('display', 'none');
        });
        $('.as_shop').on('click', function () {
            //弹窗
            $('.shop_tan').css('display', 'none');
        });
        $('.as_cear').on('click', function () {
            $('.shop_tan').css('display', 'none');
            $(this).attr('href', 'shopping.html' + '?gid=' + $('.detail_left').attr('data-id'));
        });
        //门店
        $('.store ul').on('mouseover', 'li', function () {
            for (var $i = 0; $i < $('.store ul li').size(); $i++) {
                $('.store ul li').eq($i).removeClass('cur');
            }
            $(this).addClass('cur');
        });
        $('.store ul').on('click', 'li', function () {
            for (var $i = 0; $i < $('.store ul li').size(); $i++) {
                $('.store ul li').eq($i).removeClass('cur');
            }
            $(this).addClass('cur');
            $('.outlet a').text($(this).text());
            $('.store').css('display', 'none');
        });
        $('.as').on('mouseover', function () {
            $('.store').css('display', 'block');
        });
        $('.as').on('mouseout', function () {
            $('.store').css('display', 'none');
        });
        //全国连锁店
        var $shop_list = ` <li>济南店</li>
                            <li>上海店</li>
                            <li>广州秀越</li>
                            <li>北京店</li>
                            <li>郑州店</li>`;
        var $shop_html = `<li class="cur">广州秀越</li>`;
        for (var $i = 0; $i < 8; $i++) {
            $shop_html += $shop_list;
        }
        $('.shop_dianlist ul').html($shop_html);

        //连锁店分店img
        var $page_list = `<div class="page_dian">
                            <div class="shop_dianimg">
                                <img src="../img/1543375121053940529.jpg" style="display:block;"
                                    class="dian_img1" alt="" style="display:none;">
                                <img src="../img/1543375121372460599.jpg" style="display:none;"
                                    class="dian_img2 " alt="">
                                <a href="###" class="dianimg_prev"></a>
                                <a href="###" class="dianimg_next"></a>
                            </div>
                            <div class="shop_tel">
                                <p><span></span>0771-5326077，0771-5326277</p>
                                <p>（8:30-18:00，每天）</p>
                                <p>
                                    <b></b>
                                    南宁市青秀区双拥路9-8号明湖花园B座一层7号（广西医科大学正门对面）
                                </p>
                            </div>
                        </div>
                        <div class="page_dian">
                            <div class="shop_dianimg">
                                <img src="../img/1542166224935109068.jpg" style="display:block;"
                                    class="dian_img1" alt="" style="display:none;">
                                <img src="../img/1542166224414977945.jpg" style="display:none;"
                                    class="dian_img2 " alt="">
                                <a href="###" class="dianimg_prev"></a>
                                <a href="###" class="dianimg_next"></a>
                            </div>
                            <div class="shop_tel">
                                <p><span></span>0512-69166980</p>
                                <p>（10:00-21:00，每天）</p>
                                <p>
                                    <b></b>
                                  苏州市平泷路251号苏州城市生活广场二层211号商铺
                                </p>
                            </div>
                        </div>`;
        var $page_html = '';
        for (var $i = 0; $i < $('.shop_dianlist ul li').size(); $i++) {
            $page_html += $page_list;
        }
        $('.shop_dianbox').html($page_html);
        $('.shop_dianbox .page_dian').eq(0).css('display', 'block');
        $('.shop_dianlist ul').on('mouseover', 'li', function () {
            for (var $i = 0; $i < $('.shop_dianlist ul li').size(); $i++) {
                $('.shop_dianlist ul li').eq($i).removeClass('cur');
                $('.shop_dianbox .page_dian').eq($i).css('display', 'none');
            }
            $(this).addClass('cur');
            $('.shop_dianbox .page_dian').eq($(this).index()).css('display', 'block');

        });
        //按钮
        var $dian_ok = true;
        $('.page_dian .shop_dianimg').on('click', 'a', function () {
            if ($dian_ok == true) {
                $('.dian_img1').css('display', 'none');
                $('.dian_img2').css('display', 'block');
            } else {
                $('.dian_img1').css('display', 'block');
                $('.dian_img2').css('display', 'none');
            }
            $dian_ok = !$dian_ok;

        });
        //商品数量
        var $input_num = $('.inp_num').val();
        $('.gos .count_prev').on('click', function () {
            $input_num++;
            $('.inp_num').val($input_num);
        });
        $('.gos .count_next').on('click', function () {
            $input_num--;
            if ($input_num <= 1) {
                $input_num = 1;
            }
            $('.inp_num').val($input_num);
        });
        $('.inp_num').on('blur', function () {
            var $reg = /^\d*$/;
            var $res = $reg.test($(this).val());
            // console.log($res);
            if ($res == false) {
                $('.inp_num').val($input_num);
            }
        });
        $('.guige').on('click', 'a', function () {
            for (var $i = 0; $i < $('.guige a').size(); $i++) {
                // console.log($('.guige a').size());
                $('.guige a').children().eq($i).css('background-image', '');
                // $('.guige a').eq($i).css('border', '1px solid #ccc');
                $('.guige a').eq($i).removeClass('cur');

            }
            $(this).children().css('background-image', 'url(../img/kdlphicon.png)');
            // $(this).css('border', '1px solid #ff7e6f');
            $(this).addClass('cur');
        });
        //加入购物车
        $('.sub').on('click', function () {
            //弹窗
            var $specification = $('.guige a.cur').text(); //规格
            var $shopnum = $('.count_num .inp_num').val(); //数量
            var $usersname = getCookie('name'); //用户名

            $.ajax({
                type: 'post',
                url: '../api/shopping.php',
                async: true,
                data: {
                    gid: $('.detail_box').attr('data-id'),
                    specification: $specification,
                    shopnum: $shopnum,
                    usersname: $usersname,
                },
                // dataType:'json',
                success: function (str) {
                    // console.log(str);
                    if (str) { //验证成功加入购物车
                        $('.shop_tan').css('display', 'block');
                        $.ajax({
                            // type: 'post',
                            url: '../api/shopping_get.php',
                            async: true,
                            dataType: 'json',
                            success: function (str) {
                                console.log(str.length);
                                $('.shop_jian').html(str.length);
                            }
                        });
                    }
                }
            });

        });

    });

});
$(function () {
    $('.shop_tan').css('height', $(window).height() + 'px');
});