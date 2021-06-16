import Vue from "vue";
import NotifyMessage from "@/components/NotifyMessage";

function install(Vue, options = {}) {
    NotifyMessage.data = () => { return { path: options.Path || "" } };
    Vue.component(options.NotifyMessageName || "NotifyMessage", NotifyMessage);
}

export default install;

if (typeof window !== undefined && window.Vue && window.Vue === Vue)
    install(window.Vue);

export { NotifyMessage };
