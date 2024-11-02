import { useNavigate } from 'react-router-dom'
import MainLogo from '../../assets/root/Planit.svg'

const DemoHeader = () => {

    const navigate = useNavigate()

    const handleLogin = () => {
        navigate("/login")
    }

    const handleSignup = () => {
        navigate("/signup")
    }

    return (
        <div className='h-[60px] px-5 w-screen sticky bg-green-200 flex justify-between items-center'>
            {/* Brand */}
            <div className='flex items-center gap-x-2'>
                <img src={MainLogo} alt="" className='h-9' />
                <p className='text-3xl font-extrabold'>Planit</p>
            </div>
            {/* Auth */}
            <div className='flex gap-x-2 items-center justify-center'>
                <button onClick={handleLogin} className='border-2 border-[#222] rounded px-2'>Login</button>
                <button onClick={handleSignup} className='border-2 border-[#222] rounded px-2'>Signup</button>
            </div>

        </div>
    )
}

export default DemoHeader
