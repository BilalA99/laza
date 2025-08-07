'use server'
import { locations } from "@/lib/locations"
async function getPlaceDetails(placeId: string, apiKey: string) {
    const response = await fetch(`https://places.googleapis.com/v1/places/${placeId}`, {
        headers: {
          'Content-Type': 'application/json',
          'X-Goog-Api-Key': apiKey,
          'X-Goog-FieldMask': 'id,displayName,rating,reviews'
        }
      });
      const data = await response.json()
      return data
}


async function getPlaceReviews() {
    const apiKey = process.env.GOOGLE_API_KEY
    if (!apiKey) {
        throw new Error('Google Maps API key is not set')
    }
    try {
        // Create an array of promises, one for each location
        const detailPromises = locations.map(location =>
            getPlaceDetails(location.placeId, apiKey)
        );

        // Wait for all promises to resolve
        const results = await Promise.all(detailPromises);

        // Combine original location names with the fetched reviews
        const locationsWithReviews = locations.map((location, index) => ({
            ...location, // Includes original name and placeId
            details: results[index] // Adds the fetched reviews, rating etc.
        }));

        return locationsWithReviews
            .map(location => location.details.reviews)
            .flat()
            .filter((review: any) => review && review.rating === 5)

    } catch (error) {
        console.error('Error fetching place details:', error);
        return null;
    }
}


export default getPlaceReviews