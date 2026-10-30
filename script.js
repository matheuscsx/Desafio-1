function simularCompra() {
    // Preços unitários dos jogos (alinhados com o catálogo HTML)
    const precoCyber = 150.00;
    const precoDrift = 90.00;
    const precoPixel = 60.00;

    // 1. Coleta das quantidades com prompt() e 2. Conversão numérica com Number()
    const qtdCyber = Number(prompt("Quantas cópias de CyberQuest: Neon City (R$ 150,00) você deseja? (Digite 0 para nenhuma)"));
    const qtdDrift = Number(prompt("Quantas cópias de Turbo Drift Legends (R$ 90,00) você deseja? (Digite 0 para nenhuma)"));
    const qtdPixel = Number(prompt("Quantas cópias de Pixel Dungeon Souls (R$ 60,00) você deseja? (Digite 0 para nenhuma)"));

    // Validação: verifica se nenhum produto foi selecionado
    if (qtdCyber <= 0 && qtdDrift <= 0 && qtdPixel <= 0) {
        alert("Nenhum produto foi selecionado. Seu carrinho de compras está vazio!");
        return;
    }

    // 3. Cálculo dos subtotais (preço × quantidade) e valor bruto total
    const subtotalCyber = precoCyber * qtdCyber;
    const subtotalDrift = precoDrift * qtdDrift;
    const subtotalPixel = precoPixel * qtdPixel;

    const valorTotal = subtotalCyber + subtotalDrift + subtotalPixel;

    // Verificação de elegibilidade para o desconto (10% em compras a partir de R$ 200,00)
    let desconto = 0;
    let totalComDesconto = valorTotal;
    let mensagemDesconto = "Não atingiu o valor mínimo para desconto (R$ 200,00).";

    if (valorTotal >= 200) {
        desconto = valorTotal * 0.10;
        totalComDesconto = valorTotal - desconto;
        mensagemDesconto = "Promoção aplicada! 10% de desconto (- R$ " + desconto.toFixed(2) + ")";
    }

    // 4. Exibição do recibo detalhado com alert()
    const resumo =
        "=== RESUMO DO PEDIDO — NEXUS STORE ===\n\n" +
        "⚔️ CyberQuest: Neon City: " + qtdCyber + " un. = R$ " + subtotalCyber.toFixed(2) + "\n" +
        "🏎️ Turbo Drift Legends: " + qtdDrift + " un. = R$ " + subtotalDrift.toFixed(2) + "\n" +
        "👾 Pixel Dungeon Souls: " + qtdPixel + " un. = R$ " + subtotalPixel.toFixed(2) + "\n\n" +
        "Subtotal: R$ " + valorTotal.toFixed(2) + "\n" +
        "Desconto: " + mensagemDesconto + "\n" +
        "------------------------------------------\n" +
        "TOTAL A PAGAR: R$ " + totalComDesconto.toFixed(2);

    alert(resumo);
}