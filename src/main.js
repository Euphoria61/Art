import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/assets/css/global.css'
import * as ElIconModules from '@element-plus/icons'
// 导入转换图标名称的函数
import {transElIconName} from './utils/utils'
const app = createApp(App)

app.use(ElementPlus)
app.use(store).use(router).mount('#app')
// 统一注册el-icon图标
for (let iconName in ElIconModules) {
    app.component(transElIconName(iconName), ElIconModules[iconName])
}