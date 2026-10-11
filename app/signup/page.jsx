"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
import SocialButtons from "@/components/SocialButtons";

export default function SignUpPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const f = new FormData(e.target);
    const name = f.get("name");
    const email = f.get("email");
    const password = f.get("password");
    if (!name || !email || !password) return toast.error("সব ঘর পূরণ করুন");
    if (password.length < 8) return toast.error("পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে");
    setLoading(true);
    const { error } = await authClient.signUp.email({ name, email, password });
    setLoading(false);
    if (error) return toast.error(error.message || "রেজিস্ট্রেশন ব্যর্থ হয়েছে");
    await authClient.signOut();
    toast.success("রেজিস্ট্রেশন সফল! এখন সাইন ইন করুন");
    router.push("/signin");
  };

  return (
    <div className="max-w-md mx-auto px-4 py-12">
      <div className="bg-white border rounded-xl p-6">
        <h1 className="text-2xl font-bold mb-4">সাইন আপ</h1>
        <form onSubmit={onSubmit} className="space-y-3">
          <input name="name" placeholder="নাম" className="input input-bordered w-full" />
          <input name="email" type="email" placeholder="ইমেইল" className="input input-bordered w-full" />
          <input name="password" type="password" placeholder="পাসওয়ার্ড" className="input input-bordered w-full" />
          <button disabled={loading} className="btn w-full bg-green-600 text-white hover:bg-green-700">
            {loading ? "অপেক্ষা করুন..." : "রেজিস্টার"}
          </button>
        </form>
        <div className="divider">অথবা</div>
        <SocialButtons />
        <p className="text-sm mt-4 text-center">
          আগে থেকেই অ্যাকাউন্ট আছে?{" "}
          <Link href="/signin" className="text-green-700 font-semibold">সাইন ইন করুন</Link>
        </p>
      </div>
    </div>
  );
}
