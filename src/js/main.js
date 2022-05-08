import $ from 'jquery';
import '@popperjs/core';
import 'bootstrap/dist/js/bootstrap';

import {App} from './parts/app.js'
import {Plugins} from './parts/plugins.js'
import {Parts} from './parts/parts.js'


// export for others scripts to use
window.$ = $;
window.jQuery = jQuery;

$(function () {

    window.windowWidth = $(window).width();
    window.windowHeight = $(window).height();

    window.isiPhone = navigator.userAgent.toLowerCase().indexOf('iphone');
    window.isiPad = navigator.userAgent.toLowerCase().indexOf('ipad');
    window.isiPod = navigator.userAgent.toLowerCase().indexOf('ipod');

    //Functions List Below

    window.app = new App();
    window.app.init();

    window.plugins = new Plugins();
    window.plugins.init();

    window.parts = new Parts();
    window.parts.init();

});

// ===========================================================================

// Select2 JS
// $(document).ready(function() {
//     $('.select-dropdown').select2();
// });


// fancy box
require('@fancyapps/ui/src/Fancybox/Fancybox');

// ===========================================================================



//header
$(window).scroll(function(){
    var sticky = $('header'),
        scroll = $(window).scrollTop();

    if (scroll >= 120) sticky.addClass('header-fixed');
    else sticky.removeClass('header-fixed');
});
var p = $( "header" );
$( ".fake-header" ).css( "height", p.innerHeight() );


//mega menu script
// $("[data-menu='true']").click(function(){
//     var isOpen = $(this).hasClass("active");
//     var siblings = $(this).parent().siblings().find(".active");
//     var openedMenu = siblings.data("menu-name");
//     $(openedMenu).toggleClass("show");
//     siblings.removeClass("active");
//     $(this).toggleClass("active");
//     var megamenu = $(this).data("menu-name");
//     $(megamenu).toggleClass("show");
//     if(!isOpen){
//         $("body").addClass("fixed-bg");
//     }else{
//         $("body").removeClass("fixed-bg");
//     }
// });

// megamnu script
$(".humburger-icon").click(function () {
    $(".megamenu-drawer").addClass("show");
    $("body").addClass("fixed-bg");
    $(".humburger-icon").addClass("open");
});

// megamnu script
$(".close-trigger").click(function () {
    $(".megamenu-drawer").removeClass("show");
    $("body").removeClass("fixed-bg");
    $(".humburger-icon").removeClass("open");
});



//toggle class event
$("[data-menu='true']").click(function(){
    var isOpen = $(this).hasClass("open");
    var siblings = $(this).parent().siblings().find(".open");
    var openedMenu = siblings.data("menu-name");
    $(openedMenu).toggleClass("show");
    siblings.removeClass("open");
    $(this).toggleClass("open");
    var megamenu = $(this).data("menu-name");
    $(megamenu).toggleClass("show");
});

$(".menu-bg-overlay, .menu-close").click(function () {
    $(".custom-mega-menu").removeClass("show");
    $("body").removeClass("fixed-bg");
    $(".mega-menu").removeClass("open");
});

$(".mega-menu-back").click(function () {
    $(".custom-mega-menu").removeClass("show");
    $("body").removeClass("fixed-bg");
    $(".mega-menu").removeClass("open");
});


// tab filter js

$(document).ready(function(){
    $(".filter-tab-btn").click(function(){
        var value = $(this).attr('data-filter');

        if(value == "all")
        {
            $('.filter').show('700');
        }
        else
        {
            $(".filter").not('.'+value).hide('2000');
            $('.filter').filter('.'+value).show('2000');
        }

        var filterOpen = $(this).hasClass("active");

        if(filterOpen){
            $('.filter-tab-btn').removeClass('active');
        }else {
            var siblings = $('.filter-tab-nav').find(".active");
            siblings.removeClass('active');
            $(this).addClass('active');
        }
    });

});

// END tab filter js
