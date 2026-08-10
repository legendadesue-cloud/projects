import Image from "next/image";

export function Brand() {
  return (
    <div className="box">
      <div className="Name">
        <div className="Logo">
          <Image
            src="/images/116108496640094044.jpg"
            alt="ARMSLENGTH Logo"
            width={80}
            height={80}
          />
        </div>

        <p>ARMSLENGTH</p>
      </div>
    </div>
  );
}