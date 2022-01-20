import data from "../data";

const Detail = {
    render(id) {
        const found = data.find((element) => element.id === id);

        return `<div class="max-w-5xl mx-auto">
            <h1 class="uppercase text-2xl font-semibold px-4 py-4">${found.title}</h1>
            <img class="mx-auto py-4 font-bold" src="${found.img}" />
            <p class="mb-4">${found.desc}</p>
        </div>`;
    },
};

export default Detail;