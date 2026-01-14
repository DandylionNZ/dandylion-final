export { default } from "./Container";
import { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 md:px-10">
      {children}
    </div>
  );
}
