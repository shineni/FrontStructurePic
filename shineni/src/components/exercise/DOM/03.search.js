const Search = () => {
    useEffect(()=>{
        let search = document.getElementById('search') 
        let con = search.querySelector('.con')
        let jd_input = search.querySelector('.jd')
        jd_input.addEventListener('keyup', function(e) {
            console.log('ok')
            if(this.value === ''){
                con.style.display = 'none'
            }
            else {
                con.style.display = 'block'
                con.innerHTML = this.value
            }

        })
        // 失去焦点，隐藏盒子
        jd_input.addEventListener('blur', function(e){
            con.style.display = 'none'
        })
        // 获取焦点，且内容不为空，显示盒子
        
        jd_input.addEventListener('focus', function(e){
            if(this.value!== '') {
                con.style.display = 'block'
            }

        })
    })
    return (
        <div id = 'search'>
        <h2>案例：模拟京东快递单号查询</h2>
        <div className = 'con'>123</div>
        <input type = 'text' placeholder='请输入快递单号' className = 'jd'></input>
    </div>
    )
}