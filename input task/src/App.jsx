import { useState } from "react";
import "./App.css";

function App() {
  const [inputs, setInputs] = useState({
    login: "",
    name: "",
    surname: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    login: "",
    name: "",
    surname: "",
    email: "",
    password: "",
  });

  const handleInputs = (ev) => {
    const { name, value } = ev.target;
    setInputs({ ...inputs, [name]: value });
    validateInput(name, value);
  };

  const validateInput = (name, value) => {
    let errorMessage = "";

    switch (name) {
      case "login":
        if (!/^[a-z][a-z0-9_]{7,}$/.test(value)) {
          errorMessage =
            "Login ən az 8 simvol olmalıdır, ilk simvol hərf olmalıdır, yalnız kiçik hərflər, rəqəmlər və alt xət istifadə edilə bilər.";
        }
        break;

      case "name":
      case "surname":
        if (!/^[A-Z][a-z]+$/.test(value)) {
          errorMessage = "İlk hərf böyük, qalan hərflər kiçik olmalıdır.";
        }
        break;

      case "email":
        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
          errorMessage = "Düzgün email formatı daxil edin.";
        }
        break;

      case "password":
        if (!/^[a-zA-Z][a-zA-Z0-9._]{7,}$/.test(value)) {
          errorMessage =
            "Şifrə ən az 8 simvol olmalıdır, ilk simvol hərf olmalıdır, yalnız hərflər, rəqəmlər, nöqtə və alt xət istifadə edilə bilər.";
        }
        break;

      default:
        break;
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: errorMessage,
    }));
  };

  const isFormValid = Object.values(errors).every((err) => err === "") &&
                      Object.values(inputs).every((input) => input !== "");

  return (
    <div>
      <form>
        <input
          onChange={handleInputs}
          type="text"
          name="login"
          placeholder="Login"
        />
        {errors.login && <p className="error">{errors.login}</p>}

        <input
          onChange={handleInputs}
          type="text"
          name="name"
          placeholder="Name"
        />
        {errors.name && <p className="error">{errors.name}</p>}

        <input
          onChange={handleInputs}
          type="text"
          name="surname"
          placeholder="Surname"
        />
        {errors.surname && <p className="error">{errors.surname}</p>}

        <input
          onChange={handleInputs}
          type="text"
          name="email"
          placeholder="Email"
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <input
          onChange={handleInputs}
          type="text"
          name="password"
          placeholder="Password"
        />
        {errors.password && <p className="error">{errors.password}</p>}

        <button disabled={!isFormValid}>REGISTER</button>
      </form>
    </div>
  );
}

export default App;
