'use client'
import dynamic from "next/dynamic";
import Navbar from "../components/NavBars";
import BuildSelector from "../components/BuildSelector";
import ThreeDScene from "../components/ThreeDScene";
const ActiveTooltip = dynamic(() => import('../components/ActiveTooltip'), {
  ssr: false,
});

export default function Builds() {
  return (
    <main className="flex min-h-screen flex-col ">
      <Navbar />

      <div className="container mt-24 mx-auto px-12 py-4">
        <BuildSelector />
      </div>
<div>

<ActiveTooltip
  tooltipText={
    <>
      What are u <br /> looking for?
    </>
  }
>
  <ThreeDScene />
</ActiveTooltip>
  </div>


    </main>
  );
}
