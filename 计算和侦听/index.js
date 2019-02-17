//计算属性
var vm= new Vue({
  el: '#example',
  data:{
    message:'Hello Kitty'
  },
  computed:{
    // 计算属性的 getter
    reversedMessage:function () {
      // this 指向vm实例
      return this.message.split('').reverse().join('')
    }
  },
  methods: {
    //计算方法
  reversedMessage1: function () {
    return this.message.split('').reverse().join('')
  }
  //这里我们声明了一个计算属性 reversedMessage

  /*console.log(vm.reversedMessage) // => 'olleH'
    vm.message = 'Goodbye'
    console.log(vm.reversedMessage) // => 'eybdooG'
    我们可以将同一函数定义为一个方法而不是一个计算属性。
    两种方式的最终结果确实是完全相同的。
    然而，不同的是计算属性是基于它们的依赖进行缓存的。*/
}
})
//侦听属性
var vm = new Vue({
  el: '#demo',
  data: {
    firstName: 'Hello',
    lastName: 'Kitty',
    fullName: 'Hello Kitty'
  },
  watch: {
    firstName: function (val) {
      this.fullName = val + ' ' + this.lastName
    },
    lastName: function (val) {
      this.fullName = this.firstName + ' ' + val
    }
  }
})
//计算属性
var vm=new Vue({
  el:'#demo1',
  data:{
    firstName:"Hello",
    lastName:"Kitty"
  },
  computed:{
    fullName:function () {
      return this.firstName+" "+this.lastName
    }
  }
})
//计算属性默认只有 getter ，不过在需要时你也可以提供一个 setter ：
var vm=new Vue({
  el:'#demo2',
  data:{
    firstName:"Hello",
    lastName:"Kitty"
  },
  computed: {
  fullName: {
    // getter
    get: function () {
      return this.firstName + ' ' + this.lastName
    },
    // setter
    set: function (newValue) {
      var names = newValue.split(' ')
      this.firstName = names[0]
      this.lastName = names[names.length - 1]
    }
  }
}
})
//现在再运行 vm.fullName = 'John Doe' 时，setter 会被调用，vm.firstName 和 vm.lastName 也会相应地被更新。