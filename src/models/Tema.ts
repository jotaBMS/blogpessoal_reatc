import Postagem from "./Postagem"

export default interface Tema{
    id: number;
    nome: string;
    postagem?: Postagem | null;
}