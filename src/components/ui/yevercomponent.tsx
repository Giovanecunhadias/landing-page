import AmeiiComponent from "./Ameii";
import Ameiitwo from "./Ameiitwo";

export default function AmeiiComponentFinal() {
  return (
    <div className="flex flex-col items-center p-4 md:p-8 lg:p-16 bg-[#f8f9fa]">
      <div className="flex flex-col items-center w-full gap-12 md:gap-16 lg:gap-24">
        <AmeiiComponent />
        <Ameiitwo />
      </div>
    </div>
  );
}
