$(function () {
    var swiper = new Swiper('.swiper-container', {
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    $(".swiper-pagination-bullet").hover(function () {
        $(this).click(); //鼠标划上去之后，自动触发点击事件来模仿鼠标划上去的事件
    }, function () {
        swiper.autoplay.start(); //鼠标移出之后，自动轮播开启
    })
});
var $total = null; //总数据个数
var $totalPage = null; //总页数
var $page = 1; //页数
// 列表页渲染
$(function () {
    var $num = 8; //要数据条数
    init($num, $page);

    function init(num, page, type, list) {
        $.ajax({
            type: 'post',
            url: '../api/goos.php',
            data: {
                num: num,
                page: page,
                type: type,
                list: list,
            },
            success: function (str) {
                $totalPage = JSON.parse(str).num;
                $total = JSON.parse(str).total;
                // console.log($totalPage);
                // console.log($total);
                // res($page);

                var $arr = JSON.parse(str).data;
                // console.log($arr);
                var $html = '';
                $html += $arr.map(function (item) {
                    return `<div class="floban_list fl" data-id="${item.gid}">
                        <a href="" target="_blank">
                        <img src="../${item.images}">
                        </a>
                        <p>${item.namelist}</p>
                        <p>￥${item.pice}.00</p>
                    </div>`;
                }).join('');
                $('.floban_box1').html($html);
                for ($i = 0; $i < $('.floban1 .floban_list').size(); $i++) {
                    if ($i >= 4) {
                        $('.floban1 .floban_box1 .floban_list').eq($i).css('border-top', 'none');
                    }
                }
                res(page);
            }
        });
    }
    // 列表初始化
   
    var $state = 'mo'; //分页状态状态
    // 分页
    function res(pageNo) {
        $('#arrange_pag').paging({
            pageNo: pageNo,
            totalPage: Math.ceil($total / $totalPage), //总页数
            totalSize: $total, //数据总跳数
            callback: function (num) {
                $page = num;
                if ($state == 'mo') {
                    init($num, $page);
                } else if ($state == 'xiao') {
                    init($num, $page, 'pice');
                } else if ($state == 'da') {
                    init($num, $page, 'pice', 'true');
                }
            }
        });
    }

    $('.floban1 .arrange .da').on('click', function () { //降序
        console.log($num, $page);
        init($num, $page, 'pice', 'true');
        $state = 'da';
    });
    $('.floban1 .arrange .xiao').on('click', function () { //升序
        // console.log(2);
        init($num, $page, 'pice');
        $state = 'xiao';
    });
    $('.floban1 .arrange .mo').on('click', function () {
        // console.log($num,$page);
        init($num, $page);
        $state = 'mo';
    });

    //列表2
    init2(8, 2);

    function init2(num, page, type, list) {
        $.ajax({
            type: 'post',
            url: '../api/goos.php',
            data: {
                num: num,
                page: page,
                type: type,
                list: list,
            },
            success: function (str) {
                var $arr = JSON.parse(str).data;
                var $html = '';
                $html += $arr.map(function (item) {
                    return `<div class="floban_list fl" data-id="${item.gid}">
                        <a href="" target="_blank">
                        <img src="../${item.images}">
                        </a>
                        <p>${item.namelist}</p>
                        <p>￥${item.pice}.00</p>
                    </div>`;
                }).join('');
                $('.floban_box2').html($html);
                for ($i = 0; $i < $('.floban2 .floban_list').size(); $i++) {
                    if ($i >= 4) {
                        $('.floban2 .floban_box .floban_list').eq($i).css('border-top', 'none');
                    }
                }
            }
        });
    }
    //跳转列表页
    $('.floban_box').on('click', 'a', function () {
        // console.log(1);
        var $transfer = $(this).parent().attr('data-id');
        // console.log($transfer);
        $(this).attr('href', '../html/detail.html' + '?gid=' + $transfer);
    });
});
$(function () {
    $('.arrange').on('click', 'span', function () {
        for ($i = 0; $i < $('.arrange span').size(); $i++) {
            $('.arrange span').eq($i).removeClass('span_active');
        }
        $(this).addClass('span_active');
    });
});
$(function () {
    var $html2 = '';
    var $arr = [{
            img1: '../img/15156_G_1491464963427.jpg',
            img2: '../img/6022_G_1510625559130.jpg',
            container1: '前列金丹片怎么样 在大药房买价格很贵',
            container2: '罗补甫克比日丸适用于男人的什么疾病',
        },
        {
            img1: '../img/6022_G_1510625559130.jpg',
            img2: '../img/5997_G_1513835756092.jpg',
            container1: ' 在大药房买价格很贵',
            container2: '沙巴棕软胶囊每次吃多少粒的',
        }, {
            img1: '../img/6008_G_1529552363629.jpg',
            img2: '../img/15156_G_1491464963427.jpg',
            container1: '前列金丹片怎么样 在大药房买价格很贵',
            container2: '罗补甫克比日丸适用于男人的什么疾病',
        }, {
            img1: '../img/15156_G_1491464963427.jpg',
            img2: '../img/6008_G_1529552363629.jpg',
            container1: '生精片目前在大药房多少钱能买到的',
            container2: '罗补甫克比日丸适用于男人的什么疾病',
        },
        {
            img1: '../img/7280_G_1491990053689.jpg',
            img2: '../img/7209_G_1529895580066.jpg',
            container1: '五子衍宗片在长沙哪个药房有售的',
            container2: '生精片怎么样 目前价格是多少钱',
        },
        {
            img1: '../img/7209_G_1529895580066.jpg',
            img2: '../img/7280_G_1491990053689.jpg',
            container1: '前列金丹片怎么样 在大药房买价格很贵',
            container2: '罗补甫克比日丸适用于男人的什么疾病',
        },
    ];
    $html2 += $arr.map(function (item) {
        return `<div class="botart clearFix">
                        <div class="botart_top fl">
                            <img src="../img/${item.img1}">
                            <div class="botart_content">
                                <h3>前列安栓怎样 功能主治是什么</h3>
                                <p>有些男性朋友害怕吃药，面对自己已经得了前列腺炎的消息后，也打算不去吃药了，认为就算自己不吃药的话，前</p>
                                <a href="###">阅读更多></a>
                            </div>
                        </div>
                        <div class="botart_top fr clearFix">
                            <img src = "../img/${item.img2}">
                            <div class="botart_content">
                                <h3>前列安栓怎样 功能主治是什么</h3>
                                <p>有些男性朋友害怕吃药，面对自己已经得了前列腺炎的消息后，也打算不去吃药了，认为就算自己不吃药的话，前</p>
                                <a href="###">阅读更多></a>
                            </div>
                        </div>
                        <ul class="botart_bottom  clearFix fl">
                            <li>${item.container1}</li>
                            <li>${item.container2}</li>
                           <li>${item.container1}</li>
                            <li>${item.container2}</li>
                            <li>${item.container1}</li>
                            <li>${item.container2}</li>
                            <li>${item.container1}</li>
                            <li>${item.container2}</li>
                        </ul>
                </div>`
    }).join('');
    // for (var $i = 0; $i < 4; $i++) {
    //     $html1 += $html2
    // }
    $('.bot_box').html($html2);
    $('.impot_item').on('mouseover', 'li', function () {
        for ($i = 0; $i < $('.impot_item li').size(); $i++) {
            $('.impot_item li').eq($i).removeClass('cur');
            $('.botart').eq($i).css('display', 'none');
        }
        $(this).addClass('cur');
        $('.botart').eq($(this).index()).css('display', 'block');

    });
    $('.impot_item').on('mouseout', 'li', function () {
        // for ($i = 0; $i < $('.impot_item li').size(); $i++) {
        //     $('.impot_item li').eq($i).removeClass('cur');
        // }
    });
});