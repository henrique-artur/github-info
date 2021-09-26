import '../styles/components/Subtitle.css';

interface SubtitleProps {
  label: string
}

function Subtitle({label}: SubtitleProps): JSX.Element {
  return (
    <div className="appSubtitle">
      <div className="topic"></div>
      <div className="subtitle">
        <h2>{label}</h2> 
      </div>
    </div>
  )
}

export default Subtitle