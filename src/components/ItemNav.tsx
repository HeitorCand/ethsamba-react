export default function ItemNav(props: { children: React.ReactNode, title: string, className?: string, onClick?: () => void }) {
  return (
    <div
    onClick={props.onClick}
    className={`${props.className} flex flex-row items-center justify-center text-white mt-5 `}>
      {props.children}
      <p className="ml-2">{props.title}</p>
    </div>
  );
}
