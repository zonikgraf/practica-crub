export const PuntajePeliculas = [
    { puntaje: "puntos" },
	{ puntaje: "1" },
	{ puntaje: "2" },
	{ puntaje: "3" },
	{ puntaje: "4" },
	{ puntaje: "5" },
	{ puntaje: "6" },
	{ puntaje: "7" },
	{ puntaje: "8" },
	{ puntaje: "9" },
	{ puntaje: "10" }
]
export const CategoriaPeliculas = [
    { categoria: "categoria" },
	{ categoria: "Drama" },
	{ categoria: "Acción" },
	{ categoria: "Documental" },
	{ categoria: "Misterio" },
	{ categoria: "Romantica" },
	{ categoria: "Pornográfica" },
	{ categoria: "Aventura" },
	{ categoria: "Infantiles" },
	{ categoria: "Terror" },
	{ categoria: "Musical" }
]

export interface Peliculas {
    titulo: string;
    descipcion: string;
    puntaje: number;
    categoria: string;
    fecha: number;
}