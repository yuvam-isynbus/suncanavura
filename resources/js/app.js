import { createApp, h } from 'vue'
import { App, plugin } from '@inertiajs/inertia-vue3'
import Toasted from '@/toast'
import Notifications from './notifications'
import Echo from "laravel-echo";
import Maska from 'maska'
import { Inertia } from '@inertiajs/inertia'
import { InertiaProgress } from '@inertiajs/progress'
import { methods } from './notifications/notifications'

InertiaProgress.init({})

const el = document.getElementById('app')

window.Pusher = require("pusher-js");
window.Echo = new Echo({
  broadcaster: "pusher",
  auth: {
    headers: {
      "X-CSRF-TOKEN": JSON.parse(el.dataset.page).props.csrf?.token
    }
  },
  key: process.env.MIX_PUSHER_APP_KEY,
  cluster: process.env.MIX_PUSHER_APP_CLUSTER,
  useTLS: true
});

Inertia.on('navigate', (event) => {
  // console.log(methods)
  // methods.removeNotifications()
  // this.$removeNotificaions();
  // console.log(event)
  // event.detail.page.props.popstate = true;
})

const app = createApp({
  mounted() {
    window.addEventListener('popstate', () => {
      this.$page.props.popstate = true;
    })
  },
  render: () => h(App, {
    initialPage: JSON.parse(el.dataset.page),
    resolveComponent: name => import(`@/Pages/${name}`).then(module => module.default),
  })
})

app.use(plugin)
app.use(Toasted);
app.use(Notifications);
app.use(Maska);
app.mixin({ methods: { route: window.route } });

app.mount(el)
