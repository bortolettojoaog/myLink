export async function getLinksSave(key) {
    const myLinks = await localStorage.getItem(key);

    let linksSaves = JSON.parse(myLinks) || [];

    return linksSaves;
}

export async function saveLink(key, newLink) {
    let linksStored = await getLinksSave(key);

    const hasLink = linksStored.some(link => link.id === newLink.id);

    if (hasLink) {
        alert('Este link já está cadastrado!');
        return;
    }

    linksStored.push(newLink);

    await localStorage.setItem(key, JSON.stringify(linksStored));

    alert("Link salvo com sucesso!");
}

export function deleteLink(links, id) {
    let myLinks = links.filter( item => {
        return (item.id !== id)
    })

    localStorage.setItem('@encurtaLink', JSON.stringify(myLinks));
    alert("Link deletado com sucesso!");

    return myLinks;
}