type ButtonProps = {
  text: string;
  bg?: string;
  textColor?: string;
  additionalClasses?: string;
};

export default function Button({
  text,
  bg = "bg-main",
  textColor = "text-white",
  additionalClasses,
}: ButtonProps) {
  return (
    <button
      className={`h-42 px-16 py-12 rounded-lg ${bg} ${textColor} flex items-center justify-center text-text-main font-medium ${additionalClasses}`}
    >
      {text}
    </button>
  );
}
