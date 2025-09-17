
'use client';

import Link from "next/link";
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { loginAction } from "@/app/actions";
import { Alert, AlertDescription } from "@/components/ui/alert";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" disabled={pending}>
      {pending ? 'Logging in...' : 'Login'}
    </Button>
  );
}

export default function LoginPage() {
  const [state, formAction] = useActionState(loginAction, null);

  return (
    <>
      <Header />
      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <Card className="w-full max-w-md shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-headline">Welcome Back</CardTitle>
            <CardDescription>Enter your credentials to access your health records.</CardDescription>
          </CardHeader>
          <CardContent>
            <form action={formAction} className="space-y-6">
              {state?.message && (
                <Alert variant="destructive">
                  <AlertDescription>{state.message}</AlertDescription>
                </Alert>
              )}
              <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="your.email@example.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" name="password" type="password" required />
                  </div>
              </div>
              <SubmitButton />
            </form>
            <div className="mt-6 text-center text-sm">
              Don't have an account?{" "}
              <Link href="/register" className="underline text-primary font-medium">
                Register here
              </Link>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </>
  );
}
