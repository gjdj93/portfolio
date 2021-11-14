<template>
  <div>
    <h1>Skills</h1>
    <ul>
      <li v-for="item in skills" :key="item.name" class="mb-4">
        <Skill :name="item.name" :progress="item.progress" />
      </li>
    </ul>
  </div>
</template>

<script>
import Skill from "@/components/Skill";
export default {
  name: "Skills",
  components: {
    Skill,
  },
  data() {
    return {
      skills: [
        {
          name: "HTML",
          progress: 100,
        },
        {
          name: "CSS",
          progress: 100,
        },
        {
          name: "SCSS",
          progress: 100,
        },
        {
          name: "Javascript",
          progress: 100,
        },
        {
          name: "jQuery",
          progress: 100,
        },
        {
          name: "ASP",
          progress: 100,
        },
        {
          name: "MSSQL",
          progress: 100,
        },
        {
          name: "PHP",
          progress: 75
        }
      ],
    };
  },
};
</script>

<style></style>
