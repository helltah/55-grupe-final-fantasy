import { useContext } from "react"
import { UserContext } from "../../context/user/UserContext";

export function AdminDashBoardPage() { 
    const { email } = useContext(UserContext);
    
    return (
        <main>
            <p>Email: {email}</p>
        </main>
    );
}