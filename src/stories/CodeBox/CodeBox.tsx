import { Box, IBoxProps, Input } from "native-base";
import { WidthScreen } from "../../utils/Screensize";
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";

export const CodeBox = forwardRef(
  (
    {
      onChange,
      id,
      nextFocusId,

      ...rest
    }: IBoxProps & {
      onFocusNextBox;
      onChange: (id: string, value: string) => void;
      id: string;
      nextFocusId?: string;
    },
    ref
  ) => {
    const inputRef = useRef(null);

    // Exponha o método focus do Input para a ref do pai
    useImperativeHandle(ref, () => ({
      focus: () => {
        inputRef.current?.focus();
      },
    }));

    return (
      <Box w={WidthScreen * 0.17} style={{ aspectRatio: 1 }} {...rest}>
        <Input
          variant="unstyled" // Remove estilos padrão para se mesclar com o Box.
          keyboardType="numeric" // Define o teclado para aceitar apenas números.
          textAlign="center" // Centraliza o texto digitado.
          width="100%" // Faz o input ocupar todo o espaço horizontal disponível.
          height="100%" // Faz o input ocupar todo o espaço vertical disponível.
          maxLength={1} // Adicione mais propriedades aqui conforme necessário
          color={"orange.900"}
          fontWeight={500}
          fontSize={"xl"}
          borderWidth={1}
          borderColor={"#EEE"}
          rounded={WidthScreen * 0.0267}
          shadow={2}
          bg={"white"}
          _focus={{
            borderColor: "orange.900",
            borderRadius: WidthScreen * 0.0267,
            backgroundColor: "white",
          }}
          onChangeText={(value) => onChange(id, value)} // Chama onChange passando o id e o valor
        />
      </Box>
    );
  }
);
