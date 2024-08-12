let spinCount=false;
const Spin=()=>{
     data=document.getElementById("wheel");
    if(spinCount===false){
    //    data.style.transform="rotate(15700deg)";
    //     data.style.transition="25s";
            
            document.querySelector(".main").style="animation-duration: 5s;"
        // data.style.animation="linear infinite";
        spinCount=true;
    } 
    else{
        document.querySelector(".main").style="animation-duration: unset;"

        // data.style.transform="rotate(0)";
        // data.style.animation="linear infinite";
        // data.style.transition="5000s";
        spinCount=false;
    }
}