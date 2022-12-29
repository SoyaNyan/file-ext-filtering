<script lang="ts">
  import { tick } from 'svelte'
  import { InputGroup, Input, Button } from 'sveltestrap'
  import { extList } from '../store/extStore'

  // prop
  export let extLimit: number

  // input
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
  }

  // input keydown event
  async function handleKeydown(event: KeyboardEvent) {
    // wait for state changes
    await tick()

    // enter key (submit)
    if (event.key === 'Enter') {
      submit()
    }
  }

  // submit button click event
  function handleClick() {
    // submit
    submit()
  }

  // submit
  async function submit() {
    // check ext limit
    if ($extList.length >= extLimit) {
      // reset field
      ext = ''

      // alert message
      alert(`확장자는 최대 ${extLimit}개까지만 등록할 수 있습니다.`)

      return
    }

    // api call (add)
  }
</script>

<div>
  <InputGroup>
    <Input
      type="text"
      on:keyup={handleKeyup}
      on:keydown={handleKeydown}
      bind:value={ext}
      placeholder="추가할 확장자를 입력해주세요... (최대 20자)"
    />
    <Button color="primary" type="button" on:click={handleClick}>추가</Button>
  </InputGroup>
  <p class="mt-1 {ext.length >= 20 && 'text-danger'}">
    {ext.length} / 20
    {#if ext.length >= 20}
      <span class="text-danger ms-1"
        >확장자명은 최대 20자를 초과할 수 없습니다!</span
      >
    {/if}
  </p>
</div>
