import {Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter} from "@/components/ui/card";
import Link from "next/link";

export default function SignInPage() {
    return (
        <div className="flex min-h-screen w-full flex-col items-center justify-center gap-5">
            <Card className="w-full max-w-sm md:max-w-md lg:max-w-lg">
                <CardHeader>
                    <CardTitle>Sign In</CardTitle>
                    <CardDescription>Sign in to your account</CardDescription>
                </CardHeader>
                <CardContent>This is to sign into your account!</CardContent>
                <CardFooter>This is the footer</CardFooter>
            </Card>
            <Link href="/"> Home </Link>
        </div>
        
    )
}

