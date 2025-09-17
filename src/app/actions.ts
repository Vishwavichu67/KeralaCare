
'use server';

import { getSdgAlignmentAdvice, SdgAlignmentAdviceOutput } from "@/ai/flows/sdg-alignment-advice";
import { redirect } from "next/navigation";
import { auth, db } from "@/lib/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export async function getAdviceAction(healthRecords: string): Promise<SdgAlignmentAdviceOutput> {
  try {
    const output = await getSdgAlignmentAdvice({ healthRecords });
    return output;
  } catch (error) {
    console.error("Error getting SDG alignment advice:", error);
    // In a real application, you might want to return a more structured error
    return { advice: 'Failed to generate advice due to an internal error.' };
  }
}

export async function registerAction(prevState: any, formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const phone = formData.get('phone') as string;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    const healthId = `KERALACARE-${name.toUpperCase().replace(/\s/g, '')}-${Math.floor(1000 + Math.random() * 9000)}`;

    // Create a user document in Firestore
    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      name,
      email,
      phone,
      healthId,
      createdAt: new Date().toISOString(),
      healthRecords: {
        personalInfo: { name, age: null, gender: null, contact: phone },
        emergencyInfo: { bloodGroup: null, allergies: [] },
        vitals: { bloodPressure: null, heartRate: null, temperature: null, bloodSugar: null },
        medicalHistory: [],
        lifestyle: { smoker: null, alcohol: null, diet: null, exercise: null }
      }
    });

  } catch (error: any) {
    console.error("Registration Error:", error);
    if (error.code) {
      switch (error.code) {
        case 'auth/email-already-in-use':
          return { message: 'This email address is already in use.' };
        case 'auth/weak-password':
          return { message: 'The password is too weak. Please use at least 6 characters.' };
        case 'auth/invalid-email':
          return { message: 'The email address is not valid.' };
        default:
          return { message: 'An unknown error occurred during registration.' };
      }
    }
    return { message: "An unexpected error occurred." };
  }
  
  redirect('/dashboard');
}

export async function loginAction(prevState: any, formData: FormData) {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error: any) {
        console.error("Login Error:", error);
        if (error.code) {
            switch (error.code) {
                case 'auth/user-not-found':
                case 'auth/wrong-password':
                case 'auth/invalid-credential':
                    return { message: 'Invalid email or password.' };
                case 'auth/invalid-email':
                    return { message: 'Please enter a valid email address.' };
                default:
                    return { message: 'An unknown error occurred during login.' };
            }
        }
        return { message: 'An unexpected error occurred.' };
    }

    redirect('/dashboard');
}

