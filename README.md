# Collective Trivia 

[![Collective_trivia](https://github.com/C2rli3/collective_trivia/files/5667581/trivia_logo.pdf)](https://github.com/C2rli3/collective_trivia)

Collective Trivia is a game that uses JSON return values from a Google Trends API to quiz the user on popular known trivia through: image, text, and audio. 

API JSON return { image: xx, text: xx, audio: xx} is taken as a parameter in a shuffle function: 

shuffle(return)
{
    return return[Math.floor(Math.random()) *return.length)];
}

This pops up the selected quiz method whilst saving the returns unique_key and name's associated with strings:

this.unique_key = return.unique_key;
this.associated = return.keywords;

#  Features!

  - Play against previously saved high score
  - Random trivia generator - learn collective links!
  - Lightweight
  - Possible scale to different languages!