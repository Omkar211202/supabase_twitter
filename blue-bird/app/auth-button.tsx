'use client'

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function AuthButton(){
    const supabase = createClientComponentClient()
    const handleSignIn = async() => {
        console.log("clicked");
    };

    return <button onClick={handleSignIn}>Login</button>
}