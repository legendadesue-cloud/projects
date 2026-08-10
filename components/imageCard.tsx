
export default function ImageCard(props: { src: string; alt: string; width: number; height: number; className: string }) {
 
    return (
    <div>
      <img
        src={props.src}
        alt={props.alt}
        width={props.width}
        height={props.height}
        className={props.className}
      />
    </div>
  );

}