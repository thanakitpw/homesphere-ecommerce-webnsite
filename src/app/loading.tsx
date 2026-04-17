import { HousePlug } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-screen grid place-items-center bg-neutral-50">
      <div className="text-center">
        <div className="inline-block relative">
          <span className="w-16 h-16 rounded-2xl bg-primary-600 text-white grid place-items-center animate-pulse">
            <HousePlug className="w-8 h-8" strokeWidth={2} />
          </span>
          <div className="absolute inset-0 rounded-2xl border-4 border-primary-300 animate-ping opacity-75" />
        </div>
        <p className="text-sm text-neutral-500 mt-4 font-medium">กำลังโหลด...</p>
      </div>
    </div>
  );
}
