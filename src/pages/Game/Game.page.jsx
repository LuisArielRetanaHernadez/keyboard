import Keyboard from "../../components/Keyboard/Keyboard"

const Game = () => {
  return (
    <div className="game-key">
      <div className="game-key__display"></div>
      <div className="game-key__keyboard">
        <Keyboard />
      </div>
    </div>
  )
}

export default Game