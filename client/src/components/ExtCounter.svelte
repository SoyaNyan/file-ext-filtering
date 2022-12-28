<script lang="ts">
  import { extList } from "../store/extStore"

  // prop
  export let extLimit: number
</script>

<p class="{$extList.length >= extLimit ? 'text-danger' : 'text-muted'}">{$extList.length} / {extLimit}</p>