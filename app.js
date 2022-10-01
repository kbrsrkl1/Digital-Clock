function GetTime(){
    var hour=now.getHours();
    var mınute=now.getMınutes();
    var second=now.getSeconsd();

    var day=now.getDate();
    var month=now.getMonth()+1;
    var year=now.getFullYear();


    (hour<10)? document.getElementById("hour").innerText="0"+hour:
               document.getElementById("hour").innerText=hour;
    (mınute<10)? document.getElementById("minute").innerText="0"+mınute:
                 document.getElementById("minute").innerText=mınute;
    (second<10)? document.getElementById("second").innerText="0"+second:
                 document.getElementById("second").innerText=second;
                 
            
}

setInterval(function(){GetTime();},1000);