<template>
  <div class="container-loading">
    <div class="loading"></div>
  </div>
</template>

<style lang="scss">
:root {
  --light-color: rgba(10, 10, 220, 0.2);
  --dark-color: rgba(44, 62, 80, 1);
  --radius: 60px;
  --ring-width: 4px;
}
.container-loading {
  display: flex;
  justify-content: center;
  padding: 1.5rem;
  .loading {
    width: var(--radius);
    height: var(--radius);
    border-radius: 50%;
    border: var(--ring-width) solid var(--light-color);
    &::before {
      display: block;
      position: relative;
      left: calc(var(--ring-width) * -1);
      top: calc(var(--ring-width) * -1);
      content: " ";
      width: var(--radius);
      height: var(--radius);
      border-radius: 50%;
      border: var(--ring-width) solid;
      border-color: var(--dark-color) transparent transparent transparent;
      animation: loading-rotate 0.8s ease-out infinite;
    }
  }
}
/* loading element style */
@keyframes loading-rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
