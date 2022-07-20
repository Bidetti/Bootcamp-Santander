export const numero = 2;

import $ from 'jquery';

$.fn.extend({
    novaFuncao() {
        console.log("Chamou nova funcao")
    }
})

$('body').novaFuncao();
