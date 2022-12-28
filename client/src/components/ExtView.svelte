<script lang="ts">
  import { Card, CardBody } from 'sveltestrap'
  import ExtCounter from './ExtCounter.svelte'

  const extList = [
    'css', 'js', 'html'
  ]
</script>

<Card>
  <CardBody class="view-card">
    <ExtCounter count={extList.length} />
    {#each extList as ext}
      <div class="ext-item d-inline-block text-secondary mb-2 me-2">
        {ext}
        <span class="remove-ext text-secondary fw-bold ms-2">X</span>
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