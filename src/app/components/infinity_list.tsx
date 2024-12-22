import { useEffect, useRef } from "react";

function InfinityList() {
  const logosRef = useRef(null);

  useEffect(() => {
    // Função que duplica a lista e ajusta atributos
    const ul = logosRef.current;
    if (ul) {
        ul.insertAdjacentHTML("afterend", ul.outerHTML);
        ul?.nextSibling?.setAttribute("aria-hidden", "true");
    }
  }, []);

  return (
    <div
      className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
    >
      <ul
        ref={logosRef}
        className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
      >
        <li>
          <p>Name</p>
        </li>
        <li>
          <p>Name</p>
        </li>
        <li>
          <p>Name</p>
        </li>
        <li>
          <p>Name</p>
        </li>
        <li>
          <p>Name</p>
        </li>
        <li>
          <p>Name</p>
        </li>
        <li>
          <p>Name</p>
        </li>
        <li>
          <p>Name</p>
        </li>
      </ul>
    </div>
  );
}

export default InfinityList;
