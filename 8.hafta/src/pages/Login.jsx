import React from 'react'

function Login({handleLogin}) {
  return (
    <>
     <div className='w-50 my-5 m-auto border rounded bg-light'>
    <main className="form-signin w-50 m-auto">
  <form>
    <h2 className="my-5 fw-bolder text-success" height="57">LOREM.</h2>
    <h3 className="mb-4 fw-normal">Giriş Yapın</h3>

    <div className="form-floating my-3">
      <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
      <label for="floatingInput">Email addresinizi girin</label>
    </div>
    <div className="form-floating my-3">
      <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
      <label for="floatingPassword">Şifrenizi Girin</label>
    </div>

    <div className="checkbox my-3">
      <label>
        <input type="checkbox" value="remember-me"/> Beni Hatırla
      </label>
    </div>
    <button onClick={handleLogin} className='btn btn-primary mb-5 w-100'>Giriş Yap</button>
  </form>
</main>
</div>
    </>
  )
}

export default Login