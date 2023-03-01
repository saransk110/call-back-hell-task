let div = document.createElement("div");
div.style.display='flex';
div.style.justifyContent="center"
div.style.marginTop="50px"
div.style.fontSize="400%"
let second = 10;
div.innerHTML=second;
document.body.append(div)
setTimeout(() => {
    second -= 1
    div.innerHTML=second
    setTimeout(() => {
        second -= 1
        div.innerHTML=second
        setTimeout(() => {
            second -= 1
            div.innerHTML=second
            setTimeout(() => {
                second -= 1
                div.innerHTML=second
                setTimeout(() => {
                    second -= 1
                    div.innerHTML=second
                    setTimeout(() => {
                        second -= 1
                        div.innerHTML=second
                        setTimeout(() => {
                            second -= 1
                            div.innerHTML=second
                            setTimeout(() => {
                                second -= 1
                                div.innerHTML=second
                                setTimeout(() => {
                                    second -= 1
                                    div.innerHTML=second
                                    setTimeout(() => {
                                        second -= 1
                                        div.innerHTML="Happy Independance Day"
                                        
                                    }, 1000);
                                }, 1000); 
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);  
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);