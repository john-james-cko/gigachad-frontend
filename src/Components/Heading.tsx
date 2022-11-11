type HeadingProps = {
  content: string | undefined
}

const Heading: React.FC<HeadingProps> = ({ content }) => {
  if (!content) return null

  return <h1>{content}</h1>
}

export default Heading
