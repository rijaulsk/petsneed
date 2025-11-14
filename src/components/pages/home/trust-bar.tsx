import { CheckCircle } from "lucide-react";
import { trustBarItems } from "@/lib/data";

export function TrustBar() {
  return (
    <section className="bg-accent/50 py-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
          {trustBarItems.map((item, index) => (
            <div key={index} className="flex items-center justify-center gap-3">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span className="text-sm font-semibold text-foreground/80">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
