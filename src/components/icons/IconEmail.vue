<script setup>
const { href, title } = defineProps({ href: String, title: String });
</script>

<template>
  <div class="svg-container">
    <a target="_blank" :href="href" class="icon-link"
      ><svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 900.000000 900.000000"
        preserveAspectRatio="xMidYMid meet"
        aria-labelledby="Email"
        role="presentation"
        class="icon about__icon icon__email"
      >
        <title lang="en">{{ title }}</title>
        <g
          transform="translate(0.000000,900.000000) scale(0.100000,-0.100000)"
          stroke="none"
        >
          <path
            d="M4195 8989 c-263 -17 -513 -57 -785 -124 -1084 -268 -2036 -940
     -2658 -1877 -413 -620 -654 -1304 -734 -2078 -16 -159 -16 -667 0 -820 64
     -598 208 -1102 454 -1594 224 -448 494 -822 848 -1176 703 -704 1607 -1151
     2586 -1279 894 -118 1803 33 2598 431 883 442 1582 1141 2024 2024 475 950
     596 2059 337 3094 -202 803 -600 1506 -1184 2091 -922 922 -2183 1395 -3486
     1308z m2933 -2877 l-3 -256 -240 -166 c-132 -91 -628 -435 -1102 -764 -475
     -328 -891 -610 -925 -626 -114 -54 -208 -72 -358 -72 -150 0 -244 18 -357 72
     -35 16 -188 115 -340 221 -727 502 -944 653 -1418 981 l-510 354 -3 257 -2
     257 2617 2 c1440 2 2624 1 2631 -1 10 -2 12 -59 10 -259z m-5111 -1083 c65
     -45 235 -163 378 -262 143 -99 280 -195 305 -212 140 -98 967 -670 1033 -714
     84 -56 262 -137 362 -164 272 -74 631 -64 880 24 187 65 207 78 1010 635 815
     566 1121 777 1132 781 11 4 13 -236 13 -1241 l0 -1246 -2620 0 c-1441 0 -2623
     -1 -2627 -2 -5 -2 -9 559 -11 1246 -2 1074 0 1247 12 1243 8 -3 68 -43 133
     -88z"
          />
        </g>
      </svg>
    </a>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/main.scss';
@import '@/assets/styles/components/contacts-view.scss';
</style>
