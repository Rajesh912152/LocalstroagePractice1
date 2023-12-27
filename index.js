let inputEl=document.getElementById('inputId');
let btnSaveEl=document.getElementById('btnSave')
let btnClearEl=document.getElementById("btnClear")


btnSaveEl.onclick=function(){
    let inputValue=inputEl.value
    localStorage.setItem('inputValue',inputValue)
}


btnClearEl.onclick=function(){
    localStorage.removeItem('inputValue')
}

inputEl.value=localStorage.getItem('inputValue')