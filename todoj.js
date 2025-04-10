let input=document.querySelector(".input");
let add=document.querySelector(".add");
let list=document.querySelector(".list");
let text=document.querySelector(".text");
add.addEventListener("click",()=>{
    if(input.value===""||input.value.trim()==="")
    {
        alert("enter the input");
    }else{
        let def=document.querySelector(".def")
        if(def){
            def.remove();
        }
        let li=input.value;
        let div=document.createElement("div");
        let p=document.createElement("p");
        p.innerText=li;
        let cb=document.createElement("input");
        cb.type="checkbox";
        cb.className="check";
        p.id="e";
        div.append(p);
        let bt=document.createElement("button");
        bt.innerHTML = '<i class="bi bi-trash-fill"></i>';
        bt.className="trash";
        div.append(bt);
        list.append(div);
        bt.addEventListener("click",()=>{
            text.innerText=`You had removed ${p.innerText}`;
            text.style.color="red"
            div.remove();
        });
        div.append(cb);
        div.append(p);
        div.append(bt);
        list.append(div);
        div.scrollIntoView({ behavior: "smooth", block: "center" });
        input.value="";
        cb.addEventListener("click",()=>{
            text.innerText=`You have completed ${p.innerText}`
            text.style.color="white";
        });
    }
});