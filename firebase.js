import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Firebase config object
const firebaseConfig = {
	apiKey: "AIzaSyC-Zyzhb9uvYeS1C1bokMdozyUxatj4OtM",
	authDomain: "gadget-reselling-app.firebaseapp.com",
	projectId: "gadget-reselling-app",
	storageBucket: "gadget-reselling-app.firebasestorage.app",
	messagingSenderId: "927044141669",
	appId: "1:927044141669:web:e16624f703e80165307c8c",
	measurementId: "G-GWE4F346BM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Google Login setup
const googleProvider = new GoogleAuthProvider();

// Function to handle Google Login
export const loginWithGoogle = async () => {
	try {
		const result = await signInWithPopup(auth, googleProvider);
		const user = result.user;
		console.log("User Info:", user);
		// Do something with the user info (store in session, display, etc.)
	} catch (error) {
		console.error("Error signing in with Google:", error);
	}
};
