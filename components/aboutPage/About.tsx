import Title from "../Title"
import AboutMe from "./AboutMe"
import MyServices from "./MyServices"

export default function About() {
  return (
    <section className="h-full overflow-y-scroll myScroll">
      <Title name="about me" />
      <AboutMe />

      <Title name="my skills" />
      <MyServices />

    </section>
  )
}
