'use client'

import { authClient } from "@/app/lib/auth-client";
import { useState } from "react";
import { Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/dist/client/components/navigation";

export default function SignUpPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");   
    
    await authClient.signUp.email({ email, password, name }, 
    {onRequest: () => {setLoading(true)},
    onResponse: () => {setLoading(false)},
    onSuccess: () => {router.push("/dashboard")},
    onError: (finishedObject) => {setError(finishedObject.error.message)},
  })
}

return (<Card>
  <CardHeader>
    <CardTitle>Sign Up</CardTitle>
    <CardDescription>Create a new account</CardDescription>
  </CardHeader>
  <CardContent>
    <form onSubmit={handleSignUp}>
      <div className="grid gap-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          placeholder="John Doe"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          placeholder="john@example.com"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          placeholder="••••••••"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && (
        <p className="text-sm text-destructive">{error}</p>
      )}
      <Button type="submit" disabled={loading}>
        {loading ? "Signing Up..." : "Sign Up"}
      </Button>
    </form>
  </CardContent>
  <CardFooter>
    <p className="text-sm text-muted-foreground">
      Already have an account?{" "}
      <a href="/sign-in" className="text-primary underline">
        Sign In
      </a>
    </p>
  </CardFooter>
</Card>)





}