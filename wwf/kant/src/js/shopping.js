$(function () {
    // var $obj = strObj(window.location.href);
    var $p = new Promise(function (res) {
        $.ajax({
            url: '../api/shopping_get.php',
            type: 'get',
            async: true,
            dataType: 'json',
            success: function (str) {
                res(str);
            }
        });
    });
    // console.log($p);
    $p.then(function (str) {
        // console.log(str);
        //购物车渲染
        $('.shop_jian').html(str.length);
        var $res = '';

        function init() {


            $res = '';
            $res += str.map(function (item) {
                return ` <div class="shopping_item" data-id="${item.gid}">
                        <dl class="clearFix">
                            <dd class="shop_wid1">
                                <input type="checkbox" class="check_list"  checked="checked">
                            </dd>
                            <dd class="shop_wid2">
                                <a href="###">
                                    <img src="../${item.images}">
                                </a>
                            </dd>
                            <dd class="shop_wid3">
                                <p>${item.namelist}</p>
                                <span>规格：${item.specification}</span>
                            </dd>
                            <dd class="shop_wid4 shopping_pice">¥ <span>${item.pice}</span></dd>
                            <dd class="shop_wid4 inp_sold">
                                <span class="inp_soldji">-</span>
                                <input type="text" maxlength="3" value="${item.shopnum}" class="shopping_inpnum">
                                <span class="inp_soldja">+</span>
                            </dd>
                            <dd class="shop_wid4 discounts">省 <b>${item.discounts}</b> 元</dd>
                            <dd class="shop_wid4 weight"><span>${item.weights}</span>千克</dd>
                            <dd class="shop_wid4 zong_pice">¥<span>${item.pice * item.shopnum - item.discounts}</span></dd>
                            <dd class="shop_wid1">
                                <a href="###" class="delete_item">
                                    删除
                                </a>
                            </dd>
                        </dl>
                    </div>`;
            }).join('');
            $('.shopping_main .shopping_bos').html($res); //渲染完成
        }
        init(); //初始化
        //购物车状态初始化
        function nones() {
            if ($('.shopping_bos .shopping_item').size() == 0) {
                $('.no_shop').css('display', 'block');
                $('.shopping_boxs').css('display', 'none');
                $('.shop_closes').css('background-color', '#B0B0B0').css('cursor', 'not-allowed').css('color', '#fff');
            } else {
                $('.no_shop').css('display', 'none');
                $('.shopping_boxs').css('display', 'block');
                $('.shop_closes').css('background-color', '').css('cursor', '').css('color', '');
            }
        }
        nones();
        //商品栏的打勾个数
        $('.cases').html($('.shopping_bos input[type=checkbox]:checked').length);
        //初始里有多少件商品
        var $total_num = 0; //商品总个数
        var $total_pice = 0; //商品总价
        for (var $i = 0; $i < $('.check_list').size(); $i++) {
            if ($('.check_list').eq($i).prop('checked')) {
                $total_num += $('.check_list').eq($i).parents('dl').children('.inp_sold').children('input').val() * 1;
                $total_pice += $('.check_list').eq($i).parents('dl').children('.zong_pice').children('span').html() * 1;
            }
        }
        $('.calcu_sold').html($total_num); //初始商品总个数
        $('.calcu_pice').html($total_pice.toFixed(2)); //初始商品总价格
        $('.total_prices').html($total_pice.toFixed(2)); //初始商品总价格

        $('#all').on('click', function () {
            $('.check_list').prop('checked', $('#all').prop('checked'));
            if ($(this).prop('checked') == false) {
                $('.shopping_item').css('background', '#fff');
                $total_num = 0; //商品总个数
                $total_pice = 0; //商品总价
                $('.cases').html($total_num);
                $('.calcu_sold').html($total_num);
                $('.calcu_pice').html($total_pice.toFixed(2));
                $('.total_prices').html($total_pice.toFixed(2));
            } else {
                $total_num = 0; //商品总个数
                $total_pice = 0; //商品总价
                for (var $i = 0; $i < $('.shopping_item').size(); $i++) {
                    $('.shopping_item').css('background', '');
                    $total_num += $('.shopping_inpnum').eq($i).val() * 1; //商品总个数
                    $total_pice += $('.zong_pice').eq($i).children('span').html() * 1; //商品总价
                }

                $('.cases').html($total_num);
                $('.calcu_sold').html($total_num);
                $('.calcu_pice').html($total_pice.toFixed(2));
                $('.total_prices').html($total_pice.toFixed(2));
            }
        });
        //点击checked
        function checks() {
            var $len = $('.check_list:checked').size(); //商品框打勾的数量
            var $total = $('.check_list').size(); //商品框总数量
            if ($len == $total) {
                // $('.cases').html($total);
                $('#all').prop('checked', true);
            } else {
                $('#all').prop('checked', false);
            }
        }
        $('.shopping_bos').on('click', '.check_list', function () {
            if ($(this).prop('checked') == false) {
                $(this).parents('.shopping_item').css('background', '#fff');
                $total_num = $total_num - $(this).parents('dl').children('.inp_sold').children('input').val() * 1;
                $('.calcu_sold').html($total_num);
                $total_pice = $total_pice - $(this).parents('dl').children('.zong_pice').children('span').html() * 1;
                $('.calcu_pice').html($total_pice.toFixed(2)); //初始商品总价格
                $('.total_prices').html($total_pice.toFixed(2)); //初始商品总价格
            } else if ($(this).prop('checked')) {
                $(this).parents('.shopping_item').css('background', '');
                $total_num = $total_num + $(this).parents('dl').children('.inp_sold').children('input').val() * 1;
                $('.calcu_sold').html($total_num);
                $total_pice = $total_pice + $(this).parents('dl').children('.zong_pice').children('span').html() * 1;
                $('.calcu_pice').html($total_pice.toFixed(2)); //初始商品总价格
                $('.total_prices').html($total_pice.toFixed(2)); //初始商品总价格

            }
            $('.cases').html($('.shopping_bos input[type=checkbox]:checked').length);
            checks();


        });
        //购买数量按钮

        for (let $i = 0; $i < $('.shopping_bos .shopping_item').size(); $i++) {
            if ($('.check_list').eq($i).prop('checked') == false) {
                $('#all').prop('checked', false);
            }
            $('.shopping_item .inp_soldji').eq($i).on('click', function () { //减
                if ($(this).next().val() <= 1) {
                    $(this).next().val(1);
                    $.ajax({
                        url: '../api/shop_num.php',
                        type: 'post',
                        data: {
                            shopnum: $(this).parent().children('input').val(),
                            gid: $(this).parents('.shopping_item').attr('data-id'),
                        },
                        success: function (str) {
                            console.log(str);
                        }
                    });
                } else {


                    $(this).parent().children().eq(1).val($(this).parent().children().eq(1).val() - 1);
                    $(this).parents('dl').children('.zong_pice').children().html($(this).next().val() *
                        $(this).parents('dl').children('.shopping_pice').children().html() -
                        $(this).parents('dl').children('.discounts').children().html());
                    $.ajax({
                        url: '../api/shop_num.php',
                        type: 'post',
                        data: {
                            shopnum: $(this).parent().children('input').val(),
                            gid: $(this).parents('.shopping_item').attr('data-id'),
                        },
                        success: function (str) {
                            console.log(str);
                        }
                    });
                    if ($(this).parents('dl').children().eq(0).children('.check_list').prop('checked')) {
                        $total_num--;
                        $('.calcu_sold').html($total_num);
                        // console.log($total_pice);
                        $total_pice = $total_pice -
                            $(this).parents('dl').children('.shopping_pice').children('span').html();
                        // console.log($total_pice);
                        $('.calcu_pice').html($total_pice.toFixed(2)); //初始商品总价格
                        $('.total_prices').html($total_pice.toFixed(2)); //初始商品总价格

                    }

                }

            });
            $('.shopping_item .inp_soldja').eq($i).on('click', function () { //加


                $(this).parent().children().eq(1).val($(this).parent().children().eq(1).val() * 1 + 1 * 1);
                $(this).parents('dl').children('.zong_pice').children().html($(this).prev().val() *
                    $(this).parents('dl').children('.shopping_pice').children().html() -
                    $(this).parents('dl').children('.discounts').children().html());
                $.ajax({
                    url: '../api/shop_num.php',
                    type: 'post',
                    data: {
                        shopnum: $(this).parent().children('input').val(),
                        gid: $(this).parents('.shopping_item').attr('data-id'),
                    },
                    success: function (str) {
                        console.log(str);
                    }
                });
                if ($(this).parents('dl').children().eq(0).children('.check_list').prop('checked')) {
                    $total_num++;
                    $('.calcu_sold').html($total_num);
                    $total_pice = $total_pice +
                        $(this).parents('dl').children('.shopping_pice').children('span').html() * 1;
                    $('.calcu_pice').html($total_pice.toFixed(2)); //初始商品总价格
                    $('.total_prices').html($total_pice.toFixed(2)); //初始商品总价格

                }

            });
            var $one_pice = 0;
            $('.shopping_item').on('focus', '.shopping_inpnum', function () { //获取焦点时获取总价 和 该栏的总价 ,商品总个数
                $one_pice = $(this).parents('dl').children('.zong_pice').children('span').html();
                $total_pice1 = $('.total_prices').html();
                $total_num1 = $('.calcu_sold').html();
                $one_num = $(this).val(); //该表单现在的数量
            });

            $('.shopping_bos').on('blur', '.shopping_inpnum', function () {

                if ($(this).val()) { //非空判断
                    var $reg = /^\d*$/;
                    var $res = $reg.test($(this).val());
                    if ($res == false) {
                        $(this).val('1');
                        $(this).parents('dl').children('.zong_pice').children().html($(this).val() *
                            $(this).parents('dl').children('.shopping_pice').children().html() -
                            $(this).parents('dl').children('.discounts').children().html());
                        $total_pice = $total_pice - $one_pice * 1 + $(this).parents('dl').children('.zong_pice').children().html() * 1;
                        $('.calcu_pice').html($total_pice.toFixed(2)); //初始商品总价格
                        $('.total_prices').html($total_pice.toFixed(2)); //初始商品总价格
                        $.ajax({
                            url: '../api/shop_num.php',
                            type: 'post',
                            data: {
                                shopnum: $(this).parent().children('input').val(),
                                gid: $(this).parents('.shopping_item').attr('data-id'),
                            },
                            success: function (str) {
                                console.log(str);
                            }
                        });
                    } else {
                        $(this).parents('dl').children('.zong_pice').children().html($(this).val() *
                            $(this).parents('dl').children('.shopping_pice').children().html() -
                            $(this).parents('dl').children('.discounts').children().html());
                        $total_pice = ($total_pice1 - $one_pice * 1) + $(this).parents('dl').children('.zong_pice').children().html() * 1;
                        $('.calcu_pice').html($total_pice.toFixed(2)); //初始商品总价格
                        $('.total_prices').html($total_pice.toFixed(2)); //初始商品总价格
                        $total_num = $total_num1 - $one_num + $(this).val() * 1; //失焦后的商品总数量
                        $('.calcu_sold').html($total_num); //初始商品总个数
                        $.ajax({
                            url: '../api/shop_num.php',
                            type: 'post',
                            data: {
                                shopnum: $(this).parent().children('input').val(),
                                gid: $(this).parents('.shopping_item').attr('data-id'),
                            },
                            success: function (str) {
                                console.log(str);
                            }
                        });
                    }
                } else {
                    $(this).val('1');
                    $.ajax({
                        url: '../api/shop_num.php',
                        type: 'post',
                        data: {
                            shopnum: $(this).parent().children('input').val(),
                            gid: $(this).parents('.shopping_item').attr('data-id'),
                        },
                        success: function (str) {
                            console.log(str);
                        }
                    });
                }

            });
            $('.delete_item').eq($i).on('click', function () { //删除数据库数据
                // confirm('你确定要把该商品移除购物车吗');
                if (confirm('你确定要把该商品移除购物车吗')) {
                    $.ajax({
                        type: 'get',
                        url: '../api/shopping_delete.php',
                        data: {
                            gid: $(this).parents('.shopping_item').attr('data-id'),
                        },
                        async: true,
                        // dataType: 'json',
                        success: function (str) {
                            // console.log(str);
                            if (str) { //删除成功删除此父节点
                                if ($('.check_list').eq($i).prop('checked')) {
                                    $total_pice = $total_pice - $('.zong_pice').eq($i).children('span').html() * 1;
                                    $('.total_prices').html($total_pice.toFixed(2)); //初始商品总价格
                                    $('.calcu_pice').html($total_pice.toFixed(2)); //初始总计
                                    $('.delete_item').eq($i).parents('.shopping_item').remove();
                                    checks();
                                    nones();
                                }

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
                }

            });

        }
        //删除选中商品
        $('.delete_shop').on('click', function () {
            if (confirm('你确定要把该商品移除购物车吗')) {
                for (var $i = 0; $i < $('.shopping_item').size(); $i++) {
                    if ($('.check_list').eq($i).prop('checked')) {

                        var $p = new Promise(function (res) {
                            $.ajax({
                                type: 'get',
                                url: '../api/shopping_delete.php',
                                data: {
                                    gid: $('.check_list').eq($i).parents('.shopping_item').attr('data-id'),
                                },
                                async: true,
                                // dataType: 'json',
                                success: function (str) {
                                    res(str);
                                }
                            });
                        });
                        $p.then(function (str) {
                            if (str) { //删除成功删除此父节点
                                var $chu_pice = 0;
                                for (var $i = 0; $i < $('.shopping_item').size(); $i++) {
                                    if ($('.check_list').eq($i).prop('checked')) {

                                        $('.check_list').eq($i).parents('.shopping_item').remove();
                                        checks();
                                        nones();
                                        for (var $i = 0; $i < $('.shopping_item').size(); $i++) {
                                            if ($('.check_list').eq($i).prop('checked')) {
                                                console.log('che');
                                                $total_pice = $chu_pice * 1 + $('.zong_pice').eq($i).children('span').html() * 1;
                                                $('.total_prices').html($total_pice.toFixed(2)); //初始商品总价格
                                                $('.calcu_pice').html($total_pice.toFixed(2)); //初始总计
                                            } else {
                                                $total_pice = $chu_pice;
                                                $('.total_prices').html($total_pice.toFixed(2)); //初始商品总价格
                                                $('.calcu_pice').html($total_pice.toFixed(2)); //初始总计
                                            }

                                        }

                                    }
                                }
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
                        });
                    }
                }
            }
        });
    });
});
$(function () {
    $('.shop_closes').on('click', function () {
        if (getCookie('name')) {
            alert('ok');
        } else {
            $('#kant_shopping .shop_login').css('display', 'block');
        }
    });
    $('.clox').on('click', function () {
        $('#kant_shopping .shop_login').css('display', 'none');
    });
});