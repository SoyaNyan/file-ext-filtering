<script lang="ts">
  import { Input } from 'sveltestrap'

  // fixed extensions
  const fixedExts = [
    'bat', 'cmd', 'com', 'cpl', 'exe', 'scr', 'js'
  ]

  // handle checkbox state changes
  function handleChange() {
    const { value, checked } = this
    
    // api call (update state)
  }
</script>

{#each fixedExts as ext}
  <Input type="checkbox" class="d-inline-block me-3" bind:value={ext} on:change={handleChange} label={ext} />
{/each}