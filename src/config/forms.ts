/**
 * Camada de configuração do formulário de contato.
 *
 * Enquanto `provider` for 'none', o formulário valida os campos e oferece
 * enviar a mensagem pelo WhatsApp ou e-mail configurados em site.ts —
 * nenhum envio é simulado.
 *
 * Para conectar um serviço, veja a seção "Formulário de contato" do README.
 */
import type { FormConfig } from './types';

export const formConfig: FormConfig = {
  provider: 'none',
  endpoint: '',
  accessKey: '',
  subject: 'Novo contato pelo site',
  messages: {
    success: 'Mensagem enviada. Obrigado pelo contato — retornaremos em breve.',
    error: 'Não foi possível enviar agora. Tente novamente em instantes ou use outro canal de contato.',
    notConnected: 'O envio direto pelo site ainda não está ativo. Você pode enviar sua mensagem por um dos canais abaixo:',
  },
};
