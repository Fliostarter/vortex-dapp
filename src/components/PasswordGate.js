import React, { useState } from "react";

export default function PasswordGate({ children }) {
  const [input, setInput] = useState("");
  const [allowed, setAllowed] = useState(false);

  const PASSWORD = "yourpassword123"; // ضع كلمة المرور هنا

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === PASSWORD) {
      setAllowed(true);
    } else {
      alert("كلمة المرور خاطئة");
    }
  };

  if (allowed) {
    return children; // إذا الكلمة صحيحة → اعرض الصفحة الأصلية
  }

  return (
    <div style={{ 
      maxWidth: 300, 
      margin: "120px auto", 
      padding: 20, 
      border: "1px solid #444",
      borderRadius: 10,
      textAlign: "center"
    }}>
      <h3>صفحة محمية</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="أدخل كلمة المرور"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{
            width: "100%",
            padding: 10,
            marginBottom: 10,
            borderRadius: 6,
            border: "1px solid #333"
          }}
        />
        <button 
          type="submit"
          style={{
            width: "100%",
            padding: 10,
            borderRadius: 6,
            cursor: "pointer"
          }}
        >
          دخول
        </button>
      </form>
    </div>
  );
}
