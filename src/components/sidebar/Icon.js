

export default function Icon({url, icon = null, children}){
  return(
    <a
      hRef={url}
      className="social-link"
      target="_blank"
    >
      {children}
    </a>
  );
}