interface FloatingNotificationProps {
  className?: string;
  title: string;
  subtitle?: string;
  imgSrc?: string;
  imgAlt?: string;
  link?: string;
}

const FloatingNotification = ({
  className,
  title,
  subtitle,
  imgSrc,
  imgAlt,
  link,
}: FloatingNotificationProps) => {
  const Component = link ? "a" : "div";
  const isLink = link ? true : false;
  console.log(isLink);

  return (
    <Component
      href={link || undefined}
      className={`${className || ""} flex items-center p-4 pr-6 bg-n-9/40 ${
        link ? "hover:bg-n-9/50 transition duration-300 ease-in-out" : ""
      }  backdrop-blur border-[1.5px] border-n-1/10 rounded-2xl gap-[0.85rem] z-1 ${
        link ? "" : ""
      }`}
    >
      <img
        width="50"
        height="50"
        alt={imgAlt}
        src={imgSrc}
        className="rounded-xl"
      ></img>
      <div className="flex-1">
        <p className="mb-[0.05rem] text-sm text-left">{title}</p>
        <div className="flex items-center justify-between">
          <div className={"text-xs text-n-3 text-left"}>{subtitle}</div>
        </div>
      </div>
    </Component>
  );
};

export default FloatingNotification;
