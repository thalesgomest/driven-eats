
// ! Variables
let dishe = 0; 
let drink = 0;
let dessert = 0;
let disheprice;
let drinkprice;
let dessertprice;

function OrderFinished() {
    if ((dishe != 0)&&(drink != 0)&&(dessert != 0)) {
        document.getElementById("order_button").style.display = "none";
        document.getElementById("order_button_finished").style.display = "block";
        document.getElementById("order_button_finished").style.display = "flex";
    }
}


// * Functions select Dishes

function Select_frango_yin_yang() {
    document.getElementById("box_frango_yin_yang").style.borderColor = "#32B72F";
    document.getElementById("check_frango_yin_yang").style.display = "block";
    document.getElementById("box_lasanha_bolonhesa").style.borderColor = "#FFFFFF";
    document.getElementById("check_lasanha_bolonhesa").style.display = "none";
    document.getElementById("box_parmegiana_carne").style.borderColor = "#FFFFFF";
    document.getElementById("check_parmegiana_carne").style.display = "none";
    document.getElementById("box_parmegiana_frango").style.borderColor = "#FFFFFF";
    document.getElementById("check_parmegiana_frango").style.display = "none";
    document.getElementById("box_bife_a_cavalo").style.borderColor = "#FFFFFF";
    document.getElementById("check_bife_a_cavalo").style.display = "none";
    document.getElementById("box_bife_com_fritas").style.borderColor = "#FFFFFF";
    document.getElementById("check_bife_com_fritas").style.display = "none";
    
    // todo Dishe chosen
    dishe = "Frango Yin Yang";

    // todo Dish price calculation
    let stringprice;
    let floatprice;  
    stringprice = (document.getElementById("food-price_frango_yin_yang").textContent);
    floatprice = parseFloat(stringprice.replace('R$', '').replace('.','').replace(',', '.'));
    disheprice = floatprice;

    OrderFinished();

}

function Select_lasanha_bolonhesa() {
    document.getElementById("box_frango_yin_yang").style.borderColor = "#FFFFFF";
    document.getElementById("check_frango_yin_yang").style.display = "none";
    document.getElementById("box_lasanha_bolonhesa").style.borderColor = "#32B72F";
    document.getElementById("check_lasanha_bolonhesa").style.display = "block";
    document.getElementById("box_parmegiana_carne").style.borderColor = "#FFFFFF";
    document.getElementById("check_parmegiana_carne").style.display = "none";
    document.getElementById("box_parmegiana_frango").style.borderColor = "#FFFFFF";
    document.getElementById("check_parmegiana_frango").style.display = "none";
    document.getElementById("box_bife_a_cavalo").style.borderColor = "#FFFFFF";
    document.getElementById("check_bife_a_cavalo").style.display = "none";
    document.getElementById("box_bife_com_fritas").style.borderColor = "#FFFFFF";
    document.getElementById("check_bife_com_fritas").style.display = "none";

    dishe = "Lasanha Bolonhesa";

    OrderFinished();
}

function Select_parmegiana_carne() {
    document.getElementById("box_frango_yin_yang").style.borderColor = "#FFFFFF";
    document.getElementById("check_frango_yin_yang").style.display = "none";
    document.getElementById("box_lasanha_bolonhesa").style.borderColor = "#FFFFFF";
    document.getElementById("check_lasanha_bolonhesa").style.display = "none";
    document.getElementById("box_parmegiana_carne").style.borderColor = "#32B72F";
    document.getElementById("check_parmegiana_carne").style.display = "block";
    document.getElementById("box_parmegiana_frango").style.borderColor = "#FFFFFF";
    document.getElementById("check_parmegiana_frango").style.display = "none";
    document.getElementById("box_bife_a_cavalo").style.borderColor = "#FFFFFF";
    document.getElementById("check_bife_a_cavalo").style.display = "none";
    document.getElementById("box_bife_com_fritas").style.borderColor = "#FFFFFF";
    document.getElementById("check_bife_com_fritas").style.display = "none";

    dishe = "Parmegiana de Carne";

    OrderFinished();    
}

function Select_parmegiana_frango() {
    document.getElementById("box_frango_yin_yang").style.borderColor = "#FFFFFF";
    document.getElementById("check_frango_yin_yang").style.display = "none";
    document.getElementById("box_lasanha_bolonhesa").style.borderColor = "#FFFFFF";
    document.getElementById("check_lasanha_bolonhesa").style.display = "none";
    document.getElementById("box_parmegiana_carne").style.borderColor ="#FFFFFF";
    document.getElementById("check_parmegiana_carne").style.display = "none";
    document.getElementById("box_parmegiana_frango").style.borderColor = "#32B72F";
    document.getElementById("check_parmegiana_frango").style.display = "block";
    document.getElementById("box_bife_a_cavalo").style.borderColor = "#FFFFFF";
    document.getElementById("check_bife_a_cavalo").style.display = "none";
    document.getElementById("box_bife_com_fritas").style.borderColor = "#FFFFFF";
    document.getElementById("check_bife_com_fritas").style.display = "none";

    dishe = "Parmegiana de Frango";

    OrderFinished();

}

function Select_bife_a_cavalo() {
    document.getElementById("box_frango_yin_yang").style.borderColor = "#FFFFFF";
    document.getElementById("check_frango_yin_yang").style.display = "none";
    document.getElementById("box_lasanha_bolonhesa").style.borderColor = "#FFFFFF";
    document.getElementById("check_lasanha_bolonhesa").style.display = "none";
    document.getElementById("box_parmegiana_carne").style.borderColor ="#FFFFFF";
    document.getElementById("check_parmegiana_carne").style.display = "none";
    document.getElementById("box_parmegiana_frango").style.borderColor = "#FFFFFF";
    document.getElementById("check_parmegiana_frango").style.display = "none";
    document.getElementById("box_bife_a_cavalo").style.borderColor = "#32B72F";
    document.getElementById("check_bife_a_cavalo").style.display = "block";
    document.getElementById("box_bife_com_fritas").style.borderColor = "#FFFFFF";
    document.getElementById("check_bife_com_fritas").style.display = "none";

    dishe = "Bife a Cavalo";

    OrderFinished();
}

function Select_bife_com_fritas() {
    document.getElementById("box_frango_yin_yang").style.borderColor = "#FFFFFF";
    document.getElementById("check_frango_yin_yang").style.display = "none";
    document.getElementById("box_lasanha_bolonhesa").style.borderColor = "#FFFFFF";
    document.getElementById("check_lasanha_bolonhesa").style.display = "none";
    document.getElementById("box_parmegiana_carne").style.borderColor ="#FFFFFF";
    document.getElementById("check_parmegiana_carne").style.display = "none";
    document.getElementById("box_parmegiana_frango").style.borderColor = "#FFFFFF";
    document.getElementById("check_parmegiana_frango").style.display = "none";
    document.getElementById("box_bife_a_cavalo").style.borderColor = "#FFFFFF";
    document.getElementById("check_bife_a_cavalo").style.display = "none";
    document.getElementById("box_bife_com_fritas").style.borderColor = "#32B72F";
    document.getElementById("check_bife_com_fritas").style.display = "block";

    dishe = "Bife com Fritas";

    OrderFinished();
}

// * Functions select Drinks

function Select_coca_cola_refri() {
    document.getElementById("box_coca_cola_refri").style.borderColor = "#32B72F";
    document.getElementById("check_coca_cola_refri").style.display = "block";
    document.getElementById("box_guarana_refri").style.borderColor = "#FFFFFF";
    document.getElementById("check_guarana_refri").style.display = "none";
    document.getElementById("box_guarana_jesus_refri").style.borderColor = "#FFFFFF";
    document.getElementById("check_guarana_jesus_refri").style.display = "none";
    document.getElementById("box_pepsi_refri").style.borderColor = "#FFFFFF";
    document.getElementById("check_pepsi_refri").style.display = "none";
    document.getElementById("box_sprite_refri").style.borderColor = "#FFFFFF";
    document.getElementById("check_sprite_refri").style.display = "none";
    document.getElementById("box_fanta_refri").style.borderColor = "#FFFFFF";
    document.getElementById("check_fanta_refri").style.display = "none";

    drink = "Coca-Cola";

    let stringprice;
    let floatprice;  
    stringprice = (document.getElementById("food-price_coca_cola_refri").textContent);
    floatprice = parseFloat(stringprice.replace('R$', '').replace('.','').replace(',', '.'));
    drinkprice = floatprice;

    OrderFinished();
}

function Select_guarana_refri() {
    document.getElementById("box_coca_cola_refri").style.borderColor = "#FFFFFF";
    document.getElementById("check_coca_cola_refri").style.display = "none";
    document.getElementById("box_guarana_refri").style.borderColor = "#32B72F";
    document.getElementById("check_guarana_refri").style.display = "block";
    document.getElementById("box_guarana_jesus_refri").style.borderColor = "#FFFFFF";
    document.getElementById("check_guarana_jesus_refri").style.display = "none";
    document.getElementById("box_pepsi_refri").style.borderColor = "#FFFFFF";
    document.getElementById("check_pepsi_refri").style.display = "none";
    document.getElementById("box_sprite_refri").style.borderColor = "#FFFFFF";
    document.getElementById("check_sprite_refri").style.display = "none";
    document.getElementById("box_fanta_refri").style.borderColor = "#FFFFFF";
    document.getElementById("check_fanta_refri").style.display = "none";

    drink = "Guaraná";

    OrderFinished();
}

function Select_guarana_jesus_refri() {
    document.getElementById("box_coca_cola_refri").style.borderColor = "#FFFFFF";
    document.getElementById("check_coca_cola_refri").style.display = "none";
    document.getElementById("box_guarana_refri").style.borderColor = "#FFFFFF";
    document.getElementById("check_guarana_refri").style.display = "none";
    document.getElementById("box_guarana_jesus_refri").style.borderColor = "#32B72F";
    document.getElementById("check_guarana_jesus_refri").style.display = "block";
    document.getElementById("box_pepsi_refri").style.borderColor = "#FFFFFF";
    document.getElementById("check_pepsi_refri").style.display = "none";
    document.getElementById("box_sprite_refri").style.borderColor = "#FFFFFF";
    document.getElementById("check_sprite_refri").style.display = "none";
    document.getElementById("box_fanta_refri").style.borderColor = "#FFFFFF";
    document.getElementById("check_fanta_refri").style.display = "none";

    drink = "Guaraná Jesus";

    OrderFinished();
}

function Select_pepsi_refri() {
    document.getElementById("box_coca_cola_refri").style.borderColor = "#FFFFFF";
    document.getElementById("check_coca_cola_refri").style.display = "none";
    document.getElementById("box_guarana_refri").style.borderColor = "#FFFFFF";
    document.getElementById("check_guarana_refri").style.display = "none";
    document.getElementById("box_guarana_jesus_refri").style.borderColor ="#FFFFFF";
    document.getElementById("check_guarana_jesus_refri").style.display = "none";
    document.getElementById("box_pepsi_refri").style.borderColor = "#32B72F";
    document.getElementById("check_pepsi_refri").style.display = "block";
    document.getElementById("box_sprite_refri").style.borderColor = "#FFFFFF";
    document.getElementById("check_sprite_refri").style.display = "none";
    document.getElementById("box_fanta_refri").style.borderColor = "#FFFFFF";
    document.getElementById("check_fanta_refri").style.display = "none";

    drink = "Pepsi";

    OrderFinished();

}

function Select_sprite_refri() {
    document.getElementById("box_coca_cola_refri").style.borderColor = "#FFFFFF";
    document.getElementById("check_coca_cola_refri").style.display = "none";
    document.getElementById("box_guarana_refri").style.borderColor = "#FFFFFF";
    document.getElementById("check_guarana_refri").style.display = "none";
    document.getElementById("box_guarana_jesus_refri").style.borderColor ="#FFFFFF";
    document.getElementById("check_guarana_jesus_refri").style.display = "none";
    document.getElementById("box_pepsi_refri").style.borderColor = "#FFFFFF";
    document.getElementById("check_pepsi_refri").style.display = "none";
    document.getElementById("box_sprite_refri").style.borderColor = "#32B72F";
    document.getElementById("check_sprite_refri").style.display = "block";
    document.getElementById("box_fanta_refri").style.borderColor = "#FFFFFF";
    document.getElementById("check_fanta_refri").style.display = "none";

    drink = "Sprite";

    OrderFinished();
}

function Select_fanta_refri() {
    document.getElementById("box_coca_cola_refri").style.borderColor = "#FFFFFF";
    document.getElementById("check_coca_cola_refri").style.display = "none";
    document.getElementById("box_guarana_refri").style.borderColor = "#FFFFFF";
    document.getElementById("check_guarana_refri").style.display = "none";
    document.getElementById("box_guarana_jesus_refri").style.borderColor ="#FFFFFF";
    document.getElementById("check_guarana_jesus_refri").style.display = "none";
    document.getElementById("box_pepsi_refri").style.borderColor = "#FFFFFF";
    document.getElementById("check_pepsi_refri").style.display = "none";
    document.getElementById("box_sprite_refri").style.borderColor = "#FFFFFF";
    document.getElementById("check_sprite_refri").style.display = "none";
    document.getElementById("box_fanta_refri").style.borderColor = "#32B72F";
    document.getElementById("check_fanta_refri").style.display = "block";

    drink = "Fanta Laranja";

    OrderFinished();
}

// * Functions select Desserts

function Select_pudim() {
    document.getElementById("box_pudim").style.borderColor = "#32B72F";
    document.getElementById("check_pudim").style.display = "block";
    document.getElementById("box_mousse_chocolate").style.borderColor = "#FFFFFF";
    document.getElementById("check_mousse_chocolate").style.display = "none";
    document.getElementById("box_mousse_maracuja").style.borderColor = "#FFFFFF";
    document.getElementById("check_mousse_maracuja").style.display = "none";
    document.getElementById("box_torta_holandesa").style.borderColor = "#FFFFFF";
    document.getElementById("check_torta_holandesa").style.display = "none";
    document.getElementById("box_torta_limao").style.borderColor = "#FFFFFF";
    document.getElementById("check_torta_limao").style.display = "none";
    document.getElementById("box_paçoca").style.borderColor = "#FFFFFF";
    document.getElementById("check_paçoca").style.display = "none";

    dessert = "Pudim";

    let stringprice;
    let floatprice;  
    stringprice = (document.getElementById("food-price_pudim").textContent);
    floatprice = parseFloat(stringprice.replace('R$', '').replace('.','').replace(',', '.'));
    drinkprice = floatprice;

    OrderFinished();
}

function Select_mousse_chocolate() {
    document.getElementById("box_pudim").style.borderColor = "#FFFFFF";
    document.getElementById("check_pudim").style.display = "none";
    document.getElementById("box_mousse_chocolate").style.borderColor = "#32B72F";
    document.getElementById("check_mousse_chocolate").style.display = "block";
    document.getElementById("box_mousse_maracuja").style.borderColor = "#FFFFFF";
    document.getElementById("check_mousse_maracuja").style.display = "none";
    document.getElementById("box_torta_holandesa").style.borderColor = "#FFFFFF";
    document.getElementById("check_torta_holandesa").style.display = "none";
    document.getElementById("box_torta_limao").style.borderColor = "#FFFFFF";
    document.getElementById("check_torta_limao").style.display = "none";
    document.getElementById("box_paçoca").style.borderColor = "#FFFFFF";
    document.getElementById("check_paçoca").style.display = "none";

    dessert = "Mousse de Chocolate";

    OrderFinished();
}

function Select_mousse_maracuja() {
    document.getElementById("box_pudim").style.borderColor = "#FFFFFF";
    document.getElementById("check_pudim").style.display = "none";
    document.getElementById("box_mousse_chocolate").style.borderColor = "#FFFFFF";
    document.getElementById("check_mousse_chocolate").style.display = "none";
    document.getElementById("box_mousse_maracuja").style.borderColor = "#32B72F";
    document.getElementById("check_mousse_maracuja").style.display = "block";
    document.getElementById("box_torta_holandesa").style.borderColor = "#FFFFFF";
    document.getElementById("check_torta_holandesa").style.display = "none";
    document.getElementById("box_torta_limao").style.borderColor = "#FFFFFF";
    document.getElementById("check_torta_limao").style.display = "none";
    document.getElementById("box_paçoca").style.borderColor = "#FFFFFF";
    document.getElementById("check_paçoca").style.display = "none";

    dessert = "Mousse de Maracuja";

    OrderFinished();
}

function Select_torta_holandesa() {
    document.getElementById("box_pudim").style.borderColor = "#FFFFFF";
    document.getElementById("check_pudim").style.display = "none";
    document.getElementById("box_mousse_chocolate").style.borderColor = "#FFFFFF";
    document.getElementById("check_mousse_chocolate").style.display = "none";
    document.getElementById("box_mousse_maracuja").style.borderColor ="#FFFFFF";
    document.getElementById("check_mousse_maracuja").style.display = "none";
    document.getElementById("box_torta_holandesa").style.borderColor = "#32B72F";
    document.getElementById("check_torta_holandesa").style.display = "block";
    document.getElementById("box_torta_limao").style.borderColor = "#FFFFFF";
    document.getElementById("check_torta_limao").style.display = "none";
    document.getElementById("box_paçoca").style.borderColor = "#FFFFFF";
    document.getElementById("check_paçoca").style.display = "none";

    dessert = "Torta Holandesa";

    OrderFinished();

}

function Select_torta_limao() {
    document.getElementById("box_pudim").style.borderColor = "#FFFFFF";
    document.getElementById("check_pudim").style.display = "none";
    document.getElementById("box_mousse_chocolate").style.borderColor = "#FFFFFF";
    document.getElementById("check_mousse_chocolate").style.display = "none";
    document.getElementById("box_mousse_maracuja").style.borderColor ="#FFFFFF";
    document.getElementById("check_mousse_maracuja").style.display = "none";
    document.getElementById("box_torta_holandesa").style.borderColor = "#FFFFFF";
    document.getElementById("check_torta_holandesa").style.display = "none";
    document.getElementById("box_torta_limao").style.borderColor = "#32B72F";
    document.getElementById("check_torta_limao").style.display = "block";
    document.getElementById("box_paçoca").style.borderColor = "#FFFFFF";
    document.getElementById("check_paçoca").style.display = "none";

    dessert = "Torta de Limão";

    OrderFinished();
}

function Select_paçoca() {
    document.getElementById("box_pudim").style.borderColor = "#FFFFFF";
    document.getElementById("check_pudim").style.display = "none";
    document.getElementById("box_mousse_chocolate").style.borderColor = "#FFFFFF";
    document.getElementById("check_mousse_chocolate").style.display = "none";
    document.getElementById("box_mousse_maracuja").style.borderColor ="#FFFFFF";
    document.getElementById("check_mousse_maracuja").style.display = "none";
    document.getElementById("box_torta_holandesa").style.borderColor = "#FFFFFF";
    document.getElementById("check_torta_holandesa").style.display = "none";
    document.getElementById("box_torta_limao").style.borderColor = "#FFFFFF";
    document.getElementById("check_torta_limao").style.display = "none";
    document.getElementById("box_paçoca").style.borderColor = "#32B72F";
    document.getElementById("check_paçoca").style.display = "block";

    dessert = "Paçoca";

    OrderFinished();
}



// * Button Finished
