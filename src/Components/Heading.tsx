type HeadingProps = {
  content: string
}

const Heading: React.FC<HeadingProps> = ({ content }) => {
  return <h1>{content}</h1>
}

export default Heading
