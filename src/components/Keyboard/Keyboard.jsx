import Key from "../key/Key"

const letters = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
]

const Keyboard = () => {

  const keys = letters.map((letter, index) => {
    return <li key={index} className="keyboard__key">
      <Key letter={letter} key={index} />
    </li>
  })

  return (
    <div className="keyboard">
      <ul className="keyboard__list-keys">
        {keys}
      </ul>
    </div>
  )
}