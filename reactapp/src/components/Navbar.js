const Navbar = (props) => {
  return (
    <div className="col-lg-10 text-end">
        <a href="">{props.title}</a>
        <span>{props.menu}</span>
    </div>
  )
}
export default Navbar