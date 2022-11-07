<template>
  <div class="mt-8 lg:hidden">
    <Menu as="div">
      <div>
        <MenuButton
          class="burger burger-squeeze burger-lines inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          <div class="burger-lines"></div>
        </MenuButton>
      </div>
      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <MenuItems
          class="absolute z-50 right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div class="px-1 py-1 z-50">
            <ul>
              <MenuItem v-slot="{ active }">
                <li :class="[active ? 'linkStyleActive' : 'linkStyle']">
                  <a href="/"> Home </a>
                </li>
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <li :class="[active ? 'linkStyleActive' : 'linkStyle']">
                  <a href="/products"> Products </a>
                </li>
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <li :class="[active ? 'linkStyleActive' : 'linkStyle']">
                  <a href="/categories"> Categories </a>
                </li>
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <li :class="[active ? 'linkStyleActive' : 'linkStyle']">
                  <a href="/search"> Search </a>
                </li>
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <li class="flex justify-center mt-6 text-lg linkStyleCart">
                  <a href="/cart">
                    <CartIcon />
                  </a>
                </li>
              </MenuItem>
            </ul>
          </div>
        </MenuItems>
      </transition>
    </Menu>
  </div>
</template>

<script setup>
import CartIcon from "./CartIcon.vue"

import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue"
</script>

<style scoped>
/* Style for mobile menu links */
.linkStyle {
  @apply w-auto p-4 m-4 font-bold text-center border border-gray-300 border-opacity-50 shadow-md rounded text-xl;
}

.linkStyleActive {
  @apply w-auto p-4 m-4 font-bold text-center border border-gray-300 border-opacity-50 shadow-md rounded bg-violet-500 text-white text-xl;
}

.linkStyleCart {
  @apply w-auto p-4 m-4 font-bold text-center;
}

/* Main hamburger styling */
.burger {
  height: 3em;
  width: 3em;
  position: relative;
  font-size: 14px;
  cursor: pointer;
  transition: 0.5s all;
  -webkit-tap-highlight-color: transparent;
}
.burger .burger-lines:after {
  left: 0;
  top: -1em;
}
.burger .burger-lines:before {
  left: 1em;
  top: 1em;
}
.burger:after {
  content: "";
  display: block;
  position: absolute;
  height: 150%;
  width: 150%;
  top: -25%;
  left: -25%;
}
.burger .burger-lines {
  top: 50%;
  margin-top: -0.125em;
}
.burger .burger-lines,
.burger .burger-lines:after,
.burger .burger-lines:before {
  pointer-events: none;
  display: block;
  content: "";
  width: 100%;
  border-radius: 0.25em;
  background-color: #000;
  height: 0.25em;
  position: absolute;
  transform: rotate(0);
}

/* Burger animations classes */
.burger.burger-squeeze .burger-lines,
.burger.burger-squeeze .burger-lines:after,
.burger.burger-squeeze .burger-lines:before {
  transition: 0.2s top 0.2s, 0.1s left, 0.2s transform,
    0.4s background-color 0.2s;
}
.burger.burger-squeeze .burger-lines:after,
.burger.burger-squeeze .burger-lines:before {
  width: 2em;
}
.burger.burger-squeeze.open .burger-lines,
.burger.burger-squeeze.open .burger-lines:after,
.burger.burger-squeeze.open .burger-lines:before {
  transition: 0.2s background-color, 0.2s top, 0.2s left, 0.2s transform 0.15s;
}
.burger.burger-squeeze.open .burger-lines {
  background-color: transparent;
}
.burger.burger-squeeze.open .burger-lines:before,
.burger.burger-squeeze.open .burger-lines:after {
  left: 0.5em;
  top: 0px;
}
.burger.burger-squeeze.open .burger-lines:before {
  transform: rotate(-45deg);
}
.burger.burger-squeeze.open .burger-lines:after {
  transform: rotate(45deg);
}
</style>
