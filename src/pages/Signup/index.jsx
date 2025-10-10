import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import { useState } from "react";

function Signup() {
    const [data, setData] = useState({
        username: "",
        password: "",
    });

    const navigate = useNavigate();

    async function handleSignup(e) {
        e.preventDefault(); // sahifa qayta yuklanmasin

        try {
            const response = await fetch(
                "https://fastapi-course-app.onrender.com/auth/signup",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                }
            );

            if (response.ok) {
                const result = await response.json();
                console.log(result);
                localStorage.setItem('token', result.access_token)
                navigate('/')

            } else {
                const err = await response.text();
                console.error("❌ Xato:", err);
            }
        } catch (error) {
            console.error("❌ Fetch xato:", error);
        }
    }

    return (
        <div className="wrapper-login">
            <h3 className="login-logo">Space Team Signup</h3>
            <form onSubmit={handleSignup}>
                <input
                    value={data.username}
                    onChange={(e) => setData({ ...data, username: e.target.value })}
                    placeholder="login.."
                    type="text"
                />
                <input
                    value={data.password}
                    onChange={(e) => setData({ ...data, password: e.target.value })}
                    placeholder="password"
                    type="password"
                />
                <button type="submit">Sign Up</button>
            </form>
            <div className="registor">
                <Link to="/auth/login">Login</Link>
            </div>
        </div>
    );
}

export default Signup;
