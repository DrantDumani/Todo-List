const localStorage = window.localStorage

 export function checkLocalStorage(keyStr){
    const keyObj = localStorage.getItem(keyStr)
    if (keyObj){
        return true 
    }
    else{
        return false
    }
}

export function updateStorage(keyStr, value){
    const strVal = JSON.stringify(value)
    localStorage.setItem(keyStr, strVal)
}

export function getStorage(keyStr){
    const value = localStorage.getItem(keyStr)
    return JSON.parse(value)
}