/**
 * Created with JetBrains WebStorm.
 * User: mrj
 * Date: 12-9-6
 * Time: 下午4:56
 * To change this template use File | Settings | File Templates.
 */
function selectChange(){
    var selectorObj = document.getElementById("selector");
    switch(selectorObj.value){
        case '': break;
        case 'E[attr^="value"]': $("<link>").attr({ rel: "stylesheet",type: "text/css",href: '../stylesheets/attribute/E[attr^="value"].css' }).appendTo("head");
            break;
        case 'E[attr$="value"]': $("<link>").attr({ rel: "stylesheet",type: "text/css",href: '../stylesheets/attribute/E[attr$="value"].css' }).appendTo("head");
            break;
        case 'E[attr*="value"]': $("<link>").attr({ rel: "stylesheet",type: "text/css",href: '../stylesheets/attribute/E[attr*="value"].css' }).appendTo("head");
            break;
    }
}