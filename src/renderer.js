const tbody = document.querySelector("#lista tbody");

document
    .getElementById("selecionar")
    .onclick = async () => {

    tbody.innerHTML = "";

    const arquivos = await window.api.selecionarPasta();

    arquivos.forEach(a => {

        tbody.innerHTML += `
        <tr>
            <td>${a.nome}</td>
        </tr>
        `;

    });

}