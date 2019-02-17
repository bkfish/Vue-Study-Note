#### 一些小问题：
1、
```
<tr v-for="item in list":key="item.id">
    <td>{{item.id}}</td>
    <td v-text="{{item.name}}"></td>
    <td>{{item.ctime}}</td>
    <td>
    <a href="">删除</a>
    </td>
</tr>
```
出错 应该修改为：
```
<tr v-for="item in list":key="item.id">
    <td>{{item.id}}</td>
    <td v-text="item.name"></td>
    <td>{{item.ctime}}</td>
    <td>
    <a href="">删除</a>
    </td>
</tr>
```
2、
```
 <input type="button" value="添加" class="btn btn-primary" @click="add">
```
后面的add（）括号可加可不加，唯一区别在于，加了可以传参
3、
删除函数（好骚啊）
```
del(id){
    //根据id删除数据
    //splice
this.list.some((item ,i )=>{
    if(item.id==id){
    this.list.splice(i,1)
    return true;
    }
}) 
```
这样好一些
```
var index = this.list.findIndex(item=>{
    if(item.id==id){
    return true;
    }
})

this.list.splice(index,1)
```
4、模糊查询
原始人方法
```
search(keywords){
    var newList=[]
    this.list.forEach(item=>{
    if(item.name.indexOf(keywords)!=-1){
        newList.push(item)
    }
    })
    return newList
}
```
现代人方法
5、过滤器的格式
```
调用：{{ name | nameope }}
定义：Vue.filter('过滤器名称',function({}))
```
// 过滤器中的 function ，第一个参数，已经被规定死了，永远都是 过滤器 管道符前面 传递过来的数据
/* Vue.filter('过滤器的名称', function (data) {
    return data + '123'
}) */