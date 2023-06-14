const arrs=[
    {
        question:"1. What is the capital city of France?",
        op1:"Paris",
        op2:"London",
        op3:"Rome",
        op4:"Berlin",
        ans:"Paris"
    },
    {
        question:"2. Who painted the Mona Lisa?",
        op1:"Vincent van Gogh",
        op2:"Leonardo da Vinci",
        op3:"Pablo Picasso",
        op4:"Michelangelo",
        ans:"Leonardo da Vinci"
    },
    {
        question:"3. Which planet is known as the \"Red Planet\"?",
        op1:"Venus",
        op2:"Mars",
        op3:"Jupiter",
        op4:"Saturn",
        ans:"Mars"
    },
    {
        question:"4. Which country is home to the kangaroo?",
        op1:"Australia",
        op2:"Brazil",
        op3:"Canada",
        op4:"India",
        ans:"Australia"
    },
    {
        question:"5. What is the largest ocean in the world?",
        op1:"Atlantic Ocean",
        op2:"Indian Ocean",
        op3:"Arctic Ocean",
        op4:"Pacific Ocean",
        ans:"Pacific Ocean"
    },
    {
        question:"6. Who wrote the play \"Romeo and Juliet\"?",
        op1:"William Shakespeare",
        op2:"Ernest Hemingway",
        op3:"F. Scott Fitzgerald",
        op4:"Jane Austen",
        ans:"William Shakespeare"
    },
    {
        question:"7. What is the chemical symbol for gold?",
        op1:"Ag",
        op2:"Au",
        op3:"Fe",
        op4:"Pb",
        ans:"Au"
    },
    {
        question:"8. Who invented the telephone?",
        op1:"Thomas Edison",
        op2:"Alexander Graham Bell",
        op3:"Nikola Tesla",
        op4:"Isaac Newton",
        ans:"Alexander Graham Bell"
    },
    {
        question:"9. Which country is famous for its pyramids?",
        op1:"Egypt",
        op2:"Greece",
        op3:"China",
        op4:"Mexico",
        ans:"Egypt"
    },
    {
        question:"10. Who was the first person to set foot on the moon?",
        op1:"Buzz Aldrin",
        op2:"Yuri Gagarin",
        op3:"Neil Armstrong",
        op4:"Alan Shepard",
        ans:"Neil Armstrong"
    },
];
var j=0;
var score=0;
var finalans;
var time=document.querySelector(".span2");
var h3s=document.querySelector(".quest");
var opt1=document.querySelector("#option11");
var opt2=document.querySelector("#option22");
var opt3=document.querySelector("#option33");
var opt4=document.querySelector("#option44");
var nextbtn=document.querySelector(".next");
var answers=document.querySelectorAll(".ans");
var yourscore=document.querySelector(".span1");
var comments=document.querySelector(".comments");
var tryagain=document.querySelector(".tryagain");
var yourScore=document.querySelector(".span3");

document.querySelector(".startquiz").addEventListener("click",function(){
    document.querySelector(".container2").classList.add("visible");
    loadQuestions(j); 
    nextbtn.addEventListener("click",function(){
        for (var k=0;k<4;k++){
            if(answers[k].checked){
                finalans=answers[k].parentElement.lastElementChild.innerText;
                console.log(finalans+" "+arrs[j].ans);
                if(finalans==arrs[j].ans){
                    
                    score++;
                }else{
                    score=score;
                }
                break;
            }
        }
        
        yourscore.innerText=score;
        j++;
        if(j<=9){
            loadQuestions(j);
        }else{
            document.querySelector(".container2").classList.remove("visible");
            if (score >= 9) {
                comments.innerText="Excellent! Your score is very high.";
              } else if (score >= 7) {
                comments.innerText="Good job! Your score is above average.";
              } else if (score >= 5) {
                comments.innerText="Not bad! Your score is average.";
              } else if (score >= 4) {
                comments.innerText="You need to improve. Your score is below average.";
              } else {
                comments.innerText="You need to study harder. Your score is very low.";
              }
            document.querySelector(".container3").classList.add("visible");
            yourScore.innerText=score;
        }
    });   
    tryagain.addEventListener("click",function(){
        window.location.reload();
    });
    document.querySelector(".container").classList.add("hidden");
});

function loadQuestions(j){

    h3s.innerText=arrs[j].question;
    opt1.innerText=arrs[j].op1;
    opt2.innerText=arrs[j].op2;
    opt3.innerText=arrs[j].op3;
    opt4.innerText=arrs[j].op4;
}
