export interface CreateLocationData {
    id: number,
    country: string,
    name: string,
    latitud: number,
    longitud: number,
    pregijo: string,
    cp: string,
    website: string,
}

export interface CreateCommentData {
    id: number,
    rating: number,
    description: string,
}