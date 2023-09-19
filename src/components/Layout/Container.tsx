type containerPropsTypes = {
} & React.HTMLAttributes<HTMLElement>;

function Container({ className,children }: containerPropsTypes) {
  return (
    <section className={`w-4/5 m-auto${className}`}>
        {children}
    </section>
  );
}

export default Container;
