/**
 * Created with JetBrains WebStorm.
 * User: mrj
 * Date: 12-9-6
 * Time: 下午4:04
 * To change this template use File | Settings | File Templates.
 */
function selectChange(){
    var selectorObj = document.getElementById("selector");
    switch(selectorObj.value){
        case "Ｅ 〜 Ｆ": $("<link>").attr({ rel: "stylesheet",type: "text/css",href: "../stylesheets/basic/Ｅ 〜 Ｆ.css" }).appendTo("head");
    }
}