<template>
    <div>
        <modal class="my-modal" name="my-modal"
        :width='auto'
        :height='auto'
        :minWidth="150"
        :minHeight="150"
        :resizable="true"
        :clickToClose='false'
        @opened='show'
        @closed='hide'>
          <div class="modal-header no-select">
            <h3 class="header-title">Contact Me</h3>
            <div class="close import-close-btn-background"  @click="$modal.hide('my-modal')"></div>
          </div>
          <div class="content-wrapper">
            <div class="email">
              <input type="text" placeholder="your@email.tld" name="email-input" v-model="email" class="email-input">
            </div>
            <div class="subject">
              <input type="text" placeholder="Subject" name="subject-input" v-model="subject" class="subject-input">
            </div>
            <div class="body">
              <input type="text" placeholder="Your Message" name="body-input" v-model="body" class="body-input">
            </div>
          </div>
        </modal>
    </div>
</template>

<script>
export default {
    name: 'MyModal',
    data: function () {
      return {
        email: '',
        subject: '',
        body: ''
      }
    },
    methods: {
    nagivate(URL) {
      window.open(URL, '_blank');
    },
    show() {
      this.$modal.show('my-modal');
    },
    hide() {
      this.$modal.hide('my-modal');
    }
  }
}

</script>

<style lang="scss" scoped>
  @import url('../assets/css/close-btn.scss');
  .my-modal {
    position: absolute;

    .vm--modal {
      border-radius: 1% !important;
    }

    .modal-header {
      background: rgb(90, 43, 116);
      margin: 0;
      padding: 10px 0;
      text-align: left;
      padding-left: 5px;
      height: 22px;
      color: white;
      
      h3 {
        margin: 0;
        font-weight: 500;
        margin-left: 5px;
        -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Safari */
        -khtml-user-select: none; /* Konqueror HTML */
          -moz-user-select: none; /* Old versions of Firefox */
            -ms-user-select: none; /* Internet Explorer/Edge */
                user-select: none; /* Non-prefixed version, currently
                                      supported by Chrome, Edge, Opera and Firefox */
      }
      .close {
        width: 25px;
        height: 25px;
        position: absolute;
        right: 7px;
        top: 8px;
        border-radius: 50%;
        background-size: 67%;
        -webkit-tap-highlight-color: transparent;
        opacity: .3;
        transition: all .5s ease;
        cursor: pointer;
      }
      .close:hover {
        opacity: 1;
        -webkit-transform:rotate(360deg);
        -moz-transform:rotate(360deg);
        -ms-transform:rotate(360deg);
        -o-transform:rotate(360deg);
        transform:rotate(360deg);
      }
    }

    .content-wrapper {
      display:flex;
      flex-wrap: wrap;
      width: 100%;
      height: 92%;
      
      .email {
        width: 49%;
        height: 30px;
        text-align: left;
        margin-right: 1%;

        .email-input {
          width: 99%;
        }
        textarea:focus, input:focus{
          outline: none;
        }
      }
      .subject {
        width: 49%;
        height: 30px;
        text-align: left;

        .subject-input {
          width: 100%;
        }
        textarea:focus, input:focus{
          outline: none;
        }
      }
      .body {
        width: 100%;
        height: 80%;
        align-self: flex-start;

        .body-input {
          width: 95%;
          height: 95%;
        }
        textarea:focus, input:focus{
          outline: none;
        }
      }
    }
  }
</style>