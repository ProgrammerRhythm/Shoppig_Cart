document.getElementById('minus').addEventListener('click', function(){
const value = document.getElementById('num');
const makeing_Float = parseInt(value.value);
const new_Num =  makeing_Float-1;
value.value = new_Num;
const casetotal = new_Num*1219;
document.getElementById('price_1').innerText = casetotal;
}) 
document.getElementById('plus').addEventListener('click', function(){
    const value = document.getElementById('num');
    const makeing_Float = parseInt(value.value);
    const new_Num =  makeing_Float+1;
    value.value = new_Num;
    const casetotal2 = new_Num*1219;
    document.getElementById('price_1').innerText = casetotal2;
 })




document.getElementById('bihog').addEventListener('click',function(){
    const value = document.getElementById('cover');
    const makeing_Float = parseInt(value.value);
    const new_Num =  makeing_Float-1;
    value.value = new_Num;
    const casetotal1 = new_Num*59;
    document.getElementById('price_2').innerText = casetotal1;
 })


document.getElementById('jog').addEventListener('click',function(){
    const value = document.getElementById('cover');
    const makeing_Float = parseInt(value.value);
    const new_Num =  makeing_Float+1;
    value.value = new_Num;
    const casetotal4 = new_Num*59;
    document.getElementById('price_2').innerText = casetotal4;
 }) 

 document.getElementById('cancel').addEventListener('click',function(){
    document.getElementById('main').style.display = 'none';
})
 document.getElementById('cancel2').addEventListener('click',function(){
    document.getElementById('main2').style.display = 'none';
})
