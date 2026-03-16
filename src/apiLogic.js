import { setAddress } from "./address";
import { fetchedData} from "./requiredData";

export async function apiLogic(city) {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=LARVWFZYTTCPBN96DFXXN2MLY`);
    const data = await response.json();
    console.log(data);
    setAddress(data.address);
    fetchedData(data);
}