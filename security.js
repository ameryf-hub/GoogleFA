import { getAuth, signOut } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";

async function handleSignIn(user) {
  const db = getFirestore();
  // Check if this user exists in your "users" or "whitelist" collection
  const userRef = doc(db, "authorizedUsers", user.email);
  const userSnap = await getDoc(userRef);

  if (!userSnap.exists()) {
    // User is not authorized, sign them out immediately
    const auth = getAuth();
    await signOut(auth);
    alert("You are not authorized to access this application.");
    return;
  }
  
  // Proceed to dashboard...
}
