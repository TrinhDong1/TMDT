import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="App">
      <div className="auth-form-container">
        <h2 className="text-2xl font-bold">Đăng nhập</h2>
        <form className="login-form">
          <label className="label" htmlFor="email">
            Email
          </label>
          <input
            className="input"
            type="email"
            id="email"
            name="email"
            placeholder="youremail@gmail.com"
          />
          <label className="label" htmlFor="password">
            Mật khẩu
          </label>
          <input
            className="input"
            type="password"
            id="password"
            name="password"
            placeholder="********"
          />
          <button className='button' type="submit">Đăng nhập</button>
        </form>

        <div style={{ display: 'flex', alignItems: 'center' }}>
        Bạn chưa có tài khoản?&nbsp;
          <Link to="/register">
            <button className="link-btn button">Đăng ký ở đây </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login
