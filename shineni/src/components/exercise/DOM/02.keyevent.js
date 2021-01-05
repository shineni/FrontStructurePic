const KeyEvent = () =>{
    useEffect(()=>{
        let input = document.getElementById('keyEvent').querySelector('input')
        document.addEventListener('keyup', function(e) {
            // console.log(e.key)
            console.log(e.keyCode)
            
            if(e.keyCode === 83) {
                input.focus()
            }

        })
    })
    return (
        <div id = 'keyEvent'>
        <h2>键盘事件对象</h2>
        <input type = 'text'></input>
    </div>
    )
}