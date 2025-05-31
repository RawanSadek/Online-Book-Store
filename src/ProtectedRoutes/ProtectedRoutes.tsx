import { useContext } from "react"
import { AuthContext } from "../Contexts/AuthContext/AuthContext"
import { Navigate } from "react-router-dom";

export default function ProtectedRoutes(props: any) {

    let { userData }: any = useContext(AuthContext)

    if (localStorage.getItem("accessToken") || userData) {
        return props.children;

    }
    else {
        return <Navigate to={"/"} />
    }
}
