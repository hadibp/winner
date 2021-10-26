var a=document.getElementById("s1")
var b=document.getElementById("s2")


function upper(x){
    
    
    
    if (x==1) {       
        a.innerHTML = parseInt(a.innerHTML)+1;
    } else if (x==2){       
        b.innerHTML = parseInt(b.innerHTML)+1;
    }

    if (a.innerHTML==100) {
        alert("red is the winner");
        reset()
    } else if(b.innerHTML ==100) {
        alert("yellow is the winner");
        reset()
    }
     
}



function reset(){
    a.innerHTML=0
    b.innerHTML=0
}
