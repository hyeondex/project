<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header"> default header</slot>
          </div>

          <div class="modal-body">
            <slot name="body"> default body</slot>
          </div>
          <button class="modal-default-button" @click="$emit('close')">
            X
          </button>
          <!--          <div class="modal-footer">
            <slot name="footer"> default footer </slot>
          </div>-->
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Modal",
};
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  position: relative;
  width: 500px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #000;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.9);
  transition: all 0.3s ease;
}

.modal-header h3 {
  margin-top: 0;
  font-family: "Press Start 2P", sans-serif;
}

.modal-body {
  margin: 15px 0;
}

.modal-default-button {
  position: absolute;
  top: 0;
  right: 0;
  outline: 1px solid red;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
