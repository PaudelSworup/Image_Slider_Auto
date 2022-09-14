let img_container = ['p2.jpg', 'p3.jpg' , 'p4.jpg' ,'p5.jpg' , 'p6.jpg']
let i = 0
const array_length  =img_container.length;
console.log(array_length)



let set=setInterval(sliderFunction,2000)

function sliderFunction(){
    i++
    i=i%array_length
    document.getElementById('image').src =`images/${img_container[i]}`
}



function goBack(){
    if(i == 0){
        i=array_length
    }
    i--
    i=i%array_length
    document.getElementById('image').src = `images/${img_container[i]}`
    console.log(`images/${img_container[i]}`)
    console.log(i)
}


function goNext(){
    i++
    i=i%array_length
    document.getElementById('image').src = `images/${img_container[i]}`
    console.log(`images/${img_container[i]}`)
    console.log(i)
}

function stopSlide(){
    clearInterval(set)
}

function beginSlide(){
  set=setInterval(sliderFunction,2000)
}