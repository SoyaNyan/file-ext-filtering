<script lang="ts">
  import { tick } from 'svelte'
  import { InputGroup, Input, Button } from 'sveltestrap'

  // input value
  let ext = ''

  // input keydown event
  async function handleKeyup(event: KeyboardEvent) {
    // wait for state changes
    await tick()

    // check ext length
    if (ext.length >= 20) {
      // slice
      ext = ext.slice(0, 20)
    }

    // enter key (submit)
    if (event.key === 'Enter') {
      // api call (add)
    }
  }
</script>

<div>
  <InputGroup>
    <Input type="text" on:keyup={handleKeyup} bind:value={ext} placeholder="추가할 확장자를 입력해주세요... (최대 20자)" />
    <Button color="primary" type="button">추가</Button>
  </InputGroup>
  <p class="mt-1 {ext.length >= 20 && 'text-danger'}">
    {ext.length} / 20
    {#if ext.length >= 20}
      <span class="text-danger ms-1">확장자명은 최대 20자를 초과할 수 없습니다!</span>
    {/if}
  </p>
</div>