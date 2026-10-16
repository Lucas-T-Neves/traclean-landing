import { useCallback, useMemo, useState } from 'react';
import { OFERTA } from '../models/oferta';

/**
 * VIEWMODEL DO CHECKOUT SIMULADO.
 * Concentra TODA a regra do CTA funcional da landing:
 *   - abrir/fechar o modal
 *   - validar os campos (a view so desenha os erros que chegam aqui)
 *   - "finalizar" o pedido e gerar um codigo ficticio
 * Nenhum dado e enviado para lugar nenhum: e tudo local, como a atividade exige.
 */

const FORM_INICIAL = { nome: '', email: '', telefone: '', cidade: '', pet: false };

const REGRAS = {
  nome: (v) => (v.trim().length >= 3 ? '' : 'Escreva pelo menos 3 caracteres.'),
  email: (v) =>
    /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(v.trim()) ? '' : 'E-mail invalido: use nome@dominio.com.',
  telefone: (v) => (/^[\d\s()+.-]{8,20}$/.test(v.trim()) ? '' : 'Telefone invalido: so numeros, DDD e ().'),
  cidade: (v) => (v.trim().length >= 2 ? '' : 'Informe a cidade de entrega.'),
};

function gerarCodigo() {
  return 'TRC-' + Math.floor(100000 + Math.random() * 900000);
}

export function useCheckoutViewModel() {
  const [aberto, setAberto] = useState(false);
  const [form, setForm] = useState(FORM_INICIAL);
  const [erros, setErros] = useState({});
  const [tentouEnviar, setTentouEnviar] = useState(false);
  const [pedido, setPedido] = useState(null);

  const abrir = useCallback(() => setAberto(true), []);

  const fechar = useCallback(() => {
    setAberto(false);
    setTentouEnviar(false);
  }, []);

  const atualizar = useCallback((campo, valor) => {
    setForm((atual) => ({ ...atual, [campo]: valor }));
    // revalida em tempo real so depois que o usuario ja tentou enviar
    setErros((atual) => {
      if (!REGRAS[campo]) return atual;
      const mensagem = REGRAS[campo](String(valor));
      return mensagem ? { ...atual, [campo]: mensagem } : { ...atual, [campo]: '' };
    });
  }, []);

  const validar = useCallback(() => {
    const novos = {};
    Object.keys(REGRAS).forEach((campo) => {
      const mensagem = REGRAS[campo](form[campo]);
      if (mensagem) novos[campo] = mensagem;
    });
    setErros(novos);
    return Object.keys(novos).length === 0;
  }, [form]);

  const confirmar = useCallback(() => {
    setTentouEnviar(true);
    if (!validar()) return false;

    setPedido({
      codigo: gerarCodigo(),
      nome: form.nome.trim(),
      email: form.email.trim(),
      cidade: form.cidade.trim(),
      pet: form.pet,
      total: OFERTA.precoFormatado,
      parcelas: `${OFERTA.parcelas}x de ${OFERTA.valorParcelaFormatado}`,
      // numero de posicao tambem ficticio: combinamos com o selo de "lote" do model
      posicaoFila: 312,
      situacao: 'Pagamento simulado — nada foi cobrado',
    });
    return true;
  }, [form, validar]);

  const reiniciar = useCallback(() => {
    setForm(FORM_INICIAL);
    setErros({});
    setTentouEnviar(false);
    setPedido(null);
  }, []);

  const dados = useMemo(
    () => ({
      aberto,
      form,
      erros,
      tentouEnviar,
      pedido,
      jaComprou: Boolean(pedido),
      temErro: (campo) => tentouEnviar && Boolean(erros[campo]),
    }),
    [aberto, form, erros, tentouEnviar, pedido]
  );

  const acoes = { abrir, fechar, atualizar, confirmar, reiniciar };

  return { dados, acoes };
}

export default useCheckoutViewModel;