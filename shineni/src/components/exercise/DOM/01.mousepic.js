const MouseEvent = () =>{
    useEffect(()=>{
        let mouseE = document.getElementById('mouseEvent')
        let pic =  mouseE.querySelector('img')
        document.addEventListener('mousemove', function(e){
            pic.style.top = e.pageY  - 25 + 'px';
            pic.style.left = e.pageX -25 + 'px';
        })
        
    })
    return (
        <div id = 'mouseEvent'>
        <img src = 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.kttpdq.com%2Fpic%2F78%2F54114%2F8dae02b002d583ac.gif&refer=http%3A%2F%2Fimg.kttpdq.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1611501569&t=b98ec34a4d7db475f03f75f5d8550f46' alt= ''/>

    </div>
    )
}