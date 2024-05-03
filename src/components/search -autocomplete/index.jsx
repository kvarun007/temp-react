import { useEffect, useState } from "react";
import { FaLessThanEqual } from "react-icons/fa";

export default function SearchAutocomplete() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useEffect(null);

  async function fetchListOFUsers() {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      console.log(data);
    } catch (e) {
      setLoading(false);
      console.log(e);
      setError(0);
    }
  }

  useEffect(() => {
    fetchListOFUsers();
  }, []);
  return (
    <div className="search-autocomplete-container">
      <input name="search-users" placeholder="Search Users here..." />
    </div>
  );
}
