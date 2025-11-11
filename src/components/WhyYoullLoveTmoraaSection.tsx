import React from "react";
import GradientOutlineButton from "./GradientOutlineButton";

export default function WhyYoullLoveTmoraaSection() {
  return (
    <section className="py-12 flex justify-center items-center">
      <div
        className="rounded-[100px] text-center bg-[url('/love-tmoraa-bg.png')]  bg-cover bg-center bg-no-repeat px-32 py-10"
      >
        <div className="grid grid-cols-[5fr_2fr] gap-4 items-center">
          <div className="text-left">
            <h2 className="relative text-4xl font-semibold z-30 text-background">
              Why You'll Love Tmoraa
            </h2>

            <ul className="pt-6 relative z-30 text-background list-disc list-inside">
              <li>Save hours every week on reporting and planning</li>
              <li>Make faster, smarter business decisions</li>
              <li>Optimize labour and inventory with AI-driven forecasts</li>
              <li>Increase customer satisfaction through proactive insights</li>
              <li>Grow revenue while maintaining operational control</li>
            </ul>
          </div>
          <GradientOutlineButton className="h-min w-2xs">
            Request a Demo
          </GradientOutlineButton>
        </div>
      </div>
    </section>
  );
}
