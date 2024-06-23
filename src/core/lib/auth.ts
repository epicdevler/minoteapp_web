
import { useRouter } from "next/navigation";
import { object, string } from "yup";



export const handleSignUp = async (values: {name: string, email: string, password: string}) => {
    setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        
    }, 2000);
}



export const handleSignIn = async (values: {email: string, password: string}) => {
    setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        
    }, 2000);
}



export const handleSendResetEmail = async (values: {email: string}) => {
    
    setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        
    }, 2000);
}


export const ResetPasswordValidationSchema = object(
    {
        password: string().required("Provide your email adddress"),
        confirmPassword: string().required("Re-enter password")
    }
) 

export const SendEmailValidationSchema = object({email: string().required("Provide your email adddress").email("Invalid email address")}) 

export const SignInValidationSchema = object({
    email: string().required("Provide your email address").email('Invalid Email'),
    password: string().required("Provide a password").min(6, 'Too short'),
});

export const SignUpValidationSchema = object({
    name: string().required("Enter your full name"),
    email: string().required("Provide your email address").email('Invalid Email'),
    password: string().required("Provide a password").min(6, 'Too short'),
});