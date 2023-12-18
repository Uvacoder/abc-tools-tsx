import ClipboardIcon from '../../icons/ClipboardIcon'
import { Button } from './Button'

type ButtonClipboardProps = {
  handleClipText: (text: string) => void
  disabled?: boolean
}

export default function ButtonClipboard(props: ButtonClipboardProps) {
  const handleClipboardClicked = () => {
    navigator.clipboard.readText().then(clipText => {
      props.handleClipText(clipText)
    })
  }

  return (
    <Button variant='outline' onClick={handleClipboardClicked} disabled={props.disabled}>
      <ClipboardIcon className="w-3.5 h-3.5 mr-1.5" /> Clipboard
    </Button>
  )
}
