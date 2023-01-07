import "./pad.styles.scss";

function Pad() {
  const playAudio = () => {
    new Audio("../../assets/audio/yamaha-rm50-clap.webm").play();
  };

  return (
    <div className="pad">
      <div className="pad-item green" onClick={() => playAudio()}>
        {/* <audio src="../assets/audio/yamaha-rm50-clap.webm"></audio> */}
      </div>
      <div className="pad-item blue">item</div>
      <div className="pad-item yellow">item</div>
      <div className="pad-item red">item</div>
      <div className="pad-item pink">item</div>
      <div className="pad-item">item</div>
      <div className="pad-item">item</div>
      <div className="pad-item">item</div>
      <div className="pad-item">item</div>
      <div className="pad-item">item</div>
      <div className="pad-item">item</div>
      <div className="pad-item">item</div>
      <div className="pad-item">item</div>
      <div className="pad-item">item</div>
      <div className="pad-item">item</div>
      <div className="pad-item">item</div>
    </div>
  );
}

export default Pad;
