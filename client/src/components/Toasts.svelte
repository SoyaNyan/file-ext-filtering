<script>
  import { Toast, ToastBody, ToastHeader } from 'sveltestrap'
  import ErrorIcon from './icon/ErrorIcon.svelte'
  import SuccessIcon from './icon/SuccessIcon.svelte'
  import { dismissToast, toasts } from '../store/toastStore'
</script>

<section class="toast-container">
  {#each $toasts as toast}
    <Toast
      class="me-1"
      isOpen={true}
      on:close={() => {
        dismissToast(toast.id)
      }}
    >
      <ToastHeader
        toggle={() => {
          dismissToast(toast.id)
        }}
      >
        {#if toast.type === 'success'}
          <span class="text-success"><SuccessIcon /> 요청성공</span>
        {:else}
          <span class="text-danger"><ErrorIcon /> 요청실패</span>
        {/if}
      </ToastHeader>
      <ToastBody>
        {toast.message}
      </ToastBody>
    </Toast>
  {/each}
</section>

<style>
  .toast-container {
    position: fixed;
    bottom: 0;
    right: 0;
    padding: 2rem;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    z-index: 10000;
    color: #343a40;
  }
</style>
