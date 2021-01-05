import React, { useEffect, useState } from 'react'
import './main.less'



 const  Main = ()=>{
    const [showPSW, setShowPSW] = useState(false)
    useEffect(()=>{
        //1. 获取元素
        let icon = document.querySelector('label')
        let input = document.querySelector('input')
        //2. 注册事件处理程序
        icon.onclick = function() {
            if(showPSW) {
                icon.innerHTML = 'txt'
                input.type = 'text'             
            }
            else{
                icon.innerHTML = 'psw'
                input.type = 'password'
            }
            setShowPSW(!showPSW)
        }

    })
   
    useEffect(()=>{
        let textChange = document.querySelector('.textchange')
        let inpt = document.querySelector('#textinput')
        inpt.onfocus = function() {
            console.log('获得了焦点')
            if(this.value ==='手机'){
                this.value = ''
                this.style.color = '#333'
            }


        }
        inpt.onblur = function() {
            console.log('失去了焦点')
            if(this.value ===''){
                this.value = '手机'
                this.style.color = '#999'
            }
        }
    })
   
    useEffect(()=>{
        let text = document.getElementById('text')
        text.onclick = function() {
            this.className = 'change'
        }
    })

    useEffect(()=>{
        //1.获取元素
        let tab = document.querySelector('.tab')
        let tablist = tab.querySelector('.tab_list').querySelectorAll('li')
        let tabcon =  tab.querySelector('.tab_con').querySelectorAll('.item')
        //2.绑定事件
        for(let i = 0; i< tablist.length; i++) {
            tablist[i].setAttribute('index',i)
            tablist[i].onclick = function(){
                //干掉其他人
                for(let j = 0; j< tablist.length; j++){
                    tablist[j].className=''
                }
                this.className='current'
                let index = this.getAttribute('index')
                for(let k = 0; k< tabcon.length; k++){
                    tabcon[k].style.display='none'
                }
                tabcon[index].style.display = 'block'
            }
        }
    })

    useEffect(()=>{
        let messageModal = document.getElementById('messageModal')
        let publishEl = document.getElementById('submit')
        let messageEl = document.getElementById('messageDetail')
        let ulEl = document.getElementById('list')

        publishEl.onclick = function() {
            if(messageEl.value===''){
                alert('没有输入')
                return false
            }
            else {
                let liChild = document.createElement('li')
                liChild.innerHTML = messageEl.value + "<a href='javascript:;' >删除</a>"
                // ulEl.appendChild(liChild)
                ulEl.insertBefore(liChild, ulEl.children[0])
                messageEl.value = ""
                var alinks = messageModal.querySelectorAll('a')
                //循环绑定删除事件
                for(let i = 0; i< alinks.length; i++) {
                    alinks[i].onclick = function() {
                        ulEl.removeChild(this.parentNode)
                    }
                }

            }
            // console.log(message)

        }
        

    })

    useEffect(()=>{
        let delPart = document.getElementById('deleteNode')
        let delButton = delPart.querySelector('button')
        let ul = delPart.querySelector('ul')
        

        delButton.onclick = function(){
            let removedChild = ul.children[0]
            if(ul.children.length > 0){
                ul.removeChild(removedChild)
            }
            else {
                this.disabled = true;
            }
            
        }

    })

    // useEffect(()=>{
    //     let clone = document.getElementById('cloneNode')
    //     let ul =  clone.querySelector('ul')
    //     let firstLi = ul.children[0]
    //     let cloneNode = firstLi.cloneNode(true)
    //     ul.appendChild(cloneNode)       
    // })



    useEffect(()=>{
        let div = document.getElementById('onResizeEvent')
        window.onresize = function(){
            if(window.innerWidth<= '800'){
                div.style.display = 'none'
            }
            else{
                div.style.display = 'block'
            }
            // console.log('尺寸变化了')
        }
    })
    




    
    return (
        // password
        <div className="main">
            <h3>目录</h3>
            <ol>
                <li>查看密码</li>
                <li>默认显示，鼠标离开文本里有默认值</li>
                <li>Tabs</li>
                <li>节点操作：删除节点，克隆节点</li>
                <li>鼠标自带背景图片</li>
                <li>键盘事件</li>
                <li>摁s搜索框获取焦点</li>
                <li>innerHTML和crateElement性能测试</li>
                <li>事件订阅的方式</li>
                <li>自动生成表格</li>
                <li>窗口大小改变事件</li>
                <li>定时器</li>
                <li>启动/停止计时器</li>
                <li>发送短信</li>
                <li>自动跳转</li>
            </ol>
            <h2>查看密码</h2>
            <div className = "box">
                <label>psw </label>
                <input type="password"></input>
            </div>
            <div className = "textchange">
                <h2>默认显示，鼠标离开文本里有默认值</h2>
                <input type="text"  id="textinput"></input>
            </div>
            <div id = "text" >
                文本
            </div>
            {/* tab */}
            <div className="tab">
                <h2>Tab组件</h2>
                <div className="tab_list">
                    <ul>
                        <li className="current">商品介绍</li>
                        <li>规格与包装</li>
                        <li>售后保障</li>
                        <li>商品评价</li>
                        <li>手机社区</li>
                    </ul>
                </div>
                <div className="tab_con">
                    <div className="item" style={{"display":"block"}}>
                        商品介绍模块
                    </div>
                    <div className="item">
                        规格与包装模块
                    </div>
                    <div className="item">
                        售后保障模块
                    </div>
                    <div className="item">
                        商品评价（5000）模块
                    </div>
                    <div className="item">
                        手机社区模块
                    </div>
                </div>
            </div>
            {/* 留言板 */}
            
            <div id = 'messageModal'>
                <h2>留言板</h2>
                <textarea id='messageDetail'></textarea>
                <button id ='submit'>发布</button>
                <ul id = "list">
                    {/* <li>123</li> */}
                </ul>
            </div>
            <div id = 'deleteNode'>
                <h2>删除节点</h2>
                <button>删除</button>
                <ul>
                    <li>熊大</li>
                    <li>熊二</li>
                    <li>光头强</li>
                </ul>

            </div>
            <div id='cloneNode'>
                <h2>克隆节点</h2>
                <button>克隆</button>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
                
            </div>


            <div id = 'onResizeEvent'>
                <h2>窗口大小改变事件</h2>
            </div>




        </div>
    )

}
export default Main