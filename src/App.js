import './index.css';

import Cabecalho from './views/components/Cabecalho';
import Rodape from './views/components/Rodape';
import Modal from './views/components/Modal';
import Hero from './views/sections/Hero';
import Beneficios from './views/sections/Beneficios';
import Galeria from './views/sections/Galeria';
import ComoFunciona from './views/sections/ComoFunciona';
import ProvaSocial from './views/sections/ProvaSocial';
import Oferta from './views/sections/Oferta';
import Faq from './views/sections/Faq';
import ChamadaFinal from './views/sections/ChamadaFinal';

import { MODAL, RODAPE } from './models/copy';

import { useLandingViewModel } from './viewmodels/useLandingViewModel';
import { useOfertaViewModel } from './viewmodels/useOfertaViewModel';
import { useFaqViewModel } from './viewmodels/useFaqViewModel';
import { useNavViewModel } from './viewmodels/useNavViewModel';
import { useCheckoutViewModel } from './viewmodels/useCheckoutViewModel';

/**
 * APP (View).
 * Ela nao importa nenhum arquivo de src/models diretamente: pede tudo aos
 * viewmodels. E nao tem useState, useEffect ou regra de negocio nenhuma.
 * Sua unica responsabilidade e ligar saida de um viewmodel na entrada de outro.
 */
export default function App() {
  const landing = useLandingViewModel();
  const oferta = useOfertaViewModel();
  const faq = useFaqViewModel();
  const nav = useNavViewModel();
  const checkout = useCheckoutViewModel();

  const { dados: d } = landing;
  const { dados: ofertaVM } = oferta;
  const { dados: faqVM, acoes: acoesFaq } = faq;
  const { dados: navVM, acoes: acoesNav } = nav;
  const { dados: checkoutVM, acoes: acoesCheckout } = checkout;

  const abrirCheckout = acoesCheckout.abrir;

  return (
    <div className="app">
      <a className="pular-para-conteudo" href="#beneficios">
        Pular para o conteúdo
      </a>

      <Cabecalho
        itens={navVM.itens}
        secaoAtiva={navVM.secaoAtiva}
        menuAberto={navVM.menuAberto}
        irPara={acoesNav.irPara}
        alternarMenu={acoesNav.alternarMenu}
        aoComprar={abrirCheckout}
        jaComprou={checkoutVM.jaComprou}
      />

      <main>
        <Hero
          hero={d.hero}
          produto={d.produto}
          receita={d.produto.receita}
          aoComprar={abrirCheckout}
          aoRolarPara={acoesNav.irPara}
          jaComprou={checkoutVM.jaComprou}
        />

        <Beneficios meta={d.secoes.beneficios} itens={d.beneficios} />

        <Galeria meta={d.secoes.galeria} itens={d.galeria} />

        <ComoFunciona meta={d.secoes['como-funciona']} passos={d.passos} modoPet={d.modoPet} />

        <ProvaSocial meta={d.secoes.avaliacoes} geral={d.avaliacaoGeral} depoimentos={d.depoimentos} />

        <Oferta
          meta={d.secoes.oferta}
          oferta={ofertaVM}
          produto={d.produto}
          aoComprar={abrirCheckout}
          jaComprou={checkoutVM.jaComprou}
        />

        <Faq
          meta={d.secoes.faq}
          itens={faqVM.itens}
          total={faqVM.total}
          todasAbertas={faqVM.todasAbertas}
          alternar={acoesFaq.alternar}
          abrirTodas={acoesFaq.abrirTodas}
          fecharTodas={acoesFaq.fecharTodas}
        />

        <ChamadaFinal
          texto={d.secoes.chamada}
          oferta={ofertaVM}
          aoComprar={abrirCheckout}
          jaComprou={checkoutVM.jaComprou}
        />
      </main>

      <Rodape linhas={RODAPE.linhas} creditos={RODAPE.creditos} />

      <Modal
        aberto={checkoutVM.aberto}
        aoFechar={acoesCheckout.fechar}
        aoConfirmar={acoesCheckout.confirmar}
        aoAtualizarCampo={acoesCheckout.atualizar}
        titulo={MODAL.titulo}
        subtitulo={MODAL.subtitulo}
        campos={MODAL.campos}
        form={checkoutVM.form}
        erros={checkoutVM.erros}
        mostrarErro={checkoutVM.temErro}
        check={checkoutVM.form.pet}
        checkRotulo={MODAL.check}
        pedido={checkoutVM.pedido}
      />
    </div>
  );
}