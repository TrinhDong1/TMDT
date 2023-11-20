import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import TopForm from '../components/Booking/Form/TopForm/TopForm'
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Register = () => {
  return (
    <main className="flex items-center justify-center min-h-[100vh] bg-[#ffe6e6]">
      <div className="w-full max-w-[1100px] flex flex-col items-center gap-7">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <TopForm />
        </LocalizationProvider>
        <button className="w-[70%] max-w-[400px] bg-[#F5637E] text-white text-xl font-bold py-3 text-center rounded-lg shadow-sm">ĐĂNG KÝ</button>
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
          <span>Bạn đã có tài khoản?</span>
          <Link to="/login">
            <button className="link-btn button">Đăng nhập ở đây</button>
          </Link>
        </div>
      </div>
    </main>
  )
}

export default Register;
