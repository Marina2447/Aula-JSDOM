let corFundoAtual = 'red';
let fonteAtual = 18;
let imagemVisivel = false;


document.getElementById('botao1').addEventListener('click', function() {
    if (corFundoAtual === 'white') {
        document.body.style.backgroundColor = 'pink';
        corFundoAtual = 'pink';
    } else {
        document.body.style.backgroundColor = 'white';
        corFundoAtual = 'white';
    }
});


document.getElementById('botao2').addEventListener('click', function() {
    document.body.style.color = 'blue';
});


document.getElementById('botao3').addEventListener('click', function() {
    fonteAtual += 2;
    document.body.style.fontSize = fonteAtual + 'px';
});

document.getElementById('botao4').addEventListener('click', function() {
    if (fonteAtual > 8) {
        fonteAtual -= 2;
        document.body.style.fontSize = fonteAtual + 'px';
    }
});


document.getElementById('botao5').addEventListener('click', function() {
    document.getElementById('titulo').innerText = 'Título alterado!';
});


document.getElementById('botao6').addEventListener('click', function() {
    document.getElementById('titulo').style.textShadow = '2px 2px 5px gray';
});


document.getElementById('botao7').addEventListener('click', function() {
    document.getElementById('titulo').style.textShadow = 'none';
});


document.getElementById('botao8').addEventListener('click', function() {
    document.querySelector('p').style.backgroundColor = 'orange';
});





// document.getElementById('botao9').addEventListener('click', function() {
//     if (!imagemVisivel) {
//         document.getElementById('minhaImagem').style.display = 'block';
//         imagemVisivel = true;
//     }
// });

// document.getElementById('botao10').addEventListener('click', function() {
//     if (imagemVisivel) {
//         document.getElementById('minhaImagem').style.display = 'none';
//         imagemVisivel = false;
//     }
// });
