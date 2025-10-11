import { useState, useCallback, useRef, useEffect } from "react";

export default function passwordGenerator() {
  const [hasMounted, setHasMounted] = useState<boolean>(false);
  let [password, setPassword] = useState<string>("");
  const [passwordLength, setPasswordLength] = useState<number>(8);
  const [numberAllowed, setNumberAllowed] = useState<boolean>(false);
  const [characterAllowed, setCharacterAllowed] = useState<boolean>(false);

  //"Once this input is rendered to the DOM, store a reference to the DOM node (the real <input>) in passwordRef.current."
  const passwordRef = useRef<HTMLInputElement>(null);

  //useCallback hooks are used to memoize functions so they are not recreated on every render unless their dependencies change.
  const passwordGenerator: VoidFunction = useCallback(() => {
    let tempPassword: string = "";
    let characters: string =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numberAllowed) characters += "0123456789";
    if (characterAllowed) characters += "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    for (let i = 0; i < passwordLength; i++) {
      let randomIndex: number = Math.floor(
        Math.random() * characters.length + 1
      );

      tempPassword = tempPassword + characters.charAt(randomIndex);
      password = tempPassword;
      setPassword(password);
    }
  }, [passwordLength, numberAllowed, characterAllowed]);

  const copyPasswordToClipboard: VoidFunction = useCallback(() => {
    console.log(window.navigator.clipboard);

    if (!passwordRef.current) {
      alert("No password to copy");
      return;
    }
  }, [password]);

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3">Password generator</h1>
    </div>
  );
}
