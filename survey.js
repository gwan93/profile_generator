const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('What is your nickname?? ', (answer1) => {
  rl.question('What is an activity you like doing? ', (answer2) => {
    rl.question('What do you listen to while doing that? ', (answer3) => {
      rl.question('which meal is your favourite (dinner, brunch, etc)? ', (answer4) => {
        rl.question('What is your favorite sport? ', (answer5) => {
          rl.question('What is your superpower? ', (answer6) => {
            console.log(`Thank you for your valuable feedback. Your profile has been generated:`);
            let output = `They call me ${answer1}. I like to ${answer2} while listening to ${answer3}. I devour ${answer4} after lengthy sessions of ${answer5}. I can also ${answer6}.`;
            console.log(output);
            rl.close();
          });
        });
      });
    });
  });
});