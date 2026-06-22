export interface AccommodationHost {
  name: string;
  yearsHosting: number;
  avatarLabel: string;
}

export interface AccommodationCoordinates {
  lat: number;
  lng: number;
}

export interface Accommodation {
  id: string;
  title: string;
  city: string;
  country: string;
  description: string;
  pricePerNight: number;
  rating: number;
  reviewCount: number;
  category: string;
  imageLabel: string;
  coordinates: AccommodationCoordinates;
  amenities: string[];
  host: AccommodationHost;
  photos: string[];
}

export type SortOrder = "asc" | "desc";
