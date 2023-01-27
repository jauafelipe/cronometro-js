function relogio() {
    function getTimeSeconds (segundos) {
        const data = new Date(segundos * 1000)
        return data.toLocaleTimeString('Pt-BR', {
            hour12: false,  
            timeZone: 'UTC'
        })
    
    }
    
    
    const relogio = document.querySelector('.relogio');
    let seconds = 0
    let timer;
    
    function startTimer () {
        timer = setInterval(() => {
            seconds++
            relogio.innerHTML = getTimeSeconds(seconds)
        }, 1000);
    }
    
    document.addEventListener('click', (e) => {
        const elements = e.target;
    
        if(elements.classList.contains('iniciar')) {
            clearInterval(timer)
            startTimer()
        }
        if(elements.classList.contains('pausar')) {
            clearInterval(timer)
        relogio.classList.add('pausar')
        }
        if(elements.classList.contains('parar')) {
            clearInterval(timer)
            relogio.innerHTML = '00:00:00'
            seconds = 0;
        }
    })

}

relogio()

