<!-- SPDX-License-Identifier: MPL-2.0 -->
<script lang="ts">
  const languages = ['Rust', 'Elixir', 'JS/TS'];
  const roles = ['Software Developer', 'DevOps'];
  const communications = [
    { name: 'Matrix', url: 'https://matrix.to/#/@artsy.:cat.casa' },
    { name: 'Email', url: 'mailto:hey@astolfo.cafe' },
    { name: 'PGP', url: '/contact.asc' },
  ];
</script>

<div class="grid grid-flow-row grid-rows-2 sm:flex sm:flex-row justify-start items-start mt-6">
  <div class="w-[20vw] flex flex-col justify-start items-start">
    <h2>Languages</h2>
    <ol>
      {#each languages as lang}
        <li>
          <p>{lang}</p>
        </li>
      {/each}

      <ul><p>...</p></ul>
    </ol>
  </div>

  <div class="w-[20vw] flex flex-col justify-start items-start">
    <h2>Roles</h2>
    <ol>
      {#each roles as role}
        <li>
          <p>{role}</p>
        </li>
      {/each}

      <ul><p>...</p></ul>
    </ol>
  </div>

  <div class="w-[20vw] flex flex-col justify-start items-start">
    <h2>Communications</h2>
    <ol>
      {#each communications as contact}
        <li>
          <a href={contact.url}>{contact.name}</a>
        </li>
      {/each}

      <ul><p>...</p></ul>
    </ol>
  </div>
</div>

<style lang="scss">
  h2 {
    margin-bottom: 10px;
  }
  li p {
    color: white;
  }

  p {
    padding: 0;
    margin: 0;
    color: #ff838d;
    @apply font-mono text-lg;
  }
</style>
