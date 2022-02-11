import { Toasted as T } from './js/toast';
import ToastComponent from './toast.vue';

const VueToastedPlugin = {
    install(app, options) {
        if (!options) {
            options = {};
        }
        const Toast = new T(options);
        app.component('toasted', ToastComponent);
        app.config.globalProperties.$toasted = Toast;
    },
};
export default VueToastedPlugin;
