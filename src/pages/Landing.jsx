import {Wallet} from "lucide-react";
import { Button } from "../components/ui/button";
import { APP_CONFIG } from "../config/app";

function Landing() {
  return (
        <div className="w-full max-w-95 text-center">
            <div className="text-center">
                <span className="p-2 inline-block rounded-md color-bg-main"><Wallet className="fill-gray-200 text-transparent" size={40}/></span>
                <h1 className="text-2xl font-semibold color-text-main">{APP_CONFIG?.name}</h1>
                <p className="text-sm text-gray-700">A minimalist tool for managing student expenses,tracking budgets, and maintaining financial clarity.</p>
            </div>
            <div className="mt-4 flex flex-col gap-2">
                <Button>Log In</Button>
                <Button variant="outline">Create Account</Button>
            </div>
            <span className="text-sm text-gray-500 mt-4 inline-block">secure & private</span>
        </div>
    
  )
}

export default Landing