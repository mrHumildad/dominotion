const Pip = ({style, type}) => {
  const classes = 'pip ' + type
  return (
    <div className={classes} style={style}></div>
  )
}

export default Pip;