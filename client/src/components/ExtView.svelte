<script lang="ts">
  import { Card, CardBody } from 'sveltestrap'
  import ExtCounter from './ExtCounter.svelte'
  import { extList } from '../store/extStore';

  // prop
  export let extLimit: number



  // remove ext item
  function removeExt() {
    const ext = this.dataset.id

    extList.set($extList.filter((value) => value !== ext))

    // api call (remove item)
  }
</script>

<Card>
  <CardBody class="view-card">
    <ExtCounter {extLimit} />
    {#each $extList as ext}
      <div class="ext-item d-inline-block text-secondary mb-2 me-2">
        {ext}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <span class="remove-ext text-secondary fw-bold ms-2" on:click={removeExt} data-id={ext}>X</span>
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