"use client";
import { Suspense, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
import SocialButtons from "@/components/SocialButtons";

function SignInForm() {
  const router = useRouter();
  const params = useSearchParams();
  const redirect = params.get("redirect") || "/";
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const f = new FormData(e.target);
    const email = f.get("email");
    const password = f.get("password");
    if (!email || !password) return toast.error("ইমেইল ও পাসওয়ার্ড দিন");
    setLoading(true);
    const { error } = await authClient.signIn.email({ email, password });
    setLoading(false);
    if (error) return toast.error(error.message || "ইমেইল বা পাসওয়ার্ড ভুল");
    toast.success("সফলভাবে সাইন ইন হয়েছে");
    router.push(redirect);
  };

  return (
    <div className="max-w-md mx-auto px-4 py-12">
      <div className="bg-white border rounded-xl p-6">
        <h1 className="text-2xl font-bold mb-4">সাইন ইন</h1>
        <form onSubmit={onSubmit} className="space-y-3">
          <input name="email" type="email" placeholder="ইমেইল" className="input input-bordered w-full" />
          <input name="password" type="password" placeholder="পাসওয়ার্ড" className="input input-bordered w-full" />
          <button disabled={loading} className="btn w-full bg-green-600 text-white hover:bg-green-700">
            {loading ? "অপেক্ষা করুন..." : "সাইন ইন"}
          </button>
        </form>
        <div className="divider">অথবা</div>
        <SocialButtons callbackURL={redirect} />
        <p className="text-sm mt-4 text-center">
          অ্যাকাউন্ট নেই?{" "}
          <Link href="/signup" className="text-green-700 font-semibold">সাইন আপ করুন</Link>
        </p>
      </div>
    </div>
  );
}

export default function SignInPage() {
  return (
    <Suspense>
      <SignInForm />
    </Suspense>
  );
}
