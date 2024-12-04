import BackgroundEffect from '@/Components/BackgroundEffect';
import { Head, useForm } from '@inertiajs/react';
import react from 'react';
import '../../../css/style.css';

export default function Login() {
    const { data, setData, post, errors } = useForm({
        email: "",
        password: "",
        rememberme: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setData({ ...data, [name]: type === "checkbox" ? checked : value });
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        
        post("/login", {
            onSuccess : ()=>{console.log("todo bien")}
        })
    }

    return (
        <>
            <Head title='Login'/>

            <section className="flex flex-col items-center justify-center h-screen">
                <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6"> 
                    
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-0">Login</h2>
                    
                    <form onSubmit={handleSubmit} className="flex flex-col"> 
                        <input 
                        type="email" 
                        name='email'
                        className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" 
                        placeholder="Email address" 
                        onChange={(e)=>{handleChange(e)}}
                        />
                        { errors.email && <span className='text-center mb-2 w-full text-red-500 font-semibold text-xs'>{ errors.email }</span> }

                        <input 
                            type="password" 
                            name='password'
                            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" 
                            placeholder="Password" 
                            onChange={(e)=>{handleChange(e)}}
                        />
                        <div className="flex items-center justify-between flex-wrap">
                            <label htmlFor="remember-me" className="text-sm text-gray-900 cursor-pointer">
                                <input type="checkbox" id="rememberme" name='rememberme' className="mr-2" onChange={(e)=>{handleChange(e)}}/>
                                Remember me
                            </label>
                        </div>
                        <button type="submit" className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150">Login</button>
                    </form>

                </div>
            </section>

            <BackgroundEffect />
        </>
    )
}