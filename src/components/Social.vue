<template>
  <div class="order-2 ml-auto mr-4">
    <ul class="social-links flex -ml-2">
      <li
        v-for="item in socialLinks"
        :key="item.name"
        class="social-links-item px-2"
        :class="`social-links-item--${item.name}`"
      >
        <a
          :href="item.url"
          target="_blank"
          class="icon-circle transition duration-500"
          @mouseenter="item.hover = true"
          @mouseleave="item.hover = false"
          :style="{ background: item.hover ? item.hoverBackground : null }"
        >
          <fa :icon="[item.iconType, item.icon]" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Social",
  data() {
    return {
      socialLinks: [
        {
          name: "twitter",
          url: "https://www.twitter.com/gjdj93",
          icon: "twitter",
          iconType: "fab",
          hover: false,
          hoverBackground: "#1DA1F2",
        },
        {
          name: "instagram",
          url: "https://www.instagram.com/gjdj93",
          icon: "instagram",
          iconType: "fab",
          hover: false,
          hoverBackground: "#fe0176",
        },
        {
          name: "email",
          url: "mailto:hello@gregottley.co.uk",
          icon: "envelope",
          iconType: "fas",
          hover: false,
          hoverBackground: "#07d48a",
        },
      ],
    };
  },
};
</script>

<style scoped>
.icon-circle {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2em;
  height: 2em;
  border-radius: 50%;
}
</style>
