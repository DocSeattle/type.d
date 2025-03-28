
/**
export default function lLogin() {
  async function onSubmit() {
    setDisabled(true);
    const loginData = JSON.stringify({
      name: userName,
      password: sha256(passWord),
    })
    await fetch("http://localhost:5000/api/login", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: loginData
    }).then(response => {
      console.log(response);
    })
    return;
  }

  const { handleSubmit, register, formState: { errors } } = useForm<FormInputs>();
  const [disabled, setDisabled] = useState(false);
  const [userName, setUserName] = useState('');
  const [passWord, setPassWord] = useState('');
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="userName">Username:&nbsp;
          <span className="err">{errors.name && errors.name.message}</span>
        </label>
        <input type="text"
          {...register("name", {
            required: "* Required",
          })}
          placeholder="Username"
          className="input"
          disabled={disabled}
          onChange={e => { setUserName(e.target.value) }}
        />
      </div>
      <div>
        <label htmlFor="password">Password:&nbsp;
          <span className="err">{errors.password && errors.password.message}</span><br />
        </label>
        <input type="password"
          {...register("password", {
            required: "* Required",
            /** pattern: {
              value: /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/,
              message: "Make sure you have: \n 2 Upper Case, 1 Special Character (!@#$&*), 2 Numerals, 3 Lower Case"
//            }, */
//          })}
/**
          placeholder="********"
          className="input"
          disabled={disabled}
          onChange={e => { setPassWord(sha256(e.target.value)) }}
        />
      </div>
      <button type="submit">Confirm</button>
    </form>)
}
*/
