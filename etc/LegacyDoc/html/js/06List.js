function cList(data){
    let section;
    section=document.getElementById("div");
    section.innerHTML=data;
}



fetch(`../${fileNameOrigin}.cList`)
.then(response => response.text())
.then(response => {

    response=response.split("\r\n");

    let s=``;
    response.forEach((item, index)=>{
        item=`<li>${item}</li>`
        s+=item;
    })
    s=`<ul>${s}</ul>`

    cList(s);
})

