// Task-1
function feetToMile(feet){
    if(feet<0){
        return 'Length can not be negative';
    }
    let mile = feet/5280;
    return mile.toFixed(5);
}


// Task-2
function woodCalculator(chair, table, bed){
    if(chair<0 || table<0 || bed<0){
        return 'Invalid';
    }
    let chairValue = chair*1;
    let tableValue = table*3;
    let bedValue = bed*5;
    let totalWood = chairValue + tableValue + bedValue;
    return totalWood;
}


// Task-3
function brickCalculator(height){
    if(height<=0){
        return 'Bulding height can not be zero or negative';
    }
    let totalFeet;
    let remaining;
    let totalBrick;
    if(height<=10){
        totalFeet = height*15;
    }
    else if(height<=20){
        remaining = height - 10;
        totalFeet = remaining*12 + 10*15;
    }
    else{
        remaining = height-20;
        totalFeet = remaining*10 + 10*12 + 10*15;
    }
    totalBrick = totalFeet*1000;
    return totalBrick;
}


// Task-4
function tinyFriend(nameArray){
    let lengthArray=[];
    let nameArraySize=nameArray.length;
    if(nameArraySize==0){
        return 'No name is mentioned';
    }
    let nameLength;
    let position;
    for(let i=0;i<nameArraySize;i++){
        nameLength= nameArray[i].length;
        lengthArray.push(nameLength);
    }
    let min=lengthArray[0];
    
    for(let i=0;i<lengthArray.length;i++){
        if(lengthArray[i]<=min){
            min=lengthArray[i];
            position=i;
        }
    }
    return nameArray[position];
}


