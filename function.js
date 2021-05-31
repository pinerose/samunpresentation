function next(a){
    document.querySelector('.fifthtext').style.display = 'none';
    if (a == 'last') {
        document.querySelector('.link').style.display = "block";
    } else if (a == 1){
        document.querySelector('.firsttext').style.display = "none";
        document.querySelector('.secondtext').style.display = "block";
    } else if (a == 2){
        document.querySelector('.secondtext').style.display = "none";
        document.querySelector('.thirdtext').style.display = "block";
    } else if (a == 3){
        document.querySelector('.thirdtext').style.display = "none";
        document.querySelector('.fourthtext').style.display = "block";
    } else if (a == 4){
        document.querySelector('.fourthtext').style.display = "none";
        document.querySelector('.fifthtext').style.display = "block";
    }
}

function next1(a){
    if (a == 'last') {
        document.querySelector('.firsttext').style.display = "none";
        document.querySelector('.link').style.display = "block";
    }
}