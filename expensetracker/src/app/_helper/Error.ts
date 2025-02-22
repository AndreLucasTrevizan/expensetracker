import { AxiosError } from "axios";

export class ErrorHandler {
  message: string;
  constructor(error: AxiosError | Error | unknown) {
    if (error instanceof AxiosError) {
      if (error.code == 'ECONNREFUSED') {
        this.message = "Nossos serviços estão indisponíveis no momento, tente novamente mais tarde";

        return { message: this.message };
      } else {
        this.message = error.response?.data['msg'];

        return { message: this.message };
      }
    } else if (error instanceof Error) {
      this.message = error.message;
      return { message: this.message };
    } else {
      this.message = "ERRO DESCONHECIDO";
      return { message: this.message };
    }
  }
}