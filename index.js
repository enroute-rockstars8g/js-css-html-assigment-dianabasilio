function favColor() {
    console.log("button1")
    const backgroundColor = document.getElementById('button1').style.backgroundColor;
  
    if(backgroundColor === 'rgb(255, 143, 163)') {
      document.getElementById('button1').style.backgroundColor = 'rgb(229, 56, 59)';
    } else {
      document.getElementById('button1').style.backgroundColor = 'rgb(255, 143, 163)';
  
    }
  }

let count = 0;
function hobbies(){
    let hobbies = ["Play guitar", "Code", "Going to concerts/festivals", "Spent time with family/friends", "Skate","Watch documentals",'Astronomy/Physics'];
    console.log(hobbies.length);

    if (count <= hobbies.length)
        {
        
        document.getElementById('showNames').innerHTML = hobbies[count];
        count +=1;
        console.log(count)
        if (count == hobbies.length){
            count = 0;
            console.log("inicio")
        }
        
        }

}
function Fibo(){
    let number2 = parseInt(document.getElementById("inputFibo").value);
    console.log(number2);
    
    let fibonacci = [];
    fibonacci[0] = 0;
    fibonacci[1] = 1;
    for (var i = 2; i < number2; i++) {
    fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
    }
    console.log(fibonacci);

    const container = document.getElementById("fiboContainer");
    const paragraph = document.createElement("p");
    paragraph.innerHTML = "Fibonacci of <b>"+number2+"</b>= "+fibonacci[fibonacci.length - 1];
    container.appendChild(paragraph);

    document.getElementById("inputFibo").value = '';

}


function Factorial(){
    const number1 = parseInt(document.getElementById("inputFactorial").value);
    console.log(number1);

    let numberToShow = [];
    let answerFact = 0;

    if (number1 !== 0 && number1 <15 ){

        for (let i = 1; i <= number1; i++){
            numberToShow.push(i);
        };
    
        answerFact = numberToShow.reduce(function(a, b){return a*b});

    }    
    else if (number1 >=15){
        answerFact = "Too long";
        
    }else{
        answerFact = 1;
    }

    const container = document.getElementById("fiboFactorial");
    const paragraph = document.createElement("p");
    paragraph.innerHTML = "Factorial of <b>"+number1+"</b>= "+answerFact;
    container.appendChild(paragraph);
    document.getElementById("inputFactorial").value = '';

}

function factText(){
    window.location.href = "https://www.mathsisfun.com/numbers/fibonacci-sequence.html";
}

