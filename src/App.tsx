import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import TermsAndConditionsPage from "./pages/TermsAndConditionsPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import ContactUsPage from "./pages/ContactUsPage";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

function App() {
  const firebaseConfig = {
		apiKey: import.meta.env.VITE_GOOGLE_API_KEY,
		authDomain: import.meta.env.VITE_GOOGLE_AUTH_DOMAIN,
		projectId: import.meta.env.VITE_GOOGLE_PROJECT_ID,
		storageBucket: import.meta.env.VITE_GOOGLE_STORAGE_BUCKET,
		messagingSenderId: import.meta.env.VITE_GOOGLE_MESSAGING_SENDER_ID,
		appId: import.meta.env.VITE_GOOGLE_APP_ID,
		measurementId: import.meta.env.VITE_GOOGLE_MEASUREMENT_ID,
	};

  const app = initializeApp(firebaseConfig);
  getAnalytics(app);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<HomePage />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditionsPage />}
          />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
