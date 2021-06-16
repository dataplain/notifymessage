<template>
    <div v-if="message" class="message-container" :class="{ messageTop: top, messageBottom: bottom, messageCenter: center, messageRight: right }">
        <div class="message-main" :class="customClass">
            <div><slot /></div>
            <div class="message-content">{{ message }}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        message: {
            type: String,
            default: ""
        },
        customClass: {
            type: String,
            default: ""
        },
        position: {
            type: String,
            default: "top-right",
            validator: position => ["top-left", "top-center", "top-right", "bottom-left", "bottom-center", "bottom-right"].includes(position)
        }
    },
    computed: {
        top() {
            return this.position.split("-")[0] == "top";
        },
        bottom() {
            return this.position.split("-")[0] == "bottom";
        },
        center() {
            return this.position.split("-")[1] == "center";
        },
        right() {
            return this.position.split("-")[1] == "right";
        }
    }
}
</script>

<style scoped>
.message-container {
    display: flex;
    max-height: 40%;
    position: fixed;
    width: 100%;
    z-index: 999;
}
.message-main {
    margin: 0 20px;
    background-color: #fff;
    color: #000;
    display: flex;
    max-width: 40%;
}
@media only screen and (max-width: 1000px ) {
    .message-main {
        max-width: 60%;
    }
}
@media only screen and (max-width: 600px ) {
    .message-main {
        max-width: 80%;
    }
}

.messageTop {
    top: 20px;
}
.messageBottom {
    bottom: 20px;
}
.messageCenter {
    justify-content: center;
}
.messageRight {
    justify-content: right;
}

.message-content {
    margin-left: 10px;
    overflow-y: auto;
}
</style>
