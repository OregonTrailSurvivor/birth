import {Card, CardHeader, CardContent, CardTitle, CardDescription, CardFooter} from "@/components/ui/card";
import Link from "next/link";


export default function SignUpPage() {
  
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-5">
  
    <Card className="w-full max-w-sm md:max-w-md lg:max-w-lg">
 <CardHeader>
  <CardTitle>Sign Up</CardTitle>
  <CardDescription>Sign up for an account</CardDescription>
 </CardHeader>
 <CardContent>Content</CardContent>
 <CardFooter>Footer</CardFooter>
    </Card>
  
  <Link href="/"> Home </Link>
  
    </div>
  );
}