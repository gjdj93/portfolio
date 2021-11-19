<template>
  <div class="skill">
    <div class="skill-name">
      <span>{{ name }}</span>
    </div>
    <div class="skill-progress">
      <div
        class="skill-progress-bar bg-brand"
        :style="{ width: progress + '%' }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Skill",
  props: {
    name: {
      type: String,
      required: true,
    },
    progress: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.skill {
}
.skill-name {
    padding: 0.5em;
}
.skill-progress {
  position: relative;
  display: block;
  width: 100%;
  height: 5px;
  border-radius: 3px;
  background: rgba(0, 0, 0, 0.15);
  overflow: hidden;
}
.skill-progress-bar {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 1%;
  transition: width 3s;
}
</style>
