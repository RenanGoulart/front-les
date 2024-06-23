import { useState, useEffect, memo } from "react";
import { Text } from "./styles";

type Props = {
  text: string;
};

const TypingAnimation = ({ text }: Props) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText(displayedText + text.charAt(index));
        setIndex(index + 1);
      }, 10);

      return () => clearTimeout(timeoutId);
    }
  }, [index, text, displayedText]);

  return <Text>{displayedText}</Text>;
};

export default memo(TypingAnimation);
