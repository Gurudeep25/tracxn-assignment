import React, { useState } from "react";

const EmailVerification = () => {
  const [email, setEmail] = useState("");
  const [verificationSent, setVerificationSent] = useState(false);
  const [verificationError, setVerificationError] = useState(null);
  const [verificationCode, setVerificationCode] = useState("");
  const [verificationSuccess, setVerificationSuccess] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSendVerification = async () => {
    try {
      // Replace with actual backend API endpoint to send verification email
      const response = await fetch("/api/sendVerificationEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        setVerificationSent(true);
      } else {
        throw new Error("Failed to send verification email");
      }
    } catch (error) {
      console.error("Error sending verification email:", error);
      setVerificationError(
        "Failed to send verification email. Please try again."
      );
    }
  };

  const handleVerifyCode = async () => {
    try {
      // Replace with actual backend API endpoint to verify email with code
      const response = await fetch("/api/verifyEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, verificationCode }),
      });
      if (response.ok) {
        setVerificationSuccess(true);
      } else {
        throw new Error("Failed to verify email");
      }
    } catch (error) {
      console.error("Error verifying email:", error);
      setVerificationError(
        "Failed to verify email. Please check your verification code and try again."
      );
    }
  };

  const handleReset = () => {
    setEmail("");
    setVerificationSent(false);
    setVerificationError(null);
    setVerificationCode("");
    setVerificationSuccess(false);
  };

  const handleVerificationCodeChange = (e) => {
    setVerificationCode(e.target.value);
  };

  return (
    <div className="email-verification-container">
      {!verificationSuccess ? (
        <>
          {!verificationSent ? (
            <>
              <h2>Send Verification Email</h2>
              <p>
                Please enter your email address to receive a verification code:
              </p>
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email"
              />
              <br />
              <br />
              <button onClick={handleSendVerification} className="btn">
                Send Verification Email
              </button>
              {verificationError && (
                <p className="error-message">{verificationError}</p>
              )}
            </>
          ) : (
            <>
              <h2>Verify Email</h2>
              <p>
                An email with a verification code has been sent to {email}.
                Please check your email and enter the verification code:
              </p>
              <input
                type="text"
                value={verificationCode}
                onChange={handleVerificationCodeChange}
                placeholder="Enter verification code"
              />
              <button onClick={handleVerifyCode}>Verify</button>
              {verificationError && (
                <p className="error-message">{verificationError}</p>
              )}
            </>
          )}
        </>
      ) : (
        <>
          <h2>Email Verified!</h2>
          <p>Your email {email} has been successfully verified.</p>
          <button onClick={handleReset}>Verify Another Email</button>
        </>
      )}
    </div>
  );
};

export default EmailVerification;
