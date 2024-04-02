import { IoIosClose } from 'react-icons/io'
import './search.scss'

const Search = ({ searchValue, setSearchValue }) => {
	return (
		<>
			<input
				value={searchValue}
				onChange={event => setSearchValue(event.target.value)}
				className='search'
				placeholder='Search...'
			/>
			{searchValue && <IoIosClose onClick={() => setSearchValue('')} className='search-close' />}
		</>
	)
}

export default Search
