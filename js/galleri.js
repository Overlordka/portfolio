let dialog = document.getElementById("dialog")
let dialogContent = document.getElementById("dialog-content")

function modal(li){
    //document.getElementById("dialog-img").src = image.src
    let hiddenContent = li.querySelector(".model-content")
    dialogContent.innerHTML = hiddenContent.innerHTML
    dialog.showModal()
}

function closeDialog(){
    dialog.close()
    dialogContent.innerHTML = ""
}   