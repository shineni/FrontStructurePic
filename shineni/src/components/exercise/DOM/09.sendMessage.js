const SendMessage = () => {
    useEffect(()=> {
        let sendMessagePart = document.getElementById('sendMessage')
        let btn = sendMessagePart.querySelector('button')
        let time = 5
        btn.addEventListener('click', function(){
            btn.disabled = true
            let timer = setInterval(() => {
                if(time === 0){
                    clearInterval(timer)
                    btn.disabled = false
                    btn.innerHTML = '发送'
                    time = 5 
                }
                else{
                    btn.innerHTML = `还剩下${time}秒`
                    time--
                }

            }, 1000);
        
        })
    })

    return (
        <div id = 'sendMessage'>
        <h2>发送短信</h2>
        <span>手机号码：</span>
        <input type = 'text'></input>
        <button>发送</button>
    </div>
    )
}