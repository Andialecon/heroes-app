import { useNavigate } from "react-router-dom"

export const LoginPage = () => {

    const navigate = useNavigate();

    const login = () => {
        navigate("/inicio", {
            replace: true
        })
    }

    return (
        <>
            <div className="flex h-screen justify-center items-center">

                <button onClick={login} className="bg-blue-600 py2 px-6 rounded-lg font-bold text-white ">
                    Ingresar 😁
                </button>

            </div>
        </>
    )
}