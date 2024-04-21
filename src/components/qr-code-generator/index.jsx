import { useState } from "react";

export default function QRCodeGenerator() {
  const [qrCode, setQrcode] = useState("");
  const [input, setInput] = useState("");

  function handleGenerateQrCode() {
    setQrcode(input);
  }
  return (
    <div>
      <h1>Qr code generator </h1>
      <div>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="qr0code"
          placeholder="Enter your valu here"
        />
        <button
          disabled={input && input.trim() !== " " ? false : true}
          onClick={handleGenerateQrCode}
        >
          Generate
        </button>
      </div>
      <div>
        <QRCode id="qr-code-value" value={qrCode} size={400} bgcolor="#fff" />
      </div>
    </div>
  );
}
