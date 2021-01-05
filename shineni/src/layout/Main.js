import React, { useEffect, useState } from 'react'
import './main.less'



 const  Main = ()=>{

    useEffect(()=>{
        //   1.获取元素
        let login = document.querySelector('.login')
        let mask = document.querySelector('#bg')
        let alink = document.querySelector('#link')
        let closebtn = document.querySelector('#closebtn')
        let title = document.querySelector('#title')
        //  2.点击弹出层这个链接link 让mask和login显示出来
        alink.addEventListener('click', function() {
            login.style.display = 'block'
            mask.style.display = 'block'
        })
        // 3.  点击关闭按钮 让mask和login隐藏
        closebtn.addEventListener('click',function(){
            login.style.display = 'none'
            mask.style.display = 'none'
        })
        // 4. 拖拽
        // (1)鼠标按下，就获得鼠标在盒子里的坐标
        title.addEventListener('mousedown',function(e){
            let x = e.pageX - login.offsetLeft
            let y = e.pageY - login.offsetTop
            function mouseMoveEvent(e) {
                login.style.left = e.pageX - x + 'px'
                login.style.top = e.pageY - y + 'px'
            }
             // (2)鼠标移动的时候，把鼠标在页面中的坐标，减去鼠标在盒子内的坐标就是模态框的left和top值
            document.addEventListener('mousemove', mouseMoveEvent)
            // (2)鼠标弹起的时候，就让鼠标移动事件移除
            document.addEventListener('mouseup', function(e){
               document.removeEventListener('mousemove',mouseMoveEvent)
            })
        })

    })

    return (
        <div className = 'main'>
            <div className = 'login-header'><a id='link' href = 'javascript:;'>点击，弹出登录框</a></div>
            <div id = 'login' className='login'>
                <div id= 'title' className= 'login-title'>
                    登录会员
                    <span><a id= 'closebtn' href = 'javascript:void(0)' className = 'close-login'>关闭</a></span>
                </div>
                <div className = 'login-input-content'>
                    <div className = 'loign-input'>
                        <label>用户名：</label>
                        <input type = 'text' placeholder ='请输入用户名'></input>
                    <div className = 'loign-input'>
                        <label>密码：</label>
                        <input type = 'password' placeholder ='请输入密码'></input>
                    </div>
                    </div>
                    <button id='loginbtn' className = 'login-button'>登录会员</button>
                </div>

                
            </div>
            <div className = 'login-bg' id = 'bg'></div>
        </div>
    )

}
export default Main