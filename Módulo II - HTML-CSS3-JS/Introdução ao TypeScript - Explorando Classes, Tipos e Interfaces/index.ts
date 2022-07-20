//types

//interfaces

interface IAnimal {
    nome: string;
    tipo: `terrestre` | `aquatico`;
    domestico: boolean;
}

interface IFelino extends IAnimal{
    visaoNoturna: boolean;
}

interface ICanino extends IAnimal{
    porte: `pequeno` | `medio` | `grande`
}

type IDomestico = IFelino | ICanino;

const animal: IDomestico = {
    domestico: true,
    nome: `Cachorro`,
    porte: "medio",
    tipo: "terrestre"
}

