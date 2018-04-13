console.log('script.js has been loaded!');
let clickCount = 0;

$(document).ready(onReady);

function onReady(){

    console.log("On Ready");
    $('#counter').on('click', clickHandler) 

}//end onReady

function clickHandler() {

    clickCount++;
    console.log(clickCount);
    $('#count').html('Total Count: '+ clickCount);
    newCreature();
   
}//end clickHandler

function newCreature(){

    $('#creatureList').append(
           ' <tr>' + 
                '<td>' + $('#newCreatureName').val() + '</td>' + 
                '<td>' + $('#newCreatureSize').val() + ' ft' + '</td>' + 
                '<td>' + $('#newCreatureType').val() + '</td>' + 
                '<td>' + $('#newCreatureSpeed').val() + ' mph' + '</td>' + 
            '</tr>'
    );

}//end newAnimal