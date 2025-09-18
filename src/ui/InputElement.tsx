import { type Ref } from "react";

interface InputProps {
    type: string;
    placeholder: string;
    inputReference: Ref<HTMLInputElement> | Ref<HTMLTextAreaElement>;
    addedClass?: string;
}

export const InputElement = ({
    type,
    placeholder,
    inputReference,
    addedClass,
}: InputProps) => {
    const InputClass = `bg-input-bg border border-primary-border text-secondary-text rounded-md px-3 py-2 focus:outline-none focus:border-secondary-text disabled:opacity-50 transition-all duration-200`;
    return (type=="textarea"?
            <textarea
                className={`${InputClass} w-full ${addedClass}` }
                ref={inputReference as Ref<HTMLTextAreaElement>}
                placeholder={placeholder}
            >

        </textarea>
        :
        <input
        className={`${InputClass} w-full ${addedClass}` }
        ref={inputReference as Ref<HTMLInputElement>}
        placeholder={placeholder}
        type={type}
    ></input>
    );
};
