<!-- SPDX-License-Identifier: MPL-2.0 -->
<script lang="ts">
  const languages = ['Rust', 'Elixir', 'JS/TS'];
  const roles = ['Software Developer', 'DevOps'];
  const communications = [
    { name: 'Matrix', url: 'https://matrix.to/#/@artsy.:astolfo.cafe' },
    { name: 'Email', url: 'mailto:hey@astolfo.cafe' },
    { name: 'PGP Publickey', url: '/proton.asc' },
    { name: 'Backup Publickey', url: '/yubikey.asc' }
  ];
</script>

<div class="grid items-start justify-start grid-flow-row grid-rows-2 mt-6 sm:flex sm:flex-row">
  <div class="w-[20vw] flex flex-col justify-start items-start">
    <h2>Languages</h2>
    <ol>
      {#each languages as lang}
        <li>
          <p>{lang}</p>
        </li>
      {/each}
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
