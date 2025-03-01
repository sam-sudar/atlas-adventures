import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";
import CountryItem from "./CountryItem";

function CountriesList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="Add your first city by clicking a city on the map" />
    );

  const countries = cities.reduce((arr, city) => {
    if (arr.some((country) => country.country === city.country)) return arr;
    else return [...arr, { country: city.country, emoji: city.emoji }];
  }, []);
  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.city} />
      ))}
    </ul>
  );
}

export default CountriesList;
