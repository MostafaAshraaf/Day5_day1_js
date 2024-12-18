
let input_01 = document.querySelector('.task_one .input-one input')
let input_02 = document.querySelector('.task_one .input-two input')
let result_0 = document.querySelector('.task_one .result')

// console.log(input_01)
// console.log(input_02)
// console.log(result_0)
function task1(e){
    let operation =e.className
    if (operation === 'sum'){
        let sum = (+input_01.value) + (+input_02.value)
        result_0.innerHTML=sum
    }
    else if (operation === 'sub'){
        
        let sub = (+input_01.value) - (+input_02.value)
        result_0.innerHTML=sub
    }
    else if (operation === 'mul'){
        let mul = (+input_01.value) * (+input_02.value)
        result_0.innerHTML=mul
        
    }
    else if (operation === 'div'){
        
        let  div = (+input_01.value) / (+input_02.value)
        result_0.innerHTML= div
    }
    else{
        
        let mod = (+input_01.value) % (+input_02.value)
        result_0.innerHTML=mod
    }
}

let input_11 = document.querySelector('.task_two .input-one input')
let input_12 = document.querySelector('.task_two .input-two input')
let result_1 = document.querySelector('.task_two .result')

function task2(e){
    let operation =e.className
    if (operation === 'area'){
        let area = (+input_11.value) * (+input_12.value)
        result_1.innerHTML=area
    }
    else if (operation === 'perimeter'){
        
        let perimeter = ((+input_11.value) + (+input_12.value)) * 2 
        result_1.innerHTML=perimeter
    }
    else{
        
        let diagonal = Math.sqrt((+input_11.value)**2 + (+input_12.value)**2)
        result_1.innerHTML=diagonal
    }
}
let input_21 = document.querySelector('.task_three .input-one input')
let result_2 = document.querySelector('.task_three .result')

function task3(e){
    let operation =e.className
    if (operation === 'area'){
        let area = ((+input_21.value)**2) * (3.14)
        result_2.innerHTML=area
    }
    else if (operation === 'circumference'){
        
        let perimeter = ((+input_21.value)) * 2 *3.14 
        result_2.innerHTML=perimeter
    }
    else{
        
        let diagonal = (+input_21.value)*2 
        result_2.innerHTML=diagonal
    }
}