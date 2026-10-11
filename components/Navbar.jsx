"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

export default function Navbar({ categories }) {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const [date, setDate] = useState("");

  useEffect(() => {
    setDate(
      new Date().toLocaleDateString("bn-BD", {
        weekday: "long", day: "numeric", month: "long", year: "numeric",
      })
    );
  }, []);

  const logout = async () => {
    await authClient.signOut();
    toast.success("সফলভাবে সাইন আউট হয়েছে");
    router.push("/");
  };

  const link = (href) =>
    `px-3 py-1.5 rounded-full text-sm whitespace-nowrap ${
      pathname === href ? "bg-green-600 text-white" : "hover:bg-green-100"
    }`;

  const links = (
    <>
      <Link href="/" className={link("/")}>হোম</Link>
      {categories.map((c) => (
        <Link key={c.slug} href={`/category/${c.slug}`} className={link(`/category/${c.slug}`)}>
          {c.icon} {c.nameBn}
        </Link>
      ))}
    </>
  );

  return (
    <header className="bg-white border-b sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo-icon.png" alt="logo" width={28} height={28} />
          <div className="leading-tight">
            <p className="font-bold text-lg">বাজার দর</p>
            <p className="text-xs text-gray-500 min-h-4">{date}</p>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">{links}</nav>

        <div className="flex items-center gap-2">
          {isPending ? (
            <div className="skeleton h-8 w-24" />
          ) : session ? (
            <>
              <Link href="/profile" className="btn btn-sm sm:btn-md btn-ghost">
                {session.user.name}
              </Link>
              <button onClick={logout} className="btn btn-sm sm:btn-md btn-outline btn-error">
                সাইন আউট
              </button>
            </>
          ) : (
            <>
              <Link href="/signin" className="btn btn-sm sm:btn-md btn-outline">সাইন ইন</Link>
              <Link href="/signup" className="btn btn-sm sm:btn-md bg-green-600 text-white hover:bg-green-700">
                সাইন আপ
              </Link>
            </>
          )}
        </div>
      </div>

      <nav className="lg:hidden border-t overflow-x-auto">
        <div className="flex gap-1 px-4 py-2 w-max">{links}</div>
      </nav>
    </header>
  );
}
