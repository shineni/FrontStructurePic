const Test = ()=> {
    useEffect(()=>{
        let testPart = document.getElementById('compare')
        let test1 = document.getElementById('test1')
        let test2 = document.getElementById('test2')
        let test3 = document.getElementById('test3')
        let time1 = document.getElementById('time1')
        let time2 = document.getElementById('time2')
        let time3 = document.getElementById('time3')
        let inner = testPart.querySelector('.inner')

        test1.onclick = function() {
            let d1 = +new Date();
            let str = ''
            inner.innerHTML = ''
            for(let i = 0; i< 1000; i++) {
                inner.innerHTML += '<a href="javascript:;">百度</a>'
            }
            let d2 = +new Date()
            time1.innerHTML = d2 - d1
        }
        test2.onclick = function() {
            let d1 = +new Date();
            let str = ''
            inner.innerHTML = ''
            let arr = []
            for(let i = 0; i< 1000; i++) {
                arr.push('<a href="javascript:;">百度</a>') 
            }
            inner.innerHTML = arr.join('')
            let d2 = +new Date()
            time2.innerHTML = d2 - d1
        }
        test3.onclick = function() {
            let d1 = +new Date();
            let str = ''
            inner.innerHTML = ''
            let arr = []
            for(let i = 0; i< 1000; i++) {
                let alink = document.createElement('a')
                alink.href = 'javascript:;'
                alink.innerHTML = '百度'
                inner.appendChild(alink) 
            }
           
            let d2 = +new Date()
            time3.innerHTML = d2 - d1
        }

    })

    return(
        <div id = 'compare'> 
        <h2>效率测试</h2>
        <span className = 'inner'></span>
        <br/>
        <button id = 'test1'>测试innerHTML（字符串拼接）: 1000个a链接</button>
        <span id = 'time1'></span>
        <br/>
        <button id = 'test2'>测试innerHTML(数组): 1000个a链接</button>
        <span id = 'time2'></span>
        <br/>
        <button id = 'test3'>测试createElement: 1000个a链接</button>
        <span id = 'time3'></span>

        </div>
    )
}