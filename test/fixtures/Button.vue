<template>
  <button :class="classes" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
import { mapGetters } from 'vuex';
import * as types from '../store/types';

/**
 * HwUI button
 *
 * Simple button support size
 * 
 * @class HwButton
 * @property {String} [size='md'] 大小，可以为['sm', 'md', 'lg']。
 * @fires HwButton#click
 */
export default {
  props: {
    size: {
      type: String,
      default: 'md',
      validator: oneOf(['sm', 'md', 'lg'])
    }
  },

  computed: {
    classes() {
      return {
        'hw-button': true,
        [`hw-button-${this.type}`]: true
      };
    }
  },

  methods: {
    handleClick(e) {
      /**
       * @event HwButton#click
       * @type {Object}
       * @property {Event} e The dom event object
       */
      this.$emit('click', e);
    },

    /**
     * Get button state
     * @memberof HwButton.prototype
     * @return {String} 状态，默认为空
     */
    getState() {
      return this.$el.getAttribtue('state');
    }
  }
};
</script>

<style lang="scss">
@import "../scss/Button";
</style>
