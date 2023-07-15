import dynamic from "next/dynamic.js";
const UI = dynamic(() => import("./ui.js"), { ssr: false });


export default function Index() {
  return (
    <div>
      <h2>SSR disabled</h2>
      <UI></UI>
    </div>
  );
}