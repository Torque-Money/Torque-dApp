import { useEffect, useState } from "react";

export function useVaultInput(onChange: (num: number) => void, defaultValue?: number) {
    const [feedbackInput, setFeedbackInput] = useState<number | undefined>(defaultValue);
    const [feedbackOutput, setFeedbackOutput] = useState<number | undefined>(defaultValue);

    useEffect(() => {
        onChange(feedbackInput ? feedbackInput : 0);
        setFeedbackOutput(feedbackInput);
    }, [feedbackInput]);

    useEffect(() => {
        onChange(defaultValue ? defaultValue : 0);
        setFeedbackOutput(feedbackInput);
    }, [defaultValue]);

    return { setFeedbackInput, feedbackOutput };
}