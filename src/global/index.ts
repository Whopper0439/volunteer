import { App } from 'vue'
// import registerElement from './register-element'
import registerProperties from './register-properties'

export function globalRegister(app: App): void {
  //加载elementui 插件
  // app.use(registerElement)
  //以后还可以注册其他插件
  app.use(registerProperties)
}
