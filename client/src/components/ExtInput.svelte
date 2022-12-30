<script lang="ts">
  import { tick } from 'svelte'
  import { InputGroup, Input, Button } from 'sveltestrap'
  import { addExt } from '../lib/api/extApi'
  import { fixedExts, customExtList } from '../store/extStore'
  import ExtInputCounter from './ExtInputCounter.svelte'
  import { addToast } from '../store/toastStore'

  // prop
  export let extLimit: number

  // input
  let ext = ''

  // input keydown event
  async function handleKeyup() {
    // wait for state changes
    await tick()

    // check regex for extension names
    if (!/^[a-zA-Z0-9]*$/.test(ext)) {
      ext = ext.replace(/[^a-zA-Z0-9]+/, '')
    }

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
      // submit
      submit()

      // reset field
      ext = ''
    }
  }

  // submit button click event
  function handleClick() {
    // submit
    submit()

    // reset field
    ext = ''
  }

  // submit
  async function submit() {
    // check fixed ext list
    if (fixedExts.includes(ext)) {
      // toast
      addToast({
        type: 'danger',
        isOpen: true,
        timeout: 5000,
        message: '고정 확장자 목록에 있는 항목입니다.',
      })
      return
    }

    // check ext limit
    if ($customExtList.length >= extLimit) {
      // toast
      addToast({
        type: 'danger',
        isOpen: true,
        timeout: 5000,
        message: `커스텀 확장자는 최대 ${extLimit}개까지만 등록할 수 있습니다.`,
      })
      return
    }

    // api call (add)
    addExt(ext)
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
  <ExtInputCounter ext={ext} />
</div>
