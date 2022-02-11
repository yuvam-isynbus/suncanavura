import VTNotification from './VTNotification.vue'
import VTNotificationGroup from './VTNotificationGroup.vue'
import { methods } from './notifications.js'

let installed = false

export default {
  install(app) {
    if (installed) return
    app.component('notification', VTNotification)
    app.component('notificationGroup', VTNotificationGroup)
    app.config.globalProperties.$notify = (data, timeout) => methods.notify(data, timeout)
    app.config.globalProperties.$removeNotifications = () => methods.removeNotifications()
    installed = true
  }
}
