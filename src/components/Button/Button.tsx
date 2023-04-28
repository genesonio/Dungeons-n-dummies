import {type FC} from "react"
import useStyles from "./Button.style"

type TButton = React.HTMLAttributes<HTMLButtonElement>

const Button: FC<TButton> = ({children, ...props}) => {
  const {classes} = useStyles()
  return (
    <button {...props} className={classes.button}>
      {children}
    </button>
  )
}

export default Button
