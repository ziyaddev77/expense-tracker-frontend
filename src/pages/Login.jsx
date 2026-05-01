import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Wallet } from "lucide-react";
import { APP_CONFIG } from "../config/app";

function Register() {
  return (
    <div className="w-full max-w-100">
      <div className="flex items-center color-text-main gap-1 font-semibold justify-center py-4">
        <span>
          <Wallet strokeWidth={3} />
        </span>
        <span className="text-lg">{APP_CONFIG.name}</span>
      </div>
      <div className="bg-white rounded-md p-3 shadow-ld ring ring-gray-300">
        <div className="text-center">
          <h1 className="text-xl font-semibold">Welcom Back</h1>
        </div>
        <form className="mt-5">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="text-sm font-semibold">
                Email Address
              </label>
              <Input id="email" type="email" placeholder="name@example.com" />
            </div>
            <div>
              <label htmlFor="password" className="text-sm font-semibold">
                Password
              </label>
              <Input id="password" type="password" />
            </div>

            <Button type="submit" className="w-full">
              Log In
            </Button>
          </div>
        </form>
        <div className="text-center py-3 mt-1">
          <p className="text-sm text-gray-500">
            You don't have an account?
            <span className="color-text-main font-semibold">Sign in</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
