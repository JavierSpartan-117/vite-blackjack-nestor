

/**
 * 
 * @param {Array<String>} deck es un arreglo de String
 * @returns {String} Retorna la carta de ldeck
 */
export const pedirCarta = (deck) => {

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}