export function getCoordinatesAndID(site: any) {
	return {
		coordinates: site.data.coordinates,
		id: site.data.id,
	};
}

//
// const paranormalSitesCoordinates = allParanormalSites.map((site) => ({
// 	coordinates: site.data.coordinates,
// 	id: site.data.id,
// }));
