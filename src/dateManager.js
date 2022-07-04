export function getCurrentDate(){
    const date = new Date()
    return date
}

export function getTomorrow(){
    const today = getCurrentDate()
    const tomorrow = new Date(today)
    tomorrow.setDate(today.getDate() + 1)
    return tomorrow
}

export function formatDate(date){
    const [month, day, year] = [(date.getMonth()+1).toString().padStart(2, "0"), date.getDate().toString().padStart(2, "0"), date.getFullYear()]
    return `${month}/${day}/${year}`
}
  
export function formatHTMLDate(dateStr){
    let formatDate = dateStr.replace(/(\d{4})-(\d{1,2})-(\d{1,2})/g, "$2/$3/$1")
    return formatDate
}

export function revertHTMLDate(formatStr){
    return formatStr.replace(/(\d{2})\/(\d{2})\/(\d{4})/g, "$3-$1-$2")
}

