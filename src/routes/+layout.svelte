<!-- SPDX-License-Identifier: MPL-2.0 -->
<script>
  import OnMount from '../components/OnMount.svelte';
  import '../app.scss';
</script>

<div class="prose prose-zinc">
  <OnMount>
    <slot />
  </OnMount>
</div>
