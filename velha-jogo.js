let caixinhas = document.getElementsByClassName('caixinha')
let jogadorAtivo = 'X'


function trocarJogador() {
    if (jogadorAtivo === 'X') {
        jogadorAtivo = 'O'
    } else {
        jogadorAtivo = 'X'
    }
}           

function acharVencedor() {

   
            
    if (
        caixinhas[0].innerHTML !== ''
        && caixinhas[0].innerHTML == caixinhas[1].innerHTML
        && caixinhas[0].innerHTML == caixinhas[2].innerHTML) {
        alert('vencedor')
    }

    if (
        caixinhas[3].innerHTML !== ''
        && caixinhas[3].innerHTML == caixinhas[4].innerHTML
        && caixinhas[3].innerHTML == caixinhas[5].innerHTML) {
        alert('vencedor')
    }

    if (
        caixinhas[6].innerHTML !== ''
        && caixinhas[6].innerHTML == caixinhas[7].innerHTML
        && caixinhas[6].innerHTML == caixinhas[8].innerHTML) {
        alert('vencedor')
    }

    if (
        caixinhas[6].innerHTML !== ''
        && caixinhas[6].innerHTML == caixinhas[7].innerHTML
        && caixinhas[6].innerHTML == caixinhas[8].innerHTML) {
        alert('vencedor')
    }

    if (
        caixinhas[0].innerHTML !== '' && caixinhas[4].innerHTML !== '' && caixinhas[8].innerHTML !== ''
        && caixinhas[0].innerHTML == caixinhas[4].innerHTML
        && caixinhas[0].innerHTML == caixinhas[8].innerHTML) {
        alert('vencedor')
    }

    if (
        caixinhas[2].innerHTML !== '' && caixinhas[4].innerHTML !== '' && caixinhas[6].innerHTML !== ''
        && caixinhas[2].innerHTML == caixinhas[4].innerHTML
        && caixinhas[2].innerHTML == caixinhas[6].innerHTML) {
        alert('vencedor')
    }

    if (
        caixinhas[0].innerHTML !== ''
        && caixinhas[0].innerHTML == caixinhas[3].innerHTML
        && caixinhas[0].innerHTML == caixinhas[6].innerHTML) {
        alert('vencedor')
    }

    if (
        caixinhas[1].innerHTML !== ''
        && caixinhas[1].innerHTML == caixinhas[4].innerHTML
        && caixinhas[1].innerHTML == caixinhas[7].innerHTML) {
        alert('vencedor')
    }

    if (
        caixinhas[2].innerHTML !== ''
        && caixinhas[2].innerHTML == caixinhas[5].innerHTML
        && caixinhas[2].innerHTML == caixinhas[8].innerHTML) {
        alert('vencedor')
    }



}

  

//     function resetar () {
//         for (let i = 0; i < caixinhas.length; i++) {
//             if (caixinhas[i].innerHTML !== '' ) {
//                 caixinhas[i].innerHTML = ''
//             }
//         }
//     }




// }





for (let i = 0; i < caixinhas.length; i++) {
    let caixinha = caixinhas[i];

    caixinha.addEventListener('click', function () {
        if (caixinha.innerHTML === '') {
            caixinha.innerHTML = jogadorAtivo
            
            
            acharVencedor()
            trocarJogador()
            // resertar()
                                        
        }
    })
}
