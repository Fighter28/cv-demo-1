let html=document.querySelector("#html");
let style=document.querySelector("#style");
let n =-1
let string=`/*你好，我叫小郑
*接下来我做一个东西
*首先我要准备一个div*/
#div1{
    border:1px solid red;
    width:200px;
    height:200px;
}
/*接下来我要把div变成一个八卦图
*注意看好了
*首先把div变成一个圆
**/
#div1{
    border-radius:50%;
    border:none;
    box-shadow:0px 0px 3px black;
    background:
}
/*八卦是由阴阳组成的
*一黑一白
**/
#div1{
    background:linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%);
}
/*接下来加两个神秘的球
**/
#div1:before{
    position:absolute;
    height:100px;
    width:100px;
    left:50%;
    top:0;
    transform:translateX(-50%);
    background:black;
    border-radius:50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 18%, rgba(0,0,0,1) 18%);

}
#div1:after{
    position:absolute;
    height:100px;
    width:100px;
    left:50%;
    bottom:0;
    border-radius:50%;
    transform:translateX(-50%);
    background:white;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 18%, rgba(255,255,255,1) 18%, rgba(255,255,255,1) 56%);
   
}
`;
let string2="" 
let fun=()=>{
    setTimeout(() => {
        n=n+1
        if(string[n]==="\n"){
            string2+="<br>"
        }else if(string[n]===" "){
            string2+="&nbsp"
        }
        else{
            string2+=string[n];
        }      
        html.innerHTML=string2;
       style.innerHTML=string.substring(0, n);
       window.scrollTo(0,999999);
       html.scrollTo(0,999999)
        
        if(n<string.length-1){
            fun()
       }    
        }, -500);
}
fun()