const CountTimer = ()=>{

    useEffect(()=>{
        // 1. 获取元素
        let timer = document.getElementById('timer')
        let hour = timer.querySelector('.hour')
        let minute = timer.querySelector('.minute')
        let second = timer.querySelector('.second')
        let inputTime = +new Date('2020-12-27 12:00:00');
        countDown() //先调用一次这个函数，防止第一次刷新页面有空白
        // 2.开启定时器 
        setInterval(countDown, 1000);

        function countDown() {
            let current  = +new Date();

            let times = (inputTime - current)/1000;
            // let  d = parseInt(times/60/60/24)  //天
            // d = d< 10? '0'+ d:d;
            let h = parseInt(times/60/60%24)   //时
            h = h< 10? '0'+ h:h;
            let m  = parseInt(times/60%60)    //分
            m = m< 10? '0'+ m:m;
            let s = parseInt(times%60)  //秒
            s = s< 10? '0'+ s:s;

            hour.innerHTML = h
            minute.innerHTML = m
            second.innerHTML = s
            
        }      
    })
    return (
        <div id = 'timer'>
        <h2>定时器</h2>
        <span className = 'hour'>1</span>
        <span className = 'minute'>2</span>
        <span className = 'second'>3</span>

    </div>
    )
}
