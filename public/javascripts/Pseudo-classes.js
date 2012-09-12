/**
 * Created with JetBrains WebStorm.
 * User: mrj
 * Date: 12-9-6
 * Time: 下午5:29
 * To change this template use File | Settings | File Templates.
 */

function selectChange(){
    var selectorObj = document.getElementById("selector");
    switch(selectorObj.value){
        case '': break;
        case 'after&&before': $("<link>").attr({ rel: "stylesheet",type: "text/css",href: '../stylesheets/Pseudo-classes/after&&before.css' }).appendTo("head");
            break;
        case ':last-child': $("<link>").attr({ rel: "stylesheet",type: "text/css",href: '../stylesheets/Pseudo-classes/:last-child.css' }).appendTo("head");
            break;
        case ':nth-child()': $("<link>").attr({ rel: "stylesheet",type: "text/css",href: '../stylesheets/Pseudo-classes/:nth-child().css' }).appendTo("head");
            break;
        case ':nth-last-child()': $("<link>").attr({ rel: "stylesheet",type: "text/css",href: '../stylesheets/Pseudo-classes/:nth-last-child().css' }).appendTo("head");
            break;
        case ':nth-of-type': $("<link>").attr({ rel: "stylesheet",type: "text/css",href: '../stylesheets/Pseudo-classes/:nth-of-type.css' }).appendTo("head");
            break;
        case ':nth-last-of-type': $("<link>").attr({ rel: "stylesheet",type: "text/css",href: '../stylesheets/Pseudo-classes/:nth-last-of-type.css' }).appendTo("head");
            break;
        case ':only-child&&:only-of-type': $("<link>").attr({ rel: "stylesheet",type: "text/css",href: '../stylesheets/Pseudo-classes/:only-child&&:only-of-type.css' }).appendTo("head");
            break;
    }
}