import SvgIcon from "@mui/icons-material/Fingerprint";
import React from "react";

const CircularIconButton = ({
  icon: IconComponent, // Renomeie a propriedade 'icon' para 'IconComponent'
  onClick,
  className,
  classNameIcon,
}: {
  icon: any;
  onClick: () => void;
  className?: string;
  classNameIcon?: string;
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center bg-black rounded-full focus:outline-none hover:bg-blue-600 transition-colors duration-300 `}
      onClick={onClick}
    >
      <IconComponent // Renderize o ícone usando o componente fornecido
        className={`text-white ${classNameIcon} w-40 h-40`} // Adicione as classes para definir o tamanho do ícone
        style={{ width: 80, height: 80 }} // Adicione um estilo para definir o tamanho do ícone
      />
    </button>
  );
};

export default CircularIconButton;
