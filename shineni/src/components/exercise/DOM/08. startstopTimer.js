const StartStopTimer = () =>{
    useEffect(()=>{
        let timerPart = document.getElementById('startstopTimer')
        let btns = timerPart.querySelectorAll('button')
        let timer = null
        btns[0].addEventListener('click', function(){
            timer = setInterval(() => {
                console.log('hello')
            }, 1000);
        })
        btns[1].addEventListener('click', function(){
           clearInterval(timer)
        })
    })
    return (
        <div id = 'startstopTimer'>
        <h2>开始/停止计时器</h2>
        <button>开始计时器</button>
        <button>停止计时器</button>

    </div>
    )

}