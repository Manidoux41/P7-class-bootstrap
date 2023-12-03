export class RecipesList {
    #recettes = [];

    /**
     * Constructor function for creating an instance of the class.
     *
     * @param {Recettes} recettes - The recettes parameter represents the recettes data that will be assigned to the instance's recettes property.
     */
    constructor(recettes) {
        this.#recettes = recettes;
    }

    /**
     * Appends HTML content to the specified element.
     *
     * @param {Element} element - The element to append the HTML content to.
     */
    appendTo(element) {
        element.innerHTML = `
        <form class="d-flex pb-4">
        <input required="" class="form-control" type="text" placeholder="Acheter des patates..." name="title" data-com.bitwarden.browser.user-edited="yes">
        <button class="btn btn-primary">Ajouter</button>
    </form>

    <main>
        <div class="btn-group mb-4" role="group">
            <button type="button" class=" btn btn-outline-primary active" data-filter="all">Toutes</button>
            <button type="button" class=" btn btn-outline-primary" data-filter="todo">A faire</button>
            <button type="button" class=" btn btn-outline-primary" data-filter="done">Faites</button>
        </div>

        <ul class="list-group">
            <li>test</li>
        </ul>
    </main>
        `
    }
}