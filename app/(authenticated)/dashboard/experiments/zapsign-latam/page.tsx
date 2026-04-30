export default function Page() {
  return (
    <div style={{ padding: 40 }}>
      <h1>ZapSign LatAm — Controle de Incidentes</h1>
      <p>
        Aplicação experimental para centralizar e analisar tickets de suporte da
        ZapSign na América Latina, cruzando volume, SLA, saúde por cliente e
        causas-raiz operacionais.
      </p>

      <h2>Link</h2>
      <a href="https://zapsignlatam.lovable.app/" target="_blank">
        Acessar aplicação
      </a>

      <h2>Hipótese</h2>
      <p>
        Consolidar tickets do Jira em uma visão única — por cliente, área do
        produto ("onde dói") e causa real ("por que dói") — permite identificar
        padrões de fricção mais rápido do que a triagem ticket a ticket, e
        direciona esforço de N3 e produto para os pontos de maior impacto na LATAM.
      </p>

      <h2>Status</h2>
      <p>Protótipo funcional — sincronizando tickets reais do Jira, com classificação automática de causas e ranking de saúde por cliente.</p>
    </div>
  );
}
