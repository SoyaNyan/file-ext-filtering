<script lang="ts">
  import { Card, CardBody } from 'sveltestrap'
  import ExtCounter from './ExtCounter.svelte'
  import { removeExt } from '../lib/api/extApi'
  import { extList, customExtList } from '../store/extStore'

  // prop
  export let extLimit: number

  // remove ext item
  function remove() {
    const ext = this.dataset.id

    extList.set($extList.filter((value) => value !== ext))

    // api call (remove item)
    removeExt(ext)
  }
</script>

<Card>
  <CardBody class="view-card">
    <ExtCounter extLimit={extLimit} />
    {#each $customExtList as ext}
      <div class="ext-item d-inline-block text-secondary mb-2 me-2">
        {ext}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <span
          class="remove-ext text-secondary fw-bold ms-2"
          on:click={remove}
          data-id={ext}>X</span
        >
      </div>
    {/each}
  </CardBody>
</Card>

<style>
  :global(.view-card) {
    padding-top: 0.5rem;
    min-height: 20rem;
  }

  .ext-item {
    padding: 0.2rem 1rem;
    border: 0.1rem #6c757d solid;
    border-radius: 50rem;
  }

  .ext-item > .remove-ext {
    cursor: pointer;
  }

  .ext-item > .remove-ext:hover {
    color: red !important;
  }
</style>
