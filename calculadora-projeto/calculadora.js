
export const soma = (a, b) => a + b;
export const subtracao = (a, b) => a - b;
export const multiplicacao = (a, b) => a * b;
export const divisao = (a, b) => {
    if (b === 0) {
        return "Erro: Divisão por zero não permitida.";
    }
    return a / b;
};
