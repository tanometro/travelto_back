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

export interface Attraction {
    id: number;
    name: string;
    location: string;
    price: number;
    rating: number;
    hours: string;
    isActive: boolean
    coordinates: string;
    duration: number;
    description: string;

}

export interface CreateAttractionInterface {
    name: string,
    hours: string,
    location: string,
    coordinates: string,
    price: number,
    duration: number,
    description: string,
    isActive: boolean
}
