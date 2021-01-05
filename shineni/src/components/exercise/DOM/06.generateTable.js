
const data  = [
    {
        name: '张三',
        subject: 'javascript',
        scrore: 100,
    },
    {
        name: '张四',
        subject: 'javascript',
        scrore: 90,
    },
    {
        name: '李四',
        subject: 'javascript',
        scrore: 80,
    },
    {
        name: '王五',
        subject: 'javascript',
        scrore: 70,
    },
]
const GenerateTable = () => {
    useEffect(()=>{
        let table = document.getElementById('generateTable')
        let tbody = table.querySelector('tbody')
        for(let i = 0; i< data.length; i++) { //外面的单元格管理的行
            //1. 创建行
            let tr = document.createElement('tr')
            tbody.appendChild(tr)
            //2. 行里面创建单元格td， 单元格的数量取决于每个对象里面的属性的个数， for循环遍历对象
            for(let k in data[i]){
                let td = document.createElement('td')
                td.innerHTML = data[i][k]
                tr.appendChild(td)
            }
            //3. 创建删除两个字的单元格
            let td = document.createElement('td')
            td.innerHTML = '<a href="javascript:;">删除</a>'
            tr.appendChild(td)
        }
        //4. 删除操作开始
        var alinks = table.querySelectorAll('a')
        for(let i = 0; i<alinks.length; i++) {
            alinks[i].onclick = function() {
                //node.removeChild(child)
                tbody.removeChild(this.parentNode.parentNode)
            }
        }
    })
    return (
        <div id="generateTable">
        <table cellSpacing = '0'>
            <thead>
                <tr>
                    <td>姓名</td>
                    <td>科目</td>
                    <td>成绩</td>
                    <td>操作</td>
                </tr>

            </thead>
            <tbody>
                
            </tbody>
        </table>

    </div>
    )
}