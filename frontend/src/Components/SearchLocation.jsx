function SearchLocation() {
    return (
        <form>
            <input
                type="text"
                id="location"
                name="location"
                required
                minLength="2"
                maxLength="16"
                size="10"
                placeholder="location"
            />
            <button type="submit">search</button>
        </form>
    );
}

export default SearchLocation;
