const wording = ['Do you like JavaScript as much as I do?', 'Hope you are having fun with this simple game.',
'Source code is included so you can create your own version of this challenge.']
let startTime, endTime;
const message = document.querySelector('.message');
const playText = document.querySelector('textarea');
const button = document.querySelector('button');

const playGame = () =>{
    let randomNum = Math.floor(Math.random() * wording.length);
    message.innerText = wording[randomNum]
    let date = new Date();
    startTime = date.getTime();
    button.innerText = 'Done';
}

const wordCounter = (strWords) => {
    let response = strWords.split(' ').length;
    //split creates a array containing each individual word, which has been separated by the spacing
    console.log(response);
    return response;
}

const compareWords = (str1, str2) => {
    let words1 = str1.split(' ');
    let words2 = str2.split(' ');
    let cnt = 0;
    words1.forEach(function(item, index){
        if(item == words2[index]){
            cnt++
        }
    })
    return(cnt + ' correct out of '+words1.length+ ' words.');
}

const endPlay = () => {
    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime - startTime) / 1000);
    let str = playText.value;
    let wordCount = wordCounter(str)
    let speed = Math.round((wordCount/totalTime)*60);
    let finalMessage = 'You typed at '+speed+' words per minute.';
    
    
        finalMessage += '<br>'+ compareWords(message.innerText, str)
   
    message.innerHTML = finalMessage;
}


button.addEventListener('click', function() {
    console.log(this.innerText)
    if(this.innerText == 'Start'){
        playText.disabled = false;
        playGame()
    }else if(this.innerText == 'Done') {
        playText.disabled = true;
        button.innerText = 'Start';
        endPlay()
    }
})