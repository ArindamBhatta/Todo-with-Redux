import {
  useState,
  useCallback,
  useRef,
  useEffect,
  type ChangeEvent,
} from "react";

// Use 'App' as the main component name for single-file React apps in this environment.
export default function App() {
  const [password, setPassword] = useState<string>("");
  const [passwordLength, setPasswordLength] = useState<number>(12); // Default to a more secure length
  const [numberAllowed, setNumberAllowed] = useState<boolean>(true);
  const [characterAllowed, setCharacterAllowed] = useState<boolean>(false);
  const [notification, setNotification] = useState<string | null>(null);

  // Reference to the password input field
  const passwordRef = useRef<HTMLInputElement>(null);

  /**
   * Generates the random password based on current state settings.
   */
  const generatePassword: VoidFunction = useCallback(() => {
    let tempPassword: string = "";
    let characters: string =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (numberAllowed) characters += "0123456789";
    if (characterAllowed) characters += "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    for (let i = 0; i < passwordLength; i++) {
      // Correct index calculation: Math.random() * characters.length ensures indices 0 to length-1
      let randomIndex: number = Math.floor(Math.random() * characters.length);
      tempPassword += characters.charAt(randomIndex);
    }

    setPassword(tempPassword);

    // Clear notification after generation
    if (notification) {
      setNotification(null);
    }
  }, [passwordLength, numberAllowed, characterAllowed]);

  /**
   * Copies the generated password to the clipboard using document.execCommand('copy').
   */
  const copyPasswordToClipboard: VoidFunction = useCallback(() => {
    if (!passwordRef.current || !password) {
      setNotification("Nothing to copy!");
      setTimeout(() => setNotification(null), 2000);
      return;
    }

    try {
      passwordRef.current.select();
      // Use execCommand('copy') for guaranteed cross-browser compatibility within iframes/sandboxes
      document.execCommand("copy");
      setNotification("Copied to clipboard!");
      passwordRef.current.focus(); // Keep focus for better UX after copying
    } catch (err) {
      console.error("Failed to copy:", err);
      setNotification("Failed to copy password.");
    }
    setTimeout(() => setNotification(null), 2000); // Clear notification after 2 seconds
  }, [password]);

  // Use useEffect to automatically generate the password whenever dependencies change
  useEffect(() => {
    generatePassword();
  }, [passwordLength, numberAllowed, characterAllowed, generatePassword]);

  // Tailwind classes for the copy button dynamic style
  const copyButtonClasses =
    notification === "Copied to clipboard!"
      ? "bg-green-600 hover:bg-green-700 active:scale-[0.98]" // Green when copied
      : "bg-blue-700 hover:bg-blue-800 active:scale-[0.98]"; // Blue normally

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4 font-inter">
      <div className="w-full max-w-lg mx-auto shadow-2xl rounded-xl p-6 bg-gray-800 text-orange-400 border border-gray-700 transform hover:shadow-orange-900/50 transition duration-300">
        <h1 className="text-white text-3xl font-extrabold text-center mb-6">
          🔐 Secure Password Generator
        </h1>

        {/* Password Display and Copy */}
        <div className="flex shadow-lg rounded-xl overflow-hidden mb-6">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-3 px-4 text-gray-900 bg-white placeholder-gray-500 font-mono text-lg"
            placeholder="Generated password"
            readOnly
            ref={passwordRef}
          />
          <button
            type="button"
            onClick={copyPasswordToClipboard}
            className={`transition duration-150 ease-in-out text-white font-semibold px-4 py-3 shrink-0 rounded-r-xl focus:outline-none focus:ring-4 focus:ring-blue-500/50 ${copyButtonClasses}`}
          >
            {notification === "Copied to clipboard!" ? "COPIED!" : "COPY"}
          </button>
        </div>

        {/* Notification Banner */}
        {notification && (
          <div
            className={`text-center py-2 mb-4 rounded-lg font-medium text-sm transition-all duration-300 ${
              notification.includes("Copied")
                ? "bg-green-500 text-white"
                : "bg-red-500 text-white"
            }`}
          >
            {notification}
          </div>
        )}

        {/* Controls Section */}
        <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-6 text-sm">
          {/* Password Length Control */}
          <div className="flex flex-col items-start gap-y-2 flex-grow">
            <label className="text-gray-300 font-semibold">
              Length:{" "}
              <span className="text-orange-400 font-bold">
                {passwordLength}
              </span>
            </label>
            <input
              type="range"
              min={6}
              max={50} // Changed max to 50 for practical use
              value={passwordLength}
              className="cursor-pointer w-full h-2 bg-gray-700 rounded-lg appearance-none range-lg [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-orange-500 [&::-webkit-slider-thumb]:appearance-none"
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setPasswordLength(parseInt(e.target.value));
              }}
            />
          </div>

          {/* Options Checkboxes */}
          <div className="flex items-center gap-x-4">
            <div className="flex items-center gap-x-2">
              <input
                type="checkbox"
                checked={numberAllowed} // Use 'checked' for controlled component
                id="numberInput"
                className="w-4 h-4 text-orange-600 bg-gray-700 border-gray-600 rounded focus:ring-orange-500 focus:ring-2"
                onChange={() => {
                  setNumberAllowed((prev) => !prev);
                }}
              />
              <label
                htmlFor="numberInput"
                className="text-gray-300 select-none"
              >
                Include Numbers
              </label>
            </div>

            <div className="flex items-center gap-x-2">
              <input
                type="checkbox"
                checked={characterAllowed} // Use 'checked' for controlled component
                id="characterInput"
                className="w-4 h-4 text-orange-600 bg-gray-700 border-gray-600 rounded focus:ring-orange-500 focus:ring-2"
                onChange={() => {
                  setCharacterAllowed((prev) => !prev);
                }}
              />
              <label
                htmlFor="characterInput"
                className="text-gray-300 select-none"
              >
                Include Symbols
              </label>
            </div>
          </div>
        </div>

        <div className="mt-8 text-xs text-gray-500 text-center border-t border-gray-700 pt-4">
          The password automatically regenerates when you change any settings.
        </div>
      </div>
    </div>
  );
}
