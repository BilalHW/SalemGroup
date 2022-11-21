import './Navbar.css'
export default function Navbar(){
    return(
        <nav className='navbar'>
        <div>
           <h2 className='name'>SalemGroup</h2>
        </div>
        <a href="/">
            <button
              className='buttonOne'
              onClick={() => {
                console.log('Login')
              }}
            >
              Login
            </button>
        </a>
        <a href='/dashboard'>
            <button
              className='buttonTwo'
              onClick={() => {
                console.log('Login')
              }}
            >
              Dashboard
            </button>
        </a>
      </nav>
    )
}