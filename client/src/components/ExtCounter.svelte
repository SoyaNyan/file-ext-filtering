<script lang="ts">
  import { customExtList } from '../store/extStore'

  // prop
  export let extLimit: number
</script>

<p class={$customExtList.length >= extLimit ? 'text-danger' : 'text-muted'}>
  {$customExtList.length} / {extLimit}
</p>
