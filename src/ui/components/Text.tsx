import '../styles/components/Text.css';

interface TextProps {
  label: string
}

function Text({label}: TextProps): JSX.Element {
  return (
    <div className="appText">
      <p>
        {label}
      </p>
    </div>
  )
}

export default Text