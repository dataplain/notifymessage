<template>
    <div v-if="message" class="message-container" :class="{ messageTop: top, messageBottom: bottom, messageLeft: left, messageRight: right }">
        <div><slot /></div>
        <div class="message-content">{{ message }}</div>
    </div>
</template>

<script>
export default {
    props: {
        message: {
            type: String,
            default: ""
        },
        position: {
            type: String,
            default: "top-right",
            validator: position => ["top-left", "top-right", "bottom-left", "bottom-right"].includes(position)
        }
    },
    computed: {
        top() {
            return this.position.split("-")[0] == "top";
        },
        bottom() {
            return this.position.split("-")[0] == "bottom";
        },
        left() {
            return this.position.split("-")[1] == "left";
        },
        right() {
            return this.position.split("-")[1] == "right";
        }
    }
}
</script>

<style scoped>
.message-container {
    position: fixed;
    background-color: #fff;
    color: #000;
    display: flex;
    max-width: 40%;
    max-height: 40%;
}
@media only screen and (max-width: 1000px ) {
    .message-container {
        max-width: 60%;
    }
}
@media only screen and (max-width: 600px ) {
    .message-container {
        max-width: 80%;
    }
}

.messageTop {
    top: 20px;
}
.messageBottom {
    bottom: 20px;
}
.messageLeft {
    left: 20px;
}
.messageRight {
    right: 20px;
}

.message-content {
    margin-left: 10px;
    overflow-y: auto;
}
</style>
