let date = new Date ()

console.log(date.getMinutes ())




// let date =(
//     month:"08"
//     minute:16,
// )


let clock = ()=>{
    let date = new Date()
    let month_num = date.getMonth()
    let day = date.getDate()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let second = date.getSeconds()

    if(hours<9)hours="0"+minutes
    if(minutes<9)minutes="0"+minutes
    

let month =["Январь","Февраль", "Март","Апрель","Май","Июнь","Июль","Авгусь","Сентябрь","Октябрь","Ноябрь","Декабрь"]
console.log(month[month_num])
    let date_time = hours+":"+minutes+":"+second

    // console.log(date_time)

    let element = document.getElementById('time').innerHTML= date_time
    // console.log(element)


    setTimeout(() => {
        clock()
    }, 1000);
//     1000-1секунд
}

clock()