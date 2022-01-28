
// ! Variables
let dishe = 0; 
let drink = 0;
let dessert = 0;
let disheprice;
let drinkprice;
let dessertprice;

// * Function change for Finish Button

function orderFinished() {
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

    orderFinished();

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

    // todo Dishe chosen
    dishe = "Lasanha Bolonhesa";

    // todo Dish price calculation
    let stringprice;
    let floatprice;  
    stringprice = (document.getElementById("food-price_lasanha_bolonhesa").textContent);
    floatprice = parseFloat(stringprice.replace('R$', '').replace('.','').replace(',', '.'));
    disheprice = floatprice;

    orderFinished();
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

    // todo Dishe chosen
    dishe = "Parmegiana de Carne";

    // todo Dish price calculation
    let stringprice;
    let floatprice;  
    stringprice = (document.getElementById("food-price_parmegiana_carne").textContent);
    floatprice = parseFloat(stringprice.replace('R$', '').replace('.','').replace(',', '.'));
    disheprice = floatprice;

    orderFinished();    
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

    // todo Dishe chosen
    dishe = "Parmegiana de Frango";

    // todo Dish price calculation
    let stringprice;
    let floatprice;  
    stringprice = (document.getElementById("food-price_parmegiana_frango").textContent);
    floatprice = parseFloat(stringprice.replace('R$', '').replace('.','').replace(',', '.'));
    disheprice = floatprice;

    orderFinished();

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

    // todo Dishe chosen
    dishe = "Bife a Cavalo";

    // todo Dish price calculation
    let stringprice;
    let floatprice;  
    stringprice = (document.getElementById("food-price_bife_a_cavalo").textContent);
    floatprice = parseFloat(stringprice.replace('R$', '').replace('.','').replace(',', '.'));
    disheprice = floatprice;

    orderFinished();
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

    // todo Dishe chosen
    dishe = "Bife com Fritas";

    // todo Dish price calculation
    let stringprice;
    let floatprice;  
    stringprice = (document.getElementById("food-price_bife_com_fritas").textContent);
    floatprice = parseFloat(stringprice.replace('R$', '').replace('.','').replace(',', '.'));
    disheprice = floatprice;

    orderFinished();
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

    // todo Drink chosen
    drink = "Coca-Cola";

    // todo Drink price calculation
    let stringprice;
    let floatprice;  
    stringprice = (document.getElementById("food-price_coca_cola_refri").textContent);
    floatprice = parseFloat(stringprice.replace('R$', '').replace('.','').replace(',', '.'));
    drinkprice = floatprice;

    orderFinished();
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

    // todo Drink chosen    
    drink = "Guaraná";

    // todo Drink price calculation
    let stringprice;
    let floatprice;  
    stringprice = (document.getElementById("food-price_guarana_refri").textContent);
    floatprice = parseFloat(stringprice.replace('R$', '').replace('.','').replace(',', '.'));
    drinkprice = floatprice;

    orderFinished();
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

    // todo Drink chosen
    drink = "Guaraná Jesus";

    // todo Drink price calculation
    let stringprice;
    let floatprice;  
    stringprice = (document.getElementById("food-price_guarana_jesus_refri").textContent);
    floatprice = parseFloat(stringprice.replace('R$', '').replace('.','').replace(',', '.'));
    drinkprice = floatprice;

    orderFinished();
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

    // todo Drink chosen
    drink = "Pepsi";

    // todo Drink price calculation
    let stringprice;
    let floatprice;  
    stringprice = (document.getElementById("food-price_pepsi_refri").textContent);
    floatprice = parseFloat(stringprice.replace('R$', '').replace('.','').replace(',', '.'));
    drinkprice = floatprice;

    orderFinished();

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
    
    // todo Drink chosen
    drink = "Sprite";

    // todo Drink price calculation
    let stringprice;
    let floatprice;  
    stringprice = (document.getElementById("food-price_sprite_refri").textContent);
    floatprice = parseFloat(stringprice.replace('R$', '').replace('.','').replace(',', '.'));
    drinkprice = floatprice;

    orderFinished();
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

    // todo Drink chosen
    drink = "Fanta Laranja";

    // todo Drink price calculation
    let stringprice;
    let floatprice;  
    stringprice = (document.getElementById("food-price_fanta_refri").textContent);
    floatprice = parseFloat(stringprice.replace('R$', '').replace('.','').replace(',', '.'));
    drinkprice = floatprice;

    orderFinished();
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

    // todo Dessert chosen
    dessert = "Pudim";

    // todo Dessert price calculation
    let stringprice;
    let floatprice;  
    stringprice = (document.getElementById("food-price_pudim").textContent);
    floatprice = parseFloat(stringprice.replace('R$', '').replace('.','').replace(',', '.'));
    dessertprice = floatprice;

    orderFinished();
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

    // todo Dessert chosen
    dessert = "Mousse de Chocolate";

    // todo Dessert price calculation
    let stringprice;
    let floatprice;  
    stringprice = (document.getElementById("food-price_mousse_chocolate").textContent);
    floatprice = parseFloat(stringprice.replace('R$', '').replace('.','').replace(',', '.'));
    dessertprice = floatprice;

    orderFinished();
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

    // todo Dessert chosen
    dessert = "Mousse de Maracuja";

    // todo Dessert price calculation
    let stringprice;
    let floatprice;  
    stringprice = (document.getElementById("food-price_mousse_chocolate").textContent);
    floatprice = parseFloat(stringprice.replace('R$', '').replace('.','').replace(',', '.'));
    dessertprice = floatprice;

    orderFinished();
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

    // todo Dessert chosen
    dessert = "Torta Holandesa";

    // todo Dessert price calculation
    let stringprice;
    let floatprice;  
    stringprice = (document.getElementById("food-price_torta_holandesa").textContent);
    floatprice = parseFloat(stringprice.replace('R$', '').replace('.','').replace(',', '.'));
    dessertprice = floatprice;

    orderFinished();

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

    // todo Dessert chosen
    dessert = "Torta de Limão";

    // todo Dessert price calculation
    let stringprice;
    let floatprice;  
    stringprice = (document.getElementById("food-price_torta_limao").textContent);
    floatprice = parseFloat(stringprice.replace('R$', '').replace('.','').replace(',', '.'));
    dessertprice = floatprice;

    orderFinished();
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

    // todo Dessert chosen
    dessert = "Paçoca";

    // todo Dessert price calculation
    let stringprice;
    let floatprice;  
    stringprice = (document.getElementById("food-price_paçoca").textContent);
    floatprice = parseFloat(stringprice.replace('R$', '').replace('.','').replace(',', '.'));
    dessertprice = floatprice;

    orderFinished();
}

// * Button Close Order

function closeOrder() {
    document.getElementById("confirmation_screen").style.display = "block";
    document.getElementById("confirmation_screen").style.display = "flex";
    document.getElementById("dishe_order").innerHTML = dishe
    document.getElementById("drink_order").innerHTML = drink;
    document.getElementById("dessert_order").innerHTML = dessert;
    document.getElementById("dishe_order_price").innerHTML = "R$ "+ disheprice.toFixed(2).toString().replace(".",",");
    document.getElementById("drink_order_price").innerHTML = "R$ "+ drinkprice.toFixed(2).toString().replace(".",",");;
    document.getElementById("dessert_order_price").innerHTML = "R$ "+ dessertprice.toFixed(2).toString().replace(".",",");
    document.getElementById("total_order_price").innerHTML = "R$ "+ parseFloat(disheprice+drinkprice+dessertprice).toFixed(2).toString().replace(".",",");
}

// * Button Cancel Order
function cancelOrder() {
    document.getElementById("confirmation_screen").style.display = "none";
}

// * Button Finished - Whatsapp Integration

function finishOrder() {

    let name = prompt("Informe o seu nome: ");
    let adress = prompt("Informe o endereço de entrega: ")
    let message;

    message ="Olá, gostaria de fazer o pedido:\n- Prato:"+" "+dishe+"\n- Bebida:" + " "+drink+"\n- Sobremesa:" + " "+dessert+ "\nTotal:" + " " + "R$" +" " + parseFloat(disheprice+drinkprice+dessertprice).toFixed(2)+"\nNome: "+name+"\nEndereço: "+adress;
    
    window.open("https://wa.me/5535999160995?text="+encodeURI(message));
    
}
