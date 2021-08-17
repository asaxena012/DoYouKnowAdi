let readlinesync= require("readline-sync");
let chalk= require('chalk');

const userName = readlinesync.question("May I know your name? ");

const cl = console.log;

cl(`Hey ${userName}, let's find out if you know Aditya or not.`)

let score = 0;

const questions = [
  {
    question: "Aditya's favourite netflix show?",
    options: `\n      1. Master of None \n      2. Chernobyl \n      3. Rick and Morty`,
    answer: "Master of None"
  },
  {
    question: "Dogs, cats or babies?",
    options: `\n      1. Babies \n      2. Cat \n      3. Dogs`,
    answer: "Dogs"
  },
  {
    question: "The video game he plays the most: ",
    options: `\n      1. PUBG \n      2. NFS Most Wanted \n      3. Valorant`,
    answer: "Valorant"
  },
  {
    question: "Does Aditya share food?",
    options: `\n      1. Yep \n      2. Nope \n      3. Big No`,
    answer: "Big No"
  },
  {
    question: "His favourite book?",
    options: `\n      1. Rich Dad Poor Dad \n      2. Subtle art of not giving a fuck \n      3. Tools of Titans`,
    answer: "Subtle art of not giving a fuck"
  },
  {
    question: "Did he ever tried to skateboard and failed? ",
    options: `\n      1. Nope \n      2. Yep \n      3. He didn't fail`,
    answer: "He didn't fail"
  },
  {
    question: "That one hill station he went multiple times in college:",
    options: `\n      1. Shimla \n      2. Mussoorie \n      3. Kodaikenal`,
    answer: "Mussoorie"
  },
  {
    question: "Where is he currently working at?",
    options: `\n      1. Zeda.io \n      2. Niyo Solutions \n      3. VibeCheck`,
    answer: "Zeda.io"
  },
  {
    question: "How much does he wants to get into NeogCamp?",
    options: `\n      1. Okaishly \n      2. Pretty much \n      3. Dinosaur big`,
    answer: "Dinosaur big"
  },
  {
    question: "Is he a frontend or a backend heavy dev?",
    options: `\n      1. Frontend \n      2. Backend \n      3. Android`,
    answer: "Frontend"
  }
]

//Level 0 will have 5 questions, if score is greater than 1, pass on to next Level
let level= 1;

// game loop

for(let i = 0; i< questions.length; i++){

  if(i === 5){

   cl(chalk`\n{yellow ------------------------------------}\n`);
   cl(chalk`{yellow ------------------------------------}\n`);


    cl(`\nLevel 1 Score: ${score} correct out of 5`);

    if(score < 1){
      cl(chalk`Your score is not enough to qualify to the next level\n\n TRY AGAIN 😉 .`);

      cl(chalk`\n{yellow ------------------------------------}\n`);
      cl(chalk`{yellow ------------------------------------}\n`);

      break;
    }

    cl(chalk`\nYay! You made it to level 2`);
    level++;

    cl(chalk`\n{bold {underline LEVEL ${level}}}`);

  }

  cl(chalk`\n {yellow ------------------------------------} \n`);

  cl(chalk`{bgWhite {black Question ${i+1}}}. ${questions[i].question}`);

  cl(questions[i].options + '\n');

  const answer= readlinesync.question("Your Answer: ");

  if(answer.toLowerCase() === questions[i].answer.toLowerCase()){
    cl("TRUE THAT");
    score++;
  } else{
    cl("NOPE");
  }
  cl(`Current Score: ${score}`)
}

cl(chalk`\n{yellow ------------------------------------} \n`);
cl(chalk`{yellow ------------------------------------} \n`);

cl(chalk`{bold Quiz over}, your final score: ${score}`);


