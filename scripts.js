

function helloWorld(){
    alert('HELLO WORLD');
    document.getElementById('change').style.display='none';
    document.getElementById('change-two').style.display='inline-block';
};

function colorChange(){
    let colors = ['green', 'pink', 'yellow', 'red'];
    let boxColor = document.getElementById('purple-box')
    let headerText = document.getElementById('colors');

        let max = Math.ceil(4);
        let min = Math.floor(0);
        let newColor = Math.floor(Math.random()* (max-min))+min;
        console.log(colors[newColor]);
        boxColor.style.background = colors[newColor];
        headerText.innerHTML = colors[newColor];         
};

