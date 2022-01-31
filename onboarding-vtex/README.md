<div align="center"><strong>Onboarding VTEX</strong></div></br></br>

<strong>Catálogo:</strong> Módulo que permite configurar as funcionalidades relacionadas aos produtos do e-commerce. A arquitetura é dividida em quatro conceitos: categoria, produto, SKU, especificação. As seções mais básicas do admin que compõem este módulo são:

<div>
  <ol>
    <li>Produtos e SKU: Nesta aba é possível adicionar novos produtos e SKUS na loja. Para que o produto seja disponibilizado na loja, ele precisa ter pelo menos um SKU vinculado a ele. SKUs são os itens que existem efetivamente no seu estoque (é uma sigla para "Stock Keeping Unit"). Uma especificação é uma característica do SKU que o diferencia de outros SKUs vinculados a um mesmo produto.</li>
    <li>Categorias: Nesta aba é possível criar seções que facilitem a busca pelos produtos oferecidos na loja. Os produtos podem ser classificados em 3 níveis de categorização: departamento, categoria e subcategoria.</li>
    <li>Marcas: Nesta aba é possível cadastrar as marcas dos produtos existentes na loja, agrupando os itens.</li>
    <li>Importação e exportação: Nesta aba é possível adicionar/alterar uma grande quantidade de produtos/SKUs por meio da importação/exportação de planilhas.</li>
  </ol>
</div><br><br>

<strong>Preço:</strong> Módulo responsável pela criação, edição e armazenamento dos dados de preços dos seus SKUs. A arquitetura é dividida em três conceitos: preços, tabelas de preços, contextos de aplicação das tabelas de preços. As seções do admin que compõem este módulo são:

<div>
  <ol>
    <li>Lista de preços: Nesta área é possível cadastrar/consultar os preços dos SKUs para cada tabela de preço existente na loja. As tabelas de preços podem ser aplicadas a diferentes contextos, sendo eles: uma política comercial, um grupo de clientes autenticados na sua loja, a origem do tráfego para sua loja (UTMs) ou as condições de uma promoção.</li>
    <li>Regras de preços: Nesta área é possível criar regras para as tabelas de preço da sua loja. </li>
    <li>Arredondamento de preços: Nesta área é possível criar regras de arredondamento para os preços dos seus SKUs se tornarem mais atrativos quando visualizados pelo cliente.</li>
    <li>Configurações: Nesta área é possível cadastrar travas de segurança das mudanças de preço, além de outras configurações de preço para outros contextos.</li>
  </ol>
</div><br><br>

<strong>Promoções:</strong> Uma promoção é um desconto concedido ao cliente, podendo estar associado a um produto, frete ou brinde. Os descontos podem ser do tipo nominal (concede um valor bruto, como R$20) ou percentual (concede um valor percentual,como 20%) e são aplicados dependendo das regras criadas anteriormente pelo lojista. <br><br>
Há seis tipos diferentes de promoções: promoção regular, compre junto, leve mais por menos, desconto progressivo, compre e ganhe, promoção de campanha. Além disso, existe as taxas que são valores adicionais expressos em porcentagem inseridos no preço do produto dependendo das condições criadas pelo lojista.<br><br>

<strong>Configurações da conta:</strong> Esta seção é responsável pela gestão dos usuários da loja (os e-mails que têm acesso ao painel administrativo), perfis de acesso (os níveis de permissão, ou seja, quais funcionalidades o usuário poderá visualizar e/ou alterar dentro de cada módulo da plataforma) e dados gerais da conta.<br><br>

<strong>Pedidos:</strong> Um pedido é gerado quando um cliente aperta o botão de "Finalizar compra" na loja. Um pedido contém diversas informações, como itens do carrinho, valor do pedido, horário do pedido, dados do cliente, dados sobre promoções aplicadas ao pedido, endereço de entrega, método de pagamento, política comercial aplicada na compra, responsável pela venda (marketplace) e pelo fulfillment (seller). Um pedido finalizado só pode ter dois estados possíveis: faturado (o pedido foi concluído com sucesso) ou cancelado (o pedido não foi concluído).<br><br>

<strong>Pagamentos:</strong> Módulo responsável por gerenciar todas as ações referentes ao fluxo financeiro da loja. A arquitetura desse módulo é composta por:

<div>
  <ol>
    <li>Gateway: Sistema que efetua a transmissão dos dados das compras realizadas na loja no momento do checkout aos atores financeiros que integram a sequência do fluxo de pagamento (como adquirentes, bandeiras e bancos emissores).</li>
    <li>Adquirente: Empresa especializada em fazer a liquidação financeira das transações de uma loja por meio de cartões de crédito e débito. </li>
    <li>Subadquirente: Empresa que processa pagamentos e transmite suas informações para os outros players envolvidos no fluxo de pagamento. Pode ser entendido como uma espécie de intermediador entre adquirente e loja.</li>
    <li>Bandeira do cartão: São empresas responsáveis por definir as regras de negócio para compras realizadas com cartão de crédito. São elas que definem os padrões pelos quais os adquirentes devem processar as transações realizadas por esse meio de pagamento.</li>
    <li>Banco emissor: Instituição financeira responsável pelos meios de pagamento, sejam eles boletos bancários, cartões de débito ou de crédito. É ele que, ao receber os dados de uma compra feita na loja, vai autorizar ou não a venda.</li>
    <li>Antifraude: Sistema especializado em analisar as compras realizadas nos sites, com o intuito de identificar operações fraudulentas.</li>
    <li>Certificação PCI SSC: Fórum global aberto para o contínuo desenvolvimento, aprimoramento, armazenamento, disseminação e implementação de padrões de segurança para a proteção de dados.</li>
  </ol>
</div><br><br>

<strong>Marketplace: </strong> Ambiente onde o pedido é fechado, ou seja, onde o cliente realiza o processo de checkout. O seller é o proprietário do SKU. É, portanto, responsável pelo fulfillment - ou seja, pela entrega do produto ao cliente. Toda loja que vende produtos em seu próprio ambiente e faz suas próprias entregas é um Marketplace e um Seller ao mesmo tempo.

<strong>Message Center: </strong> Módulo responsável pelas configurações e envio dos e-mails transacionais. É dividido em duas seções: templates (aqui você pode editar o conteúdo dos e-mails) e remetentes (aqui é possível alterar as informações dos remetentes desses e-mails).
