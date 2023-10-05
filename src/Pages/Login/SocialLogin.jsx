import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const SocialLogin = () => {
    const { user, handleGoogleLogin, githubLogin, } = useContext(AuthContext)

    const handleSocialLogin = (media) => {
         media()
        .then(result => console.log(result.user))
        .catch(error => console.log(error))
    }

    return (
        <>
            <div className="divider">continue with</div>
            <div className=" flex justify-around">
                <button
                    onClick={()=>{handleSocialLogin(handleGoogleLogin)}}
                    className="btn btn-sm btn-neutral">Google Login</button>
                    
                    <button
                    onClick={()=>{handleSocialLogin(githubLogin,)}}
                    className="btn btn-sm btn-neutral">Github Login</button>
            </div>
        </>
    );
};

export default SocialLogin;