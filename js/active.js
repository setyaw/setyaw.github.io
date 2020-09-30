$(document).ready(function () {
    var pro = "";
    
    var nama_produk=["Handbody Whitening (Pink)","Handbody Whitening (White)",
        "Night Cream Glowing","Cream Mata","Cream Collagen","Toner Whitening",
    "Facial Wash","Facial Wash Acne","Brightening Serum",
"Sunblock Whitening","Handbody Whitening Day","Body Whitening Super Premium"];

    var harga=["Rp80.000","Rp80.000","Rp75.000","Rp75.000","Rp75.000",
    "Rp75.000","Rp75.000","Rp75.000","Rp95.000","Rp75.000","Rp105.000","Rp140.000"];
    for (var i = 1; i <= 12; i++) {
        pro += '<div class="single-products-catagory clearfix">\
                    <a href="#">\
                        <img src="img/cosmetic/p' + i + '.jpeg" alt="">\
                        <div class="hover-content wame">\
                            <p class="harga">'+harga[(i-1)]+'</p>\
                            <h4 class="nama_produk">&#9993; '+nama_produk[(i-1)]+'</h4>\
                        </div>\
                    </a>\
                </div>';
    }
    $("#div_produk").html(pro).trigger("create change");
    
    $(".wame").click(function () {
       var btn=$(this);
       var harga=btn.find(".harga").text();
       var nama="Info Produk: \n"+btn.find(".nama_produk").text();
       var myOtherUrl ="https://wa.me/6281359360438?text=" + encodeURIComponent(nama+" = ("+harga+")");
       var win = window.open(myOtherUrl, '_blank');
  win.focus();
    });
    
    'use strict';

    var $window = $(window);

    // :: 1.0 Masonary Gallery Active Code

    var proCata = $('.amado-pro-catagory');
    var singleProCata = ".single-products-catagory";

    if ($.fn.imagesLoaded) {
        proCata.imagesLoaded(function () {
            proCata.isotope({
                itemSelector: singleProCata,
                percentPosition: true,
                masonry: {
                    columnWidth: singleProCata
                }
            });
        });
    }

    // :: 2.1 Search Active Code
    var amadoSearch = $('.search-nav');
    var searchClose = $('.search-close');

    amadoSearch.on('click', function () {
        $('body').toggleClass('search-wrapper-on');
    });

    searchClose.on('click', function () {
        $('body').removeClass('search-wrapper-on');
    });

    // :: 2.2 Mobile Nav Active Code
    var amadoMobNav = $('.amado-navbar-toggler');
    var navClose = $('.nav-close');

    amadoMobNav.on('click', function () {
        $('.header-area').toggleClass('bp-xs-on');
    });

    navClose.on('click', function () {
        $('.header-area').removeClass('bp-xs-on');
    });

    // :: 3.0 ScrollUp Active Code
    if ($.fn.scrollUp) {
        $.scrollUp({
            scrollSpeed: 1000,
            easingType: 'easeInOutQuart',
            scrollText: '<i class="fa fa-angle-up" aria-hidden="true"></i>'
        });
    }

    // :: 4.0 Sticky Active Code
    $window.on('scroll', function () {
        if ($window.scrollTop() > 0) {
            $('.header_area').addClass('sticky');
        } else {
            $('.header_area').removeClass('sticky');
        }
    });

    // :: 5.0 Nice Select Active Code
    if ($.fn.niceSelect) {
        $('select').niceSelect();
    }

    // :: 6.0 Magnific Active Code
    if ($.fn.magnificPopup) {
        $('.gallery_img').magnificPopup({
            type: 'image'
        });
    }

    // :: 7.0 Nicescroll Active Code
    if ($.fn.niceScroll) {
        $(".cart-table table").niceScroll();
    }

    // :: 8.0 wow Active Code
    if ($window.width() > 767) {
        new WOW().init();
    }

    // :: 9.0 Tooltip Active Code
    if ($.fn.tooltip) {
        $('[data-toggle="tooltip"]').tooltip();
    }

    // :: 10.0 PreventDefault a Click
    $("a[href='#']").on('click', function ($) {
        $.preventDefault();
    });

    // :: 11.0 Slider Range Price Active Code
    $('.slider-range-price').each(function () {
        var min = jQuery(this).data('min');
        var max = jQuery(this).data('max');
        var unit = jQuery(this).data('unit');
        var value_min = jQuery(this).data('value-min');
        var value_max = jQuery(this).data('value-max');
        var label_result = jQuery(this).data('label-result');
        var t = $(this);
        $(this).slider({
            range: true,
            min: min,
            max: max,
            values: [value_min, value_max],
            slide: function (event, ui) {
                var result = label_result + " " + unit + ui.values[0] + ' - ' + unit + ui.values[1];
                console.log(t);
                t.closest('.slider-range').find('.range-price').html(result);
            }
        });
    });
});