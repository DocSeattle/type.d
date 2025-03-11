import { useState } from "react";
import { useForm } from "react-hook-form";
import { sha256 } from "js-sha256";
import "./Register.scss"
type FormInputs = {
  email: string
  name: string
  password: string
}


export default function Register() {
  async function onSubmit() {
    setDisabled(true);
    const registerData = JSON.stringify({
      email: eMail,
      name: userName,
      password: passWord
    })

    console.log(registerData);
    return;
  }
  const { handleSubmit, register, formState: { errors } } = useForm<FormInputs>();
  const [disabled, setDisabled] = useState(false);
  const [userName, setUserName] = useState('');
  const [passWord, setPassWord] = useState('');
  const [eMail, setEMail] = useState('');
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
        <label htmlFor="email">Email:&nbsp;
          <span className="err">{errors.email && errors.email.message}</span>
        </label>
        <input type="email"
          {...register("email", {
            required: "* Required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid E-mail Address"
            },
          })}
          placeholder="example@email.com"
          className="input"
          disabled={disabled}
          onChange={e => { setEMail(e.target.value) }}
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
            }, */
          })}
          placeholder="********"
          className="input"
          disabled={disabled}
          onChange={e => { setPassWord(sha256(e.target.value)) }}
        />
      </div>
      <button type="submit">Confirm</button>
    </form>
  )
}

