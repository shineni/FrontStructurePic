const AutoJump = ()=>{
    useEffect(()=>{
        let stepPart = document.getElementById('jumpAfter5mins')
        let div = stepPart.querySelector('div')
        let btn = stepPart.querySelector('button')
        let time = 5
        fn();
        btn.addEventListener('click',fn)

        function fn() {
           let timer =  setInterval(() => {
               if(time ===0) {
                   window.location.href = 'http://www.baidu.com'
                   clearInterval(timer)
                   div.innerText = ''
                   time = 5
               }
               else{
                   div.innerText = `还有${time}秒跳转到百度`
                   time--
               }
                
            }, 1000);
        }
    })
    return(
        <div id = 'jumpAfter5mins'>
        <h2>5秒后自动跳转页面</h2>
        <button>点击</button>
        <div></div>
    </div>
    )
}