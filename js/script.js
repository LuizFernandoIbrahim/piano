const keys = document.querySelectorAll('.key');

const checkbox = document.querySelector('.checkbox_keys');
const switcher = document.querySelector('.switcher');

const piano_keys = document.querySelector('.piano_keys');

const playNote = (note) => {
    const audio = new Audio (`../notes/${note}.wav`);
    audio.play();
};


const apertarClick = (key) => {
    playNote(key.getAttribute ('data-note'))
    
    if (key.className.includes('black')) {
        key.classList.add('black-pressed');
        return;
    };
    
    key.style.background = '#ddd';
};

const soltarClick = (key) => {
    if (key.className.includes('black')) {
        key.classList.remove('black-pressed')
        return
    }
    key.style.background = 'white';
};

keys.forEach((key) => {
    key.addEventListener('mousedown', () => apertarClick(key))
    key.addEventListener('mouseup', () => soltarClick(key))
})

checkbox.addEventListener('change', ({ target }) => {
    if (target.checked){
        switcher.classList.add('switcher-active');
        piano_keys.classList.remove('desativar_atalho')
        return; 
    }
        piano_keys.classList.add('desativar_atalho')
        switcher.classList.remove('switcher-active')
});

const mapeamentoAtalho = {
    "Tab": () => apertarClick(keys[0]),
    "1": () => apertarClick(keys[1]),
    "q": () => apertarClick(keys[2]),
    "2": () => apertarClick(keys[3]),
    "w": () => apertarClick(keys[4]),
    "e": () => apertarClick(keys[5]),
    "4": () => apertarClick(keys[6]),
    "r": () => apertarClick(keys[7]),
    "5": () => apertarClick(keys[8]),
    "t": () => apertarClick(keys[9]),
    "6": () => apertarClick(keys[10]),
    "y": () => apertarClick(keys[11]),
    "u": () => apertarClick(keys[12]),
    "8": () => apertarClick(keys[13]),
    "i": () => apertarClick(keys[14]),
    "9": () => apertarClick(keys[15]),
    "o": () => apertarClick(keys[16]),
    "p": () => apertarClick(keys[17]),
    "-": () => apertarClick(keys[18]),
    "[": () => apertarClick(keys[19]),
    "=": () => apertarClick(keys[20]),
    "]": () => apertarClick(keys[21]),
    ";": () => apertarClick(keys[22]),
    "/": () => apertarClick(keys[23]),
};

const mapeamentoSoltarAtalho = {
    "Tab": () => soltarClick(keys[0]),
    "1": () => soltarClick(keys[1]),
    "q": () => soltarClick(keys[2]),
    "2": () => soltarClick(keys[3]),
    "w": () => soltarClick(keys[4]),
    "e": () => soltarClick(keys[5]),
    "4": () => soltarClick(keys[6]),
    "r": () => soltarClick(keys[7]),
    "5": () => soltarClick(keys[8]),
    "t": () => soltarClick(keys[9]),
    "6": () => soltarClick(keys[10]),
    "y": () => soltarClick(keys[11]),
    "u": () => soltarClick(keys[12]),
    "8": () => soltarClick(keys[13]),
    "i": () => soltarClick(keys[14]),
    "9": () => soltarClick(keys[15]),
    "o": () => soltarClick(keys[16]),
    "p": () => soltarClick(keys[17]),
    "-": () => soltarClick(keys[18]),
    "[": () => soltarClick(keys[19]),
    "=": () => soltarClick(keys[20]),
    "]": () => soltarClick(keys[21]),
    ";": () => soltarClick(keys[22]),
    "/": () => soltarClick(keys[23]),
};

document.addEventListener('keydown', (event) => {
    event.preventDefault();
    mapeamentoAtalho[event.key]();
});

document.addEventListener('keyup', (event) => {
    mapeamentoSoltarAtalho[event.key]();
});