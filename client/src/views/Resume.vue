<template>
  <div>
    <p>
      Hi, I'm Greg. I'm a Full Stack Developer working at a web company in
      Peterborough, who specialise in websites for schools.
    </p>
    <p>
      Working in the Front End team for 5 years, working on transforming designs
      into fully responsive websites within the company's content management
      system, I decided to take on a bigger challenge and move to the Back End
      Team to work on the CMS - improving functionality for both internal and
      external users, using tools like Git, Bitbucket and JIRA to manage
      different backend applications, reviewing code from other colleagues and
      creating and merging branches containing different features.
    </p>
    <Skills />
  </div>
</template>

<script>
import Skills from "@/views/Skills";
export default {
  name: "Resume",
  components: {
    Skills,
  },
};
</script>

<style scoped>
p {
  margin: 2em 0;
}
</style>
