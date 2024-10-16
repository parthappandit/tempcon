function con(){
    const temp=parseFloat(document.getElementById('inputtemp').value);
    const main=document.getElementById('inputselect').value;
    const cu=document.getElementById('inputselected').value;
    if (isNaN(temp)) {
    alert("Please enter a valid temperature.");
    return;
    }
    else if(main==='Fahrenheit' && cu==='Fahrenheit'){
        document.getElementById('answer').innerHTML=temp;
    }
    else if(main==='Celsius' && cu==='Celsius'){
        document.getElementById('answer').innerHTML=temp;
    }
    else if(main==='Fahrenheit' && cu==='Celsius'){
        document.getElementById('answer').innerHTML=(temp-32)/(9/5);
    }
    else{
        document.getElementById('answer').innerHTML=(temp*(9/5))+32;
    }
    
}