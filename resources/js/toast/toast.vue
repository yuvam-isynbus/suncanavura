<style lang="scss">
// mixins
@mixin fit-to-screen() {
    min-width: 100%;

    .toasted:first-child {
      margin-top: 0;
    }

    &.top-right {
      top: 0;
      right: 0;
    }

    &.top-left {
      top: 0;
      left: 0;
    }

    &.top-center {
      top: 0;
      left: 0;
      transform: translateX(0);
    }

    &.bottom-right {
      right: 0;
      bottom: 0;
    }

    &.bottom-left {
      left: 0;
      bottom: 0;
    }

    &.bottom-center {
      left: 0;
      bottom: 0;
      transform: translateX(0);
    }
  }

  @mixin ripple(){
    position: relative;
    overflow: hidden;
    transform: translate3d(0, 0, 0);

    &.dark:after {
      background-image: radial-gradient(circle, #040405 10%, transparent 10.01%);
    }

    &:after {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      pointer-events: none;
      background-image: radial-gradient(circle, #d0e3ec 10%, transparent 10.01%);
      background-repeat: no-repeat;
      background-position: 50%;
      transform: scale(10, 10);
      opacity: 0;
      transition: transform .5s, opacity 1s;
    }

    &:active:after {
      transform: scale(0, 0);
      opacity: .2;
      transition: 0s;
    }
  }

  // themes
  .toasted {
    padding: 0 20px;

    // Templates
    &.rounded {
      border-radius: 24px;
    }

    // Primary
    &.toasted-primary, .primary {
      border-radius: 2px;
      min-height: 38px;
      line-height: 1.1em;
      background-color: #353535;
      padding: 6px 20px;
      font-size: 15px;
      font-weight: 300;
      color: #fff;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

      &.success {
        background: #4CAF50;
      }

      &.error {
        background: #F44336;
      }

      &.info {
        background: #3F51B5;
      }

      .action {
        color: #a1c2fa;
      }
    }

    // Bubble
    &.bubble {
      border-radius: 30px;
      min-height: 38px;
      line-height: 1.1em;
      background-color: #FF7043;
      padding: 0 20px;
      font-size: 15px;
      font-weight: 300;
      color: #fff;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

      &.success {
        background: #4CAF50;
      }

      &.error {
        background: #F44336;
      }

      &.info {
        background: #3F51B5;
      }

      .action {
        color: #8e2b0c;
      }
    }

    &.outline {
      border-radius: 30px;
      min-height: 38px;
      line-height: 1.1em;
      background-color: white;
      border: 1px solid #676767;
      padding: 0 20px;
      font-size: 15px;
      color: #676767;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
      font-weight: bold;

      &.success {
        color: #4CAF50;
        border-color: #4CAF50;
      }

      &.error {
        color: #F44336;
        border-color: #F44336;
      }

      &.info {
        color: #3F51B5;
        border-color: #3F51B5;
      }

      .action {
        color: #607d8b;
      }
    }
  }

  // end themes

.toasted-container {
  // fix for min-height bug in IE
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 10000;

  &.full-width {
    display: flex;
    flex-direction: column;
    max-width: 86%;
    width: 100%;

    // check if user needs this to be fitted into screen
    &.fit-to-screen {
      @include fit-to-screen
    }
  }

  // Positioning

  &.top-right {
    top: 10%;
    right: 7%;
  }

  &.top-left {
    top: 10%;
    left: 7%;
  }

  &.top-center {
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
  }

  &.bottom-right {
    right: 5%;
    bottom: 7%;
  }

  &.bottom-left {
    left: 5%;
    bottom: 7%;
  }

  &.bottom-center {
    left: 50%;
    transform: translateX(-50%);
    bottom: 7%;
  }

  // fix positioning floating
  &.top-left .toasted, &.bottom-left .toasted {
    float: left;
  }

  &.top-right .toasted, &.bottom-right .toasted {
    float: right;
  }

  // toast element styling
  .toasted {
    top: 35px;
    width: auto;
    clear: both;
    margin-top: 10px;
    position: relative;
    max-width: 100%;
    height: auto;
    word-break: normal;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: inherit;

    .material-icons, .fa, .fas, .far, .fab, .mdi {
      margin-right: .5rem;
      margin-left: -.4rem;

      &.after {
        margin-left: .5rem;
        margin-right: -.4rem;
      }
    }

    // Toast Action Styling
    .action {
      text-decoration: none;
      font-size: 0.8rem;
      padding: 8px;
      margin: 5px -7px 5px 7px;
      border-radius: 3px;
      text-transform: uppercase;
      letter-spacing: .03em;
      font-weight: 600;
      cursor: pointer;

      // Reset button style
      @at-root #{selector-unify(&, button)} {
        background: none;
        color: inherit;
        border: none;
        font: inherit;
        line-height: normal;
      }

      &.icon {
        padding: 4px;
        display: flex;
        align-items: center;
        justify-content: center;

        .material-icons, .fa, .mdi {
          margin-right: 0;
          margin-left: 4px;
        }

        &:hover {
          text-decoration: none;
        }
      }

      &:hover {
        text-decoration: underline;
      }
    }
  }
}

@media only screen and (max-width: 600px) {
  .toasted-container {
    @include fit-to-screen;

    &.top-center, &.bottom-center {
      align-items: stretch !important;
    }

    &.top-right, &.top-left, &.bottom-left, &.bottom-right {
      .toasted {
        float: none;
      }
    }

    .toasted {
      border-radius: 0;
    }

  }
}

</style>
