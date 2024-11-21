"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { FaAngleLeft } from "react-icons/fa6";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const onLogin = async () => {
    try {
      setLoading(true);
      setError("");
      const response = await axios.post("/api/users/login", user);
      console.log("Login successful", response.data);
      router.push("/dashboard");
      router.refresh();
    } catch (error: any) {
      console.log("Login failed", error.message);
      setError(error.response?.data?.error || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <Card className="w-[400px]">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center">
            {loading ? "Signing in..." : "Welcome back"}
          </CardTitle>
          <CardDescription className="text-center">
            Enter your credentials to sign in to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                disabled={loading}
              />
            </div>
            <div className="space-y-2">
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                disabled={loading}
              />
            </div>
            {error && (
              <div className="text-red-500 text-sm text-center">{error}</div>
            )}
            <Button
              className="w-full"
              onClick={onLogin}
              disabled={loading || !user.email || !user.password}
            >
              {loading ? (
                <div className="flex items-center gap-2">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" />
                  Signing in...
                </div>
              ) : (
                "Sign in"
              )}
            </Button>
          </div>

          <div className="mt-4 text-center text-sm">
            <Link href="/signup" className="text-primary hover:underline">
              Don&apos;t have an account? Sign up
            </Link>
          </div>
        </CardContent>
      </Card>

      <Link
        href="/"
        className="mt-8 text-sm text-muted-foreground hover:text-primary"
      >
        <FaAngleLeft className="inline mr-1" /> Back to Homepage
      </Link>
    </div>
  );
}
