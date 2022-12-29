<script lang="ts">
  import { Input } from 'sveltestrap'

  // fixed extensions
  const fixedExts = [
    {
      name: 'bat',
      checked: false,
    },
    {
      name: 'cmd',
      checked: false,
    },
    {
      name: 'com',
      checked: false,
    },
    {
      name: 'cpl',
      checked: false,
    },
    {
      name: 'exe',
      checked: false,
    },
    {
      name: 'scr',
      checked: false,
    },
    {
      name: 'js',
      checked: false,
    },
  ]

  // handle checkbox state changes
  function handleChange() {
    const { value, checked } = this

    // api call (update state)
  }
</script>

{#each fixedExts as { name, checked }}
  <Input
    type="checkbox"
    class="d-inline-block me-3 user-select-none"
    bind:value={name}
    bind:checked={checked}
    on:change={handleChange}
    label={name}
  />
{/each}
