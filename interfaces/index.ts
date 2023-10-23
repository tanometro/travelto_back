export interface CreateLocationData {
    name: string;
    latitude: number;
    longitude: number;
    // otras propiedades según la estructura real de tu ubicación
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