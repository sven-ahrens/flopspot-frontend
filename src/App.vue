<template>
  <div id="app">
    <header>
      <img
        class="header__logo"
        :alt="$t('header.imgAlt')"
        src="./assets/images/logo.svg" />
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <ul>
        <li>
          <router-link to="/imprint">{{ $t('footer.imprint') }}</router-link>
        </li>
        <li>
          <router-link to="/privacy">{{ $t('footer.privacy') }}</router-link>
        </li>
        <li>
          {{ $t('footer.copyright') }}
        </li>
      </ul>
    </footer>
  </div>
</template>
<style lang="scss">
  @import 'assets/styles/app';
</style>
