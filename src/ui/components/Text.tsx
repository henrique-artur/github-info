import '../styles/components/Text.css';

interface TextProps {
  label: string
}

function Text({label}: TextProps): JSX.Element {
  return (
    <p className="appText">
      {label}
    </p>
  )
}

export default Text