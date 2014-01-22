function newsletter(){
    m = document.getElementById('boxmail').value;
    if (m.length > 0){
       location.href='/newsletter.athx?m='+m;
    }else{
        location.href='/newsletter.athx';
    }
}


 
