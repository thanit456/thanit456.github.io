import { React } from "react"

export default function ParagraphTemplate({ pageContext: { paragraph } }) {
  return (
    <div>
      <h1>{paragraph.title}</h1>
      <p>{paragraph.content}</p>
    </div>
  )
}
