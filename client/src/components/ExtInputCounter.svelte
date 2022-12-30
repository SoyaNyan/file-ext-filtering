<script>
  export let ext
</script>

<p class="mt-1 {ext.length >= 20 && 'text-danger'}">
  {ext.length} / 20 자
  {#if ext.length >= 20}
    <span class="text-danger ms-1"
      >확장자명은 최대 20자를 초과할 수 없습니다!</span
    >
  {/if}
</p>
