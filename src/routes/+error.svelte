<script lang="ts">
  import { page } from '$app/stores';
  import DisplayError from '../components/DisplayError.svelte';
</script>

<div class="h-screen w-screen flex flex-col justify-center items-center">
  <DisplayError code={$page.status} />
</div>
