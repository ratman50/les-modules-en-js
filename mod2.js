export {Sum,decremente}
function Sum(params) {
    params=parseInt(params)
    document.body.innerHTML+="<br>"
    let ul=document.createElement("ul");
    
    for (let index = 0; index < params; index++) {
        let li=document.createElement("li");
        li.innerText=index;
        
        ul.append(li)
        
    }
    console.log(ul)
    document.body.append(ul)
}

function decremente(params) {
    return (params<0)?params:--params;
}
