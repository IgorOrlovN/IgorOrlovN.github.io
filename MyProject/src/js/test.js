let arrPrice = [
    [500,1000,2000],
    [500,1000,2000],
    [2000,1000,300],
];

let arrTime = [
    [1,3,5],
    [2,1,3],
    [2,2,1],
];

    let price = 0;
    let time = 0;
    let tip = document.getElementById('tip').value;
    let vizit = document.getElementById('vizit').value;
    let diz =  document.getElementById('diz').value;
    let picture =  document.getElementById('picture').value;
    let adap =  document.getElementById('adap').value;
    let cross =  document.getElementById('cross').value;

function calculator()
{
    

    if (tip==vizit){
        price = arrPrice[0][0];
        time = arrTime[0][0];
    }
    if (view==2){
        price = arrPrice[0][1];
        time = arrTime[0][1];
    }
    if (view==3){
        price = arrPrice[0][2];
        time = arrTime[0][2];
    }
    if (diz==picture){
        price = price + arrPrice[1][0];
        time = time + arrTime[1][0];
    }
    if (des==2){
        price = price + arrPrice[1][1];
        time = time + arrTime[1][1];
    }
    if (des==3){
        price = price + arrPrice[1][2];
        time = time + arrTime[1][2];
    }
    if (adap==cross){
        price = price + arrPrice[2][0];
        time = time + arrTime[2][0];
    }
    if (adap==2){
        price = price + arrPrice[2][1];
        time = time + arrTime[2][1];
    }
    if (adap==3){
        price = price + arrPrice[2][2];
        time = time + arrTime[2][2];
    }
    alert("Цена: " + price + "Сроки: " + time + " недели");
}

/*let view = prompt("Выберите тип сайта, для этого введите в поле соответствующие число \n 1 - Сайт-визитка \n 2 - Корпортаивный сайт \n 3 - Интернет-магазин");
let des = prompt("Выберите дизайн сайта, для этого введите в поле соответствующие число \n 1 - Рисованный \n 2 - Плоский \n 3 - Материальный");
let adap= prompt("Выберите адаптивность, для этого введите в поле соответствующие число \n 1 - Кроссплатформенный \n 2 - Смартфон \n 3 - Персональный компьютер");*/

calculator();

alert("Цена: " + price + "Сроки: " + time + " недели");