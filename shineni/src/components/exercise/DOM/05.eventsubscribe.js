const EventSubscribe = () =>{
    useEffect(()=>{
        let method = document.getElementById('eventListener')
        let btns = method.querySelectorAll('button')
        // 1. 传统方式注册事件
        btns[0].onclick = function() {
            alert('hi')
        }
        btns[0].onclick = function() {
            alert('hello')
        }
        
        // 2. 事件监听注册事件，addEventListener
        // 2.1 里面的事件类型是字符串，必定加引号，而且不带on 
        // 2.2 同一个元素， 同一个事件可以添加多个监听器（事件处理程序）
        btns[1].addEventListener('click',function() {
            alert('22')
        })
        btns[1].addEventListener('click',function() {
            alert('33')
        })

        // btns[2].attachEvent('click',function() {
        //     alert('33')
        // })
    })

    useEffect(() => {
        let ul = document.getElementById('eventHelp').querySelector('ul')
        function fn(e) {
            // alert('this is li')
            for(let i = 0 ; i< ul.children.length; i++) {
                ul.children[i].style.backgroundColor = 'pink'
            }
            e.target.style.backgroundColor = 'yellow'
            
        }
         ul.addEventListener('click', fn)
    })

    useEffect(()=>{
        let eventSequence = document.getElementById('eventSequence')
        let son = eventSequence.querySelector('.child')
        let father = eventSequence.querySelector('.father')
        // 1. JS代码只能执行捕获或者冒泡其中的一个阶段
        // 2. onclick和attachEvent(ie)只能得到冒泡阶段
        // 3. 捕获阶段，如果addEventListener第三个参数是true, 那么则处于捕获阶段， document --> html-->body--> father--> son
        son.addEventListener('click',function(){
            alert('son')
        }, true)
        father.addEventListener('click',function(){
            alert('father')
        }, true)
        // 4. 冒泡阶段，如果addEventListener第三个参数是false或者为空, 那么则处于冒泡阶段， son--> father--> body--> html --> document
        son.addEventListener('click',function(){
            alert('son')
        }, false)
        father.addEventListener('click',function(){
            alert('father')
        }, false)
    })
    return(
        <div>
                        <div id = 'eventListener'>
                <h2>注册事件的2种方式，一般如果只想点击一次生效，我们需要取消事件监听</h2>
                <button>传统注册事件</button>
                <button>方法监听注册事件</button>
                <button>IE9以前：attachEvent</button>
            </div>
            <div id = 'eventSequence'>
                <h2>事件流</h2>
                <div className = 'father'>
                    <div className = 'child'>
                        Son 盒子
                    </div>

                </div>
            </div>
            <div id = 'eventHelp'>
                <h2>事件委托</h2>
                <ul>
                    <li>知否知否，点我应有弹框在手</li>
                    <li>知否知否，点我应有弹框在手</li>
                    <li>知否知否，点我应有弹框在手</li>
                    <li>知否知否，点我应有弹框在手</li>
                    <li>知否知否，点我应有弹框在手</li>
                </ul>
            </div>
        </div>
    )
}