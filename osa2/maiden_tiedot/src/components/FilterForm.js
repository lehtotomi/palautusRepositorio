

const FilterForm = ( { setFilter, newFilter, handleFilterChange} ) => {
    return (
        <form onSubmit={setFilter}>
                <div>
                    find countries: <input
                    value={newFilter}
                    onChange={handleFilterChange}
                />
            </div>
        </form>
    )}
export default FilterForm