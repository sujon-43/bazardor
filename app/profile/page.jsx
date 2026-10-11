"use client";
import Link from "next/link";
import ProtectedRoute from "@/components/ProtectedRoute";
import { authClient } from "@/lib/auth-client";

function Profile() {
  const { data: session } = authClient.useSession();
  const u = session.user;
  return (
    <div className="max-w-md mx-auto px-4 py-12">
      <div className="bg-white border rounded-xl p-6 text-center space-y-2">
        {u.image && <img src={u.image} alt="" className="w-20 h-20 rounded-full mx-auto" />}
        <h1 className="text-2xl font-bold">{u.name}</h1>
        <p className="text-gray-600">{u.email}</p>
        <Link href="/profile/update" className="btn bg-green-600 text-white hover:bg-green-700 mt-3">
          তথ্য আপডেট করুন
        </Link>
      </div>
    </div>
  );
}

export default function ProfilePage() {
  return (
    <ProtectedRoute>
      <Profile />
    </ProtectedRoute>
  );
}
