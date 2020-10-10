import Toast from './Toast'
const obj ={}
obj.install=function (Vue) {
  //1.创建组件构造器
  const toastconstructor=Vue.extend(Toast);
 //2.创建组件对象
  const toast=new toastconstructor();
  //3.组件对象挂载到DIV
  toast.$mount(document.createElement('div'))
  //toast.$el就是对应的div
  document.body.appendChild(toast.$el);

  Vue.prototype.$toast=toast;

}

export default obj;
