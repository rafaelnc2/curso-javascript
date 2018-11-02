import $ from "jquery";

import { onLoadHtmlSuccess } from "../core/includes";

const duration = 300;

function filterByCity (city) {
    $("[wm-city]").each(function (i, e) {
        // valida se a imagem encontrada será ou não exibida
        const isTarget = $(this).attr('wm-city') === city
            || city === null

        if( isTarget ){
            $(this).parent().removeClass('d-none')
            $(this).fadeIn(duration)
        }else{
            $(this).fadeOut(duration, () => {
                $(this).parent().addClass('d-none')
            })
        }
    })
}

$.fn.cityButtons = function () {
    // criado um "Set" para que inclua o nome da cidade apenas uma única vez
    const cities = new Set;
    $('[wm-city]').each(function (i, e) {
        cities.add($(e).attr('wm-city'))
    })
    
    const btns = Array.from(cities).map(city => {
        const btn = $('<button>')
            .addClass(['btn', 'btn-info']).html(city)
        btn.click(e => filterByCity(city))
        return btn
    })
    
    const btnAll = $('<button>')
        .addClass(['btn', 'btn-info', 'active']).html('Todas')
    btnAll.click(e => filterByCity(null))
    btns.push(btnAll)
    
    const btnGroup = $("<div>").addClass(["btn-group"]);
    btnGroup.append(btns);
    
    $(this).html(btnGroup);
    
    return this;
}
onLoadHtmlSuccess(function(){
    $("[wm-city-buttons]").cityButtons();
})