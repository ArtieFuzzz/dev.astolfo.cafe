<script lang="ts">
  import { onMount } from 'svelte';

  let projects: { name: string; description: string; url: string }[];

  async function fetchProjects() {
    try {
      let res = await fetch('/projects.json');
      if (!res) throw null;

      let data = await res.json();
      projects = data;
    } catch {
      throw null;
    }
  }

  onMount(async () => {
    await fetchProjects();
  });
</script>

<div class="flex flex-col items-center justify-center w-screen h-screen">
  <div class="flex flex-row place-items-baseline">
    <h1 class="pb-3">Projects |</h1>
    <!-- svelte-ignore a11y-invalid-attribute -->
    <a on:click={() => history.back()} href="#" class="ml-5">Jump Back {'>'}</a>
  </div>
  <p>Repositories I've made and / or Contributed to.</p>
  <div class="flex items-center justify-center w-screen max-w-full p-16 mt-6">
    {#if !projects}
      <h1 class="text-white">Fetching!...</h1>
    {:else}
      <div class="grid w-screen grid-cols-4 gap-3 p-0">
        {#each projects as project}
          <a href={project.url} style="width: 340px; height: 180px;">
            <div class="grid grid-flow-row p-4 project-item">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
          </a>
        {/each}
      </div>
    {/if}
  </div>
</div>

<style lang="scss">
  a {
    list-style-type: none;
    text-decoration: none;
    transition: 1.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);

    &:hover {
      opacity: 70%
    }
  }

  .project-item {
    width: 340px;
    height: 180px;
    border-width: 5px;

    @apply justify-start rounded-md;
  }

  h1 {
    @apply m-0 text-6xl;
  }

  div h3 {
    @apply mt-2 mb-3;
  }

  p {
    padding: 0;
    margin: 0;
    color: #ff838d;
    @apply font-mono text-lg;
  }
</style>
