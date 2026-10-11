import Link from "next/link";

export default function NotFoundBox({ message = "পৃষ্ঠাটি খুঁজে পাওয়া যায়নি।" }) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20 text-center">
      <p className="text-6xl font-bold text-green-600 mb-2">৪০৪</p>
      <p className="text-gray-600 mb-6">{message}</p>
      <Link href="/" className="btn bg-green-600 text-white hover:bg-green-700">
        হোম পেজে ফিরে যান
      </Link>
    </div>
  );
}
