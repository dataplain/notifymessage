# @dataplain/notifymessage

Vue component to display a message at a fixed position on the screen.

* Report bugs: <https://github.com/dataplain/notifymessage/issues>

## Install

Create a new vue project:

```shell
vue create
```

Install component:

```shell
npm install --save @dataplain/notifymessage
```

## Environment setting

Make a src/plugins folder at the root:

```shell
mkdir src/plugins
```

### Configure the notifymessage.js

Create the src/plugins/notifymessage.js:

```javascript
import Vue from "vue";
import NotifyMessage from "@dataplain/notifymessage";
import "@dataplain/notifymessage/dist/NotifyMessage.css";

Vue.use(NotifyMessage, { NotifyMessageName: "MyNotifyMessage" });
```

### Import notifymessage.js

The "src/main.js" file should look like this:

```javascript
import Vue from "vue";
import App from "./App.vue";

import "./plugins/notifymessage";

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
}).$mount("#app");

```

## How to use (example in App.vue)

```vue
<template>
    <div>
        <my-notify-message :message="myMessage" customClass="my-custom-class" position="top-left" />

        <my-notify-message message="Another example" customClass="my-custom-class" position="bottom-right">
            <span>[*]</span>
        </my-notify-message>

        <!-- you can use predefined classes from your preferred framework, such as bootstrap -->
        <my-notify-message message="Customized with bootstrap classes" position="bottom-left" customClass="bg-danger text-light p-3">
            <!-- if you use bootstrap-vue, insert a spinner -->
            <b-spinner small />
        </my-notify-message>
    </div>
</template>

<script>
export default {
    data() {
        return {
            myMessage: "Let's go ahead!"
        }
    },
    created() {
        setTimeout(() => {
            this.myMessage = "";
        }, 5000);
    }
}
</script>

<style>
.my-custom-class {
    background-color: black;
    color: white;
    padding: 10px;
}
</style>
```

## Properties

Property | Description | Required | Default
-|-|-|-
message | Text message to show | no |
customClass | CSS Class to apply on message | no |
position | Screen position for displaying the message | no | top-right (1)

(1) Valid positions: top-left, top-right, bottom-left, bottom-right

## Slot

The default slot can be used to set an icon that is displayed to the left of the message.

## Using in the browser

To use directly in the browser, import @dataplain/notifymessage:

```html
<script src="https://unpkg.com/@dataplain/notifymessage" />
```
