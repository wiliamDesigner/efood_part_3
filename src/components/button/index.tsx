type Props = {
  title: string;
  children: React.ReactNode;
  className?: string;
};

const Button = ({ title, children, className }: Props) => {
  return (
    <button title={title} className={className}>
      {children}
    </button>
  );
};

export default Button;