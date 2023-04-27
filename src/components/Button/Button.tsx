import useStyles from "./Button.style"

const Sheet = ({children}: {children: React.ReactNode}) => {
  const {classes} = useStyles()
  return <button className={classes.button}>{children}</button>
}

export default Sheet
