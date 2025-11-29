import {Button} from "@/components/ui/button";
import {CirclePlus} from "lucide-react";

export default function HomePage(){
    return (
        <div className='h-screen flex flex-col items-center justify-center'>
            <Button size='xl' className='rounded-full'>
                <CirclePlus />
                Click me
            </Button>
        </div>
    )
}