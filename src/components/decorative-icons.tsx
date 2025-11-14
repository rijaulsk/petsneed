import { cn } from "@/lib/utils";
import { Dog, Cat, Bone, Fish, Bird } from "lucide-react";
import { PawPrint } from "./icons";

export function PetIcon({ as: Icon = Dog, className, ...props }: { as?: React.ElementType, className?: string, [key: string]: any }) {
    return (
        <Icon className={cn("absolute text-primary/10 -z-10", className)} {...props} />
    )
}

export function FloatingPetIcons() {
    return (
        <>
            <PetIcon as={Dog} className="top-1/4 left-10 h-24 w-24 -rotate-12 animate-float" />
            <PetIcon as={Cat} className="top-1/2 right-12 h-20 w-20 rotate-6 animate-float" style={{animationDelay: '1s'}} />
            <PetIcon as={Bone} className="bottom-1/4 left-1/4 h-16 w-16 rotate-12 animate-float" style={{animationDelay: '2s'}} />
            <PetIcon as={Fish} className="hidden lg:block bottom-16 right-1/3 h-12 w-12 -rotate-45 animate-float" style={{animationDelay: '0.5s'}} />
            <PetIcon as={Bird} className="hidden lg:block top-20 right-1/4 h-14 w-14 animate-float" style={{animationDelay: '1.5s'}} />
            <PetIcon as={PawPrint} className="hidden lg:block bottom-1/2 left-1/4 h-28 w-28 -rotate-45 opacity-50 animate-float" style={{animationDelay: '2.5s'}} />

        </>
    )
}
