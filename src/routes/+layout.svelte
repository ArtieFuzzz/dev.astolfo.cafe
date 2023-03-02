<!-- SPDX-License-Identifier: MPL-2.0 -->
<script>
  import '../app.scss';
  import OnMount from '../components/OnMount.svelte';
</script>

<div class="prose prose-zinc">
  <OnMount>
    <slot />
  </OnMount>
</div>
