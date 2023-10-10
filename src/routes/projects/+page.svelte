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

<div class="h-screen w-screen flex flex-col justify-center items-center">
  <div class="flex flex-row place-items-baseline">
    <h1 class="pb-3">Projects |</h1>
    <!-- svelte-ignore a11y-invalid-attribute -->
    <a on:click={() => history.back()} href="#" class="ml-5">Jump Back {'>'}</a>
  </div>
  <p>Repositories I've made and / or Contributed to.</p>
  <div class="mt-6">
    {#if !projects}
      <h1 class="text-white">Fetching!...</h1>
    {:else}
      <ul class="grid grid-flow-col">
        {#each projects as project}
          <a href={project.url}
            ><li>
              <div class="project-item grid grid-flow-row p-2">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
            </li></a
          >
        {/each}
      </ul>
    {/if}
  </div>
</div>

<style class="scss">
  ul li {
    @apply m-1;
  }
  a {
    list-style-type: none;
    text-decoration: none;
  }

  .project-item {
    width: 400px;
    height: 150px;
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
