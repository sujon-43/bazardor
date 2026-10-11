"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import ProtectedRoute from "@/components/ProtectedRoute";
import { authClient } from "@/lib/auth-client";

function UpdateForm() {
  const { data: session } = authClient.useSession();
  const router = useRouter();
  const [name, setName] = useState(session.user.name);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) return toast.error("নাম দিন");
    setLoading(true);
    const { error } = await authClient.updateUser({ name: name.trim() });
    setLoading(false);
    if (error) return toast.error(error.message || "আপডেট ব্যর্থ হয়েছে");
    toast.success("তথ্য আপডেট হয়েছে");
    router.push("/profile");
  };

  return (
    <div className="max-w-md mx-auto px-4 py-12">
      <form onSubmit={onSubmit} className="bg-white border rounded-xl p-6 space-y-3">
        <h1 className="text-2xl font-bold">তথ্য আপডেট</h1>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="নাম"
          className="input input-bordered w-full"
        />
        <button disabled={loading} className="btn w-full bg-green-600 text-white hover:bg-green-700">
          {loading ? "অপেক্ষা করুন..." : "তথ্য আপডেট করুন"}
        </button>
      </form>
    </div>
  );
}

export default function UpdatePage() {
  return (
    <ProtectedRoute>
      <UpdateForm />
    </ProtectedRoute>
  );
}
