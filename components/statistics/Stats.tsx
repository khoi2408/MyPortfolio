import { socialMedia } from "../../data"
import Title from "../Title"
import LinkListItem from "./LinkListItem"

async function fetchData(url: string) {
  const response = await fetch(url)
  const data = await response.json()
  return data
}

export default function Stats() {

  return (
    <section className="h-full overflow-y-scroll myScroll">

      <Title name="links" />
      <ul className="px-12 py-8 mb-8 space-y-6">
        {socialMedia.map((sm) => (
          <LinkListItem key={sm.id} socialMedia={sm} />
        ))}
      </ul>
    </section>
  )
}
