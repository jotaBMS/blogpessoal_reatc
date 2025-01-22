import Postagem from "./Postagem"

export default interface Usuarios{
    id: number;
    nome: string;
    usuario: string;
    senha: string;
    foto: string;
    postagem?: Postagem | null;
}