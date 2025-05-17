import AmplifyConfig from "@/components/config/AmplifyConfig";

export default function TestLayout({ children }) {
  return (
    <div>
      <AmplifyConfig />
      {children}
    </div>
  );
}
