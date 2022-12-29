<script lang="ts">
  import { Input } from 'sveltestrap'
  import { addExt, removeExt } from '../lib/api/extApi'
  import { fixedExtList } from '../store/extStore'

  // use derived store
  $: checkBoxes = $fixedExtList

  // handle checkbox state changes
  function handleChange() {
    const { value, checked } = this

    if (checked) {
      // api call (add)
      addExt(value)
    } else {
      // api call (remove)
      removeExt(value)
    }
  }
</script>

{#each checkBoxes as { name, checked }}
  <Input
    type="checkbox"
    class="d-inline-block me-3 user-select-none"
    bind:value={name}
    bind:checked={checked}
    on:change={handleChange}
    label={name}
  />
{/each}
