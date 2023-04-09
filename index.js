// Code your solution in this file!
function distanceFromHqInBlocks(x){
    return Math.abs(42 - x)
}

function distanceFromHqInFeet(x){
    return (distanceFromHqInBlocks(x)* 264);
}

function distanceTravelledInFeet(start, destination){
    return (Math.abs(start - destination) * 264);
}

function calculatesFarePrice(start, destination){
    const fareDistance = distanceTravelledInFeet(start, destination);
    if (fareDistance < 400){
        return 0;
    }
    else if (fareDistance > 400 && fareDistance <= 2000){
        return (fareDistance - 400) * 0.02;
    }
    else if (fareDistance > 2000 && fareDistance <= 2500){
        return 25;
    }
    else {
        return 'cannot travel that far';
    }
}