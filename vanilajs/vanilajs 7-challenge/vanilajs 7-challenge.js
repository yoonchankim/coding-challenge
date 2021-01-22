const number=document.querySelectorAll(".number");
const symbal=document.querySelectorAll(".symbal");
const equal=document.querySelector(".equal")
const reset=document.querySelector(".reset");
const span=document.querySelector("span");
let plus=0;
let minus=0;
let divide=0;
let multply=0;
let nowOerator="";
let value=0;
function equalClickHandle(event){
    plus=0;
    minus=0;
    divide=0;
    multply=0;
    span.innerText=value;
}
function resetClickHandle(event){
    plus=0;
    minus=0;
    divide=0;
    multply=0;
    span.innerText=0
    value=0;
}
function numberClickHandle(event){
    const numCode=event.target;
    const num=numCode.innerText;
    const result=span.innerText;
    if(plus===0&&minus===0&&divide===0&&multply===0){
        if(parseInt(result)===0){
            span.innerText=`${num}`;
        }
        else{
            span.innerText=`${result}${num}`;
        }
    }
    else{
        if(nowOerator==="+"){
            value=parseInt(span.innerText);
            value=parseInt(value)+parseInt(num);
        }
        if(nowOerator==="-"){
            value=parseInt(span.innerText);
            value=parseInt(value)-parseInt(num);
        }
        if(nowOerator==="/"){
            value=parseInt(span.innerText);
            value=parseInt(value)/parseInt(num);
        }
        if(nowOerator==="*"){
            value=parseInt(span.innerText);
            value=parseInt(value)*parseInt(num);
        }
        span.innerText=`${num}`;
    }
}
function symbalClickHandle(event){
    const operatorCode=event.target;
    const operator=operatorCode.innerText;
    if(operator==="+"){
        plus++;
        nowOerator=operator;
    }
    else if(operator==="-"){
        minus++;
        nowOerator=operator;
    }
    else if(operator==="/"){
        divide++;
        nowOerator=operator;
    }
    else if(operator==="*"){
        multply++;
        nowOerator=operator;
    }
    if(plus+minus+divide+multply>=2){
        span.innerText=`${value}`
    }
}
function init(){
    number.forEach(function numberClick(number){
        number.addEventListener("click",numberClickHandle);
    })
    symbal.forEach(function numberClick(symbal){
        symbal.addEventListener("click",symbalClickHandle);
    })
    equal.addEventListener("click",equalClickHandle);
    reset.addEventListener("click",resetClickHandle);
}
init();