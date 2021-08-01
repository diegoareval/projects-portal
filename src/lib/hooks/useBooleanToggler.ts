import { useState } from "react"

type UseBooleanTogglerProps = {
  initialValue?: boolean
}

const useBooleanToggler = (
  { initialValue }: UseBooleanTogglerProps = { initialValue: false }
) => {
  const [isToggled, setIsToggled] = useState(Boolean(initialValue))
  const toggle = () => {
    setIsToggled(!isToggled)
  }

  const unToggle = () => {
    setIsToggled(false)
  }

  const reToggle = () => {
    setIsToggled(true)
  }

  return { isToggled, toggle, unToggle, reToggle }
}

const useWorkingIndicator = (
  { initialValue }: UseBooleanTogglerProps = { initialValue: false }
) => {
  const {
    isToggled: isWorking,
    reToggle: startWork,
    unToggle: finishWork,
  } = useBooleanToggler({ initialValue })
  return { isWorking, startWork, finishWork }
}

export { useWorkingIndicator }
export default useBooleanToggler
