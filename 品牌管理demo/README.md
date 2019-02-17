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

6、
```
 var d=(dt.getDate()).toString().padStart(2,'0')
```
用来填充0
7、
```
<input type="text" class="form-control" v-model="name" @ @keyup.enter="add">
```
keyup案件修饰符，当回车直接添加 F2等需要用JS键盘码 113
也可以自定义修饰符
```
Vue.config.keyCodes.f2=113
```
8、
为了获得刷新后的焦点以及搜索框颜色变化，学习自定义指令
使用  Vue.directive() 定义全局的指令  v-focus
其中：参数1 ： 指令的名称，注意，在定义的时候，指令的名称前面，不需要加 v- 前缀, 
但是： 在调用的时候，必须 在指令名称前 加上 v- 前缀来进行调用
参数2： 是一个对象，这个对象身上，有一些指令相关的函数，这些函数可以在特定的阶段，执行相关的操作
```
<input type="text" class="form-control" v-model="keywords"  v-focus v-color="'blue'">

Vue.directive('focus',{
    bind:function(el){  //绑定的时候调用
    //第一个参数是el 表示绑定指令的元素
    },
    inserted:function(el){ //当插入DOM的时候调用一次
    el.focus()
    },
    updated:function(e1){ //当VNode更新的时候会执行updated，可能触发多次

    }
})

//自定义设置颜色
Vue.directive('color',{
    bind:function(el,binding){
    el.style.color=binding.value
    }
})
```